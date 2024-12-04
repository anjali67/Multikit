import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import {
  detailImg,
  detailImg1,
  detailImg2,
  detailImg3,
  detailImg4,
} from '@utils/images/images';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

export default function mediaView() {
  const {textRTLStyle, isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.mediaView}>
      <Text
        style={[
          styles.title,
          styles.titleStyle,
          {textAlign: textRTLStyle, marginHorizontal: isRTL ? 20 : null},
        ]}>
        {t('chatting.media')}
      </Text>
      <View
        style={[
          styles.row,
          {justifyContent: 'space-between', flexDirection: viewRTLStyle},
        ]}>
        <View>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <Image
              source={detailImg}
              style={[
                styles.imageStyle,
                {width: windowWidth(130), height: windowHeight(70)},
              ]}
            />
            <Image
              source={detailImg1}
              style={[styles.imageStyle, {width: windowWidth(140)}]}
            />
          </View>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <Image source={detailImg2} style={styles.imageStyle} />
            <Image
              source={detailImg3}
              style={[styles.imageStyle, {width: windowWidth(115)}]}
            />
          </View>
        </View>
        <View>
          <Image
            source={detailImg4}
            style={[
              styles.imageStyle,
              {
                width: windowWidth(120),
                height: windowHeight(155),
                resizeMode: 'cover',
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
