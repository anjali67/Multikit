import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import PaginationContainer from './paginationContainer';
import {onBoardData} from '@utils/json/hotelBooking';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import GradiantbtnView from '@otherComponent/hotelBooking/button';
import {useValues} from '@App';

export default function hotelOnBoarding({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.mainView,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={styles.blankView}></View>
      <FlatList
        data={onBoardData}
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
        renderItem={({item, index}) => {
          return (
            <View style={styles.main}>
              <Image
                resizeMode="stretch"
                source={item.image}
                style={styles.imageStyle}
              />
              <Text style={styles.title}>{t(item.title)}</Text>
              <Text style={styles.content}>{t(item.content)}</Text>
            </View>
          );
        }}
      />
      <View style={styles.bottomView}>
        <PaginationContainer scrollX={scrollX} />
        <GradiantbtnView
          onBtnPress={() => navigation.navigate('HotelLogin')}
          btnTitle={t('otp.Continue')}
          gradiant={appColors.onBoardGradiant1}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('HotelLogin')}
          style={styles.skipContainer}>
          <Text style={styles.skipText}>{t('onBoarding.Skip')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
