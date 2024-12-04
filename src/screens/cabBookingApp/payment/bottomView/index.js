import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import {dividerImg} from '@utils/images/images';
import DistanceRow from './rideRow/distanceRow';

import BtnView from '@otherComponent/cabBooking/btnView';
import RideRow from './rideRow';

export default function bottomView(props) {
  return (
    <View style={styles.innerView}>
      <RideRow />
      <Image source={dividerImg} style={styles.divider} />
      <DistanceRow />
      <View style={styles.blankView}></View>
      <BtnView
        onBtnPress={() => {
          props.navigation.navigate('BookedRide');
        }}
        btnTitle={t('ecommerce.payNoW')}
      />
    </View>
  );
}
