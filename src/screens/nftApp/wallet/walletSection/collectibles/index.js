import React from 'react';
import {View, StyleSheet} from 'react-native';
import nftStyle from '../../../style';
import {collectiblesData} from '@utils/json/nft';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import TopCollection from '@otherComponent/nft/home/topCollections';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function collectibles({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={style.margin}>
        <TopCollection
          data={collectiblesData}
          navigation={navigation}
          showIcon
          icon={
            <RightArrow
              color={isDark ? appColors.white : appColors.blackColor}
              height={'15'}
              width={'15'}
            />
          }
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  margin: {
    marginTop: 3,
    marginHorizontal: 20,
  },
});
