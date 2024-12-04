import {View, FlatList} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import styles from './styles';
import {useValues} from '@App';
import HorizontalFoodItems from './horizontalFoodItems';
import FoodItem from './foodItem';
import appColors from '@theme/appColors';

export default function ResturantItem(props) {
  const { isDark, isRTL} = useValues();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const flatlistRef = useRef(null);
  const verticalRef = useRef(null);

  useEffect(() => {
    flatlistRef.current.scrollToIndex({
      index: selectedIndex,
      animated: true,
    });
  }, [selectedIndex]);

  useEffect(() => {
    verticalRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  }, [index]);

  return (
    <View>
      <View style={[styles.mainView,{backgroundColor:isDark ? appColors.blackColor :  appColors.lightWhite}]}>
        <FlatList
          contentContainerStyle={styles.scrollView}
          inverted={isRTL ? true : false}
          initialScrollIndex={selectedIndex}
          ref={flatlistRef}
          showsHorizontalScrollIndicator={false}
          data={props.resturantData}
          horizontal
          renderItem={({index, item}) => {
            return (
              <HorizontalFoodItems
                item={item}
                index={index}
                setIndex={setIndex}
                selectedIndex={selectedIndex}
              />
            );
          }}
        />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={props.resturantData}
          contentContainerStyle={styles.contentContainerStyle}
          initialScrollIndex={index}
          ref={verticalRef}
          onScroll={event => {
            const ind = event.nativeEvent.contentOffset.y / 500;
            setSelectedIndex(ind.toFixed(0));
          }}
          renderItem={({index, item}) => {
            return (
              <FoodItem
                item={item}
                onAddItem={props.onAddItem}
                setSelectedIndex={props.setSelectedIndex}
                selectedCheckboxes={props.selectedCheckboxes}
                AddClick={props.AddClick}
                handleIncrement={props.handleIncrement}
                handleDecrement={props.handleDecrement}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
