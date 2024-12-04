import React from 'react';
import {View, Modal} from 'react-native';

export default function popupModal(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => props.setModalVisible(false)}>
        {props.content}
      </Modal>
    </View>
  );
}
