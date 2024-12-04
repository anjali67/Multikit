import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Truck} from '@assets/images/grocery_assets/svg/truck';
import {t} from 'i18next';
import SearchBar from '@commonComponents/searchBar';
import {Micline} from '@assets/images/grocery_assets/svg/micline';
import {Search} from '@assets/images/grocery_assets/svg/search';
import {CurrentLocation} from '@assets/images/grocery_assets/svg/navigation';
import {Mappin} from '@assets/images/grocery_assets/svg/mappin';
import appColors from '@theme/appColors';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function AddAddress(props) {
  const {viewRTLStyle, isRTL, textRTLStyle, isDark} = useValues();
  const locationArr = [
    {
      name: 'locationArr.locationName',
      address: 'locationArr.locationAddress',
    },
    {
      name: 'locationArr.locationName',
      address: 'locationArr.locationAddress',
    },
  ];
  return (
    <View>
      <View
        style={[
          styles.row,
          {
            flexDirection: viewRTLStyle,
            backgroundColor: isDark ? appColors.blackColor : appColors.white,
          },
        ]}>
        <Truck />
        <Text
          style={[
            styles.text,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {t('addAddress.deliveryDetail')}
        </Text>
      </View>
      <View style={styles.paymentView}>
        <SearchBar
          placeholder={'homeHeader.Searchproductshere'}
          rightIcon={<Micline />}
          leftIcon={<Search color={appColors.groceryFont} />}
          inputStyle={[
            styles.inputStyle,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}
          borderColor={appColors.border}
          inputText={styles.inputText}
        />
        <View style={[styles.locationView, {flexDirection: viewRTLStyle}]}>
          <View style={styles.location}>
            <CurrentLocation />
          </View>
          <Text
            style={[
              styles.locationTxt,
              {
                marginRight: isRTL ? windowWidth(10) : windowWidth(0),
                color: isDark ? appColors.white : appColors.black,
              },
            ]}>
            {t('addAddress.useCurrentLocation')}
          </Text>
        </View>
        {locationArr.map((item, index) => (
          <View
            style={[styles.addView, {borderBottomWidth: index == 0 ? 0.5 : 0}]}>
            <View style={[styles.nameView, {flexDirection: viewRTLStyle}]}>
              <Mappin color={isDark ? appColors.white : appColors.black} />
              <Text
                style={[
                  styles.name,
                  {
                    marginRight: isRTL ? windowWidth(10) : 0,
                    color: isDark ? appColors.white : appColors.black,
                  },
                ]}>
                {t(item.name)}
              </Text>
            </View>
            <Text style={[styles.add, {textAlign: textRTLStyle}]}>
              {t(item.address)}
            </Text>
          </View>
        ))}
        <View style={styles.blank}></View>
        <Button
          text={t('addAddress.confirmLocation')}
          style={styles.btnStyle}
          btnTextStyle={styles.btn}
          onPress={() => {
            props.navigation.navigate('GroceryPayment');
          }}
        />
      </View>
    </View>
  );
}
