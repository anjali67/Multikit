import React from 'react';
import {View, Image, Text, PermissionsAndroid} from 'react-native';
import styles from '../styles';
import cabStyle from '../../style';
import {cabOnBoard} from '@utils/images/images';
import {t} from 'i18next';
import BtnView from '@otherComponent/cabBooking/btnView';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function GpsLocation({navigation}) {
  const {isDark, textRTLStyle} = useValues();
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {},
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigation.navigate('CabBookingDrawer');
      } else {
        // console.log('Location permission denied');
      }
    } catch (err) {
      // console.warn(err);
    }
  };
  return (
    <View style={[cabStyle.mainContainer,{backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
      <View style={cabStyle.center}>
        <Image source={cabOnBoard} style={styles.imageStyle} />
        <Text style={[styles.gpsText,{ color: isDark ? appColors.white : appColors.cabText}]}>{t('cabBooking.gpsTunnedOff')}</Text>
        <Text style={[styles.content, {textAlign: 'center',marginHorizontal:10}]}>
          {t('cabBooking.gpsContent')}
        </Text>
      </View>
      <View style={styles.blanView}></View>
      <BtnView onBtnPress={requestPermission} btnTitle={t('cabBooking.gps')} />
    </View>
  );
}
