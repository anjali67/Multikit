import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import StarReview from 'react-native-stars';
Icon.loadFont();

export default function StarRating(props) {
  return (
    <StarReview
      rating={2.5}
      count={5}
      half={true}
      fullStar={<Icon name={'star'} size={props.size ? props.size : 19} style={[styles.myStarStyle]} />}
      emptyStar={
        <Icon
          name={'star'}
          size={props.size ? props.size : 19}
          style={[styles.myStarStyle, styles.myEmptyStarStyle]}
        />
      }
      halfStar={
        <Icon name={'star-half'}size={props.size ? props.size : 19} style={[styles.myStarStyle]} />
      }
    />
  );
}
