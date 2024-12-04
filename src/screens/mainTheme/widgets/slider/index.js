import React, {useState, useRef} from 'react';
import {View, FlatList, Animated, ScrollView} from 'react-native';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import Slider from '../../../ecommerceApp/product/productDetail/slider';
import {onBoardData} from '@utils/json/cabBooking';
import OnBoardItem from '../../../cabBookingApp/onBoarding/onboardItem';
import {useValues} from '@App';
import Paginator from '../../../cabBookingApp/onBoarding/pagination/paginator';
import styles from './styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '../../../../theme/appColors';

export default function slider({navigation}) {
  const [selectedColor, setSelectedColor] = useState(0);
  const {isRTL, isDark} = useValues();
  const [currentIndex, setCurruntIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableChanged = useRef(({viewableItems}) => {
    setCurruntIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View
      style={{
        backgroundColor: isDark ? appColors.blackColor : appColors.grayLight,
      }}>
      <WidgetsBg
        imageStyle={{
          height: windowHeight(650),
          width: windowWidth(200),
          resizeMode: 'contain',
        }}
        navigation={navigation}
        title={t('mainTheme.slider')}
        subContent={t('mainTheme.sliderContent')}
        content={
          <ScrollView contentContainerStyle={styles.containentStyle}>
            <Slider selectedColor={selectedColor} />
            <View style={styles.mainContainer}>
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
              <View style={styles.bottomView}>
                <Paginator data={onBoardData} scrollx={scrollx} />
              </View>
            </View>
          </ScrollView>
        }
      />
    </View>
  );
}
