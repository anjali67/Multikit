import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {t} from 'i18next';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function ViewCartContainer(props) {
  const {currSymbol,currValue  } = useValues();
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.text}>{t('common.2 Items')}</Text>
        <Text style={styles.price}> {currSymbol}{(currValue * 250).toFixed(2)}</Text>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('GroceryCart');
          }}
          activeOpacity={0.7}>
          <Text style={styles.cartText}>{t('common.View Cart')}</Text>
        </TouchableOpacity>
        <RightArrow />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    margin: windowHeight(7),
  },
  cartText: {
    marginHorizontal: windowWidth(12),
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT20,
    color: appColors.white,
  },
  text: {
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT16,
    marginVertical: windowHeight(1),
    color: appColors.grayLight,
  },
  price: {
    fontFamily: appFonts.PublicSansSemiBold,
    fontSize: fontSizes.FONT17,
    marginVertical: windowHeight(1),
    color: appColors.grayLight,
  },
});
