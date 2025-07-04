import Svg, { Circle, Path } from "react-native-svg";

export const IconPause = () => {
  return (
    <Svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.01562 0.473022H12V14.4418H8.01562V0.473022ZM0 14.4418V0.473022H3.98438V14.4418H0Z"
        fill="#021123"
      />
    </Svg>
  );
};
export const IconPlay = () => {
  return (
    <Svg
      width="11"
      height="15"
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0.015625 0.473022L10.9844 7.4574L0.015625 14.4418V0.473022Z"
        fill="#021123"
      />
    </Svg>
  );
};

export const IconCheck = ({ checked }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="12" cy="12" r="12" fill={checked ? "#00f48f" : "white"} />
      <Path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#021123"
      />
    </Svg>
  );
};
export const IconPencil = () => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="16" cy="16" r="15.5" stroke="#021123" />
      <Path
        d="M24.7188 11.0312L22.8906 12.8594L19.1406 9.10938L20.9688 7.28125C21.1562 7.09375 21.3906 7 21.6719 7C21.9531 7 22.1875 7.09375 22.375 7.28125L24.7188 9.625C24.9062 9.8125 25 10.0469 25 10.3281C25 10.6094 24.9062 10.8438 24.7188 11.0312ZM7 21.25L18.0625 10.1875L21.8125 13.9375L10.75 25H7V21.25Z"
        fill="#021123"
      />
    </Svg>
  );
};

export const IconArrowBack = ({ style, onPress }) => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      onPress={onPress}
    >
      <Path
        d="M21.6875 9.6875V12.3125H5.4375L12.875 19.8125L11 21.6875L0.3125 11L11 0.3125L12.875 2.1875L5.4375 9.6875H21.6875Z"
        fill="white"
      />
    </Svg>
  );
};

export const IconSave = () => {
  return (
    <Svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8 4V1.34375H1.34375V4H8ZM4.59375 10.0625C4.98958 10.4583 5.45833 10.6562 6 10.6562C6.54167 10.6562 7.01042 10.4583 7.40625 10.0625C7.80208 9.66667 8 9.19792 8 8.65625C8 8.11458 7.80208 7.64583 7.40625 7.25C7.01042 6.85417 6.54167 6.65625 6 6.65625C5.45833 6.65625 4.98958 6.85417 4.59375 7.25C4.19792 7.64583 4 8.11458 4 8.65625C4 9.19792 4.19792 9.66667 4.59375 10.0625ZM9.34375 0L12 2.65625V10.6562C12 11.0104 11.8646 11.3229 11.5938 11.5938C11.3229 11.8646 11.0104 12 10.6562 12H1.34375C0.96875 12 0.645833 11.875 0.375 11.625C0.125 11.3542 0 11.0312 0 10.6562V1.34375C0 0.96875 0.125 0.65625 0.375 0.40625C0.645833 0.135417 0.96875 0 1.34375 0H9.34375Z"
        fill="#fff"
      />
    </Svg>
  );
};

export const IconTrash = ({ fill, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.34375 0.65625H9.65625V2H0.34375V0.65625H2.65625L3.34375 0H6.65625L7.34375 0.65625ZM2.34375 4V10.6562H7.65625V4H2.34375ZM1 10.6562V2.65625H9V10.6562C9 11.0104 8.86458 11.3229 8.59375 11.5938C8.32292 11.8646 8.01042 12 7.65625 12H2.34375C1.98958 12 1.67708 11.8646 1.40625 11.5938C1.13542 11.3229 1 11.0104 1 10.6562Z"
        fill={fill}
      />
    </Svg>
  );
};
