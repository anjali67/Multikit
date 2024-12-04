import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('screen');

export default function BottomSheet() {
  const [alignment] = useState(new Animated.Value(0));

  const bringupActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const actionsheetIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 2.4 + 170, 0],
  });

  const actionSheetStyle = {
    bottom: actionsheetIntropolate,
  };

  const hidTheActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  const gestureHandler = e => {
    console.log('Helooooooooooooooooooooooooo', e);
    if (e.nativeEvent.contentOffset.y > 0) {
      console.log('dsddddddddddddddddd', e.nativeEvent.contentOffset.y);
      bringupActionSheet();
    }
  };

  return (
    <Animated.View style={[styles.container, actionSheetStyle]}>
      <GestureHandlerRootView>
        <TouchableOpacity
          onPress={e => gestureHandler(e)}
          style={styles.grabber}></TouchableOpacity>
      </GestureHandlerRootView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'blue',
    height: height / 2.4,
    width: width / 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grabber: {
    width: 70,
    borderTopColor: '#ccc',
    borderTopWidth: 5,
    margin: 10,
  },
});
