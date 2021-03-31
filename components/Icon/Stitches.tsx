type StitchProps = {
  color?: string;
  strokeWidth?: number;
};

const initialStrokeWidth = 5;

export const CrossStitch = ({
  color = 'black',
  strokeWidth = initialStrokeWidth,
}: StitchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="97" height="89" rx="10" fill="white" />
      <g filter="url(#filter0_d)">
        <g filter="url(#filter1_d)">
          <line
            x1="18.6832"
            y1="15.2697"
            x2="80.6832"
            y2="73.2697"
            stroke={color}
            stroke-width={strokeWidth}
          />
        </g>
        <g filter="url(#filter2_d)">
          <line
            y1="-1"
            x2="84.8999"
            y2="-1"
            transform="matrix(-0.730271 0.683157 0.683157 0.730271 80 16)"
            stroke={color}
            stroke-width={strokeWidth}
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="12.6337"
          y="10.5395"
          width="72.7327"
          height="67.4605"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
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
        <filter
          id="filter1_d"
          x="14"
          y="14.5395"
          width="71.3663"
          height="67.4605"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
        <filter
          id="filter2_d"
          x="12.6337"
          y="14.5395"
          width="71.3663"
          height="67.4605"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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

export const RightCrossStitch = ({
  color = 'black',
  strokeWidth = initialStrokeWidth,
}: StitchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="97" height="89" rx="10" fill="white" />
      <g filter="url(#filter0_d)">
        <line
          y1="-1"
          x2="84.8999"
          y2="-1"
          transform="matrix(-0.730271 0.683157 0.683157 0.730271 80 15)"
          stroke={color}
          stroke-width={strokeWidth}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="12.6337"
          y="9.53946"
          width="71.3663"
          height="67.4605"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
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

export const LeftCrossStitch = ({
  color = 'black',
  strokeWidth = initialStrokeWidth,
}: StitchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="97" height="89" rx="10" fill="white" />
      <g filter="url(#filter0_d)">
        <line
          x1="19.6832"
          y1="15.2697"
          x2="81.6832"
          y2="73.2697"
          stroke={color}
          stroke-width={strokeWidth}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="15"
          y="10.5395"
          width="71.3663"
          height="67.4605"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
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

export const RightLineStitch = ({
  color = 'black',
  strokeWidth = initialStrokeWidth,
}: StitchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="97" height="89" rx="10" fill="white" />
      <g filter="url(#filter0_d)">
        <line
          x1="83.5913"
          y1="78.0324"
          x2="83.5913"
          y2="10.9947"
          stroke={color}
          stroke-width={strokeWidth}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="80.5913"
          y="10.9947"
          width="10"
          height="75.0377"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="4" />
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

export const LeftLineStitch = ({
  color = 'black',
  strokeWidth = initialStrokeWidth,
}: StitchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="97" height="89" rx="10" fill="white" />
      <g filter="url(#filter0_d)">
        <line
          x1="18.5913"
          y1="78.0324"
          x2="18.5913"
          y2="10.9947"
          stroke={color}
          stroke-width={strokeWidth}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="15.5913"
          y="10.9947"
          width="10"
          height="75.0377"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="4" />
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

export const BottomLineStitch = ({
  color = 'black',
  strokeWidth = initialStrokeWidth,
}: StitchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="97" height="89" rx="10" fill="white" />
      <g filter="url(#filter0_d)">
        <line
          x1="11"
          y1="71"
          x2="86.0267"
          y2="71"
          stroke={color}
          stroke-width={strokeWidth}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="7"
          y="66"
          width="83.0267"
          height="10"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
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

export const TopLineStitch = ({
  color = 'black',
  strokeWidth = initialStrokeWidth,
}: StitchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="97" height="89" rx="10" fill="white" />
      <g filter="url(#filter0_d)">
        <line
          x1="11"
          y1="20"
          x2="86.0267"
          y2="20"
          stroke={color}
          stroke-width={strokeWidth}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="7"
          y="15"
          width="83.0267"
          height="10"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
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

export const VerticalMiddleLineStitch = ({
  color = 'black',
  strokeWidth = initialStrokeWidth,
}: StitchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="97" height="89" rx="10" fill="white" />
      <g filter="url(#filter0_d)">
        <line
          x1="48"
          y1="78.0377"
          x2="48"
          y2="11"
          stroke={color}
          stroke-width={strokeWidth}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="45"
          y="11"
          width="10"
          height="75.0377"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="4" />
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

export const HorizontalMiddleLineStitch = ({
  color = 'black',
  strokeWidth = initialStrokeWidth,
}: StitchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="97" height="89" rx="10" fill="white" />
      <g filter="url(#filter0_d)">
        <line
          x1="11"
          y1="44"
          x2="86.0267"
          y2="44"
          stroke={color}
          stroke-width={strokeWidth}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="7"
          y="39"
          width="83.0267"
          height="10"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
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
