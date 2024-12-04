import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {topInstructors} from '@utils/json/learning';
import styles from '../styles';
import {t} from 'i18next';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';

export default function instructors(props) {
  const {isDark} = useValues();
  return (
    <View style={[styles.mainView, styles.center]}>
      <FlatList
        contentContainerStyle={[
          styles.contentContainerStyle,
          props.contentContainerStyle,
        ]}
        horizontal
        data={topInstructors}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              props.navigation.navigate('InstructorDetail');
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={item.image} style={styles.userImg} />
            <View style={{marginHorizontal: 6}}>
              <Text
                style={[
                  styles.name,
                  {
                    marginHorizontal: 0,
                    fontSize: fontSizes.FONT18,
                    color: isDark ? appColors.white : appColors.learningBtn,
                  },
                ]}>
                {t(item.name)}
              </Text>
              <Text
                style={[
                  styles.content,
                  {
                    color: appColors.learningPlaceholder,
                    marginTop: 4,
                    fontSize: fontSizes.FONT16,
                    fontFamily: appFonts.InterMedium,
                  },
                ]}>
                {item.totalStudents} {t('learning.students')}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
