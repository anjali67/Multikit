import React, {useState} from 'react';
import {View, Text, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function datePicker() {
  const {isDark} = useValues();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onchange = (event, selectDate) => {
    const curruntDate = selectDate || date;
    setShow(Platform.OS === 'ios');
    setDate(curruntDate);

    let tempData = new Date(curruntDate);
    let fDate =
      tempData.getDate() +
      '/' +
      (tempData.getMonth() + 1) +
      '/' +
      tempData.getFullYear();
    let fTime =
      'Hours: ' + tempData.getHours() + '| Minutes: ' + tempData.getMinutes();
    setText(fDate + '\n' + fTime);
  };
  const showMode = curruntMode => {
    setShow(true);
    setMode(curruntMode);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => showMode('date')}
        activeOpacity={0.9}
        style={[
          styles.btnView,
          {
            backgroundColor: isDark
              ? appColors.darkTheme
              : appColors.verticalLine,
          },
        ]}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.fontColor},
          ]}>
          {t('mainTheme.openDatePicker')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          showMode('time');
        }}
        style={[
          styles.btnView,
          {
            marginVertical: 0,
            backgroundColor: isDark
              ? appColors.darkTheme
              : appColors.verticalLine,
          },
        ]}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.fontColor},
          ]}>
          {t('mainTheme.openTimePicker')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => showMode('datetime')}
        activeOpacity={0.9}
        style={[
          styles.btnView,
          {
            marginVertical: 20,
            backgroundColor: isDark
              ? appColors.darkTheme
              : appColors.verticalLine,
          },
        ]}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.fontColor},
          ]}>
          {t('mainTheme.openDateTimePicker')}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onchange}
        />
      )}
    </View>
  );
}
