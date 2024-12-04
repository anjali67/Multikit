import {View} from 'react-native';
import React from 'react';
import styles from '../style/externalStyles';
import BoxContainer from '@otherComponent/mainTheme/boxContainer/BoxContainer';
import {HotelBookingApplist} from '@utils/json/mainTheme';
import {t} from 'i18next';
import {useValues} from '@App';
import MainView from '@otherComponent/mainTheme/mainView';
import appColors from '@theme/appColors';
import { windowHeight } from '@theme/appConstant';

export default function HotelBookingAppList({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? appColors.blackColor : appColors.white,
      }}>
      <View style={styles.header}></View>
      <BoxContainer
       contentContainerStyle={{paddingBottom:windowHeight(70)}}
        title={t('mainTheme.hotelBookingScreensList')}
        height={'15%'}
        backIcon
        navigation={navigation}
        content={
          <View>
            {HotelBookingApplist.map((item, index) => {
              return <MainView item={item} index={index} />;
            })}
          </View>
        }
      />
    </View>
  );
}
