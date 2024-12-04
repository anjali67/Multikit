import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {foodOnBoardingBg, onBoard, foodLogo} from '@utils/images/images';
import foodOrderStyle from '../style/styles';
import styles from './styles';
import Button from '@commonComponents/button/button';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function FoodOnBoarding({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        foodOrderStyle.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}>
      <ImageBackground
        resizeMode="stretch"
        source={foodOnBoardingBg}
        style={styles.imageContainer}>
        <View style={styles.topContainer}>
          <Image source={foodLogo} style={styles.logo} />
          <Text style={styles.textStyle}>{t('onBoarding.ultikit')}</Text>
        </View>
        <Text style={styles.subTitle}>{t('onBoarding.title')}</Text>
        <View style={styles.onBoardImg}>
          <Image source={onBoard} style={styles.imageStyle} />
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <Text
          style={[
            styles.text,
            {color: isDark ? appColors.white : appColors.foodSecondary},
          ]}>
          {t('onBoarding.contentText')}
        </Text>
        <Text style={styles.subText}>{t('onBoarding.subText')} </Text>
        <Button
          text={t('onBoarding.GetStarted')}
          style={styles.btnStyle}
          btnTextStyle={styles.btn}
          onPress={() => {
            navigation.navigate('FoodLogin');
          }}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('FoodLogin');
          }}>
          <Text
            style={[
              styles.skip,
              {color: isDark ? appColors.white : appColors.foodSecondary},
            ]}>
            {t('onBoarding.Skip')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
