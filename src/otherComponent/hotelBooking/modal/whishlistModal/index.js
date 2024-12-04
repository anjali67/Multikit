import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function WishlistModal(props) {
  const {isDark} = useValues();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
        ]}>
        <View>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.reviewText},
            ]}>
            {t('hotelBooking.modalTitle')}
          </Text>
          <Text style={styles.content}>{t('hotelBooking.modalContent')}</Text>
          <Text style={styles.horizontalLine}></Text>
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => props.setModalVisible(false)}>
              <Text
                style={[
                  styles.title,
                  styles.cancel,
                  {color: isDark ? appColors.white : appColors.reviewText},
                ]}>
                {t('common.Cancel')}
              </Text>
            </TouchableOpacity>
            <View style={styles.vertical}></View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => props.setModalVisible(false)}>
              <Text style={[styles.title, styles.remove]}>
                {t('hotelBooking.remove')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
