import {StyleSheet} from 'react-native';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  sliderContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  sliderBack: {
    height: 6,
    backgroundColor: appColors.divider,
    borderRadius: 15,
  },
  sliderFront: {
    height: 6,
    backgroundColor: appColors.onBoardGradiant,
    borderRadius: 20,
    position: 'absolute',
  },
  thumb: {
    left: -10,
    width: 15,
    height: 15,
    position: 'absolute',
    backgroundColor: appColors.onBoardGradiant,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    position: 'absolute',
    height: 10,
    width: 10,
    backgroundColor: appColors.primary,
    borderRadius: 10,
  },
  label: {
    position: 'absolute',
    top: -40,
    bottom: 20,
    backgroundColor: appColors.reviewsBg,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  labelText: {
    color: appColors.reviewText,
    padding: 5,
    fontSize: fontSizes.FONT18,
    width: '100%',
    fontFamily: appFonts.MontserratMedium,
    backgroundColor: appColors.reviewsBg,
    borderRadius: 5,
  },
});
