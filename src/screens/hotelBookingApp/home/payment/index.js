import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {hotelStyle} from '../../styles';
import PaymentMethod from '@otherComponent/hotelBooking/paymentMethods';
import {visa} from '@utils/images/images';
import {gpay} from '@utils/images/images';
import {masterCard} from '@utils/images/images';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import {windowHeight} from '@theme/appConstant';
import WalletsView from '../../../foodOrderApp/cart/payment/walletsView';

export default function hotelPayment({navigation}) {
  const {isDark, textRTLStyle, isRTL, currSymbol, currValue} = useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HeaderView
        grandiantColor={appColors.onBoardGradiant1}
        showBackArrow={true}
        title={t('drawer.Payment')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: windowHeight(50)}}>
        <View style={styles.blankView}></View>
        <View style={styles.mainContainer}>
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.reviewText,
                marginTop: windowHeight(3),
              },
            ]}>
            {t('foodPayment.recentMethod')}
          </Text>
          <View
            style={[
              styles.mainView,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}>
            <PaymentMethod
              title={'XXXX-XXXX-XXXX-9862'}
              icon={visa}
              subTitle={t('foodPayment.expire')}
              showSeperator
              navigation={navigation}
            />
            <PaymentMethod
              title={t('foodPayment.gpay')}
              icon={gpay}
              imageStyle={styles.gpayImg}
              subTitle={t('foodPayment.mail')}
              navigation={navigation}
            />
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.foodSecondary,
                right: isRTL ? windowWidth(7) : 0,
              },
            ]}>
            {t('foodPayment.debitCreditCard')}
          </Text>
          <View
            style={[
              styles.mainView,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}>
            <PaymentMethod
              title={'XXXX-XXXX-XXXX-9862'}
              icon={visa}
              subTitle={t('foodPayment.expire')}
              showSeperator
              navigation={navigation}
            />
            <PaymentMethod
              title={t('XXXX-XXXX-XXXX-5621')}
              icon={masterCard}
              subTitle={t('foodPayment.expire1')}
              imageStyle={styles.masterImg}
              navigation={navigation}
            />
            <PaymentMethod
              showDashView
              navigation={navigation}
              title={t('paymentsArr.addNewCard')}
              btnTitle={t('paymentsArr.addNewCard')}
            />
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.foodSecondary,
                right: isRTL ? windowWidth(7) : 0,
              },
            ]}>
            {t('foodPayment.payUpi')}
          </Text>
          <View
            style={[
              styles.mainView,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}>
            <PaymentMethod
              title={t('foodPayment.gpay')}
              icon={gpay}
              subTitle={t('foodPayment.mail')}
              imageStyle={styles.gpayImg}
              navigation={navigation}
            />
            <PaymentMethod
              showDashView
              navigation={navigation}
              btnTitle={t('foodPayment.addUpi')}
            />
          </View>
        </View>
        <WalletsView
          mainContainer={{marginTop: windowHeight(7)}}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}
