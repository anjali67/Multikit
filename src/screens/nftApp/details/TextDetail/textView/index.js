import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles';
import {t} from 'i18next';
import {verifyImg} from '@utils/images/images';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function textView(props) {
  const {isDark} = useValues();
  return (
    <View>
      <View
        style={[
          styles.row,
          {
            justifyContent:
              props.selectCategory === 0 ? 'center' : 'flex-start',
          },
        ]}>
        <Text
          style={[
            styles.title,
            {
              color: isDark
                ? appColors.white
                : isDark
                ? appColors.white
                : appColors.nftTitle,
              marginHorizontal: 10,
            },
          ]}>
          {t(props.title)}
        </Text>
        <Image source={verifyImg} style={styles.verifyImg} />
      </View>
      <Text
        style={[
          styles.content,
          {textAlign: props.selectCategory === 0 ? 'center' : null},
        ]}>
        {t(props.content)}
      </Text>
    </View>
  );
}
