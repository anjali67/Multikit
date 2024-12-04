import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function ElectricalBill(props) {
  return (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <Path d="M9.97299 18H11V13H13V18H14.027C14.159 16.798 14.772 15.806 15.767 14.723C15.88 14.601 16.599 13.856 16.684 13.75C17.3903 12.8676 17.833 11.8037 17.9611 10.6808C18.0892 9.55784 17.8976 8.42154 17.4082 7.40274C16.9189 6.38395 16.1517 5.52409 15.1951 4.92218C14.2385 4.32028 13.1313 4.00081 12.0011 4.00057C10.8708 4.00033 9.76353 4.31932 8.80665 4.92082C7.84977 5.52231 7.08224 6.38185 6.59245 7.40043C6.10266 8.41902 5.91053 9.55524 6.03818 10.6782C6.16584 11.8012 6.60808 12.8653 7.31399 13.748C7.39999 13.855 8.12099 14.601 8.23199 14.722C9.22799 15.806 9.84099 16.798 9.97299 18ZM9.99999 20V21H14V20H9.99999ZM5.75399 15C4.81218 13.8233 4.22194 12.4045 4.05125 10.907C3.88057 9.40947 4.13639 7.89421 4.78924 6.53575C5.4421 5.17728 6.46543 4.03088 7.74135 3.22859C9.01727 2.4263 10.4939 2.00077 12.0011 2.00101C13.5083 2.00125 14.9847 2.42725 16.2604 3.22995C17.5361 4.03265 18.559 5.17939 19.2114 6.53806C19.8639 7.89673 20.1192 9.41207 19.948 10.9095C19.7769 12.407 19.1862 13.8256 18.244 15.002C17.624 15.774 16 17 16 18.5V21C16 21.5304 15.7893 22.0391 15.4142 22.4142C15.0391 22.7893 14.5304 23 14 23H9.99999C9.46956 23 8.96085 22.7893 8.58578 22.4142C8.2107 22.0391 7.99999 21.5304 7.99999 21V18.5C7.99999 17 6.37499 15.774 5.75399 15Z" fill="#696969"/>
    </Svg>
  );
}

