import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {profileData} from '@utils/json/food';
import {t} from 'i18next';
import {SideArrow} from '@assets/images/common/svg/sideArrow';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {BackArrow} from '@assets/images/common/svg/backArrow';

export default function AccountSettings(props) {
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View>
      <FlatList
        data={profileData}
        renderItem={({item}) => {
          return (
            <View>
              <Text
                style={[
                  styles.titleStyle,
                  {
                    textAlign: textRTLStyle,
                    right: isRTL ? windowWidth(10) : 0,
                    color: isDark ? appColors.white : appColors.foodSecondary,
                  },
                ]}>
                {t(item.title)}
              </Text>
              <View
                style={[
                  styles.mainView,
                  {
                    backgroundColor: isDark
                      ? appColors.blackColor
                      : appColors.white,
                  },
                ]}>
                {item.innerPages.map((item, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => {
                        item.gotoScreen &&
                          props.navigation.navigate(item.gotoScreen);
                      }}
                      style={[
                        styles.row,
                        index === 0 ? null : styles.padding,
                        item.seperator === true && styles.border,
                        {flexDirection: viewRTLStyle},
                      ]}>
                      <View
                        style={[
                          styles.rowContainer,
                          {flexDirection: viewRTLStyle},
                        ]}>
                        <Image source={item.icon} style={styles.image} />
                        <Text
                          style={[
                            styles.title,
                            {
                              color: isDark
                                ? appColors.white
                                : appColors.foodSecondary,
                            },
                          ]}>
                          {t(item.title)}
                        </Text>
                      </View>
                      {isRTL ? (
                        <BackArrow
                          color={isDark ? appColors.white : '#1B1B3E'}
                        />
                      ) : (
                        <SideArrow
                          height={windowHeight(26)}
                          width={windowWidth(30)}
                          color={
                            isDark ? appColors.white : appColors.foodSecondary
                          }
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
