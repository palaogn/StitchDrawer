export type CrossStitchProps = {
  color?: string;
  strokeWidth?: number;
  height?: number | string;
  width?: number | string;
};

export const CrossStitch = ({
  color = 'white',
  strokeWidth = 2,
  height = '100%',
  width = '100%',
}: CrossStitchProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path d="M5 1L45 41" stroke={color} strokeWidth={strokeWidth} />
        <path d="M45 1L5 41" stroke={color} strokeWidth={strokeWidth} />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.292908"
          y="0.292892"
          width="49.4142"
          height="49.4142"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
