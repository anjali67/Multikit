import React from 'react';
import {View} from 'react-native';
import learningsStyle from '../style';
import Background from '@otherComponent/learning/home/background';
import {windowHeight} from '@theme/appConstant';
import Header from '../../../otherComponent/learning/home/header';
import SearchBar from '@otherComponent/learning/searchBar';
import Courses from '@otherComponent/learning/home/courses';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function myCourses() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        learningsStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <View>
        <Background
          image={{height: windowHeight(104)}}
          content={<Header headerTitle={'learning.myCourses'} />}
        />
        <SearchBar />
        <View style={learningsStyle.margin}>
          <Courses
            outerContainerStyle={{width: '98%'}}
            categoryContainer={{width: '97%', left: 10}}
          />
        </View>
      </View>
    </View>
  );
}
