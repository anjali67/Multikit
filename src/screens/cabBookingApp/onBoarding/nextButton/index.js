import React, {useRef, useEffect} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import {Svg, G, Circle} from 'react-native-svg';
import styles from '../styles';
import appColors from '@theme/appColors';
import {ArrowRight} from '@assets/images/common/svg/arrowright';
import LinearGradient from 'react-native-linear-gradient';

export default function NextButton({percentage, scrollTo}) {
  const size = 75;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumfrence = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumfrence - (circumfrence * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={[styles.mainView, styles.center]}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            ref={progressRef}
            stroke="#ffffff"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#FFA000"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumfrence}
          />
        </G>
      </Svg>
      {/* <View style={styles.innerCircle}> */}
      <LinearGradient
        colors={[appColors.onBoardGradiant2, appColors.onBoardGradiant3]}
        style={styles.button}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 1}}>
        <TouchableOpacity onPress={scrollTo}>
          <ArrowRight height={30} width={30} color={appColors.white} />
        </TouchableOpacity>
      </LinearGradient>
      {/* </View> */}
    </View>
  );
}
