import {View} from 'react-native';
import React from 'react';
import styles from '../style/externalStyles';
import BoxContainer from '@otherComponent/mainTheme/boxContainer/BoxContainer';
import {financialAppList} from '@utils/json/mainTheme';
import {t} from 'i18next';
import {useValues} from '@App';
import MainView from '@otherComponent/mainTheme/mainView';
import appColors from '@theme/appColors';

export default function FinancialAppList({navigation}) {
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
        title={t('mainTheme.financialScreensList')}
        height={'17%'}
        backIcon
        navigation={navigation}
        content={
          <View>
            {financialAppList.map((item, index) => {
              return <MainView item={item} index={index} />;
            })}
          </View>
        }
      />
    </View>
  );
}
