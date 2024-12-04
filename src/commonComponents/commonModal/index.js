import {View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useValues} from '@App';

export default function CommonModal(props) {
  const {isDark} = useValues();
  return (
    props.showModal && (
      <View style={styles.mainView}>
        <Modal
          transparent
          animationType="slide"
          onRequestClose={props.visibleModal}>
          <TouchableOpacity
            style={styles.subView}
            onPress={props.visibleModal}
            activeOpacity={1}>
            {props.modal}
          </TouchableOpacity>
        </Modal>
      </View>
    )
  );
}
