import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {boostEnergyData} from '@utils/json/fitness';
import {t} from 'i18next';
import styles from '../styles/styles';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import {FlashLight} from '@assets/images/fitness_theme/svg/flashlight';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';

export default function boostEnergy(props) {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View style={{marginHorizontal: 4, marginTop: 18}}>
      <FlatList
        data={boostEnergyData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => props.navigation.navigate('ExerciseVideo')}
            style={[
              styles.row,
              styles.rowContainer,
              {
                backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                flexDirection: viewRTLStyle,
                marginHorizontal:10
              },
            ]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textView}>
              <Text
                style={[
                  styles.name,
                  {
                    fontFamily: appFonts.NunitoSansSemiBold,
                    marginBottom: 6,
                    color: isDark ? appColors.white : appColors.fontColor,
                  },
                ]}>
                {t(item.name)}
              </Text>
              <View
                style={[
                  styles.row,
                  styles.rowStyle,
                  {flexDirection: viewRTLStyle},
                ]}>
                <ClockOutline
                  height={'21'}
                  width={'14'}
                  color={isDark ? appColors.white : appColors.cabContent}
                />
                <View style={{marginHorizontal: 2}}></View>
                <Text
                  style={[
                    styles.time,
                    {color: isDark ? appColors.white : appColors.cabContent},
                  ]}>
                  {item.time}
                </Text>
                <Text
                  style={[
                    styles.time,
                    {color: isDark ? appColors.white : appColors.cabContent},
                  ]}>
                  {t('nft.mins')}
                </Text>
              </View>
              <View
                style={[
                  styles.row,
                  {marginTop: 5, flexDirection: viewRTLStyle},
                ]}>
                <View style={{marginHorizontal: 2}}>
                  <FlashLight />
                </View>
                <Text
                  style={[
                    styles.calories,
                    {color: isDark ? appColors.white : appColors.cabContent},
                  ]}>
                  {item.calories}
                </Text>
                <Text
                  style={[
                    styles.calories,
                    {color: isDark ? appColors.white : appColors.cabContent},
                  ]}>
                  {t('fitness.kcal')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
