import React, {useState} from 'react';
import {View, FlatList, Image} from 'react-native';
import {messageList} from '@utils/json/chatting';
import styles from '../styles';
import {windowHeight} from '@theme/appConstant';
import {chatBg} from '@utils/images/images';
import ChatInput from '../chatInput';
import MessageList from './messageList';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function chatMessage(props) {
  const {isDark} = useValues();

  const [messages, setMessages] = useState(messageList);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages,
        {
          sender: 'Sender',
          message: newMessage,
          messageType: 'msg',
          readMsg: true,
        },
      ]);
      setNewMessage('');
    }
  };
  const handleEmojiSelect = emoji => {
    setNewMessage(prevText => prevText + emoji.emoji);
  };

  return (
    <View style={styles.mainChat}>
      <Image
        source={chatBg}
        style={[
          styles.image,
          {
            opacity: isDark ? 0.3 : 0.04,
            backgroundColor: isDark ? appColors.blackColor : appColors.white,
          },
        ]}
      />
      <View style={styles.innerView}>
        <View style={styles.chatView}>
          <View>
            <FlatList
              contentContainerStyle={{paddingBottom: windowHeight(25)}}
              showsVerticalScrollIndicator={false}
              data={messages}
              renderItem={({index, item}) => (
                <MessageList item={item} index={index} />
              )}
            />
          </View>
        </View>
        <View style={styles.bottomView}>
          <ChatInput
            value={newMessage}
            onChangeText={setNewMessage}
            handleSendMessage={handleSendMessage}
            handleEmojiSelect={handleEmojiSelect}
            setShowModal={props.setShowModal}
          />
        </View>
      </View>
    </View>
  );
}
