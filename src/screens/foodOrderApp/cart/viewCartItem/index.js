import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {t} from 'i18next';
import {viewCartData} from '@utils/json/food';
import {Increase} from '@assets/images/grocery_assets/svg/increase';
import styles from './styles';
import appColors from '@theme/appColors';
import {DashView} from '@otherComponent/food/dashView';
import {useValues} from '@App';
import {windowHeight, windowWidth} from '../../../../theme/appConstant';

export default function ViewCartItem(props) {
  const [addedItems, setItems] = useState(props.addItemsToCart);
  const {viewRTLStyle, textRTLStyle, isDark, isRTL, currSymbol, currValue} =
    useValues();
  return (
    <View>
      <Text
        style={[
          styles.titleStyle,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.foodSecondary,
            right: isRTL ? windowWidth(14) : 0,
          },
        ]}>
        {t('foodCart.addedItems')}
      </Text>
      <View
        style={[
          styles.mainContainerView,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        <FlatList
          data={addedItems?.length > 0 ? addedItems : viewCartData}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          renderItem={({item}) => {
            return (
              <View>
                <View
                  activeOpacity={0.7}
                  onPress={() => {}}
                  style={[
                    styles.row,
                    styles.mainRow,
                    {flexDirection: viewRTLStyle},
                  ]}>
                  <View
                    style={[
                      styles.row,
                      {width: '75%', flexDirection: viewRTLStyle},
                    ]}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.textContainer}>
                      <Text
                        style={[
                          styles.title,
                          {
                            color: isDark
                              ? appColors.white
                              : appColors.foodSecondary,
                          },
                        ]}>
                        {t(item.title)}
                      </Text>
                      <Text style={[styles.price, {textAlign: textRTLStyle}]}>
                        {currSymbol}
                        {(currValue * item.price).toFixed(2)}
                      </Text>
                      <Text style={[styles.edit, {textAlign: textRTLStyle}]}>
                        {t('foodCart.edit')}
                      </Text>
                    </View>
                  </View>

                  <View>
                    {addedItems?.length > 0 && !item.clickedItem ? (
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
                            activeOpacity={0.7}
                            onPress={() => {}}
                            style={styles.decrement}>
                            <Decrease
                              color={appColors.white}
                              width={13}
                              height={4}
                            />
                          </TouchableOpacity>
                          <Text style={styles.counterText}>
                            {item.quantity}
                          </Text>
                          <TouchableOpacity
                            activeOpacity={0.7}
                            style={[styles.marginTop, {left: 4}]}
                            onPress={() => {}}>
                            <Increase width={30} height={12} />
                          </TouchableOpacity>
                        </View>
                      </>
                    ) : (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {}}
                        style={[
                          styles.row,
                          styles.addContainer,
                          {flexDirection: viewRTLStyle},
                        ]}>
                        <Increase
                          color={appColors.white}
                          height={22}
                          width={12}
                        />
                        <Text
                          style={[
                            styles.add,
                            {paddingRight: isRTL ? windowWidth(8) : 0},
                          ]}>
                          {t('foodResturants.add')}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />
        <DashView title={'foodCart.addItem'} />
      </View>
    </View>
  );
}
