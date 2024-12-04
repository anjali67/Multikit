import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {t} from 'i18next';
import {discount} from '@utils/images/images';
import {SideArrow} from '@assets/images/common/svg/sideArrow';
import {deliveryData} from '@utils/json/food';
import BillDetails from './billDetails';
import appColors from '@theme/appColors';
import {checkedcheckbox} from '@utils/images/images';
import {uncheckedcheckbox} from '@utils/images/images';
import {useValues} from '@App';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import {darkDiscount} from '@utils/images/images';
import {windowWidth} from '../../../../theme/appConstant';

export default function CouponView(props) {
  const [data, setData] = useState(deliveryData);
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();

  const handleCheckboxSelection = itemId => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId
          ? {...item, isChecked: true}
          : {...item, isChecked: false},
      ),
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Text
        style={[
          styles.title,
          {
            color: isDark ? appColors.white : appColors.foodSecondary,
            textAlign: textRTLStyle,
            right: isRTL ? windowWidth(8) : 0,
          },
        ]}>
        {t('foodCart.Coupons')}:
      </Text>
      <View
        style={[
          styles.row,
          {
            justifyContent: 'space-between',
            flexDirection: viewRTLStyle,
            backgroundColor: isDark ? appColors.blackColor : appColors.white,
          },
        ]}>
        <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
          {isDark ? (
            <Image source={darkDiscount} style={styles.discount} />
          ) : (
            <Image source={discount} style={styles.discount} />
          )}
          <Text
            style={[
              styles.text,
              {color: isDark ? appColors.white : appColors.foodSecondary},
            ]}>
            {t('foodCart.ApplyCoupons')}
          </Text>
        </View>
        <View>
          {isRTL ? (
            <BackArrow
              width={20}
              color={isDark ? appColors.white : '#1B1B3E'}
            />
          ) : (
            <SideArrow
              height={'42'}
              width={'25'}
              color={isDark ? appColors.white : appColors.foodSecondary}
            />
          )}
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.foodSecondary,
              right: isRTL ? windowWidth(8) : 0,
            },
          ]}>
          {t('foodCart.deliveryInstruction')}
        </Text>
        <View
          style={[
            styles.diliveryView,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          {data.map(item => {
            return (
              <View
                style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxSelection(item.id)}>
                  {item.isChecked == true ? (
                    <Image
                      source={checkedcheckbox}
                      tintColor={appColors.foodBtn}
                      style={styles.image}
                    />
                  ) : (
                    <Image
                      source={uncheckedcheckbox}
                      tintColor={appColors.gray}
                      style={styles.image}
                    />
                  )}
                </TouchableOpacity>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.itemStyle}>{t(item.name)}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <BillDetails
        title={'foodCart.billDetails'}
        navigation={props.navigation}
      />
    </View>
  );
}
