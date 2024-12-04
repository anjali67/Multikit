import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  ImageBackground,
  Animated,
  Easing,
  Image,
} from 'react-native';
import {financeOnBoardBg, onboardBg} from '@utils/images/images';
import GradientView from '@otherComponent/financial/gradientView';
import {GlobalStyle} from '../../../style';
import styles from './styles';
import {onBoardingData} from '@utils/json/financial';
import {t} from 'i18next';
import PaginationContainer from './paginationContainer';
import BottomContainer from './bottomContainer';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function FinancialOnBoarding({navigation}) {
  const {isDark} = useValues();
  const gotoLoginPage = () => {
    navigation.navigate('FinancialLogin');
  };
  const {width} = useWindowDimensions();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const rotationValue = useRef(new Animated.Value(0)).current;
  const rotateAnimation2 = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      stopAnimation2();
      Animated.timing(rotationValue, {
        toValue: -1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const rotateAnimation1 = rotationValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['0deg', '360deg', '0deg'],
  });
  let animation2;
  useEffect(() => {
    animation2 = Animated.loop(
      Animated.timing(rotateAnimation2, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    animation2.start();

    return () => {
      animation2.stop();
    };
  }, []);

  const stopAnimation2 = () => {
    animation2.stop();
  };

  const renderItem = React.useCallback(({item}) => {
    return (
      <View>
        <View>
          <ImageBackground
            resizeMode="cover"
            source={isDark ? onboardBg : financeOnBoardBg}
            style={styles.imageStyle}>
            <View style={styles.margin}>
              <Animated.Image
                source={item.cardImage}
                style={[styles.card, {transform: [{rotate: rotateAnimation1}]}]}
              />
            </View>
            <View style={styles.imageContainer}>
              <Animated.Image
                source={item.cardImage1}
                style={[
                  styles.card1,
                  {
                    transform: [
                      {
                        rotate: rotateAnimation2.interpolate({
                          inputRange: [-1, 0, 1],
                          outputRange: ['0deg', '360deg', '0deg'],
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.foodItem : appColors.gray},
            ]}>
            {t(item.title)}
          </Text>
          <Text style={styles.content}>{t(item.content)}</Text>
        </View>
      </View>
    );
  });
  const keyExtractor = React.useCallback(item => item.key, []);
  return (
    <View style={GlobalStyle.mainView}>
      <GradientView
        content={
          <>
            <View style={styles.mainCardView}>
              <FlatList
                data={onBoardingData}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {
                    useNativeDriver: false,
                  },
                )}
                pagingEnabled
                horizontal
                decelerationRate={'normal'}
                scrollEventThrottle={16}
                renderItem={renderItem}
              />
            </View>
            <View style={styles.paginationView}>
              <PaginationContainer scrollX={scrollX} />
            </View>
            <BottomContainer gotoLoginPage={gotoLoginPage} />
          </>
        }
      />
    </View>
  );
}
