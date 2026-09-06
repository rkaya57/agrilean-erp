import type { SVGProps } from "react";

function IconBase({ children, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

export function GridIcon(props: SVGProps<SVGSVGElement>) { return <IconBase {...props}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></IconBase>; }
export function LayersIcon(props: SVGProps<SVGSVGElement>) { return <IconBase {...props}><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></IconBase>; }
export function RoomIcon(props: SVGProps<SVGSVGElement>) { return <IconBase {...props}><path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16"/><path d="M8 21v-8h8v8"/><path d="M9 7h.01M15 7h.01"/></IconBase>; }
export function HarvestIcon(props: SVGProps<SVGSVGElement>) { return <IconBase {...props}><path d="M12 21V9"/><path d="M7 14c-3 0-5-2-5-5 3 0 5 2 5 5Z"/><path d="M17 11c3 0 5-2 5-5-3 0-5 2-5 5Z"/><path d="M12 9c0-4 2-6 5-7 0 4-2 6-5 7Z"/></IconBase>; }
export function BoxIcon(props: SVGProps<SVGSVGElement>) { return <IconBase {...props}><path d="m21 8-9 5-9-5"/><path d="m3 8 9-5 9 5v8l-9 5-9-5V8Z"/><path d="M12 13v8"/></IconBase>; }
export function ChartIcon(props: SVGProps<SVGSVGElement>) { return <IconBase {...props}><path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19V2"/></IconBase>; }
export function AlertIcon(props: SVGProps<SVGSVGElement>) { return <IconBase {...props}><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.5 2.4 17.2A2 2 0 0 0 4.1 20h15.8a2 2 0 0 0 1.7-2.8L13.7 3.5a2 2 0 0 0-3.4 0Z"/></IconBase>; }
export function PlusIcon(props: SVGProps<SVGSVGElement>) { return <IconBase {...props}><path d="M12 5v14M5 12h14"/></IconBase>; }
