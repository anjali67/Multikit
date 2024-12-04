import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {exercisesData} from '@utils/json/fitness';
import {t} from 'i18next';
import HomeHeader from '@commonComponents/homeHeader';
import fitnessStyle from '../style';
import {fitnessLogo} from '@utils/images/images';
import {blogUser} from '@utils/images/images';
import styles from './styles';
import {useValues} from '@App';
import {fitnessDarkLogo} from '@utils/images/images';

export default function exercise({navigation}) {
  const {isDark, textRTLStyle, viewRTLStyle} = useValues();
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={exercisesData}
        renderItem={({item, index}) => (
          <View style={styles.margin}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textView}>
              <Text style={[styles.title, {textAlign: textRTLStyle}]}>
                {t(item.title)}
              </Text>
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <Text style={styles.text}>
                  {item.workouts} {t('fitness.workouts')} | {item.time}{' '}
                  {t('fitness.mins')}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
