import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {useValues} from '@App';
import {homeBanner} from '@utils/json/food';
import styles from './styles';
import {t} from 'i18next';
import {bannerOfferShape} from '@utils/images/images';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default function HomeSlider() {
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <Swiper
      style={styles.swiper}
      autoplay={true}
      height={windowHeight(120)}
      width={windowWidth(485)}
      removeClippedSubviews={false}
      hardwareAccelerated={true}
      autoplayDirection={isRTL ? false : true}
      showsPagination={true}
      key={homeBanner.length}
      dotStyle={styles.inActiveDot}
      scale={0.95}
      activeDot={<View style={styles.activeDot} />}>
      {homeBanner.map((item, index) => (
        <ImageBackground
          resizeMode="cover"
          borderRadius={8}
          source={item.image}
          style={styles.image}>
          <View style={styles.contentView}>
            {index === 1 ? (
              <View>
                <View style={{flexDirection: viewRTLStyle}}>
                  <Text style={[styles.title, {textAlign: textRTLStyle}]}>
                    {t(item.title)}
                  </Text>
                  <ImageBackground
                    resizeMode="contain"
                    source={bannerOfferShape}
                    style={styles.offer}>
                    <Text style={styles.offerText}>
                      {t(item.offerDiscount)}
                    </Text>
                  </ImageBackground>
                </View>
                <Text style={[styles.text, {textAlign: textRTLStyle}]}>
                  {t(item.termsCondition)}
                </Text>
              </View>
            ) : (
              <View>
                <Text
                  style={[
                    styles.title,
                    {
                      textAlign: textRTLStyle,
                      right: isRTL ? windowWidth(20) : 0,
                    },
                  ]}>
                  {t(item.title)}
                </Text>
                <ImageBackground
                  resizeMode="contain"
                  source={bannerOfferShape}
                  style={styles.offer}>
                  <Text style={styles.offerText}>{t(item.offerDiscount)}</Text>
                </ImageBackground>
                <Text style={styles.text}>{t(item.termsCondition)}</Text>
              </View>
            )}
          </View>
        </ImageBackground>
      ))}
    </Swiper>
  );
}
