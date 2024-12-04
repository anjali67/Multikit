import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {vegetables} from '@utils/json/food';
import appColors from '@theme/appColors';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import CustomCheckboxItem from '@commonComponents/customCheckBox';
import {t} from 'i18next';
import styles from '../styles';
import AddItemView from '../addItemView';
import {useValues} from '@App';

export default function ProductItem(props) {
  const [moreText, setMoreText] = useState(false);
  const [data, setData] = useState(vegetables);
  const {viewRTLStyle, textRTLStyle, isDark, isRTL} = useValues();

  useEffect(() => {}, [onAddItemCart]);

  const displayShowMore = () => {
    setMoreText(!moreText);
  };
  const toggleCheckbox = itemId => {
    setData(
      prevItems =>
        prevItems.map(item =>
          item.id === itemId ? {...item, isChecked: !item.isChecked} : item,
        ),
      handleCheckboxSelection(itemId),
    );
  };
  const handleCheckboxSelection = itemId => {
    const updatedSelectedCheckboxes = [...props.selectedCheckboxes];
    const index = updatedSelectedCheckboxes.indexOf(itemId);
    if (index > -1) {
      updatedSelectedCheckboxes.splice(index, 1);
    } else {
      updatedSelectedCheckboxes.push(itemId);
    }
    props.setSelectedCheckboxes(updatedSelectedCheckboxes);
  };

  const onAddItemCart = () => {
    if (props.selectedCheckboxes == 0 && props.selectedCheckboxes.length <= 0) {
      props.showAnimation();
    } else {
      props.showAnimation();
      props.setShowModal(false);
    }
  };

  return (
    <View style={styles.mainView}>
      {data.map((item, index) => {
        return (
          <View>
            {!item.showmore && (
              <View
                style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                <Text style={styles.itemStyle}>{t(item.name)}</Text>
                <CustomCheckboxItem
                  item={item}
                  isChecked={item.isChecked}
                  toggleCheckbox={toggleCheckbox}
                />
              </View>
            )}
            {moreText && item.showmore && (
              <View
                style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                <Text style={styles.itemStyle}>{t(item.name)}</Text>
                <CustomCheckboxItem
                  item={item}
                  isChecked={item.isChecked}
                  toggleCheckbox={toggleCheckbox}
                />
              </View>
            )}
          </View>
        );
      })}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={displayShowMore}
        style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.more}>{t('productModal.+3 more')}</Text>
        <DownArrow height={44} color={appColors.foodBtn} />
      </TouchableOpacity>
      <AddItemView
        onViewCart={onAddItemCart}
        totalQuantity={props.cartItems}
        price={props.totalPrice}
        title={t('productModal.addItemtoCart')}
      />
    </View>
  );
}
