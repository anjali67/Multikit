import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Search(props) {
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M15.0258 13.8475L18.595 17.4158L17.4158 18.595L13.8475 15.0258C12.5197 16.0901 10.8683 16.669 9.16663 16.6666C5.02663 16.6666 1.66663 13.3066 1.66663 9.16663C1.66663 5.02663 5.02663 1.66663 9.16663 1.66663C13.3066 1.66663 16.6666 5.02663 16.6666 9.16663C16.669 10.8683 16.0901 12.5197 15.0258 13.8475ZM13.3541 13.2291C14.4117 12.1415 15.0023 10.6837 15 9.16663C15 5.94329 12.3891 3.33329 9.16663 3.33329C5.94329 3.33329 3.33329 5.94329 3.33329 9.16663C3.33329 12.3891 5.94329 15 9.16663 15C10.6837 15.0023 12.1415 14.4117 13.2291 13.3541L13.3541 13.2291Z"
        fill={props.color ? props.color : '#9DC2CC'}
      />
    </Svg>
  );
}
