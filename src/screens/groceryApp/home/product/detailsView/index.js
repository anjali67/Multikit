import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  NativeModules,
} from 'react-native';
import Styles from './styles';
import {SideArrow} from '@assets/images/common/svg/sideArrow';
import {t} from 'i18next';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import appColors from '../../../../../theme/appColors';

export default DetailsView = props => {
  const [showManufacturer, setShowManufacturer] = useState(false);
  const [showProductDesc, setShowProductDesc] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const {textRTLStyle, viewRTLStyle, isRTL, isDark} = useValues();
  const {UIManager} = NativeModules;

  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  const showValue = (manufacturer, product, feature) => {
    LayoutAnimation.easeInEaseOut();
    setShowManufacturer(manufacturer);
    setShowProductDesc(product);
    setShowFeature(feature);
  };

  return (
    <View style={Styles.container}>
      <View style={[Styles.manufacturer, {marginTop: windowHeight(8)}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[Styles.optionView, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              Styles.txt,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {t('productDetailsPage.detailTitle')}
          </Text>
        </TouchableOpacity>
        <Text style={[Styles.title, {textAlign: textRTLStyle}]}></Text>
      </View>
      <View style={Styles.manufacturer}>
        <TouchableOpacity
          onPress={() => showValue(!showManufacturer, false, false)}
          activeOpacity={0.7}
          style={[Styles.optionView, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              Styles.txt,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {t('productDetailsPage.manufacturerDetails')}
          </Text>
          <View>
            {!showManufacturer &&
              (isRTL ? <DownArrow height={'6'} width={'12'} /> : <SideArrow />)}
          </View>
        </TouchableOpacity>
        {showManufacturer && (
          <Text style={[Styles.title, {textAlign: textRTLStyle}]}>
            {t('productDetailsPage.manufacturerDetailsDesc')}
          </Text>
        )}
      </View>
      <View style={Styles.product}>
        <TouchableOpacity
          onPress={() => showValue(false, !showProductDesc, false)}
          activeOpacity={0.7}
          style={[Styles.optionView, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              Styles.txt,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {t('productDetailsPage.productDisclaimer')}
          </Text>
          <View>
            {!showProductDesc &&
              (isRTL ? <DownArrow height={'6'} width={'12'} /> : <SideArrow />)}
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
            {t('productDetailsPage.productDisclaimerDesc')}
          </Text>
        )}
      </View>
      <View style={Styles.product}>
        <TouchableOpacity
          onPress={() => showValue(false, false, !showFeature)}
          activeOpacity={0.7}
          style={[Styles.optionView, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              Styles.txt,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {t('productDetailsPage.featureDetails')}
          </Text>
          <View>
            {!showFeature &&
              (isRTL ? <DownArrow height={'6'} width={'12'} /> : <SideArrow />)}
          </View>
        </TouchableOpacity>
        {showFeature && (
          <Text style={[Styles.title, {textAlign: textRTLStyle}]}>
            {t('productDetailsPage.featureDetailsDesc')}
          </Text>
        )}
      </View>
    </View>
  );
};
