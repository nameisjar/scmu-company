param(
    [Parameter(Mandatory = $true)][string]$VideoPath,
    [Parameter(Mandatory = $true)][string]$OutputPath
)

$ErrorActionPreference = 'Stop'
$resolvedVideo = (Resolve-Path -LiteralPath $VideoPath).Path
$resolvedOutput = [System.IO.Path]::GetFullPath($OutputPath)
if (Test-Path -LiteralPath $resolvedOutput) { throw "Output already exists: $resolvedOutput" }

# Extract a real video thumbnail with the Windows media thumbnail provider.
# No external dependencies, video modification, or UI automation.
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @'
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class ScmuVideoThumbnail
{
    [StructLayout(LayoutKind.Sequential)]
    private struct Size { public int Width; public int Height; }

    [ComImport, Guid("bcc18b79-ba16-442f-80c4-8a59c30c463b"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    private interface IShellItemImageFactory
    {
        [PreserveSig] int GetImage(Size size, uint flags, out IntPtr bitmap);
    }

    [DllImport("shell32.dll", CharSet = CharSet.Unicode, PreserveSig = false)]
    private static extern void SHCreateItemFromParsingName(string path, IntPtr bindContext, ref Guid iid,
        [MarshalAs(UnmanagedType.Interface)] out IShellItemImageFactory item);

    [DllImport("gdi32.dll")]
    private static extern bool DeleteObject(IntPtr handle);

    public static void Save(string videoPath, string outputPath)
    {
        var iid = typeof(IShellItemImageFactory).GUID;
        IShellItemImageFactory factory;
        SHCreateItemFromParsingName(videoPath, IntPtr.Zero, ref iid, out factory);
        IntPtr handle = IntPtr.Zero;
        try
        {
            // THUMBNAILONLY prevents a generic file icon being returned.
            int result = factory.GetImage(new Size { Width = 960, Height = 960 }, 0x8, out handle);
            Marshal.ThrowExceptionForHR(result);
            using (var image = Image.FromHbitmap(handle))
            {
                image.Save(outputPath, ImageFormat.Jpeg);
                Console.WriteLine("Video thumbnail: {0} x {1}", image.Width, image.Height);
            }
        }
        finally
        {
            if (handle != IntPtr.Zero) DeleteObject(handle);
            Marshal.ReleaseComObject(factory);
        }
    }
}
'@

[ScmuVideoThumbnail]::Save($resolvedVideo, $resolvedOutput)
