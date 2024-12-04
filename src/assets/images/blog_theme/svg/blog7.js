import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Blog7(props) {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M13.5 20H19.5V16H15.5V14H19.5V6H17.5V11L13.5 9.4V20ZM11.5 20V9.4L7.5 11V6H5.5V20H11.5ZM7.5 4V3H17.5V4H20.5C20.7652 4 21.0196 4.10536 21.2071 4.29289C21.3946 4.48043 21.5 4.73478 21.5 5V21C21.5 21.2652 21.3946 21.5196 21.2071 21.7071C21.0196 21.8946 20.7652 22 20.5 22H4.5C4.23478 22 3.98043 21.8946 3.79289 21.7071C3.60536 21.5196 3.5 21.2652 3.5 21V5C3.5 4.73478 3.60536 4.48043 3.79289 4.29289C3.98043 4.10536 4.23478 4 4.5 4H7.5ZM12.5 8L16 5H9L12.5 8Z"
        fill={props.color ? props.color : "black"}
      />
    </Svg>
  );
}
