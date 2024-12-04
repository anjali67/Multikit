import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowHeight, windowWidth} from '../../../../theme/appConstant';
import appColors from '../../../../theme/appColors';

export default Decrease = props => {
  return (
    <Svg
      width={props.width ? props.width : windowWidth(12)}
      height={props.height ? props.height : windowHeight(12)}
      viewBox="0 0 9 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.08594 1.32715H0.0351562V0H8.08594V1.32715Z"
        fill={props.color ? props.color : appColors.black}
      />
    </Svg>
  );
};
