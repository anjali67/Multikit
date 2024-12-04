import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function ShoppingBag(props) {
  const {isDark} = useValues();
  return (
    <Svg width="28" height={props.height ? props.height : "70"} viewBox="0 0 28 28" fill="none">
    <Path d="M9.33333 5.83334L7 9.10001V20.5333C7 20.9665 7.16389 21.382 7.45561 21.6883C7.74733 21.9946 8.143 22.1667 8.55556 22.1667H19.4444C19.857 22.1667 20.2527 21.9946 20.5444 21.6883C20.8361 21.382 21 20.9665 21 20.5333V9.10001L18.6667 5.83334H9.33333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M7 9.33334H21" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M17.5 12.8333C17.5 13.4522 17.1313 14.0457 16.4749 14.4833C15.8185 14.9208 14.9283 15.1667 14 15.1667C13.0717 15.1667 12.1815 14.9208 11.5251 14.4833C10.8687 14.0457 10.5 13.4522 10.5 12.8333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  );
}



