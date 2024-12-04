import React from 'react';
import {View, Image, FlatList} from 'react-native';
import styles from './styles';
import {attachementData} from '@utils/json/chatting';

export default function shareOptionsModal() {
  return (
    <View style={styles.modal}>
      <FlatList
        numColumns={3}
        data={attachementData}
        renderItem={({index, item}) => {
          return (
            <View style={[styles.circleView, {backgroundColor: item.bgColor}]}>
              <Image
                tintColor={'white'}
                source={item.icon}
                style={styles.image}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
