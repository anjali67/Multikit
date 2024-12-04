import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {categoriesData} from '@utils/json/fitness';
import {t} from 'i18next';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';

export default function categorySection(props) {
  const {isDark, isRTL} = useValues();
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        inverted={isRTL ? true : false}
        horizontal
        data={categoriesData}
        renderItem={({item}) => (
          <>
            <View>
              <View
                style={[
                  styles.containerView,
                  {
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : appColors.lightBorder,
                  },
                ]}>
                {item.icon}
              </View>
              <Text
                style={[
                  styles.name,
                  {color: isDark ? appColors.white : appColors.fontColor},
                ]}>
                {t(item.name)}
              </Text>
            </View>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(11),
  },
  containerView: {
    height: windowWidth(85),
    width: windowWidth(90),
    backgroundColor: appColors.lightBorder,
    alignItems: 'center',
    justifyContent: 'center',
    margin: windowWidth(10),
    borderRadius: windowHeight(6),
  },
  name: {
    textAlign: 'center',
    fontFamily: appFonts.NunitoSansSemiBold,
    color: appColors.fontColor,
    fontSize: fontSizes.FONT19HALF,
    width:windowWidth(120)
  },
});
