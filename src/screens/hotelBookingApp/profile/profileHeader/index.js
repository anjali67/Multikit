import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {userImg} from '@utils/images/images';
import {t} from 'i18next';
import {homelogo} from '@utils/images/images';
import {Cross} from '@assets/images/common/svg/cross';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {useNavigation} from '@react-navigation/native';

export default function profileHeader(props) {
  const {viewRTLStyle, isDark, isRTL} = useValues();
  const navigation = useNavigation();
  return (
    <View style={[styles.margin, props.margin]}>
      {props.showHeaderLogo && (
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <Image source={homelogo} tintColor={'white'} style={styles.logoImg} />
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HotelBookingTab');
              }}
              style={styles.crossView}>
              <Cross height={'17'} width={'17'} color={appColors.white} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Image source={userImg} style={styles.img} />
      <Text style={styles.title}>{t('foodProfile.user')}</Text>
      <Text style={styles.email}>{t('foodProfile.email')}</Text>
    </View>
  );
}
