import React, {useState, useRef} from 'react';
import {View, FlatList, Animated} from 'react-native';
import {onBoardData} from '@utils/json/cabBooking';
import styles from './styles';
import OnBoardItem from './onboardItem';
import Paginator from './pagination/paginator';
import NextButton from './nextButton';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function cabOnBoarding({navigation}) {
  const {isRTL, isDark} = useValues();

  const [currentIndex, setCurruntIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableChanged = useRef(({viewableItems}) => {
    setCurruntIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const scrollTo = () => {
    if (currentIndex < onBoardData.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('CabAuthScreen');
    }
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <FlatList
        inverted={isRTL ? true : false}
        data={onBoardData}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        renderItem={({item}) => <OnBoardItem item={item} />}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollx}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={onBoardData} scrollx={scrollx} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / onBoardData.length)}
      />
    </View>
  );
}
