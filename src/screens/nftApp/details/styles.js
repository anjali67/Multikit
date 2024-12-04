import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  containerView: {
    marginVertical: windowHeight(20),
  },
  image: {
    height: windowHeight(160),
    width: '100%',
    resizeMode: 'cover',
    marginTop: windowHeight(10),
    backgroundColor: 'gray',
  },
  imageContainer: {
    height: windowHeight(67),
    width: windowWidth(100),
    position: 'absolute',
    marginTop: windowHeight(120),
    resizeMode: 'cover',
    borderRadius: windowHeight(4),
    marginHorizontal: 14,
  },

  imageStyle: {
    height: windowHeight(150),
    width: windowWidth(130),
    resizeMode: 'contain',
  },
  boxContainer: {
    elevation: 1,
    marginRight: windowWidth(0),
    backgroundColor: appColors.white,
    marginBottom: windowHeight(18),
    marginHorizontal: windowWidth(14),
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(8),
    paddingBottom: windowHeight(10),
    borderRadius: windowHeight(6),
  },
  imageView: {
    height: windowHeight(100),
    width: windowWidth(196),
    resizeMode: 'cover',
    borderRadius: windowHeight(9),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyImg: {
    height: windowHeight(22),
    width: windowWidth(22),
    resizeMode: 'contain',
    marginTop: windowHeight(6),
    marginHorizontal: 6,
  },
  title: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT25HALF,
    color: appColors.nftTitle,
    marginTop: 3,
  },
  content: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17,
    color: appColors.cabContent,
    lineHeight: windowHeight(17),
    marginTop: 6,
    marginHorizontal: 10,
  },
  iconView: {
    marginTop: 10,
  },
  verticalLine: {
    height: windowHeight(28),
    borderColor: '#E3E3E3',
    borderWidth: 0.5,
    marginHorizontal: windowWidth(6),
    marginTop: windowHeight(25),
  },
  margin: {
    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(20),
  },
  name: {
    color: appColors.cabContent,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18HALF,
  },
  inputContainer: {
    width: '82%',
    height: '69%',
    marginTop: windowHeight(10),
  },
  container: {
    marginHorizontal: windowHeight(14),
  },
  singleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  analySisview: {
    height: windowHeight(65),
    borderColor: appColors.borderColor,
    borderWidth: 1,
    width: windowWidth(200),
    justifyContent: 'center',
    marginHorizontal: windowWidth(13),
    paddingHorizontal: windowWidth(12),
    borderRadius: windowHeight(7),
  },
  eth: {
    marginTop: windowHeight(7),
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
  },
  dropdownView: {
    flexDirection: 'row',
    backgroundColor: appColors.lightBorder,
    marginHorizontal: windowWidth(20),

    justifyContent: 'space-evenly',
    paddingVertical: windowHeight(5.5),
    borderRadius: windowHeight(4),
    width: windowWidth(110),
  },
  chartImg: {
    height: windowHeight(145),
    width: windowWidth(460),
    resizeMode: 'contain',
  },
  marginHorizontal: {
    marginHorizontal: windowWidth(13),
  },
  blankView: {
    height: windowHeight(12),
  },
});
