import type { ReactNode, SVGProps } from "react";

export type ScmuIcon = (props: SVGProps<SVGSVGElement>) => ReactNode;

function IconBase({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="square"
      strokeLinejoin="miter"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ScmuLocationIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M16 29 8 18V9l4-4h8l4 4v9l-8 11Z" /><path d="m12 21 4 2.5 4-2.5M12 11l4-2 4 2v5l-4 2-4-2v-5Z" /></IconBase>;
}

export function ScmuChatIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M5 7h19l3 3v10l-3 3H14l-6 4v-4H5V7Z" /><path d="M10 12h12M10 17h8" /></IconBase>;
}

export function ScmuMailIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M4 8h24v16H4V8Z" /><path d="m5 10 11 8 11-8M5 22l7-6M27 22l-7-6" /><path d="M13 22h6" /></IconBase>;
}

export function ScmuClockIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="m11 4 10 1 6 7-1 10-7 6-10-1-5-7 1-10 6-6Z" /><path d="M16 9v8l6 3M13 4l3 3 3-2" /></IconBase>;
}

export function ScmuRoadIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M3 9h16v13H3V9Zm16 5h5l5 5v3H19v-8Z" /><path d="M7 22v-3h8v3M5 25h22M12 28h8" /><path d="M8 22a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm15 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="var(--icon-cutout, white)" /></IconBase>;
}

export function ScmuAirIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="m16 3 3 2v8l9 5v3l-9-2v6l4 3v2l-7-2-7 2v-2l4-3v-6l-9 2v-3l9-5V5l3-2Z" /><path d="M16 8v17" /></IconBase>;
}

export function ScmuSeaIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M7 14h18l3 5-5 7H9l-5-7 3-5Z" /><path d="M10 14V7l6-3 6 3v7M7 10h18M10 20l6 3 6-3" /><path d="m4 28 4 2 4-2 4 2 4-2 4 2 4-2" /></IconBase>;
}

export function ScmuRiverIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M4 7c6-5 9 5 15 0s8 0 9 1M4 15c6-5 9 5 15 0s8 0 9 1M4 23c6-5 9 5 15 0s8 0 9 1" /><path d="M7 29h18" /></IconBase>;
}

export function ScmuRailIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M8 4h16l3 5v13l-4 4H9l-4-4V9l3-5Z" /><path d="M9 9h14v8H9V9Zm0 12h3m8 0h3M12 26l-4 4m12-4 4 4M11 30h10" /><path d="M16 9v8" /></IconBase>;
}

export function ScmuMultimodalIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="m10 11 6-4 6 4v8l-6 4-6-4v-8Z" /><path d="m10 11 6 4 6-4M16 15v8M16 7V3M16 29v-6M10 15H4M28 15h-6" /><path d="m13 5 3-2 3 2M13 27l3 2 3-2M6 12l-2 3 2 3M26 12l2 3-2 3" /></IconBase>;
}

export function ScmuConsultIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M4 5h19l3 3v11l-3 3H13l-6 5v-5H4V5Z" /><path d="M9 10h12M9 15h8" /><path d="M22 25h6M25 22v6" /></IconBase>;
}

export function ScmuCargoIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="m5 9 11-6 11 6v14l-11 6-11-6V9Z" /><path d="m5 9 11 6 11-6M16 15v14M10 6l11 6M10 19l6 3 6-3" /></IconBase>;
}

export function ScmuRouteIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M7 7h8l4 4v10l-4 4H7M11 3 7 7l4 4M21 17l4 4-4 4" /><path d="M7 25h18" /><rect x="4" y="4" width="6" height="6" /><rect x="22" y="22" width="6" height="6" /></IconBase>;
}

export function ScmuDispatchIcon(props: SVGProps<SVGSVGElement>) {
  return <IconBase {...props}><path d="M4 6h16l4 4v5M4 6v20h14" /><path d="M10 12h8M10 17h6" /><path d="m17 23 5-5 6 6-5 5-6-6Zm5-5 6-3-3 6" /></IconBase>;
}
