import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {chartGraph} from '@utils/images/images';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function chartView(props) {
  const {isDark} = useValues();
  return (
    <View style={style.containerView}>
      <Image source={chartGraph} style={style.image} />
      {props.showDivider && (
        <View
          style={[
            style.divider,
            {
              borderBottomColor: isDark
                ? appColors.darkTheme
                : appColors.fitnessBorder,
            },
          ]}></View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    height: windowHeight(130),
    width: '100%',
    resizeMode: 'contain',
  },
  containerView: {
    marginTop: windowHeight(20),
    marginHorizontal: windowWidth(20),
  },
  divider: {
    height: windowHeight(25),
    borderBottomWidth: 1.6,
    borderBottomColor: appColors.fitnessBorder,
  },
});
