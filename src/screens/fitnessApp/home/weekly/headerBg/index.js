import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles';
import appColors from '@theme/appColors';
import {exercise5} from '@utils/images/images';
import {Back} from '@assets/images/chat_theme/svg/Back';
import {t} from 'i18next';
import WeekComponent from '../weekComponent';
import {useValues} from '@App';
import {RightArrow} from '@assets/images/common/svg/rightArrow';

export default function headerBg(props) {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View>
      <Image source={exercise5} style={styles.image} />
      <View style={styles.overlay}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => props.navigation.goBack()}>
            {isRTL ? (
              <RightArrow
                height={'28'}
                width={'30'}
                strokeWidth={'1'}
                color={appColors.white}
              />
            ) : (
              <Back
                strokeWidth={'1.7'}
                height={'30'}
                width={'30'}
                color={appColors.white}
              />
            )}
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.title}>{t(props.title)}</Text>
            <Text style={styles.text}>
              {props.content ? props.content : 10 + ' ' + t('fitness.workouts')}{' '}
              | 15 {t('fitness.mins')}
            </Text>
          </View>
        </View>
      </View>
      <WeekComponent />
    </View>
  );
}
