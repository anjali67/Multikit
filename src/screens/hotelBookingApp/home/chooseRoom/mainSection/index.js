import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {hotelStyle} from '../../../styles';
import styles from '../styles';
import {t} from 'i18next';
import LinearGradient from 'react-native-linear-gradient';
import {useValues} from '@App';
import GradiantbtnView from '@otherComponent/hotelBooking/button';
import appColors from '@theme/appColors';

export default function mainSection(props) {
  const {currSymbol, currValue, viewRTLStyle, textRTLStyle, isRTL, isDark} =
    useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={styles.mainView}>
        <Image source={props.image} style={styles.imgeStyle} />
        <View style={styles.textView}>
          <View style={styles.container}>
            <Text style={styles.text}>1/25</Text>
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.roomText,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.reviewText,
          },
        ]}>
        {t(props.roomName)}
      </Text>
      <View style={styles.margin}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{flexDirection: viewRTLStyle}}
          data={props.data}
          renderItem={({item, index}) => {
            return (
              <>
                <View>
                  <LinearGradient
                    colors={[
                      appColors.onBoardGradiant,
                      appColors.onBoardGradiant1,
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.linearGradient}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={[
                        styles.innerContainer,
                        {
                          backgroundColor: isDark
                            ? appColors.blackColor
                            : appColors.white,
                        },
                      ]}>
                      <Text style={styles.name}>{t(item.name)}</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.curruncyText}>
          {currSymbol}
          {currValue * 25}/ <Text>{t('hotelBooking.night')}</Text>
        </Text>
        <GradiantbtnView
          onBtnPress={() => {
            props.navigation.navigate('ReviewDetail');
          }}
          gradiant={appColors.onBoardGradiant1}
          btnTitle={t('hotelBooking.selectRoom')}
          btnStyle={styles.btnView}
          btnText={styles.btnText}
        />
      </View>
    </View>
  );
}
