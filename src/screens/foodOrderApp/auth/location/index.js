import {View, Text, Image, PermissionsAndroid} from 'react-native';
import React from 'react';
import foodOrderstyle from '../../style/styles';
import AuthHeader from '@otherComponent/food/authHeader';
import styles from './styles';
import {t} from 'i18next';
import {foodLocation} from '@utils/images/images';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function FoodLocation({navigation}) {
  const {isDark} = useValues();
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {},
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigation.navigate('FindResturant');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={[foodOrderstyle.mainContainer,{backgroundColor:isDark ? appColors.darkTheme : appColors.foodPrimary}]}>
      <AuthHeader
        title={t('location.allowLocation')}
        subTitle={t('location.content')}
        contentStyle={styles.contentStyle}
        navigation={navigation}
      />
      <View style={{alignItems: 'center'}}>
        <Image source={foodLocation} style={styles.map} />
        <Button
          text={t('addAddress.useCurrentLocation')}
          style={foodOrderstyle.buttonStyle}
          btnTextStyle={foodOrderstyle.btn}
          onPress={requestPermission}
        />
        <Button
          text={t('location.newAddress')}
          style={[styles.btnStyle,{backgroundColor:isDark ? appColors.blackColor : appColors.white}]}
          btnTextStyle={[styles.btn,{color:isDark ?appColors.white : appColors.foodSecondary }]}
          onPress={() => {
            navigation.navigate('FindResturant');
          }}
        />
      </View>
    </View>
  );
}
