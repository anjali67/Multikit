import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import {chooseTopics} from '@utils/json/blog';
import {t} from 'i18next';
import appColors from '../../../theme/appColors';
import blogStyle from '../style';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function chooseTopic({navigation}) {
  const [data, setData] = useState(chooseTopics);
  const {isDark, textRTLStyle, viewRTLStyle, setIsRTL, isRTL} = useValues();

  const onChooseTopic = selectdTopic => {
    const updatedData = data.map(dataItem => {
      if (dataItem.id === selectdTopic) {
        return {...dataItem, selected: !dataItem.selected};
      }
      return dataItem;
    });
    setData(updatedData);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={[styles.textView, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.title,
            {
              textAlign: isRTL ? textRTLStyle : null,
              color: isDark ? appColors.white : appColors.fontColor,
            },
          ]}>
          {t('blog.chooseYourTopics')}
        </Text>
      </View>

      <FlatList
        data={data}
        style={{
          flexDirection: viewRTLStyle,
          paddingHorizontal: windowWidth(15),
        }}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onChooseTopic(index);
              }}
              style={[
                styles.mainContainer,
                {
                  backgroundColor: item.selected
                    ? appColors.activeTopic
                    : isDark
                    ? appColors.cabText
                    : appColors.chooseTopic,
                },
              ]}>
              {item.selected
                ? item.selectedIcon
                : isDark
                ? item.selectedIcon
                : item.icon}
              <Text
                style={[
                  styles.name,
                  {
                    color: item.selected
                      ? appColors.white
                      : isDark
                      ? appColors.white
                      : appColors.fontColor,
                  },
                ]}>
                {t(item.name)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.center}>
        <Button
          text={t('signIn.Next')}
          style={[
            blogStyle.buttonStyle,
            styles.buttonView,

            {
              backgroundColor: isDark ? appColors.white : appColors.fontColor,
            },
          ]}
          btnTextStyle={[
            blogStyle.btn,
            {color: isDark ? appColors.blackColor : appColors.white},
          ]}
          onPress={() => {
            navigation.navigate('BlogDrawer');
          }}
        />
      </View>
    </ScrollView>
  );
}
