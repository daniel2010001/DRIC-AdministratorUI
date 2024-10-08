const HeadingIconBase = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12h8" />
    <path d="M4 18V6" />
    <path d="M12 18V6" />
    {children}
  </svg>
);

export const HeadingIcon1 = (props: React.SVGProps<SVGSVGElement>) => (
  <HeadingIconBase {...props}>
    <path d="m17 12 3-2v8" />
  </HeadingIconBase>
);

export const HeadingIcon2 = (props: React.SVGProps<SVGSVGElement>) => (
  <HeadingIconBase {...props}>
    <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
  </HeadingIconBase>
);

export const HeadingIcon3 = (props: React.SVGProps<SVGSVGElement>) => (
  <HeadingIconBase {...props}>
    <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
    <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
  </HeadingIconBase>
);

export const HeadingIcon4 = (props: React.SVGProps<SVGSVGElement>) => (
  <HeadingIconBase {...props}>
    <path d="M17 10v4h4" />
    <path d="M21 10v8" />
  </HeadingIconBase>
);

export const HeadingIcon5 = (props: React.SVGProps<SVGSVGElement>) => (
  <HeadingIconBase {...props}>
    <path d="M17 13v-3h4" />
    <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
  </HeadingIconBase>
);

export const HeadingIcon6 = (props: React.SVGProps<SVGSVGElement>) => (
  <HeadingIconBase {...props}>
    <circle cx="19" cy="16" r="2" />
    <path d="M20 10c-2 2-3 3.5-3 6" />
  </HeadingIconBase>
);
