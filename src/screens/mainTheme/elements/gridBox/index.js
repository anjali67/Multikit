import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import BoxContainer from '@otherComponent/mainTheme/boxContainer/BoxContainer';
import {gridBoxScreens} from '@utils/json/mainTheme';
import {t} from 'i18next';
import MainView from '@otherComponent/mainTheme/mainView';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function GridBox({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? appColors.blackColor : appColors.white,
      }}>
      <View style={styles.header}></View>
      <BoxContainer
        title={t('mainTheme.gridBoxScreen')}
        height={'26%'}
        backIcon
        navigation={navigation}
        content={
          <View>
            {gridBoxScreens.map((item, index) => {
              return <MainView item={item} index={index} />;
            })}
          </View>
        }
      />
    </View>
  );
}
