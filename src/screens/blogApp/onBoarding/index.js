import React, {useState} from 'react';
import {View, Image, FlatList, Text, Dimensions} from 'react-native';
import styles from './styles';
import {onBoardData} from '@utils/json/blog';
import PaginationContainer from './pagination';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function blogOnBoarding({navigation}) {
  const [curruntIndex, setCurruntIndex] = useState(0);
  const {setIsRTL, isRTL, isDark, setIsDark, textRTLStyle} = useValues();
  const handleOnScroll = event => {
    setCurruntIndex(
      parseInt(
        event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
      ),
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        onScroll={e => handleOnScroll(e)}
        scrollEventThrottle={5}
        horizontal
        data={onBoardData}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item, index}) => {
          return (
            <View>
              <Image source={item.image} style={styles.image} />
            </View>
          );
        }}
      />
      <View>
        <View style={styles.bottomView}>
          {onBoardData.map((item, index) => {
            return (
              <View>
                {curruntIndex === index && (
                  <View>
                    <Text
                      style={[
                        styles.title,
                        {
                          textAlign: textRTLStyle,
                          color: isDark ? appColors.white : appColors.fontColor,
                        },
                      ]}>
                      {t(item.title)}
                    </Text>
                    <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                      {t(item.content)}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
          <PaginationContainer
            navigation={navigation}
            curruntIndex={curruntIndex}
            data={onBoardData}
          />
        </View>
        {/* <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
          start={{x: 1, y: 1}}
          end={{x: 1, y: 1}}
          style={{height: windowHeight(140), width: '100%'}}>
         
        </LinearGradient> */}
      </View>
    </View>
  );
}
