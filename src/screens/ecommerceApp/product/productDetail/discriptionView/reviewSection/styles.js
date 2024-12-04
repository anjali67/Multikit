import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default detailsViewStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: windowHeight(7),
    paddingHorizontal: windowHeight(16),
    paddingTop: windowHeight(16),
  },
  ratingContainer: {
    height: windowHeight(36),
    width: windowWidth(53),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.forgotFont,
    borderRadius: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(20),
  },
  ratingText: {
    fontFamily: appFonts.MontserratSemiBold,
    color: appColors.white,
    fontSize: fontSizes.FONT21,
  },
  content: {
    fontFamily: appFonts.MontserratRegular,
    color: '#4A4A4A',
    fontSize: fontSizes.FONT20,
    width: '80%',
    marginTop: windowHeight(6),
    lineHeight: windowHeight(20),
    textAlign: 'center',
  },
  verticaLine: {
    width: 1,
    height: '100%',
    backgroundColor: appColors.lightGray1,
  },
  progressContainer: {
    height: windowHeight(4),
    backgroundColor: appColors.progress,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    width: windowWidth(180),
    margin: windowHeight(7),
  },
  progressBar: {
    height: '100%',
    backgroundColor: appColors.forgotFont,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(30),
  },
  rate: {
    color: '#A3A3A3',
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
});
