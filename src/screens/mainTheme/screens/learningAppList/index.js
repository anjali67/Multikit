import {View} from 'react-native';
import React from 'react';
import styles from '../style/externalStyles';
import BoxContainer from '@otherComponent/mainTheme/boxContainer/BoxContainer';
import {learningAppList} from '@utils/json/mainTheme';
import {t} from 'i18next';
import {useValues} from '@App';
import MainView from '@otherComponent/mainTheme/mainView';
import appColors from '@theme/appColors';

export default function LearningAppList({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? appColors.blackColor : appColors.white,
      }}>
      <View style={styles.header}></View>
      <BoxContainer
        contentContainerStyle={styles.contentContainerStyle}
        title={t('mainTheme.learningScreensList')}
        height={'13.4%'}
        backIcon
        navigation={navigation}
        content={
          <View>
            {learningAppList.map((item, index) => {
              return <MainView item={item} index={index} />;
            })}
          </View>
        }
      />
    </View>
  );
}
