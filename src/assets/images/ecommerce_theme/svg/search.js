import Svg, {Path, ClipPath, Defs, G, Rect} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function Search(props) {
  return (
    <Svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_831_799)">
        <Path
          d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
          fill={props.color ? props.color : '#6A6A6A'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_831_799">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
