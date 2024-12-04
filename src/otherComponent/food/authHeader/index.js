import {View, TouchableOpacity, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {Back} from '@assets/images/main_theme_images/svg/back';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';
import {ArrowRight} from '@assets/images/common/svg/arrowright';

export default function AuthHeader(props) {
  const { isRTL,isDark} = useValues();
  return (
    <View style={styles.topContainer}>
      <TouchableOpacity
        style={{
          alignItems: isRTL ? 'flex-end' : 'flex-start',
        }}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.goBack();
        }}>
        {isRTL ? (
          <ArrowRight color={isDark ? appColors.white : appColors.foodSecondary} strokeWidth={'1.7'} />
        ) : (
          <Back color={isDark ? appColors.white : appColors.foodSecondary} />
        )}
      </TouchableOpacity>
      <View style={styles.blank}></View>
      <Text style={[styles.title,{color:isDark ? appColors.white : appColors.foodSecondary}]}>{props.title}</Text>
      <Text style={[styles.content, props.contentStyle]}>{props.subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    marginTop: '8.5%',
    marginHorizontal: windowWidth(20),
  },
  blank: {
    height: windowHeight(78),
  },
  title: {
    fontSize: fontSizes.FONT24,
    textAlign: 'center',
    fontFamily: appFonts.LatoHeavy,
    color: appColors.foodSecondary,
  },
  content: {
    fontSize: fontSizes.FONT22,
    textAlign: 'center',
    fontFamily: appFonts.LatoMedium,
    color: appColors.foodContent,
    marginTop: windowHeight(12),
  },
});
