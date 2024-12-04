import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles';
import StarRating from '@commonComponents/starRating';
import {Increase} from '@assets/images/grocery_assets/svg/increase';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import Decrease from '@assets/images/grocery_assets/svg/decrease';
import {windowHeight} from '@theme/appConstant';
import {windowWidth} from '../../../../../theme/appConstant';

export default function FoodItem(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  const {viewRTLStyle, textRTLStyle, isDark, isRTL,currSymbol,currValue} = useValues();
  return (
    <View style={styles.margin}>
      <Text style={[styles.text, {textAlign: textRTLStyle,color:isDark ? appColors.white : appColors.foodSecondary}]}>
        {t(props.item.title)}
      </Text>
      <View>
        {props.item.foodItem.map((item, index) => {
          return (
            <View
              style={[
                styles.row,
                styles.mainRow,
                {flexDirection: viewRTLStyle,backgroundColor:isDark ? appColors.blackColor :appColors.white,},
              ]}>
              <View
                style={[
                  styles.row,
                  {width: '75%', flexDirection: viewRTLStyle},
                ]}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={[styles.title, {textAlign: textRTLStyle,color:isDark ? appColors.white : appColors.foodSecondary}]}>
                    {t(item.title)}
                  </Text>
                  <View
                    style={[
                      styles.row,
                      styles.marginTop,
                      {justifyContent: isRTL ? 'flex-end' : 'flex-start'},
                    ]}>
                    <StarRating size={16} />
                    <Text style={[styles.rating,{color:isDark ? appColors.white : appColors.foodSecondary}]}>{item.rate}</Text>
                  </View>
                  <Text
                    style={[
                      styles.title,
                      styles.priceStyle,
                      {
                        textAlign: textRTLStyle,
                        right: isRTL ? windowWidth(13) : 0,
                        color:isDark ? appColors.white : appColors.foodSecondary
                      },
                    ]}>
                       {currSymbol}{(currValue * item.price).toFixed(2)}
                
                  </Text>
                </View>
              </View>
              <View>
                {/* {item.clickedItem ? ( */}
                {item.quantity !== 0 ? (
                  <>
                    <View
                      style={[
                        styles.row,

                        styles.addContainer,
                        {
                          paddingHorizontal: windowHeight(6),
                          flexDirection: viewRTLStyle,
                        },
                      ]}>
                      <TouchableOpacity
                        onPress={() => props.handleDecrement(item.id)}
                        style={styles.decrement}>
                        <Decrease
                          color={appColors.white}
                          width={13}
                          height={4}
                        />
                      </TouchableOpacity>
                      <Text style={styles.counterText}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={[styles.marginTop, {left: 4}]}
                        onPress={() => props.handleIncrement(item.id)}>
                        <Increase width={30} height={12}  color={appColors.white} />
                      </TouchableOpacity>
                    </View>
                  </>
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => props.onAddItem(item.id)}
                    style={[
                      styles.row,
                      styles.addContainer,
                      {flexDirection: viewRTLStyle},
                    ]}>
                    <>
                      <Increase
                        color={appColors.white}
                        height={22}
                        width={12}
                      />
                      <View activeOpacity={0.9}>
                        <TouchableOpacity
                          onPress={() => props.AddClick(item.id, item)}>
                          <Text
                            style={[
                              styles.add,
                              {right: isRTL ? windowWidth(8) : 0},
                            ]}>
                            {t('foodResturants.add')}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
