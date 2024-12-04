import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {camera} from '@utils/images/images';
import styles from '../../style/styles';
import TextInput from '@otherComponent/chatting/textInput';
import {launchImageLibrary} from 'react-native-image-picker';
import Button from '@commonComponents/button/button';
import chattingStyles from '../../../styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function signUpView(props) {
  const {textRTLStyle, isDark} = useValues();
  const [selectedImage, setSelectedImage] = useState(null);
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  return (
    <View>
      <View style={styles.center}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={openImagePicker}
          style={styles.circleView}>
          {selectedImage ? (
            <Image
              source={{uri: selectedImage}}
              resizeMode="contain"
              style={styles.circleView}
            />
          ) : (
            <Image tintColor={'black'} source={camera} style={styles.image} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.blankView}></View>
      <TextInput
        inputRow={styles.inputStyle}
        label={'chatting.name'}
        placeholder={'chatting.yourName'}
      />
      <TextInput
        inputRow={styles.inputStyle}
        label={'chatting.email'}
        placeholder={'chatting.yourEmailId'}
      />
      <TextInput
        keyboardType={'numeric'}
        inputRow={styles.inputStyle}
        label={'hotelBooking.contactNumber'}
        placeholder={'chatting.yourContact'}
      />
      <TextInput
        showPasswordIcon
        secureTextEntry={true}
        inputRow={styles.inputStyle}
        label={'signIn.Password'}
        placeholder={'signIn.Password'}
      />
      <View style={styles.center}>
        <Button
          onPress={() => {
            props.navigation.navigate('ChatLogin');
          }}
          text={t('chatting.verifyCreateAccount')}
          style={[
            chattingStyles.buttonStyle,
            {
              marginTop: 10,
              backgroundColor: isDark ? appColors.blackColor : appColors.white,
            },
          ]}
          btnTextStyle={[
            chattingStyles.btn,
            {color: isDark ? appColors.white : appColors.chatText},
          ]}
        />
      </View>
    </View>
  );
}
