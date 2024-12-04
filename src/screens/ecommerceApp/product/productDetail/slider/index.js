import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {productSection} from '@utils/json/ecommerce';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default slider = props => {
  const [products, setProducts] = useState([]);
  const {isRTL, isDark} = useValues();
  const {selectedColor} = props;
  useEffect(() => {
    var product = productSection;
    var arr = [];
    product.map(item => {
      if (item.id == selectedColor) {
        arr.push(item);
      }
    });
    setProducts(arr);
  }, [selectedColor]);
  return (
    <View style={styles.mainView}>
      <Swiper
        autoplayDirection={isRTL ? false : true}
        paginationStyle={[
          styles.pagination,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}
        dot={
          <View
            style={[
              styles.dot,
              {borderColor: isDark ? appColors.white : appColors.black},
            ]}
          />
        }
        activeDot={<View style={styles.activeDot} />}
        dotColor={'black'}
        activeDotColor={'gray'}
        key={products.length}
        loop={true}
        autoplay={true}
        autoplayTimeout={5}
        scrollViewStyle={styles.scrollView}
        showsPagination
        removeClippedSubviews={false}
        containerStyle={styles.container}>
        {products.map((item, key) => (
          <View key={key}>
            <Image source={item.image} style={[styles.img]} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};
