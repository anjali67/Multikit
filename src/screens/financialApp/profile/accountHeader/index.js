import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {accountBg, financeProfile, qrBlack} from '@utils/images/images';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';

export default function accountHeader(props) {
  const {viewRTLStyle} = useValues();
  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        source={accountBg}
        style={styles.image}>
        <View style={[styles.container, {flexDirection: viewRTLStyle}]}>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <Image source={financeProfile} style={styles.profile} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{t('financial.jacobSimonson')}</Text>
              <Text style={styles.content}>{'+1 656 51514 5814'}</Text>
              <Text style={[styles.content, styles.fontsize]}>
                {t('financial.useremail')}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                props.navigation.navigate('ScanQr');
              }}>
              <Image source={qrBlack} style={styles.qrImg} />
            </TouchableOpacity>
            <Text style={styles.qrcode}>{t('financial.qrCode')}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
