import React from 'react';
import {View, Text} from 'react-native';
import Analysis from './analysis';

export default function analytics(props) {
  return (
    <View>
      <Analysis item={props} />
    </View>
  );
}
