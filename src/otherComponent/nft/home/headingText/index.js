import React from 'react';
import {View} from 'react-native';
import HeadingText from '@commonComponents/headingText';
import {useValues} from '@App';
import {t} from 'i18next';
import styles from '../styles';
import appColors from '@theme/appColors';

export default function textView(props) {
  const {isDark, textRTLStyle} = useValues();
  return (
    <View>
      <HeadingText
        textStyle={[
          styles.headingText,
          {color: isDark ? appColors.white : appColors.nftTitle},
        ]}
        seeAllStyle={[
          styles.seeAllStyle,
          {color: isDark ? appColors.white : appColors.cabContent},
        ]}
        title={t(props.title)}
        rowStyle={styles.rowStyle}
        seeAll={t('ecommerce.seeAll')}
        seeAllBtn={props.onBtnPress}
      />
    </View>
  );
}
