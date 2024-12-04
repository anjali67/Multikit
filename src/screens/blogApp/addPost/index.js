import React from 'react';
import {View, Image} from 'react-native';
import style from './styles';
import {postBg} from '@utils/images/images';
import PostHeader from './postHeader';
import BottomView from './bottomView';
import {useValues} from '@App';
import appColors from '../../../theme/appColors';
import BlogTab from '../../../bottomTab/blogTab';

export default function addPost({navigation, onPress}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        style.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={style.topView}>
        <PostHeader onPress={onPress} navigation={navigation} />
      </View>
      <View style={style.imageView}>
        <Image source={postBg} style={style.image} />
      </View>
      <View
        style={[
          style.bottomView,
          {
            backgroundColor: isDark ? appColors.blackColor : appColors.white,
            borderTopColor: isDark ? appColors.darkTheme : appColors.divider,
          },
        ]}>
        <BottomView onPress={onPress} navigation={navigation} />
      </View>
    </View>
  );
}
