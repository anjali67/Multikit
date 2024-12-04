import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {useValues} from '@App';
import HeadingText from '@commonComponents/headingText';
import styles from './styles';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {Offers} from '@utils/json/food';
import {discount} from '@utils/images/images';
import {darkDiscount} from '@utils/images/images';

export default function OfferView() {
  const {isDark, isRTL, viewRTLStyle} = useValues();
  return (
    <View style={styles.mainView}>
      <HeadingText
        textStyle={[
          styles.textStyle,
          {color: isDark ? appColors.white : appColors.black},
        ]}
        seeAllStyle={styles.seeAllStyle}
        title={t('bottomTab.Offers')}
        rowStyle={styles.rowStyle}
      />
      <FlatList
        contentContainerStyle={styles.scrollView}
        inverted={isRTL ? true : false}
        showsHorizontalScrollIndicator={false}
        data={Offers}
        horizontal
        renderItem={({index, item}) => {
          return (
            <View
              style={[
                styles.row,
                {
                  flexDirection: viewRTLStyle,
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.white,
                },
              ]}>
              <View>
                {isDark ? (
                  <Image source={darkDiscount} style={styles.offerImg} />
                ) : (
                  <Image source={discount} style={styles.offerImg} />
                )}
              </View>
              <View>
                <Text
                  style={[
                    styles.title,
                    {color: isDark ? appColors.white : appColors.foodSecondary},
                  ]}>
                  {t(item.title)}
                </Text>
                <Text style={styles.content}>{t(item.content)}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
