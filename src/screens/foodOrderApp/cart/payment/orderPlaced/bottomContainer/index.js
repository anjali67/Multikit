import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../styles';
import {orderUser} from '@utils/images/images';
import {Call} from '@assets/images/common/svg/call';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import AddressRow from './addressRow';
import {HomeDoor} from '@assets/images/food_ordering_theme/svg/homeDoor';
import {Shop} from '@assets/images/food_ordering_theme/svg/shop';
import {Message} from '@assets/images/common/svg/message';
import {useValues} from '@App';

export default function BottomContainer() {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View style={[styles.bottomView,{backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
      <View style={[styles.topView, {flexDirection: viewRTLStyle}]}>
        <View
          style={[
            styles.singleRow,
            styles.margin,
            {flexDirection: viewRTLStyle},
          ]}>
          <Image source={orderUser} style={styles.user} />
          <View style={styles.textView}>
            <Text style={[styles.title,{color:isDark ? appColors.white : appColors.foodSecondary}]}>{t('orderPlaced.user')}</Text>
            <Text style={styles.contentStyle}>
              {t('orderPlaced.temperature')}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.singleRow,
            styles.marginTop,
            {flexDirection: viewRTLStyle},
          ]}>
          <View style={styles.background}>
            <Message />
          </View>
          <View
            style={[styles.background, {backgroundColor: appColors.foodBtn}]}>
            <Call />
          </View>
        </View>
      </View>
      <View style={styles.blank}></View>
      <AddressRow
        icon={<Shop />}
        title={'orderPlaced.restaurantAddress'}
        content={'orderPlaced.address'}
      />
      <AddressRow
        icon={<HomeDoor />}
        title={'orderPlaced.homeAddress'}
        content={'orderPlaced.homeContent'}
      />
    </View>
  );
}
