import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  itemView: {
    marginTop: windowHeight(8),
    borderBottomWidth: 1.4,
    borderBottomColor: appColors.lightBorder,
    paddingBottom: windowHeight(8),
  },
  itemStyle: {
    color: appColors.foodContent,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(3),
  },
  ratingView: {
    marginTop: windowHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textStyle: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
  },
  starView: {
    marginHorizontal: windowHeight(2),
    marginTop: windowHeight(-0.2),
  },
  recorderView: {
    backgroundColor: appColors.lightBorder,
    paddingHorizontal: windowWidth(16),
    paddingVertical: windowHeight(6),
    borderRadius: windowHeight(4),
    bottom: windowHeight(3),
  },
  recorder: {
    color: appColors.foodBtn,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT17,
  },
});
