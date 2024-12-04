import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
} from 'react-native';
import financialStyles from '../../styles';
import {CameraSwitch} from '@assets/images/finance_theme/svg/cameraSwitch';
import {Flash} from '@assets/images/finance_theme/svg/flash';
import {Cross} from '@assets/images/common/svg/cross';
import {qrbox} from '@utils/images/images';
import {t} from 'i18next';
import {qrBlack, qrWhite} from '@utils/images/images';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './styles';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function ScanQr({navigation}) {
  const [scannerVisible, setscannerVisible] = useState(false);
  const {isDark, viewRTLStyle, isRTL} = useValues();

  useEffect(() => {
    cameraPermission();
  }, []);

  const cameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {},
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const handleScan = e => {
    if (e.data !== null) {
      Linking.openURL(e.data)
        .catch(err => console.error('An error occured', err))
        .then(setscannerVisible(!scannerVisible));
    }
  };
  const handleButtonPress = () => {
    setscannerVisible(!scannerVisible);
  };
  return (
    <View style={styles.conatiner}>
      {scannerVisible ? (
        <QRCodeScanner
          onRead={handleScan}
          showMarker={true}
          reactivate={true}
          reactivateTimeout={3000}
        />
      ) : (
        <View
          style={[
            financialStyles.mainContainer,
            {backgroundColor: isDark ? appColors.white : appColors.gradient2},
          ]}>
          <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.crossView}
              onPress={() => navigation.navigate('FinanceTab')}>
              <Cross
                color={isDark ? appColors.darkTheme : appColors.gray}
                height={'25'}
                width={'25'}
              />
            </TouchableOpacity>
            <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              <TouchableOpacity
                onPress={() => handleButtonPress()}
                style={{right: 16}}>
                <CameraSwitch
                  color={isDark ? appColors.darkTheme : '#AFAFAF'}
                />
              </TouchableOpacity>
              <View>
                <Flash color={isDark ? appColors.darkTheme : appColors.gray} />
              </View>
            </View>
          </View>
          <View style={styles.imageView}>
            <Image
              source={isDark ? qrWhite : qrbox}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.centerView}>
            <View
              style={[
                styles.mainContainer,
                {
                  flexDirection: viewRTLStyle,
                  backgroundColor: isDark ? '#930354' : '#2E031B',
                },
              ]}>
              <View>
                <Image
                  source={qrBlack}
                  style={[styles.qrImg, {left: isRTL ? windowWidth(5) : null}]}
                />
              </View>
              <TouchableOpacity onPress={() => handleButtonPress()}>
                <Text
                  style={[
                    styles.textStyle,
                    {left: isRTL ? -6 : windowWidth(4)},
                  ]}>
                  {t('financial.scanToPay')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
