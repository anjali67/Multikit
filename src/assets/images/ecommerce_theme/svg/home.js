import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function Home(props) {
  return (
    <Svg
      width={props.width ? props.width : '26'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M21.1667 23.5H4.83334C4.52392 23.5 4.22717 23.3771 4.00838 23.1583C3.78959 22.9395 3.66667 22.6427 3.66667 22.3333V11.8333H0.166672L12.2148 0.880655C12.4296 0.685212 12.7096 0.576904 13 0.576904C13.2904 0.576904 13.5704 0.685212 13.7852 0.880655L25.8333 11.8333H22.3333V22.3333C22.3333 22.6427 22.2104 22.9395 21.9916 23.1583C21.7728 23.3771 21.4761 23.5 21.1667 23.5ZM6 21.1667H20V9.68316L13 3.32015L6 9.68316V21.1667ZM8.33334 16.5H17.6667V18.8333H8.33334V16.5Z"
        fill={props.color ? props.color : '#9F9F9F'}
      />
    </Svg>
  );
}
