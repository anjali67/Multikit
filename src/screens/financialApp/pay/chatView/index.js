import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import {messageList} from '@utils/json/financial';

export default function ChatView() {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, currValue, isRTL} =
    useValues();

  const [messages, setMessages] = useState(messageList);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([{sender: 'Sender', message: newMessage}, ...messages]);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        inverted
        data={messages}
        renderItem={({item}) => (
          <View
            style={[
              styles.myMessageContainer,
              {
                alignSelf: item.sender === 'Sender' ? 'flex-end' : 'flex-start',
                flexDirection: viewRTLStyle,
                backgroundColor: isDark
                  ? appColors.gray
                  : appColors.financeFont,
              },
            ]}>
            <View>
              <Text
                style={[
                  styles.message,
                  {
                    textAlign: textRTLStyle,
                    color: isDark ? appColors.darkTheme : appColors.gray,
                  },
                ]}>
                {t(item.message)}
              </Text>
              {item.dateTime && (
                <Text style={styles.dateTime}>{t(item.dateTime)}</Text>
              )}
            </View>
            <View>
              {item.payAmount && (
                <Text
                  style={[
                    styles.paymentText,
                    {
                      right: isRTL && 40,
                      color: isDark ? appColors.darkTheme : appColors.gray,
                    },
                  ]}>
                  {currSymbol}
                  {currValue * item.payAmount}
                </Text>
              )}
            </View>
          </View>
        )}
      />
      <View style={[styles.inputContainer, {flexDirection: viewRTLStyle}]}>
        <TextInput
          style={[
            styles.input,
            {
              right: isRTL && 14,
              backgroundColor: isDark
                ? appColors.financeDarkBg
                : appColors.inputBg,
              borderWidth: isDark ? 0.8 : 2,
              color: isDark ? appColors.darkTheme : appColors.gray,
            },
          ]}
          placeholderTextColor={
            isDark ? appColors.darkTheme : appColors.financeContent
          }
          placeholder={t('financial.writeMsg')}
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity
          onPress={handleSendMessage}
          activeOpacity={0.9}
          style={styles.buttonView}>
          <Text style={styles.payText}>{t('financial.pay')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
