import React, {useRef, useImperativeHandle, forwardRef} from 'react';
import {View, Animated, Text, StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default Animation = forwardRef((props, ref) => {
  const animated = useRef(new Animated.Value(-430)).current;

  const duration = 2000;

  useImperativeHandle(ref, () => ({
    animateView: () => {
      animateView();
    },
  }));

  const animateView = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: -300,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(animated, {
        toValue: -430,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View style={[styles.main, {transform: [{translateY: animated}]}]}>
      <View style={[styles.content]}>
        <Text style={[styles.title,props.titleStyle]}>{props.title}</Text>
        <Text style={[styles.loading,props.contentTextStyle]}>{props.content}</Text>
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: 'red',
  },
  content: {
    width: '94%',
    backgroundColor: appColors.foodBtn,
    position: 'absolute',
    alignSelf: 'center',
  
    padding: 10,
    alignItems: 'flex-start',
  },
  title: {
    paddingTop: 2,
    color: 'black',
  },
  loading: {
    paddingVertical: windowHeight(1),
    color:appColors.white
  },
});
