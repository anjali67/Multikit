import {View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Header from './header';
import foodOrderStyle from '../style/styles';
import ResturantItem from './resturantItem';
import CommonModal from '@commonComponents/commonModal';
import ProductModal from './productModal';
import AddItemView from './productModal/addItemView';
import styles from '../style/styles';
import {ResturentData} from '@utils/json/food';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import OfferView from './resturantItem/offerView';

export default function Restaurant({route, navigation}) {
  const [data, setData] = useState(route.params?.foodItem);
  const [showModal, setShowModal] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [viewCartItem, setViewCartItem] = useState([]);
  const [resturantData, setResturentData] = useState(ResturentData);
  const [showViewCartView, setShowViewCartView] = useState(false);
  const {isDark} = useValues();
  const animRef = useRef();

  const modalVisible = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showAnimation == true) {
      animation();
    }
  }, [showAnimation]);

  const animation = () => {
    animRef.current.animateView();
  };
  const onAddItem = itemId => {
    setShowModal(!showModal);
  };

  const matchItems = itemId => {
    const updatedSelectedItems = [...cartItems];
    const index = updatedSelectedItems.indexOf(itemId);

    if (index > -1) {
      updatedSelectedItems.splice(index, 1);
    } else {
      updatedSelectedItems.push(itemId);
    }
    setCartItems(updatedSelectedItems);
    ResturentData.map(data => {
      data.foodItem.map(item => {
        if (item.id === itemId) {
          setTotalPrice(item.price);
        }
      });
    });
  };

  const handleItemOnClick = itemId => {
    matchItems(itemId);
    handleAddToCart(cartItems, totalPrice);
  };

  const handleAddToCart = (cartItems, totalPrice) => {
    ResturentData.map(item => {
      item.foodItem.map(item => {
        if (cartItems.includes(item.id)) {
          const updatedPrice = totalPrice + item.price;
          setTotalPrice(updatedPrice);
        } else {
          return item;
        }
      });
    });
  };

  const handleDecrementPrice = id => {
    matchItems(id);
    ResturentData.map(item => {
      item.foodItem.map(item => {
        if (cartItems.includes(item.id)) {
          if (item.quantity > 0 && totalPrice > 0) {
            const updatedPrice = totalPrice - item.price;
            setTotalPrice(updatedPrice);
          }
        } else {
          return item;
        }
      });
    });
  };

  const onViewCart = () => {
    navigation.navigate('FoodCart', {
      notShowBottomTab: true,
      viewCartItem: viewCartItem,
    });
  };

  const getCartItems = items => {
    if (viewCartItem.length === 0) {
      setViewCartItem([items]);
    } else {
      var foundIndex = viewCartItem.findIndex(x => x.id == items.id);
      if (items.quantity !== 0) {
        if (foundIndex === -1) {
          setViewCartItem(item => [...item, items]);
        } else {
          viewCartItem[foundIndex].quantity = items.quantity;
        }
      }
    }
  };
  const AddClick = (id, item) => {
    getCartItems(item);
    const val = resturantData.map(item => {
      const newData = item.foodItem.map(item1 => {
        if (item1.id === id) {
          return {...item1, quantity: item1.quantity == 0 ? 1 : item1};
        } else {
          return item1;
        }
      });
      return {...item, foodItem: newData};
    });
    handleIncrement(id);
    setShowViewCartView(true);
    setResturentData(val);
    handleItemOnClick(id);
  };

  const incrementValue = 1;
  const decrementValue = 1;
  const handleIncrement = id => {
    const val = resturantData.map(item => {
      const newData = item.foodItem.map(item => {
        if (item.id === id) {
          const data = {...item, quantity: item.quantity + incrementValue};
          getCartItems(data);
          return data;
        } else {
          return item;
        }
      });
      return {...item, foodItem: newData};
    });

    setResturentData(val);
  };

  const handleDecrement = id => {
    const val = resturantData.map(item => {
      const newData = item.foodItem.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity:
              item.quantity >= 1 ? item.quantity - decrementValue : item,
          };
        } else {
          return item;
        }
      });
      return {...item, foodItem: newData};
    });
    setResturentData(val);
    handleDecrementPrice(id);
  };

  return (
    <View
      style={[
        foodOrderStyle.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}>
      <View>
        <Header data={data} />
        <OfferView />
        <ResturantItem
          handleDecrement={handleDecrement}
          selectedCheckboxes={selectedCheckboxes}
          onAddItem={onAddItem}
          AddClick={AddClick}
          handleIncrement={handleIncrement}
          resturantData={resturantData}
        />
        <CommonModal
          modal={
            <ProductModal
              setSelectedCheckboxes={setSelectedCheckboxes}
              selectedCheckboxes={selectedCheckboxes}
              showModal={modalVisible}
              setShowModal={setShowModal}
              totalQuantity={cartItems}
              price={totalPrice}
              showAnimation={showAnimation}
              setShowAnimation={setShowAnimation}
            />
          }
          showModal={showModal}
          visibleModal={modalVisible}
        />
      </View>
      {showViewCartView || selectedCheckboxes.length > 0 ? (
        <View
          style={[
            styles.bottomContainerView,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <AddItemView
            totalQuantity={cartItems}
            price={totalPrice}
            onViewCart={onViewCart}
            title={t('common.View Cart')}
            containerStyle={styles.containerStyle}
            btnStyle={styles.btnStyle}
            btnText={styles.btnText}
          />
        </View>
      ) : null}
    </View>
  );
}
