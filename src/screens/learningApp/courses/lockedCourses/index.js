import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HeaderView from '@otherComponent/learning/courses/headerView';
import learningStyle from '../../style';
import {t} from 'i18next';
import CourseListItem from '@otherComponent/learning/courses/courseList';
import GradiantBtn from '@otherComponent/learning/courses/gradiantBtn';
import {BookMark} from '@assets/images/hotel_theme/svg/bookmark';
import style from '../style';
import {CartIcon} from '@assets/images/learning_theme/svg/cart';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function lockedCourses({navigation}) {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();

  return (
    <ScrollView
      contentContainerStyle={learningStyle.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <HeaderView showcoursePrice={true} />
      <Text
        style={[
          learningStyle.titleStyle,
          {
            textAlign: textRTLStyle,
            marginHorizontal: 20,
            color: isDark ? appColors.white : appColors.learningBtn,
          },
        ]}>
        {t('learning.Courses')}
      </Text>
      <CourseListItem />
      <View style={learningStyle.blankView}></View>
      <GradiantBtn
        onBtnPress={() => {
          navigation.navigate('Cart');
        }}
        navigation={navigation}
        content={
         <View style={{flexDirection:viewRTLStyle,width:'100%'}}>
          <View style={{marginHorizontal:20}}>
       <View style={style.marginTop}>
       <BookMark width={'23'} height={'23'} color={'white'} />     
      </View>
          </View>
         <View style={style.verticalLine}></View>
         <View style={[{marginHorizontal: 20},style.marginTop]}>
               <CartIcon />
             </View>
             <Text style={[style.title, {marginHorizontal: 0},style.marginTop]}>
              {t('learning.getCourse')}
             </Text>
         </View>
        }
      />
    </ScrollView>
  );
}
