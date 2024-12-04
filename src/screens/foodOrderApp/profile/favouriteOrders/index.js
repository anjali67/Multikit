import {View, FlatList} from 'react-native';
import React from 'react';
import HeaderBar from '@otherComponent/food/headerBar';
import {t} from 'i18next';
import {faviourateOrderData} from '@utils/json/food';
import FeaturedRenderItem from '@otherComponent/food/featuredResturants/renderItem';
import styles from './styles';
import foodOrderStyle from '../../style/styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function FavouriteOrders() {
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View style={[foodOrderStyle.mainContainer,{backgroundColor:isDark ? appColors.darkTheme : appColors.foodPrimary}]}>
      <HeaderBar
        color={appColors.white}
        title={t('foodProfile.favouriteOrders')}
      />
      <View style={styles.blankView}></View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={faviourateOrderData}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.container}>
            <FeaturedRenderItem
              item={item}
              mainView={styles.mainView}
              image={styles.image}
              boxContainer={styles.boxContainer}
              rating={styles.rating}
              titleStyle={styles.title}
              contentStyle={styles.content}
              timeStyle={[
                styles.time,
                {
                  left: isRTL ? 5 : 0,
                  marginHorizontal: isRTL ? windowWidth(7) : windowWidth(4),
                },
              ]}
              offerImg={styles.offerImg}
              offer={styles.offer}
              clockWidth={'12'}
              clockHeight={'19'}
              strokeWidth={'2'}
            />
          </View>
        )}
      />
    </View>
  );
}
