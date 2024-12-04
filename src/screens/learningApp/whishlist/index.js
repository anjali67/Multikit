import React from 'react';
import {View} from 'react-native';
import learningsStyle from '../style';
import Background from '@otherComponent/learning/home/background';
import {windowHeight} from '@theme/appConstant';
import Header from '@otherComponent/learning/home/header';
import SearchBar from '@otherComponent/learning/searchBar';
import CartListItem from '@otherComponent/learning/courses/cart/cartList';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function whishList() {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        learningsStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <View>
        <Background
          image={{height: windowHeight(104)}}
          content={<Header headerTitle={'learning.myWhishlist'} />}
        />
        <SearchBar />
        <View style={learningsStyle.margin}>
          <CartListItem crossStyle={{right: 2}} />
        </View>
      </View>
    </View>
  );
}
