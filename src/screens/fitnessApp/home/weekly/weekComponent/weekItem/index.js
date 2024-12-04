import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from '../../../styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import LinearGradient from 'react-native-linear-gradient';
import {useValues} from '@App';

export default function weekItem(props) {
  const [days, setDays] = useState();
  const selectedDays = [1, 2];
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();

  var data = [];
  const handleDays = () => {
    for (let i = 1; i <= 7; i++) {
      data.push(i);
    }
    setDays(data);
  };
  useEffect(() => {
    handleDays();
  }, []);

  return (
    <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
      <View>
        <View style={styles.dotView}></View>
        <View style={styles.verticalLine}></View>
      </View>
      <View>
        {days && (
          <>
            <Text
              style={[
                styles.title,
                {
                  color: isDark ? appColors.white : appColors.fontColor,
                  marginHorizontal: isRTL ? 16 : 6,
                  bottom: 2,
                  textAlign: textRTLStyle,
                },
              ]}>
              {t('fitness.week')} {props.numWeek}
            </Text>
            <View style={styles.top}>
              <FlatList
                numColumns={5}
                data={days}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={[
                        styles.mainContainerView,
                        {flexDirection: viewRTLStyle},
                      ]}>
                      {props.showGradinatBorder && index === 2 ? (
                        <LinearGradient
                          colors={['#4466F2', '#1E80EC']}
                          start={{x: 0.0, y: 1.0}}
                          end={{x: 1.0, y: 1.0}}
                          style={styles.gradiantBorder}>
                          <View style={styles.innerCircle}>
                            <Text
                              style={[
                                styles.text,
                                {color: appColors.cabContent, marginTop: 0},
                              ]}>
                              {item}
                            </Text>
                          </View>
                        </LinearGradient>
                      ) : (
                        <LinearGradient
                          colors={[
                            props.selectdDay &&
                            index == selectedDays.includes(index)
                              ? '#4466F2'
                              : isDark
                              ? appColors.darkTheme
                              : appColors.lightBorder,
                            props.selectdDay &&
                            index == selectedDays.includes(index)
                              ? '#1E80EC'
                              : appColors.lightBorder,
                          ]}
                          style={[
                            styles.circleView,
                            {
                              backgroundColor: isDark
                                ? appColors.darkTheme
                                : appColors.lightBorder,
                            },
                          ]}
                          start={{x: 1, y: 0.5}}
                          end={{x: 1, y: 0.5}}>
                          <Text
                            style={[
                              styles.text,
                              {
                                color:
                                  props.selectdDay &&
                                  index == selectedDays.includes(index)
                                    ? appColors.white
                                    : appColors.cabContent,
                                marginTop: 0,
                              },
                            ]}>
                            {item}
                          </Text>
                        </LinearGradient>
                      )}
                    </View>
                  );
                }}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
}
