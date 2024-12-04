import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Back} from '@assets/images/main_theme_images/svg/back';
import styles from './styles';
import {accountBg, financeProfile} from '@utils/images/images';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import {ArrowRight} from '@assets/images/common/svg/arrowright';

export default function HeaderView(props) {
  const {isRTL, viewRTLStyle} = useValues();
  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        source={accountBg}
        style={[
          styles.image,
          {height: props.showUserDetails ? windowHeight(70) : windowHeight(62)},
        ]}>
        <View
          style={[
            styles.mainView,
            {
              padding: props.showUserDetails
                ? windowHeight(15)
                : windowHeight(11),
              flexDirection: viewRTLStyle,
            },
          ]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => props.navigation.goBack()}>
            {isRTL ? (
              <ArrowRight height={props.showUserDetails ? 70 : 47} />
            ) : (
              <Back
                color={appColors.gray}
                height={props.showUserDetails ? 50 : 47}
              />
            )}
          </TouchableOpacity>

          {props.showUserDetails && (
            <>
              <Image source={financeProfile} style={styles.profile} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{t('financial.jacobSimonson')}</Text>
                <Text style={styles.content}>{'+1 656 51514 5814'}</Text>
              </View>
            </>
          )}
          {props.showHederText && (
            <View style={styles.textContainer}>
              <Text style={[styles.title, styles.top]}>{props.title}</Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
