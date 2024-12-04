import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {profileItems} from '@utils/json/blog';
import styles from '../styles';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';
import {useNavigation} from '@react-navigation/native';

export default function profileData(props) {
  const {isDark} = useValues();
  const navigation = useNavigation();
  return (
    <View style={styles.profileContainer}>
      <FlatList
        data={profileItems}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.mainContainer,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.chooseTopic,
                },
              ]}>
              {isDark ? item.darkIcon : item.icon}
              <Text
                style={[
                  styles.name,
                  {
                    color: isDark ? appColors.white : appColors.fontColor,
                  },
                ]}>
                {t(item.name)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.center}>
        <Button
          text={t('common.Logout')}
          style={[
            styles.btnView,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}
          btnTextStyle={[
            styles.btnStyle,
            {color: isDark ? appColors.white : appColors.fontColor},
          ]}
          onPress={() => {
            navigation.navigate('BlogSignIn');
          }}
        />
      </View>
    </View>
  );
}
