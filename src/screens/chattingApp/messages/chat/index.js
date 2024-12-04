import React, {useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import ChatHeader from '@otherComponent/chatting/chatHeader';
import {t} from 'i18next';
import ChatMessage from './chatMessage';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import CommonModal from '@commonComponents/commonModal';
import ShareOptionsModal from '@otherComponent/chatting/shareOptionsModal';

export default function chat({navigation}) {
  const {isDark} = useValues();
  const [showModal, setShowModal] = useState(false);
  const modalVisible = () => {
    setShowModal(!showModal);
  };
  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={styles.mainView}>
        <KeyboardAvoidingView
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: appColors.chattingBg,
          }}>
          <ChatHeader
            containerView={{marginVertical: 0, padding: 15}}
            chatScreen
            contentStyle={styles.contentStyle}
            content={t('chatting.latMessage')}
            showUserProfile
            showBackArrow={true}
            navigation={navigation}
            color={appColors.chatText}
          />
          <View
            style={[
              styles.mainView,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}>
            <ChatMessage setShowModal={setShowModal} />

            <CommonModal
              modal={
                <View style={[styles.modalContainer]}>
                  <ShareOptionsModal />
                </View>
              }
              showModal={showModal}
              visibleModal={modalVisible}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
