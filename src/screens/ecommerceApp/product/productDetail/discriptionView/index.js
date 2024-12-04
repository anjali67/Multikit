import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  NativeModules,
} from 'react-native';
import Styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {Increase} from '@assets/images/grocery_assets/svg/increase';
import ReviewSection from './reviewSection';

export default DetailsView = props => {
  const [showManufacturer, setShowManufacturer] = useState(false);
  const [showProductDesc, setShowProductDesc] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const [showReviews, setReviews] = useState(false);
  const {textRTLStyle, viewRTLStyle, isRTL, isDark} = useValues();
  const {UIManager} = NativeModules;

  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  const showValue = (manufacturer, product, feature, reviews) => {
    LayoutAnimation.easeInEaseOut();
    setShowManufacturer(manufacturer);
    setShowProductDesc(product);
    setShowFeature(feature);
    setReviews(reviews);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.manufacturer}>
        <TouchableOpacity
          onPress={() => showValue(!showManufacturer, false, false, false)}
          activeOpacity={0.7}
          style={[Styles.optionView, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              Styles.txt,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {t('productDetailsPage.detailTitle')}
          </Text>
          <View>
            {showManufacturer ? (
              <Text
                style={[
                  Styles.minus,
                  {color: isDark ? appColors.white : appColors.ecommerceFont},
                ]}>
                －
              </Text>
            ) : (
              <Increase
                height={'12'}
                color={isDark ? appColors.white : appColors.ecommerceFont}
              />
            )}
          </View>
        </TouchableOpacity>
        {showManufacturer && (
          <Text style={[Styles.title, {textAlign: textRTLStyle}]}>
            {t('ecommerce.descriptionContent')}
          </Text>
        )}
      </View>
      <View
        style={[
          Styles.product,
          {
            borderTopColor: isDark
              ? appColors.blackColor
              : appColors.verticalLine,
          },
        ]}>
        <TouchableOpacity
          onPress={() => showValue(false, !showProductDesc, false, false)}
          activeOpacity={0.7}
          style={[Styles.optionView, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              Styles.txt,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {t('ecommerce.specification')}
          </Text>
          <View>
            {showProductDesc ? (
              <Text
                style={[
                  Styles.minus,
                  {color: isDark ? appColors.white : appColors.ecommerceFont},
                ]}>
                －
              </Text>
            ) : (
              <Increase
                height={'12'}
                color={isDark ? appColors.white : appColors.ecommerceFont}
              />
            )}
          </View>
        </TouchableOpacity>
        {showProductDesc && (
          <Text
            style={[
              Styles.title,
              {
                textAlign: textRTLStyle,
              },
            ]}>
            {t('ecommerce.specificationContent')}
          </Text>
        )}
      </View>
      <View
        style={[
          Styles.product,
          {
            borderTopColor: isDark
              ? appColors.blackColor
              : appColors.verticalLine,
          },
        ]}>
        <TouchableOpacity
          onPress={() => showValue(false, false, !showFeature, false)}
          activeOpacity={0.7}
          style={[Styles.optionView, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              Styles.txt,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {t('ecommerce.returnExchange')}
          </Text>
          <View>
            {showFeature ? (
              <Text
                style={[
                  Styles.minus,
                  {color: isDark ? appColors.white : appColors.ecommerceFont},
                ]}>
                －
              </Text>
            ) : (
              <Increase
                height={'12'}
                color={isDark ? appColors.white : appColors.ecommerceFont}
              />
            )}
          </View>
        </TouchableOpacity>
        {showFeature && (
          <Text style={[Styles.title, {textAlign: textRTLStyle}]}>
            {t('ecommerce.returnExachange')}
          </Text>
        )}
      </View>
      <View
        style={[
          Styles.product,
          {
            borderTopColor: isDark
              ? appColors.blackColor
              : appColors.verticalLine,
          },
        ]}>
        <TouchableOpacity
          onPress={() => showValue(false, false, false, !showReviews)}
          activeOpacity={0.7}
          style={[Styles.optionView, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              Styles.txt,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {t('ecommerce.reviews')}
          </Text>
          <View>
            {showReviews ? (
              <Text
                style={[
                  Styles.minus,
                  {color: isDark ? appColors.white : appColors.ecommerceFont},
                ]}>
                －
              </Text>
            ) : (
              <Increase
                height={'12'}
                color={isDark ? appColors.white : appColors.ecommerceFont}
              />
            )}
          </View>
        </TouchableOpacity>
        {showReviews && <ReviewSection />}
      </View>
    </View>
  );
};
