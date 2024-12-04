import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from '../../styles';
import {ShoppingBag} from '@assets/images/learning_theme/svg/shoppingBag';
import {windowWidth} from '@theme/appConstant';
import {Back} from '@assets/images/main_theme_images/svg/back';
import {useNavigation} from '@react-navigation/native';
import {Drawer} from '@assets/images/hotel_theme/svg/drawer';
import {useValues} from '@App';
import {ArrowRight} from '@assets/images/common/svg/arrowright';

export default function headerView(props) {
  const navigation = useNavigation();
  const {viewRTLStyle, isRTL} = useValues();
  return (
    <View
      style={[
        styles.singleRow,
        {
          justifyContent: 'space-between',
          width: windowWidth(452),
          margin: 10,
          flexDirection: viewRTLStyle,
        },
      ]}>
      {props.showArrowIcon ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}>
          {isRTL ? <ArrowRight /> : <Back />}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.openDrawer()}>
          <Drawer strokeWidth={'1.2'} color={appColors.white} />
        </TouchableOpacity>
      )}
      <ShoppingBag height={'28'} />
    </View>
  );
}
