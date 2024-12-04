import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import LinearGradient from 'react-native-linear-gradient';

export default function calenderView(props) {
  const [date, setDate] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const displayDots = [2, 4, 21, 24, 31];
  const {viewRTLStyle, isDark} = useValues();
  var data = [];
  const calender = () => {
    for (let i = 1; i <= 31; i++) {
      data.push(i);
    }
    setDate(data);
  };
  useEffect(() => {
    calender();
  }, []);

  const onCalenderBtn = date => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.margin}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          {date &&
            date.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => onCalenderBtn(index)}
                  activeOpacity={0.9}>
                  <LinearGradient
                    colors={[
                      selectedDate === index
                        ? '#1E80EC'
                        : isDark
                        ? appColors.darkTheme
                        : appColors.white,
                      selectedDate === index
                        ? '#4466F2'
                        : isDark
                        ? appColors.darkTheme
                        : appColors.white,
                    ]}
                    style={[
                      styles.calenderView,
                      props.calenderView,
                      {
                        backgroundColor: isDark
                          ? appColors.darkTheme
                          : appColors.white,
                      },
                    ]}
                    start={{x: 1, y: 0.2}}
                    end={{x: 1, y: 1}}>
                    <View>
                      {displayDots.includes(index) && (
                        <LinearGradient
                          colors={['#1E80EC', '#4466F2']}
                          style={selectedDate != index && styles.dot}
                          start={{x: 1, y: 0.2}}
                          end={{x: 1, y: 1}}
                        />
                      )}
                      <Text
                        style={[
                          styles.name,
                          {
                            color:
                              selectedDate === index
                                ? appColors.white
                                : appColors.fitnessContent1,
                          },
                        ]}>
                        {item}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
