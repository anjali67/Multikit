import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderBar from '@otherComponent/food/headerBar';
import {t} from 'i18next';
import foodorderStyle from '../../style/styles';
import PaymentMethod from './paymentMethods';
import {visa} from '@utils/images/images';
import {gpay} from '@utils/images/images';
import {masterCard} from '@utils/images/images';
import WalletsView from './walletsView';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function FoodPayment({navigation}) {
  const {isDark, textRTLStyle, isRTL, currSymbol, currValue} = useValues();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
      style={[
        foodorderStyle.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}>
      <HeaderBar
        title={
          t('drawer.Payment') + ':' + currSymbol + (currValue * 290).toFixed(2)
        }
        color={appColors.white}
      />
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
          {t('foodPayment.recentMethod')}
        </Text>
        <View
          style={[
            styles.mainView,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <PaymentMethod
            title={'XXXX-XXXX-XXXX-9862'}
            icon={visa}
            subTitle={t('foodPayment.expire1')}
            showSeperator
            navigation={navigation}
          />
          <PaymentMethod
            title={t('foodPayment.gpay')}
            icon={gpay}
            imageStyle={styles.gpayImg}
            subTitle={t('foodPayment.expire1')}
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
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <PaymentMethod
            title={'XXXX-XXXX-XXXX-9862'}
            icon={visa}
            subTitle={t('foodPayment.expire1')}
            showSeperator
            navigation={navigation}
          />
          <PaymentMethod
            title={t('XXXX-XXXX-XXXX-5621')}
            icon={masterCard}
            subTitle={t('foodPayment.expire1')}
            showSeperator
            imageStyle={styles.masterImg}
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
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
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
            title={t('foodPayment.addUpi')}
          />
        </View>
      </View>
      <WalletsView showPayOnDelivery navigation={navigation} />
    </ScrollView>
  );
}
