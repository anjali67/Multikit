import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import HomeHeader from '@commonComponents/homeHeader';
import {blogUser} from '@utils/images/images';
import {blogLogo} from '@utils/images/images';
import BlogBanner from './banner';
import Article from './article';
import Categories from './categories';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {blogdarkLogo} from '@utils/images/images';


export default function blogHome({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HomeHeader
        darkLogo={blogdarkLogo}
        logoIcon={blogLogo}
        userIcon={blogUser}
        navigation={navigation}
        user={blogUser}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.mainView}>
        <BlogBanner />
        <Article navigation={navigation} />
        <Categories navigation={navigation} />
      </ScrollView>
      {/* <BlogTab /> */}
    </View>
  );
}
