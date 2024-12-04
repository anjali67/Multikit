import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Blog10(props) {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21.5 2V22H19.5V15H15.5V8C15.5 6.4087 16.1321 4.88258 17.2574 3.75736C18.3826 2.63214 19.9087 2 21.5 2ZM19.5 4.53C18.67 5 17.5 6.17 17.5 8V13H19.5V4.53ZM9.5 13.9V22H7.5V13.9C6.37081 13.6691 5.35599 13.0554 4.62714 12.1625C3.8983 11.2697 3.50014 10.1526 3.5 9V3H5.5V10H7.5V3H9.5V10H11.5V3H13.5V9C13.4999 10.1526 13.1017 11.2697 12.3729 12.1625C11.644 13.0554 10.6292 13.6691 9.5 13.9Z"
        fill={props.color ? props.color : "black"}
      />
    </Svg>
  );
}
