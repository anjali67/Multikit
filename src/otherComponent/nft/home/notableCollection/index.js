import React from 'react';
import {View, Text, FlatList, ImageBackground, Image} from 'react-native';
import {notableCollections} from '@utils/json/nft';
import {t} from 'i18next';
import styles from '../styles';
import {fontSizes} from '@theme/appConstant';
import {verifyImg} from '@utils/images/images';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function notableCollection() {
  const {isDark, isRTL, viewRTLStyle} = useValues();
  return (
    <View style={styles.marginTop}>
      <FlatList
        inverted={isRTL ? true : false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={notableCollections}
        renderItem={({item, index}) => {
          return (
            <View>
              <ImageBackground
                borderRadius={10}
                source={item.image}
                style={styles.notableCollectionImg}>
                <View
                  style={[
                    styles.titleView,
                    {
                      backgroundColor: isDark
                        ? appColors.blackColor
                        : appColors.white,
                      flexDirection: viewRTLStyle,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: fontSizes.FONT16HALF,
                        color: isDark ? appColors.white : appColors.nftBtn,
                      },
                    ]}>
                    {t(item.title)}
                  </Text>
                  <Image source={verifyImg} style={styles.verifyImg} />
                </View>
              </ImageBackground>
            </View>
          );
        }}
        ItemSeparatorComponent={() => (
          <View style={{marginRight: windowHeight(15)}}></View>
        )}
      />
    </View>
  );
}
