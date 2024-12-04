import {ScrollView} from 'react-native';
import React from 'react';
import styles from './renderItem/styles'
import FeaturedRenderItem from './renderItem';

export default function FeaturedResturants(props) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.scrollView}>
      {props.data.map((item, index) => (
        <FeaturedRenderItem item={item}/>
      ))}
    </ScrollView>
  );
}
