import React, {useState} from 'react';
import {View, FlatList, RefreshControl, Text, Image} from 'react-native';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import mainStyle from '../../style';
import {t} from 'i18next';
import {userData} from '@utils/json/mainTheme';
import styles from './styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function pullToRefresh({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const {viewRTLStyle, isDark} = useValues();

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderItem = ({item}) => (
    <View style={[styles.item, {flexDirection: viewRTLStyle}]}>
      <Image source={item.image} style={styles.image} />
      <Text
        style={[
          styles.name,
          {color: isDark ? appColors.white : appColors.fontColor},
        ]}>
        {t(item.name)}
      </Text>
    </View>
  );

  return (
    <View
      style={[
        mainStyle.container,
         {backgroundColor: isDark ? appColors.blackColor : appColors.grayLight},
      ]}>
      <WidgetsBg
        imageStyle={{
          height: windowHeight(1220),
          width: windowWidth(200),
          resizeMode: 'contain',
        }}
        onRefresh={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        navigation={navigation}
        title={t('mainTheme.pullToRefresh')}
        subContent={t('mainTheme.pullToRefreshContent')}
        content={
          <View>
            <View style={styles.container}>
              <FlatList data={userData} renderItem={renderItem} ItemSeparatorComponent={() => <View style={styles.seperator}></View>} />
            </View>
          </View>
        }
      />
    </View>
  );
}
