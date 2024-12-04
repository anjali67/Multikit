import React from 'react';
import {View} from 'react-native';
import ButtonWithIcon from '@commonComponents/button/buttonWithIcon';
import {Facebook} from '@assets/images/grocery_assets/svg/facebook';
import {googleLogo} from '@utils/images/images';
import {appleLogo} from '@utils/images/images';
import styles from '../styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function socialBtn(props) {
  const {isDark} = useValues();
  return (
    <View>
      {props.NotShowfaceBookBtn ? null : (
        <ButtonWithIcon
          mainContainer={[
            styles.mainContainer,
            {
              backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.reviewsBg,
            },
            props.mainViewStyle,
          ]}
          btnStyle={styles.btnStyle}
          titleStyle={[
            styles.titleStyle,
            {color: isDark ? appColors.white : appColors.reviewText},
            props.titleStyle,
          ]}
          icon={<Facebook width={'20'} height={'20'} color={'#3B5999'} />}
          title={t('ecommerceAuth.continueFacebook')}
        />
      )}
      <ButtonWithIcon
        mainContainer={[
          styles.mainContainer,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.reviewsBg,
          },
          props.mainViewStyle,
        ]}
        btnStyle={styles.btnStyle}
        titleStyle={[
          styles.titleStyle,
          {color: isDark ? appColors.white : appColors.reviewText},
          props.titleStyle,
        ]}
        image={googleLogo}
        title={t('ecommerceAuth.continueGoogle')}
      />
      <ButtonWithIcon
        mainContainer={[
          styles.mainContainer,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.reviewsBg,
          },
          props.mainViewStyle,
        ]}
        btnStyle={styles.btnStyle}
        titleStyle={[
          styles.titleStyle,
          {color: isDark ? appColors.white : appColors.reviewText},
          props.titleStyle,
        ]}
        image={appleLogo}
        title={t('nft.continueWithApple')}
        imageStyle={styles.imageStyle}
        tinColor={isDark ? appColors.white : appColors.blackColor}
      />
    </View>
  );
}
