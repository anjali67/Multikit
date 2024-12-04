import React from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {fitnessLogo} from '@utils/images/images';
import fitnessStyle from '../style';
import HomeHeader from '@commonComponents/homeHeader';
import {blogUser} from '@utils/images/images';
import CalenderView from '@otherComponent/fitness/home/calenderView';
import ChartView from '@otherComponent/fitness/home/chartView';
import CategorySection from '@otherComponent/fitness/home/categorySection';
import TextContentView from '@otherComponent/fitness/stepperSlider/textContent';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import FocusSection from '@otherComponent/fitness/home/focusSection';
import BoostEnergy from '@otherComponent/fitness/home/boostEnergy';
import PotentiallySection from '@otherComponent/fitness/home/potentially';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {fitnessDarkLogo} from '@utils/images/images';

export default function fitnessHome({navigation}) {
  const {isDark, isRTL} = useValues();
  return (
    <View
      style={[
        fitnessStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HomeHeader
        notShowingDrawer
        logoIcon={fitnessLogo}
        userIcon={blogUser}
        navigation={navigation}
        user={blogUser}
        darkLogo={fitnessDarkLogo}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CalenderView />
        <ChartView showDivider />
        <TextContentView
          containerStyle={style.containerStyle}
          title={'common.Categories'}
          titleStyle={style.titleStyle}
        />
        <CategorySection navigation={navigation} />
        <TextContentView
          containerStyle={style.containerStyle}
          title={'fitness.bodyFocus'}
          titleStyle={style.titleStyle}
        />
        <FocusSection navigation={navigation} />
        <TextContentView
          containerStyle={{
            marginTop: 0,
            marginBottom: 0,
            marginHorizontal: isRTL ? 20 : 10,
          }}
          title={'fitness.boostYourEngery'}
          titleStyle={style.titleStyle}
        />
        <BoostEnergy navigation={navigation} />
        <PotentiallySection />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  containerStyle: {
    margin: 0,
    marginBottom: windowHeight(10),
    marginHorizontal: windowWidth(22),
    marginTop: windowHeight(26),
  },
  titleStyle: {
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT22,
    left:windowWidth(8)
  },
});
