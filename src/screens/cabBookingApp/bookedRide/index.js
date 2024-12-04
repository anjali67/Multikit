import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {useValues} from '@App';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import cabStyle from '../style';
import {orderUser} from '@utils/images/images';
import LinearGradient from 'react-native-linear-gradient';
import {Call} from '@assets/images/common/svg/call';
import {Message} from '@assets/images/common/svg/message';
import MapView, {Marker} from 'react-native-maps';
import BottomSection from './bottomSection';

export default function bookedRide({navigation}) {
  const {viewRTLStyle, isRTL, isDark} = useValues();
  return (
    <View style={cabStyle.mainContainer}>
      <View>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: 28.6139,
            longitude: 77.209,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          onRegionChange={data => {
            console.log(data);
          }}>
          <Marker
            coordinate={{latitude: 21.1982596, longitude: 72.7960651}}
            pinColor={'red'}></Marker>
        </MapView>
        <View style={[styles.mainView,{  backgroundColor: isDark ? appColors.blackColor : appColors.white}]}>
          <View style={[styles.topView, {flexDirection: viewRTLStyle}]}>
            <View style={[styles.singleRow, {flexDirection: viewRTLStyle}]}>
              <Image source={orderUser} style={styles.user} />
              <View style={styles.textView}>
                <Text
                  style={[
                    styles.title,
                    {color: isDark ? appColors.white : appColors.foodSecondary},
                  ]}>
                  {t('orderPlaced.user')}
                </Text>
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
              <LinearGradient
                colors={[appColors.avtiveGradiant, appColors.activeGradiant1]}
                start={{x: 1, y: 0.2}}
                end={{x: 1, y: 1}}
                style={styles.background}>
                <Call />
              </LinearGradient>
            </View>
          </View>
        </View>
        <BottomSection navigation={navigation} />
      </View>
    </View>
  );
}
