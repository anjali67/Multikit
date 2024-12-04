import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {fincnceBg, darkHome} from '@utils/images/images';
import {useValues} from '@App';

export default function gradientView(props) {
  const {isDark} = useValues();
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={props.image ? props.image : isDark ? darkHome : fincnceBg}
        style={[styles.container, props.containerStyle]}>
        {props.content}
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
