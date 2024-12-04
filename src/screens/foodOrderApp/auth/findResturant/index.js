import {View, Text} from 'react-native';
import React from 'react';
import AuthHeader from '@otherComponent/food/authHeader';
import {t} from 'i18next';
import styles from './styles';
import FoodTextInput from '@otherComponent/food/textInput';
import foodOrderstyle from '../../style/styles';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function FindResturant({navigation}) {
  const {isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        foodOrderstyle.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}>
      <View style={styles.mainView}>
        <View>
          <AuthHeader
            title={t('location.findLocation')}
            subTitle={t('location.fibdLocationContent')}
            contentStyle={styles.contentStyle}
            navigation={navigation}
          />
          <Text
            style={[
              styles.text,
              {
                color: isDark ? appColors.white : appColors.foodSecondary,
                textAlign: textRTLStyle,
              },
            ]}>
            {t('location.addressLocation')}
          </Text>
          <FoodTextInput
            locationIcon
            placeholder={t('location.enterLocation')}
          />
        </View>
      </View>
      <View style={styles.cenetr}>
        <Button
          text={t('drawer.Saved Address')}
          style={foodOrderstyle.buttonStyle}
          btnTextStyle={foodOrderstyle.btn}
          onPress={() => {
            navigation.navigate('FoodTab');
          }}
        />
      </View>
    </View>
  );
}
