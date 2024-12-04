import React from 'react';
import {View, StyleSheet} from 'react-native';
import nftStyle from '../../../style';
import {tokensData} from '@utils/json/nft';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import TopCollection from '@otherComponent/nft/home/topCollections';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {BackArrow} from '@assets/images/common/svg/backArrow';

export default function Tokens({navigation}) {
  const {isDark, isRTL} = useValues();
  return (
    <View
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={style.margin}>
        <TopCollection
          data={tokensData}
          navigation={navigation}
          showIcon
          icon={
            isRTL ? (
              <BackArrow />
            ) : (
              <RightArrow
                color={isDark ? appColors.white : appColors.blackColor}
                height={'15'}
                width={'15'}
              />
            )
          }
          imageStyle={style.image}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    height: windowHeight(48),
    width: windowWidth(72),
    resizeMode: 'contain',
    borderRadius: windowHeight(10),
  },
  margin: {
    marginTop: 3,
    marginHorizontal: 20,
  },
});
