import React, {useRef, useEffect, useState} from 'react';
import BlogHome from '@screens/blogApp/home';
import BlogSearch from '@screens/blogApp/search';
import AddPost from '@screens/blogApp/addPost';
import Notification from '@screens/blogApp/notification';
import Profile from '@screens/blogApp/profile';
import {t} from 'i18next';
import {useValues} from '@App';
import {View, TouchableOpacity, Text, Animated,Modal} from 'react-native';
import appColors from '@theme/appColors';
import { bottomTabs } from '@utils/json/blog';
import styles from '../style/styles'

export default function blogTab({navigation}) {
  const {isDark} = useValues();
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selected) {
      shake();
    }
  }, [selected]);

  const selectTabValue = key => {
    setSelected(key);
    if (key === 2) setShowModal(true);
  };

  const changeTab = () => {
    setSelected(0);
    setShowModal(false);
  };

  useEffect(() => {
   selected && shake();
  }, [selected]);

  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotation = shakeAnimation.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-3deg', '3deg'],
  });

  return (
    <View style={{flex: 1}}>
      {selected === 0 ? (
        <BlogHome />
      ) : selected === 1 ? (
        <BlogSearch />
      ) : selected === 2 ? null : selected === 3 ? (
        <Notification />
      ) : (
        <Profile />
      )}
      <View
        style={[styles.blogTabContainer,{ backgroundColor: isDark ? appColors.blackColor : appColors.white,}]}>
        {bottomTabs.map((item, key) => (
          <TouchableOpacity activeOpacity={0.7}
            key={key}
            onPress={() => selectTabValue(key)}>
              {key !== 2 && key == selected &&  (
                  <View
                  style={[
                    styles.border,
                    {
                      borderTopColor: isDark
                        ? appColors.white
                        : appColors.fontColor,
                        left: key == 3 ? 15 : null
                    },
                  ]}
                />
              )}
<Animated.View
                style={[styles.center,
                   key === selected && {
                    transform: [{rotate: rotation}],
                  },
                ]}>
                 <View style={styles.center}>
         {key === selected  ? isDark ? item.darkIcon : item.activeIcon : isDark ? item.darkIcon : item.icon}
         </View>
                <Text
                  style={[
                    styles.label,
                    {
                      color: isDark
                        ? appColors.white
                        : key === selected
                        ? appColors.fontColor
                        : appColors.subTitle,
                    },
                  ]}>
                  {t(item.name)}
                </Text>
              </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{position: 'absolute'}}>
        <Modal transparent animationType="slide" visible={showModal}>
          <AddPost onPress={changeTab} navigation={navigation} />
        </Modal>
      </View>
    </View>
  );
}
