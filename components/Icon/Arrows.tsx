export const LeftArrow = ({ color = '#474747' }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 5L8.35355 4.64645L8.27009 4.56298L8.15811 4.52566L8 5ZM5 4L5.15811 3.52566L5.08114 3.5L5 3.5L5 4ZM0.646449 3.64645C0.451187 3.84171 0.451187 4.15829 0.646449 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53554 7.53554C4.7308 7.34027 4.7308 7.02369 4.53554 6.82843L1.70711 4L4.53554 1.17158C4.7308 0.976313 4.7308 0.65973 4.53554 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646449 3.64645ZM10 7L10.4743 6.84189L10.437 6.72991L10.3536 6.64645L10 7ZM8.15811 4.52566L5.15811 3.52566L4.84189 4.47434L7.84189 5.47434L8.15811 4.52566ZM5 3.5L1 3.5L1 4.5L5 4.5L5 3.5ZM11.4743 9.84189L10.4743 6.84189L9.52566 7.15811L10.5257 10.1581L11.4743 9.84189ZM10.3536 6.64645L8.35355 4.64645L7.64645 5.35355L9.64645 7.35355L10.3536 6.64645Z"
        fill={color}
      />
    </svg>
  );
};

export const RightArrow = ({ color = '#474747' }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L4.64645 4.64645L4.72991 4.56298L4.84189 4.52566L5 5ZM8 4L7.84189 3.52566L7.91886 3.5L8 3.5L8 4ZM12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35356L9.17157 7.53554C8.97631 7.7308 8.65973 7.7308 8.46446 7.53554C8.2692 7.34027 8.2692 7.02369 8.46446 6.82843L11.2929 4L8.46446 1.17158C8.2692 0.976313 8.2692 0.65973 8.46446 0.464468C8.65973 0.269206 8.97631 0.269206 9.17157 0.464468L12.3536 3.64645ZM3 7L2.52566 6.84189L2.56298 6.72991L2.64645 6.64645L3 7ZM4.84189 4.52566L7.84189 3.52566L8.15811 4.47434L5.15811 5.47434L4.84189 4.52566ZM8 3.5L12 3.5L12 4.5L8 4.5L8 3.5ZM1.52566 9.84189L2.52566 6.84189L3.47434 7.15811L2.47434 10.1581L1.52566 9.84189ZM2.64645 6.64645L4.64645 4.64645L5.35355 5.35355L3.35355 7.35355L2.64645 6.64645Z"
        fill={color}
      />
    </svg>
  );
};