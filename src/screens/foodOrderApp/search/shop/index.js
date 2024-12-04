import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import HeaderBar from '@otherComponent/food/headerBar';
import {t} from 'i18next';
import {shopOrderData} from '@utils/json/food';
import FeaturedRenderItem from '@otherComponent/food/featuredResturants/renderItem';
import styles from '../../profile/favouriteOrders/styles';
import foodOrderStyle from '../../style/styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function FoodShop({route}) {
  const [title, setTitle] = useState(route.params?.item);
  const {isRTL,isDark} = useValues();
  return (
    <View style={[foodOrderStyle.mainContainer,{backgroundColor:isDark ? appColors.darkTheme : appColors.foodPrimary}]}>
      <HeaderBar color={appColors.white} title={t(title)} Menuicon />
      <FlatList
       showsVerticalScrollIndicator={false}
        data={shopOrderData}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
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
              timeStyle={[styles.time, {left: isRTL ? 3 : 0}]}
              offerImg={styles.offerImg}
              offer={styles.offer}
              discountSection
              clockWidth={'13'}
              clockHeight={'20'}
            />
          </View>
        )}
      />
    </View>
  );
}
