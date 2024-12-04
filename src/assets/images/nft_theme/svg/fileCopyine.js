import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function FilterCopyLine(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '21'}
      height={props.height ? props.height : '21'}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M3.20833 2.75001V1.37501C3.20833 1.25345 3.25662 1.13687 3.34258 1.05091C3.42853 0.96496 3.54511 0.916672 3.66667 0.916672H9.16667C9.28822 0.916672 9.4048 0.96496 9.49076 1.05091C9.57671 1.13687 9.625 1.25345 9.625 1.37501V7.79167C9.625 7.91323 9.57671 8.02981 9.49076 8.11576C9.4048 8.20172 9.28822 8.25001 9.16667 8.25001H7.79167V9.62501C7.79167 9.87801 7.58542 10.0833 7.33013 10.0833H1.83654C1.7761 10.0837 1.71618 10.0721 1.66023 10.0493C1.60428 10.0264 1.5534 9.99269 1.51051 9.9501C1.46762 9.90751 1.43357 9.85686 1.41032 9.80107C1.38706 9.74528 1.37506 9.68545 1.375 9.62501L1.37638 3.20834C1.37638 2.95534 1.58263 2.75001 1.83792 2.75001H3.20833ZM2.29304 3.66667L2.29167 9.16667H6.875V3.66667H2.29304ZM4.125 2.75001H7.79167V7.33334H8.70833V1.83334H4.125V2.75001Z"
        fill={props.color ? props.color : appColors.blackColor}
      />
    </Svg>
  );
}
