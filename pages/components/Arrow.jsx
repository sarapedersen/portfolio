import * as React from "react"

const SvgComponent = (props) => (
  <svg
    viewBox="0 0 131 55"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    {...props}
  >
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h130.202v54.555H0z"
    />
    <path
      d="m16.479 17.368 49.12 19.819 48.124-19.654"
      style={{
        fill: "none",
        stroke: "#b56445",
        strokeWidth: 6,
      }}
    />
  </svg>
)

export default SvgComponent
