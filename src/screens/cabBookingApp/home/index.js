import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {MapLocation} from '@assets/images/cab_theme/svg/mappin';
import TextInput from '@otherComponent/cabBooking/textInput';
import LinearGradient from 'react-native-linear-gradient';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import {Users} from '@assets/images/cab_theme/svg/users';
import BtnView from '@otherComponent/cabBooking/btnView';
import HomeView from '@otherComponent/cabBooking/homeView';
import {side} from '@utils/images/images';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

export default function cabBookingHome({navigation}) {
  const {viewRTLStyle, isDark, textRTLStyle, isRTL} = useValues();
  return (
    <HomeView
      navigation={navigation}
      showHomeHeader={true}
      content={
        <>
          <View style={[styles.textView,]}>
            <Text style={[styles.title, {textAlign: textRTLStyle,  color: isDark ? appColors.white : appColors.cabText}]}>
              {t('cabBooking.textContent')}
            </Text>
            <View style={styles.mainRow}>
              <Image source={side} style={styles.sideImg} />
              <View>
                <TextInput
                  placeholder={t('cabBooking.fromWhere')}
                  inputStyle={styles.inputStyle}
                  icon={<MapLocation />}
                  mainContainer={styles.inputView}
                  leftIcon={
                    <LinearGradient
                      colors={[
                        appColors.avtiveGradiant,
                        appColors.activeGradiant1,
                      ]}
                      style={styles.containerView}
                      start={{x: 1, y: 0.2}}
                      end={{x: 1, y: 1}}></LinearGradient>
                  }
                />
                <TextInput
                  placeholder={t('cabBooking.whereYougo')}
                  inputStyle={styles.inputStyle}
                  icon={<MapLocation />}
                  mainContainer={styles.inputView}
                  leftIcon={
                    <LinearGradient
                      colors={[
                         isDark ? appColors.white : appColors.onBoardGradiant2,
                         isDark ? appColors.white : appColors.onBoardGradiant3,
                      ]}
                      style={styles.containerStyle}
                      start={{x: 1, y: 0.2}}
                      end={{x: 1, y: 1}}></LinearGradient>
                  }
                />
              </View>
            </View>
            <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              <View
                style={[
                  styles.rowView,
                  {
                    marginHorizontal: isRTL ? windowWidth(0) : windowWidth(22),
                    flexDirection: viewRTLStyle,
                  },
                ]}>
                <ClockOutline height={'20'} width={'16'} />
                <Text style={[styles.name,{  color: isDark ? appColors.white : appColors.cabText}]}>{t('cabBooking.curruntTime')}</Text>
              </View>
              <View
                style={[
                  styles.rowView,
                  {
                    flexDirection: viewRTLStyle,
                    marginHorizontal: isRTL ? windowWidth(22) : windowWidth(0),
                  },
                ]}>
                <Users />
                <Text style={[styles.name,{  color: isDark ? appColors.white : appColors.cabText}]}>{t('cabBooking.Passanger')}</Text>
              </View>
            </View>
          </View>
          <BtnView
            onBtnPress={() => {
              navigation.navigate('ChooseRide');
            }}
            btnTitle={t('cabBooking.findCab')}
          />
        </>
      }
    />
  );
}
