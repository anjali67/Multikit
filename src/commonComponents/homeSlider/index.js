import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import Swiper from 'react-native-swiper';
import {useValues} from '@App';

export default function HomeSlider({swiperData, gotoScreen}) {
  const {isRTL} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={gotoScreen}
      style={styles.container}>
      <Swiper
        autoplay={true}
        autoplayDirection={isRTL ? false : true}
        showsPagination={false}
        key={swiperData.length}
        removeClippedSubviews={true}>
        {swiperData.map(item => (
          <View style={[styles.sliderView]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.contentView}>
              <Text style={[styles.title]}>{t(item.title)}</Text>
              <Text style={[styles.subTitle]}>
                {t('homeBanner.Get instant delivery')}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.shopNowView]}>
                <Text style={[styles.shopNow]}>{t('common.ShopNow')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Swiper>
    </TouchableOpacity>
  );
}
