import { type FC } from "react";

export const GrainyFilter: FC = () => {
  return (
    <svg viewBox="0 0 243 243">
      <filter id="grainyNoise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="22.2"
          stitchTiles="stitch"
        />
        <rect width="100%" height="100%" filter="url(#grainyNoise)" />
        <feSpecularLighting
          surfaceScale="50"
          specularConstant="1"
          specularExponent="18"
          lightingColor="#4400FF"
          in="turbulence"
          result="specularLighting"
        >
          <feDistantLight azimuth="150" elevation="60" />
        </feSpecularLighting>
      </filter>
    </svg>
  );
};
//
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   version="1.1"
//   xmlns:xlink="http://www.w3.org/1999/xlink"
//   xmlns:svgjs="http://svgjs.dev/svgjs"
//   viewBox="0 0 700 700"
//   width="700"
//   height="700"
//   opacity="0.72"
// >
//   <defs>
//     <filter
//       id="nnnoise-filter"
//       x="-20%"
//       y="-20%"
//       width="140%"
//       height="140%"
//       filterUnits="objectBoundingBox"
//       primitiveUnits="userSpaceOnUse"
//       color-interpolation-filters="linearRGB"
//     >
//       <feTurbulence
//         type="fractalNoise"
//         baseFrequency="0.2"
//         numOctaves="4"
//         seed="15"
//         stitchTiles="stitch"
//         x="0%"
//         y="0%"
//         width="100%"
//         height="100%"
//         result="turbulence"
//       ></feTurbulence>
//       <feSpecularLighting
//         surfaceScale="22"
//         specularConstant="1"
//         specularExponent="20"
//         lighting-color="#4F46E5"
//         x="0%"
//         y="0%"
//         width="100%"
//         height="100%"
//         in="turbulence"
//         result="specularLighting"
//       >
//         <feDistantLight azimuth="3" elevation="81"></feDistantLight>
//       </feSpecularLighting>
//     </filter>
//   </defs>
//   <rect width="700" height="700" fill="transparent"></rect>
//   <rect
//     width="700"
//     height="700"
//     fill="#4f46e5"
//     filter="url(#nnnoise-filter)"
//   ></rect>
// </svg>;
