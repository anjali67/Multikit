import React from 'react';
import {View} from 'react-native';
import TextRow from './textRow';
import {t} from 'i18next';
import styles from '../styles';
import {useValues} from '@App';

export default function textDivision() {
  const {isDark, viewRTLStyle} = useValues();
  return (
    <View style={[styles.textDivision, {flexDirection: viewRTLStyle}]}>
      <TextRow showVertical totalCount={'25'} title={t('blog.followers')} />
      <TextRow showVertical totalCount={'10'} title={t('blog.posts')} />
      <TextRow totalCount={'50'} title={t('blog.following')} />
    </View>
  );
}
