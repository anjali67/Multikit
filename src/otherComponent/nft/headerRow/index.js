import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import {useNavigation} from '@react-navigation/native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {t} from 'i18next';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import {RightArrow} from '@assets/images/common/svg/rightArrow';

export default function headerRow(props) {
  const navigation = useNavigation();
  const {textRTLStyle, isDark, currSymbol, viewRTLStyle, isRTL} = useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          if (props.onPress) {
            props.onPress();
          } else {
            navigation.goBack();
          }
        }}>
        <View style={styles.blankView}>
          {isRTL ? (
            <RightArrow
              color={appColors.blackColor}
              height={'25'}
              width={'20'}
            />
          ) : (
            <BackArrow height={'15'} width={'15'} />
          )}
        </View>
      </TouchableOpacity>
      <Text
        style={[
          styles.title,
          {
            color: isDark ? appColors.white : appColors.nftTitle,
          },
        ]}>
        {t(props.title ? props.title : t('nft.collectionTitle'))}
      </Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: windowWidth(10),
  },
  title: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT23,
    bottom: windowHeight(4),
  },
  blankView: {
    marginHorizontal: 10,
  },
});
