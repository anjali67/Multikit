import React from 'react';
import {View} from 'react-native';
import styles from '../styles';
import HomeHeader from '@commonComponents/homeHeader';
import {blogUser} from '@utils/images/images';
import {blogLogo} from '@utils/images/images';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import {Search} from '@assets/images/chat_theme/svg/search';
import appColors from '@theme/appColors';
import CategoryRow from '../categories/categoryRow';
import {blogsData} from '@utils/json/blog';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import {blogdarkLogo} from '@utils/images/images';

export default function blogListing({navigation}) {
  const {isDark, isRTL} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HomeHeader
        logoIcon={blogLogo}
        userIcon={blogUser}
        navigation={navigation}
        user={blogUser}
        darkLogo={blogdarkLogo}
      />
      <SearchTextInput
        textInput={[
          styles.textInput,
          {color: isDark ? appColors.white : appColors.blackColor},
        ]}
        placeholderTextColor={appColors.subTitle}
        searchIcon={
          <Search
            color={appColors.subTitle}
            strokeWidth={'1.9'}
            textInput={styles.textInput}
            height={'32'}
            width={'22'}
          />
        }
        inputContainer={[
          styles.inputContainer,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.grayLight},
        ]}
      />
      <View style={{marginHorizontal: 20}}>
        <CategoryRow
          titleStyle={styles.titleStyle}
          articalContent
          navigation={navigation}
          data={blogsData}
          contentStyle={styles.contentStyle}
          contentContainerStyle={{paddingBottom: windowHeight(200)}}
          iconWidth={'13'}
          iconHeight={'21'}
          totalResultFound
        />
      </View>
    </View>
  );
}
