import React, { SVGProps } from "react"

interface SearchIconProps extends SVGProps<SVGSVGElement> {

	className?: string;
}

export const SearchIcon: React.FC<SearchIconProps> = ({ className }) => (

	<svg className={className} width="15.000000" height="15.000000" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
		<desc>
		</desc>
		<defs />
		<path id="Vector" d="M5.54 -0.5C2.21 -0.5 -0.5 2.21 -0.5 5.54C-0.5 8.87 2.21 11.58 5.54 11.58C6.98 11.58 8.3 11.07 9.34 10.22L13.43 14.31C13.49 14.37 13.55 14.42 13.63 14.45C13.71 14.49 13.79 14.5 13.87 14.5C13.96 14.5 14.04 14.49 14.12 14.46C14.19 14.43 14.26 14.38 14.32 14.32C14.38 14.26 14.43 14.19 14.46 14.12C14.49 14.04 14.5 13.96 14.5 13.87C14.5 13.79 14.49 13.71 14.45 13.63C14.42 13.55 14.37 13.49 14.31 13.43L10.22 9.34C11.07 8.3 11.58 6.98 11.58 5.54C11.58 2.21 8.87 -0.5 5.54 -0.5ZM5.54 0.75C8.19 0.75 10.33 2.88 10.33 5.54C10.33 6.83 9.82 8 8.99 8.86C8.94 8.9 8.9 8.94 8.86 8.99C8 9.82 6.83 10.33 5.54 10.33C2.88 10.33 0.75 8.19 0.75 5.54C0.75 2.88 2.88 0.75 5.54 0.75Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
	</svg>

)