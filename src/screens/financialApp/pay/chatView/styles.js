import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  myMessageContainer: {
    backgroundColor: appColors.financeFont,
    borderRadius: windowHeight(8),
    paddingHorizontal: windowHeight(10),
    marginBottom: windowHeight(12),
    maxWidth: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: windowHeight(12),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginRight: 8,
    paddingHorizontal: windowHeight(10),
    paddingVertical: windowHeight(8),
    borderWidth: 2,
    borderColor: appColors.financeFont,
    borderRadius: windowHeight(12),
    backgroundColor: appColors.inputBg,
    width: '75%',
    color: appColors.gray,
    fontFamily: appFonts.InterRegular,
    paddingLeft: windowWidth(30),
    fontSize: fontSizes.FONT20,
  },
  buttonView: {
    backgroundColor: appColors.gradient1,
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(40),
    borderRadius: windowHeight(8),
  },
  payText: {
    color: appColors.gray,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT20HALF,
    opacity: 0.8,
  },
  message: {
    color: appColors.gray,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterRegular,
    opacity: 0.9,
    paddingHorizontal: windowWidth(2),
  },
  dateTime: {
    color: appColors.inActiveIcon,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterRegular,
    marginTop: windowHeight(4),
  },
  paymentText: {
    color: appColors.gray,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterRegular,
    marginLeft: windowHeight(40),
    marginTop: windowHeight(8),
    marginRight: windowWidth(12),
  },
});
