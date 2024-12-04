import React from 'react';
import {View, ScrollView} from 'react-native';
import HomeHeader from '@commonComponents/homeHeader';
import {nftLogo, nftDarkLogo, blogUser} from '@utils/images/images';
import nftStyle from '../style';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import styles from './styles';
import {Search} from '@assets/images/chat_theme/svg/search';
import Banner from '@otherComponent/nft/home/banner';
import Categories from '@otherComponent/nft/home/categories';
import {topCategories} from '@utils/json/nft';
import TextView from '@otherComponent/nft/home/headingText';
import TopCollection from '@otherComponent/nft/home/topCollections';
import NotableCollection from '@otherComponent/nft/home/notableCollection';

export default function home({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HomeHeader
        logoIcon={nftLogo}
        userIcon={blogUser}
        navigation={navigation}
        user={blogUser}
        mainContainer={{marginTop: 8}}
        darkLogo={nftDarkLogo}
      />
      <SearchTextInput
        textInput={[
          styles.textInput,
          {color: isDark ? appColors.white : appColors.blackColor},
        ]}
        placeholderTextColor={appColors.cabContent}
        searchIcon={
          <Search
            color={appColors.cabContent}
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
        micIconColor={appColors.cabContent}
        container={styles.container}
      />
      <View style={styles.margin}>
        <Banner />
        <TextView title={'nft.topCategories'} />
        <Categories navigation={navigation} data={topCategories} />
        <TextView
          title={'nft.topCollection'}
          onBtnPress={() => {
            navigation.navigate('NftDetails');
          }}
        />
        <TopCollection navigation={navigation} />
        <TextView title={'nft.notableCollections'} />
        <NotableCollection />
      </View>
    </ScrollView>
  );
}
