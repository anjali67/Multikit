import {View, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {GlobalStyle} from '../../../../style';
import styles from './styles';
import {t} from 'i18next';
import StarRating from '@commonComponents/starRating';
import ProductItem from './productItem';
import Animation from '@commonComponents/animation/animation';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function ProductModal(props) {
  const {viewRTLStyle, textRTLStyle, isDark, isRTL} = useValues();
  const animRef = useRef();
  const showAnimation = () => {
    if (props.selectedCheckboxes.length === 0) {
      animRef.current.animateView();
    } else {
    }
  };

  return (
    <View style={[GlobalStyle.modal, styles.modelStyle,{backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
      <Animation
        title={t('foodResturants.alert')}
        content={t('foodResturants.alertContent')}
        titleStyle={styles.titleStyle}
        contentTextStyle={styles.contentText}
        ref={animRef}
      />
      <View style={styles.mainContainer}>
        <Text style={[styles.title, {textAlign: textRTLStyle,color:isDark ? appColors.white :appColors.foodSecondary }]}>
          {t('foodResturants.vegCheese')}
        </Text>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <StarRating size={16} />
          <Text style={[styles.rating,{color:isDark ? appColors.white :appColors.foodSecondary }]}>4.5</Text>
        </View>
        <View style={styles.border}></View>
        <View>
          <Text
            style={[styles.title, styles.marginTop, {textAlign: textRTLStyle,color:isDark ? appColors.white :  appColors.foodSecondary}]}>
            {t('productModal.choiceofVegetables')}
          </Text>
          <Text style={[styles.content, {textAlign: textRTLStyle}]}>
            {t('productModal.selectOption')}
          </Text>
          <ProductItem
            setSelectedCheckboxes={props.setSelectedCheckboxes}
            selectedCheckboxes={props.selectedCheckboxes}
            setShowAnimation={props.setShowAnimation}
            showAnimation={showAnimation}
            setShowModal={props.setShowModal}
            totalQuantity={props.cartItems}
            price={props.totalPrice}
          />
        </View>
      </View>
    </View>
  );
}
