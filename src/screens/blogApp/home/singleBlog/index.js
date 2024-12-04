import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Header from './header';
import TextContainer from '../banner/textContainer';
import {windowHeight} from '@theme/appConstant';
import QuoteContent from './quoteContent';
import Comment from './comment';
import appColors from '@theme/appColors';
import CategoryRow from '../categories/categoryRow';
import {articles} from '@utils/json/blog';
import style from '../../style';
import {t} from 'i18next';
import {useValues} from '@App';

export default function singleBlog({navigation}) {
  const {isDark, textRTLStyle, isRTL} = useValues();
  return (
    <View>
      <ScrollView
        style={{
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
        }}
        showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} />
        <View style={{marginHorizontal: 12}}>
          <View style={{marginTop: windowHeight(20)}}>
            <TextContainer />
            <QuoteContent />
            <Comment />
            <View style={style.blankView}></View>
            <Text
              style={[
                style.title,
                {
                  textAlign: textRTLStyle,
                  color: isDark ? appColors.white : appColors.fontColor,
                },
              ]}>
              {t('blog.relatedArticles')}
            </Text>
            <CategoryRow
              navigation={navigation}
              data={articles}
              articalContent
              leftStyle={{left: isRTL ? null : -15}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
