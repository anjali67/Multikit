import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import BoxContainer from '@otherComponent/mainTheme/boxContainer/BoxContainer';
import {accountScreens} from '@utils/json/mainTheme';
import {t} from 'i18next';
import MainView from '@otherComponent/mainTheme/mainView';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function AccountSetting({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? appColors.blackColor : appColors.white,
      }}>
      <View style={styles.header}></View>
      <BoxContainer
        title={t('mainTheme.accountScreens')}
        height={'21.2%'}
        backIcon
        navigation={navigation}
        content={
          <View>
            {accountScreens.map((item, index) => {
              return <MainView item={item} index={index} />;
            })}
          </View>
        }
      />
    </View>
  );
}
