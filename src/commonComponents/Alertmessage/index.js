import React, {useRef, useImperativeHandle, forwardRef} from 'react';
import {View, Animated, Text,TouchableOpacity} from 'react-native';
import styles from './styles';


export default AlertMessgae = forwardRef((props, ref) => {
  const animated = useRef(new Animated.Value(-100)).current;

  const duration = 2000;

  useImperativeHandle(ref, () => ({
    animateView: () => {
      animateView();
    },
  }));

  const animateView = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 10,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(animated, {
        toValue: -100,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View style={[styles.main, {transform: [{translateY: animated}]}]}>
      <View style={[styles.content]}>
        <Text style={styles.generated}>DKJKJKKgENERATED</Text>
        <Text style={styles.loading}>iMAGE LOADING</Text>
         <TouchableOpacity><Text>dddddddddddddd</Text></TouchableOpacity>
      </View>
    </Animated.View>
  );
});


