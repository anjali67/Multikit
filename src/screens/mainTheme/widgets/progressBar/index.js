import React from 'react';
import {View, Text} from 'react-native';
import mainStyle from '../../style';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import RowContainer from './rowContainer';
import {t} from 'i18next';
import ProgressBar from '@commonComponents/ProgressBar';
import appColors from '@theme/appColors';
import styles from './styles';
import {useValues} from '@App';

export default function progressBar({navigation}) {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        mainStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.grayLight},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.progressBar')}
        subContent={t('mainTheme.pogressBarcontent')}
        content={
          <View style={mainStyle.margin}>
            <View style={styles.marginBottom}>
              <RowContainer title={'mainTheme.progressBar'} />
              <ProgressBar
                containerStyle={styles.containerStyle}
                progress={'60%'}
                progressStyle={{backgroundColor: appColors.green}}
              />
              <View style={{flexDirection: viewRTLStyle}}>
                <Text style={styles.textStyle}>
                  55% {t('learning.complete')}
                </Text>
              </View>
            </View>
            <View style={styles.marginBottom}>
              <RowContainer title={'mainTheme.withlabel'} />
              <ProgressBar
                containerStyle={styles.progressStyle}
                progress={'60%'}
                innerProgressStyle={styles.innerProgressStyle}
                showProgress={'55%'}
              />
            </View>
            <View style={styles.marginBottom}>
              <RowContainer title={'mainTheme.withStriped'} />
              <ProgressBar
                containerStyle={[styles.progressStyle, {height: 10}]}
                progress={'60%'}
                innerProgressStyle={[styles.innerProgressStyle, {height: 10}]}
                showprogressImg
              />
            </View>
          </View>
        }
      />
    </View>
  );
}
