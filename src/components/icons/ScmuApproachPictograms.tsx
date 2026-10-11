import type { ReactNode, SVGProps } from "react";

function PictogramBase({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="48"
      height="48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

// Section-specific pictograms: chamfered corners echo SCMU's geometric mark.
// Keep these separate from the smaller icons used in navigation and services.
export function ScmuCargoPictogram(props: SVGProps<SVGSVGElement>) {
  return (
    <PictogramBase {...props}>
      <path d="M10 25 18 17h28l8 8v29H10V25Z" />
      <path d="M10 25h44M21 25v29M43 25v29M10 47h44" />
      <path className="scmu-pictogram__accent" d="M18 7h28M18 4v6M46 4v6M28 36h8" />
    </PictogramBase>
  );
}

export function ScmuRoutePictogram(props: SVGProps<SVGSVGElement>) {
  return (
    <PictogramBase {...props}>
      <path className="scmu-pictogram__accent" d="M20 16h16l6 6v14l6 6" />
      <path d="m12 6 8 5v10l-8 5-8-5V11l8-5ZM52 38l8 5v10l-8 5-8-5V43l8-5Z" />
      <path d="m9 14 3-2 3 2v4l-3 2-3-2v-4ZM49 46l3-2 3 2v4l-3 2-3-2v-4Z" />
      <path d="M14 48h16M24 42l6 6-6 6" />
    </PictogramBase>
  );
}

export function ScmuCoordinationPictogram(props: SVGProps<SVGSVGElement>) {
  return (
    <PictogramBase {...props}>
      <path d="M14 6h26l10 10v42H14V6Z" />
      <path d="M40 6v10h10M22 24h20M22 31h12M22 50h8" />
      <path className="scmu-pictogram__accent" d="m25 40 5 5 11-11" />
    </PictogramBase>
  );
}

export function ScmuConversationPictogram(props: SVGProps<SVGSVGElement>) {
  return (
    <PictogramBase {...props}>
      <path d="M6 8h28l6 6v18H20l-8 8v-8H6V8ZM28 38h24l6 6v10h-6v6l-8-6H28V38Z" />
      <path className="scmu-pictogram__accent" d="M14 17h18M14 24h12M35 46h15" />
    </PictogramBase>
  );
}
