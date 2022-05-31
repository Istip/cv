const Download = (props) => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  );
};

export default Download;
