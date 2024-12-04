import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  title: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT23,
    opacity: 0.8,
  },
  email: {
    color: appColors.learningPlaceholder,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT17,
  },
  titleStyle: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(20),
    marginBottom: windowHeight(9),
    marginHorizontal: windowWidth(20),
  },
  marginHorizontal: {
    marginHorizontal: 14,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: windowHeight(70),
    width: windowWidth(102),
    marginTop: 15,
    resizeMode: 'cover',
  },
  margin: {
    marginTop: 18,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  marginBottom: {
    marginBottom: windowHeight(16),
  },
  iconView: {
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(6),
    paddingHorizontal: windowWidth(7),
    marginRight: windowWidth(18),
    borderRadius: windowHeight(4),
    elevation: 1,
  },
  divider: {
    height: windowHeight(9),
    backgroundColor: appColors.learningInput,
    marginTop: windowHeight(24),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(1),
  },
});
