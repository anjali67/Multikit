import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  label: {
    fontSize: fontSizes.FONT20,
    marginLeft: windowWidth(8),
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratMedium,
    marginBottom: windowHeight(6),
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight(48),
    borderRadius: windowHeight(7),
    paddingLeft: windowWidth(3),
    marginVertical: windowHeight(7),
    width: '96.7%',
    borderColor: appColors.ecommerceFont,
    borderWidth: 1,
    marginHorizontal: windowWidth(5),

    height: windowHeight(45),
  },
  textInput: {
    flex: 1,
    fontFamily: appFonts.MontserratRegular,
    color: appColors.foodContent,
    fontSize: fontSizes.FONT20,
    marginLeft: windowWidth(15),
    marginHorizontal: 7,
  },
  mainContainer: {
    marginVertical: windowHeight(6),
  },
});
