import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Button from '@commonComponents/button/button';
import blogStyle from '../style';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import ButtonWithIcon from '@commonComponents/button/buttonWithIcon';
import {GoogleIcon} from '@assets/images/blog_theme/svg/googleIcon';
import Apple1 from '@assets/images/common/svg/apple1';
import BackgroundImg from '@otherComponent/blog/background';

export default function blogGettingStarted({navigation}) {
  const {isDark} = useValues();
  return (
    <BackgroundImg
      content={
        <View style={styles.center}>
          <Button
            text={t('blog.continueWithEmail')}
            style={[
              blogStyle.buttonStyle,
              styles.button,

              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.fontColor,
              },
            ]}
            btnTextStyle={blogStyle.btn}
            onPress={() => {
              navigation.navigate('BlogSignIn');
            }}
          />
          <ButtonWithIcon
            mainContainer={[
              blogStyle.buttonStyle,
              {
                backgroundColor: isDark
                  ? appColors.darkTheme
                  : appColors.reviewsBg,
              },
            ]}
            btnStyle={styles.btnStyle}
            titleStyle={[
              styles.titleStyle,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}
            icon={<GoogleIcon color={isDark ? appColors.white : 'black'} />}
            title={t('blog.signInWithGoogle')}
          />
          <ButtonWithIcon
            mainContainer={[
              blogStyle.buttonStyle,
              {
                backgroundColor: isDark
                  ? appColors.darkTheme
                  : appColors.reviewsBg,
              },
            ]}
            btnStyle={styles.btnStyle}
            titleStyle={[
              styles.titleStyle,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}
            icon={
              <Apple1 color={isDark ? appColors.white : appColors.fontColor} />
            }
            title={t('blog.signinWithApple')}
          />
        </View>
      }
    />
  );
}
