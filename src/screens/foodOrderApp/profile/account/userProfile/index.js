import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {profile} from '@utils/images/images';
import {t} from 'i18next';
import {useValues} from '@App';

export default function UserProfile() {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View style={styles.mainView}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Image source={profile} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, {textAlign: textRTLStyle,color:isDark ? appColors.white : appColors.foodSecondary}]}>
            {t('foodProfile.user')}
          </Text>
          <Text style={styles.email}>{t('foodProfile.email')}</Text>
          <Text style={[styles.edit, {textAlign: textRTLStyle}]}>
            {t('foodProfile.edit')}
          </Text>
        </View>
      </View>
    </View>
  );
}
