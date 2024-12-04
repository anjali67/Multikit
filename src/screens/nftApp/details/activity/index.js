import React from 'react';
import {View} from 'react-native';
import TopCollection from '@otherComponent/nft/home/topCollections';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import {windowHeight} from '@theme/appConstant';
import {useNavigation} from '@react-navigation/native';

export default function activity(props) {
  const {isDark, isRTL} = useValues();
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal: 15}}>
      <TopCollection
        imageStyle={{resizeMode: 'stretch', borderRadius: windowHeight(13)}}
        data={props.item.items}
        navigation={navigation}
        showIcon
        icon={
          isRTL ? (
            <BackArrow />
          ) : (
            <RightArrow
              color={isDark ? appColors.white : appColors.nftTitle}
              strokeWidth={'1.9'}
            />
          )
        }
      />
    </View>
  );
}
