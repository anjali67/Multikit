import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import RideRow from '../../payment/bottomView/rideRow';
import DistanceRow from '../../payment/bottomView/rideRow/distanceRow';
import BtnView from '@otherComponent/cabBooking/btnView';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function bottomSection(props) {
  const {viewRTLStyle,isDark} = useValues();
  return (
    <View style={[styles.bottomView,{backgroundColor : isDark ? appColors.blackColor : appColors.white}]}>
      <RideRow />
      <DistanceRow mainView={[styles.mainViewStyle,{  backgroundColor: isDark ? appColors.darkTheme : appColors.reviewsBg}]} />
      <View style={{height: windowHeight(6)}}></View>
      <View style={[styles.singleRow, {flexDirection: viewRTLStyle}]}>
        <BtnView
          title={styles.titleStyle}
          btnTitle={t('cabBooking.cancelRide')}
          containerView={styles.containerView}
          onBtnPress={() => {
            props.navigation.navigate('ChooseRide');
          }}
        />
        <BtnView
          onBoardGradiant2={appColors.avtiveGradiant}
          onBoardGradiant3={appColors.activeGradiant1}
          btnTitle={t('cabBooking.Reschedule')}
          title={styles.titleStyle}
          containerView={[
            styles.containerView,
            {marginHorizontal: windowWidth(0)},
          ]}
          onBtnPress={() => {
            props.navigation.navigate('ChooseRide');
          }}
        />
      </View>
    </View>
  );
}
