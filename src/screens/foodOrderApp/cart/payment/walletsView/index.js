import {View, Text} from 'react-native';
import React from 'react';
import PaymentMethod from '@otherComponent/hotelBooking/paymentMethods';
import styles from '../styles';
import {t} from 'i18next';
import {venmo} from '@utils/images/images';
import {cashonDelivery} from '@utils/images/images';
import {appleLogo} from '@utils/images/images';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function WalletsView(props) {
  const {isDark, textRTLStyle, isRTL} = useValues();
  return (
    <View>
      <View style={[styles.mainContainer, props.mainContainer]}>
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.foodSecondary,
              right: isRTL ? windowWidth(7) : 0,
            },
          ]}>
          {t('foodProfile.Wallets')}
        </Text>
        <View
          style={[
            styles.mainView,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <PaymentMethod
            title={t('foodPayment.venmo')}
            icon={venmo}
            subTitle={t('foodPayment.venmoWallet')}
            imageStyle={styles.walletsImg}
            imageView={styles.imageView}
            showSeperator
            navigation={props.navigation}
          />
          <PaymentMethod
            title={t('paymentsArr.waleetUPIType5')}
            icon={appleLogo}
            subTitle={t('foodPayment.appleWallet')}
            imageStyle={styles.appleImg}
            imageView={styles.imageView}
            tintColor={'#808080'}
            navigation={props.navigation}
          />
        </View>
      </View>
      {props.showPayOnDelivery && (
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
            {t('foodPayment.payDelivery')}
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
              title={t('paymentsArr.cashOnDelivery')}
              icon={cashonDelivery}
              subTitle={t('foodPayment.venmoWallet')}
              imageStyle={styles.payDelivery}
              imageView={styles.payDeliveryImg}
              navigation={props.navigation}
            />
          </View>
        </View>
      )}
    </View>
  );
}
