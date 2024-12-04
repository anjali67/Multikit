import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import fitnessStyle from '../style';
import HomeHeader from '@commonComponents/homeHeader';
import {blogUser} from '@utils/images/images';
import {fitnessLogo} from '@utils/images/images';
import CalenderView from '@otherComponent/fitness/home/calenderView';
import {t} from 'i18next';
import ChartView from '@otherComponent/fitness/home/chartView';
import BottomSection from '@otherComponent/fitness/reports/bottomSection';
import styles from './styles';
import {useValues} from '@App';
import {fitnessDarkLogo} from '@utils/images/images';
import appColors from '@theme/appColors';

export default function reports({navigation}) {
  const {isDark, viewRTLStyle} = useValues();
  return (
    <View
      style={[
        fitnessStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HomeHeader
        notShowingDrawer
        logoIcon={fitnessLogo}
        userIcon={blogUser}
        navigation={navigation}
        user={blogUser}
        darkLogo={fitnessDarkLogo}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: 120}}
        showsVerticalScrollIndicator={false}>
        <ChartView />
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}>
            {t('fitness.history')}
          </Text>
          <Text style={styles.content}>{t('fitness.more')}</Text>
        </View>
        <CalenderView calenderView={styles.calenderView} />
        <View
          style={[
            styles.divider,
            {
              borderBottomColor: isDark
                ? appColors.darkTheme
                : appColors.bgColor,
            },
          ]}></View>
        <BottomSection />
      </ScrollView>
    </View>
  );
}
