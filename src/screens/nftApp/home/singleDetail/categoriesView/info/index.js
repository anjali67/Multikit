import React from 'react';
import {View, Text} from 'react-native';
import style from '../../../styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {fontSizes} from '@theme/appConstant';

export default function info() {
  const {isDark, viewRTLStyle} = useValues();
  const Row = props => (
    <View
      style={[
        style.offerView,
        {justifyContent: 'space-between', flexDirection: viewRTLStyle},
      ]}>
      <Text style={[style.nameStyle, {fontSize: fontSizes.FONT20}]}>
        {props.title}
      </Text>
      {props.content && (
        <Text
          style={[
            style.nameStyle,
            {
              color: props.color
                ? props.color
                : isDark
                ? appColors.white
                : appColors.cabContent,
              fontSize: fontSizes.FONT20,
            },
          ]}>
          {props.content}
        </Text>
      )}
    </View>
  );

  return (
    <View>
      <Row
        title={t('nft.contractAddress')}
        content={t('nft.2xff9c...13d7')}
        color={appColors.nftBg}
      />
      <Row title={t('nft.tokenId')} />
      <Row title={t('nft.tokenStandard')} content={t('nft.GTC-656')} />
      <Row
        title={t('nft.metaData')}
        color={appColors.nftBg}
        content={t('nft.frozen')}
      />
      <Row title={t('nft.chain')} content={t('nft.ethereum')} />
      <Row title={t('nft.creatorFee')} content={'6%'} />
    </View>
  );
}
