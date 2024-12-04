import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default chattingStyles = StyleSheet.create({
  horizontalLine: {
    borderTopColor: appColors.divider,
    borderTopWidth: 1.2,
    marginTop: windowHeight(8),
    marginBottom: windowHeight(10),
  },
  name: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT20,
  },
  dateTime: {
    color: appColors.chatContent,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT18,
    bottom: windowHeight(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowView: {
    flexDirection: 'row',
  },
  textContainer: {
    marginVertical: windowHeight(3),
    marginHorizontal: windowWidth(13),
  },
  image: {
    height: windowHeight(48),
    width: windowWidth(70),
    resizeMode: 'contain',
    borderRadius: windowHeight(30),
    borderColor: appColors.chatContent,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(30),
  },
});
