import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {useNavigation} from '@react-navigation/native';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {BackArrow} from '@assets/images/common/svg/backArrow';

export default function Profile(props) {
  const {viewRTLStyle, isDark, isRTL} = useValues();
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={props.profileData}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                item.route && navigation.navigate(item.route);
              }}
              style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              {isDark ? item.darkIcon : item.icon}
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <Text
                  style={[
                    styles.title,
                    {
                      color: item.textColor
                        ? item.textColor
                        : isDark
                        ? appColors.white
                        : appColors.black,
                    },
                  ]}>
                  {t(item.title)}
                </Text>

                {item.showArrow &&
                  (isRTL ? (
                    <BackArrow
                      color={isDark ? appColors.white : appColors.black}
                    />
                  ) : (
                    <RightArrow
                      strokeWidth={'1'}
                      height={'20'}
                      width={'22'}
                      color={isDark ? appColors.white : appColors.black}
                    />
                  ))}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
