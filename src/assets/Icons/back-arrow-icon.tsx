import { SVGProps } from "react";

export const BackArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M18.75 7.715H3.925L8.463 2.11A1.312 1.312 0 0 0 8.3.297a1.228 1.228 0 0 0-1.763.167L.287 8.178c-.042.06-.08.125-.112.193 0 .064 0 .103-.087.167A1.318 1.318 0 0 0 0 9.001c.001.158.03.315.088.463 0 .064 0 .102.087.167.032.067.07.132.112.193l6.25 7.713c.118.145.265.262.432.342a1.229 1.229 0 0 0 1.331-.175 1.313 1.313 0 0 0 .162-1.813l-4.537-5.605H18.75c.331 0 .65-.135.884-.376.234-.241.366-.568.366-.91 0-.34-.132-.667-.366-.908a1.233 1.233 0 0 0-.884-.377Z"
    />
  </svg>
);
