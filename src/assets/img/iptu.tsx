import { SVGProps } from "react";

export const IptuLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={40}
    fill="none"
  >
    <path
      fill="url(#a)"
      d="M15.22 10.15V31H11.8V10.15h3.42Zm23.57 6.21c0 1.06-.25 2.06-.75 3s-1.3 1.71-2.4 2.31c-1.1.58-2.51.87-4.23.87h-3.78V31h-3.42V10.15h7.2c1.6 0 2.95.28 4.05.84 1.12.54 1.95 1.28 2.49 2.22.56.94.84 1.99.84 3.15Zm-7.38 3.39c1.3 0 2.27-.29 2.91-.87.64-.6.96-1.44.96-2.52 0-2.28-1.29-3.42-3.87-3.42h-3.78v6.81h3.78Zm28.613-9.6v2.79h-5.55V31h-3.42V12.94h-5.58v-2.79h14.55Zm11.353 0v13.29c0 1.58.41 2.77 1.23 3.57.84.8 2 1.2 3.48 1.2 1.5 0 2.66-.4 3.48-1.2.84-.8 1.26-1.99 1.26-3.57V10.15h3.42v13.23c0 1.7-.37 3.14-1.11 4.32a6.889 6.889 0 0 1-2.97 2.64c-1.24.58-2.61.87-4.11.87-1.5 0-2.87-.29-4.11-.87-1.22-.58-2.19-1.46-2.91-2.64-.72-1.18-1.08-2.62-1.08-4.32V10.15h3.42Z"
    />
    <path stroke="url(#b)" strokeWidth={1.5} d="M.75.75h94.5v38.5H.75z" />
    <defs>
      <linearGradient
        id="a"
        x1={7}
        x2={89}
        y1={20}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093958" />
        <stop offset={0.475} stopColor="#093958" />
        <stop offset={0.73} stopColor="#E30613" />
        <stop offset={1} stopColor="#E30613" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={0}
        x2={96}
        y1={20}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093958" />
        <stop offset={0.605} stopColor="#2B314D" />
        <stop offset={0.79} stopColor="#E30613" />
        <stop offset={1} stopColor="#E30613" />
      </linearGradient>
    </defs>
  </svg>
);
