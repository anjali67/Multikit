import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {iconsArr} from '../../utils/json/mainTheme';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {useValues} from '@App';

export default function gridList(props) {
  const {isDark} = useValues();
  return (
    <FlatList
      contentContainerStyle={{paddingBottom: 900}}
      numColumns={props.numColumns ? props.numColumns : 3}
      showsVerticalScrollIndicator={false}
      data={props.data ? props.data : iconsArr}
      renderItem={({item, index}) => (
        <View
          style={[
            styles.mainContainer,
            props.mainStyle,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}>
          {isDark ? item.darkIcon : item.icon}
          {item.image && (
            <>
              <Image source={item.image} style={styles.imageStyle} />
              <Text style={styles.nameStyle}>{t(item.name)}</Text>
            </>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(10),
    marginTop: windowHeight(15),
  },
  mainContainer: {
    height: windowHeight(85),
    width: windowWidth(130),
    backgroundColor: appColors.white,
    marginHorizontal: 10,
    borderRadius: windowHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: windowHeight(4),
    elevation: 2,
  },
  imageStyle: {
    height: windowHeight(40),
    width: windowWidth(90),
    resizeMode: 'contain',
  },
  nameStyle: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT17,
    marginTop: windowHeight(10),
  },
});
