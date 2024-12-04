import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import { progressData } from '@utils/json/ecommerce';

export default function ReviewSection() {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <View style={{width: '40%', right: isRTL ? 18 : null}}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.5</Text>
        </View>
        <Text
          style={[
            styles.content,
            {color: isDark ? appColors.white : '#4A4A4A'},
          ]}>
          {t('ecommerce.ratingContant')}
        </Text>
      </View>
      <View style={styles.verticaLine}></View>
      <View>
        <FlatList
          data={progressData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.rowContainer}>
               <Text style={styles.rate}>{item.rate}</Text>
                <View style={styles.progressContainer}>
                  <View style={[styles.progressBar, {width: item.progress}]} />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
