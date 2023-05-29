interface svgProps {
    color: string;
  }

const UserSvgIcon = ({color}: svgProps) => {
  return (
    <svg
      width="64"
      height="64"
    //   class="trash"
      fill="none"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <path d="M8.5 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z"></path>
      <path d="m17 11 2 2 4-4"></path>
    </svg>
  );
};

export default UserSvgIcon;
