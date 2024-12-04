import Svg, {Path, Rect,ClipPath,Defs,G} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Edit(props) {
  const {isDark} = useValues();
  return (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/Svg">
<G clip-path="url(#clip0_411_1054)">
<Path d="M9.16675 3.33334H3.33341C2.89139 3.33334 2.46746 3.50893 2.1549 3.82149C1.84234 4.13405 1.66675 4.55798 1.66675 5V16.6667C1.66675 17.1087 1.84234 17.5326 2.1549 17.8452C2.46746 18.1577 2.89139 18.3333 3.33341 18.3333H15.0001C15.4421 18.3333 15.866 18.1577 16.1786 17.8452C16.4912 17.5326 16.6667 17.1087 16.6667 16.6667V10.8333" stroke="#BCBCBC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M15.4167 2.08333C15.7483 1.75181 16.1979 1.56557 16.6667 1.56557C17.1356 1.56557 17.5852 1.75181 17.9167 2.08333C18.2483 2.41485 18.4345 2.86449 18.4345 3.33333C18.4345 3.80217 18.2483 4.25181 17.9167 4.58333L10.0001 12.5L6.66675 13.3333L7.50008 10L15.4167 2.08333Z" stroke="#BCBCBC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</G>
<Defs>
<ClipPath id="clip0_411_1054">
<Rect width="20" height="20" fill="white"/>
</ClipPath>
</Defs>
</Svg>


  );
}

