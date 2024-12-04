import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';
import {Search} from '@assets/images/chat_theme/svg/search';
import {t} from 'i18next';
import {Filter} from '@assets/images/ecommerce_theme/svg/filter';

export default function SearchTextInput() {
  const {viewRTLStyle, textRTLStyle, isDark, isRTL} = useValues();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.sectionStyle,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.white,
            borderWidth: isDark ? 0 : 1,
          },
        ]}>
        <View style={{marginTop: 15}}>
          <Search
            height={'20'}
            color={appColors.cabContent}
            strokeWidth={'1.6'}
            width={'25'}
          />
        </View>
        <TextInput
          placeholder={t('homeHeader.Searchproductshere')}
          style={styles.textInput}
          placeholderTextColor={appColors.cabContent}
        />
      </View>
      <TouchableOpacity activeOpacity={0.9} style={styles.filterView}>
        <Filter />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(9),
    marginBottom: windowHeight(12),
    flexDirection: 'row',
  },
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: appColors.white,
    height: windowHeight(46),
    borderRadius: windowHeight(6),
    paddingLeft: windowWidth(10),
    marginVertical: windowHeight(7),
    width: windowWidth(360),

    borderColor: appColors.detailSearch,
  },
  textInput: {
    fontFamily: appFonts.MontserratRegular,
    color: appColors.subTitle,
    fontSize: fontSizes.FONT19,
    left: windowWidth(8),
    flex: 1,
  },
  filterView: {
    height: windowHeight(40),
    width: windowWidth(55),
    backgroundColor: appColors.nftBg,
    marginVertical: windowHeight(11),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(5),
    left: windowWidth(14),
  },
});
