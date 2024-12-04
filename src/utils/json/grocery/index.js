import Order from '@assets/images/drawer/order';
import Heart from '@assets/images/drawer/heart';
import Payment from '@assets/images/drawer/payment';
import Settings from '@assets/images/drawer/settings';
import Address from '@assets/images/drawer/address';
import Notification from '@assets/images/drawer/notification';

import {
  category,
  category1,
  category2,
  category3,
  groceryBanner,
  groceryBanner1,
  lowestPrice,
  lowestPrice1,
  lowestPrice2,
  everydayEssentials,
  everydayEssentials1,
  everydayEssentials2,
  category4,
  category5,
  category6,
  category7,
  category8,
  category9,
  category10,
  discover,
  masterCard,
  visa,
  product,
  product3,
  product4,
} from '../../images/images';
import appColors from '@theme/appColors';

export const categories = [
  {
    title: 'categoryArr.Fruits',
    image: category,
  },
  {
    title: 'categoryArr.Vegetables',
    image: category1,
  },
  {
    title: 'categoryArr.Fishes',
    image: category2,
  },
  {
    title: 'categoryArr.Fruits',
    image: category3,
  },
];

export const homeBanner = [
  {
    title: 'homeBanner.Farm Fresh Vegies',
    image: groceryBanner,
  },
  {
    title: 'homeBanner.Stock Up Now',
    image: groceryBanner1,
  },
];

export const lowestPrices = [
  {
    title: 'homePage.GrapesBangalore Blue with Seed',
    weight: 'homePage.500g',
    price: 25,
    image: lowestPrice,
  },
  {
    title: 'homePage.GrapesBangalore Blue with Seed',
    weight: 'homePage.500g',
     price: 25,
    image: lowestPrice1,
  },
  {
    title: 'homePage.GrapesBangalore Blue with Seed',
    weight: 'homePage.500g',
     price: 25,
    image: lowestPrice2,
  },
];

export const EverydayEssential = [
  {
    title: 'homePage.GrapesBangalore Blue with Seed',
    weight: 'homePage.500g',
     price: 25,
    image: everydayEssentials,
  },
  {
    title: 'homePage.GrapesBangalore Blue with Seed',
    weight: 'homePage.500g',
     price: 25,
    image: everydayEssentials1,
  },
  {
    title: 'homePage.GrapesBangalore Blue with Seed',
    weight: 'homePage.500g',
     price: 25,
    image: everydayEssentials2,
  },
];

export const offersData = [
  {
    id: 1,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: lowestPrice2,
     price: 25,
    value: 0,
  },
  {
    id: 2,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: lowestPrice,
     price: 25,
    value: 0,
  },
  {
    id: 3,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: lowestPrice1,
     price: 25,
    value: 0,
  },
];
export const menuItems = [
  {title: 'drawer.Orders', icon: <Order />, route: 'GroceryOrderSucess'},
  {title: 'drawer.Your Wishlist', icon: <Heart />, route: ''},
  {title: 'drawer.Payment', icon: <Payment />, route: 'GroceryPayment'},
  {title: 'drawer.Saved Address', icon: <Address />, route: 'GroceryAddress'},
  {title: 'drawer.Langauge', icon: '', route: ''},
  {title: 'drawer.Notification', icon: <Notification />, route: ''},
  {title: 'drawer.Settings', icon: <Settings />, route: ''},
  {title: 'drawer.Landing', icon: '', route: 'MainBottomTab'},
];

export const CategoriesData = [
  {id: 0, title: 'categoryArr.Fruits', image: category},
  {id: 1, title: 'categoryArr.Vegetables', image: category1},
  {id: 2, title: 'categoryArr.Fishes', image: category10},
  {id: 3, title: 'categoryArr.Breads', image: category4},
  {id: 4, title: 'categoryArr.Meat', image: category5},
  {id: 5, title: 'categoryArr.Fruits', image: category6},
  {id: 6, title: 'categoryArr.Frozen Food', image: category7},
  {id: 7, title: 'categoryArr.Cleaning', image: category8},
  {id: 8, title: 'categoryArr.Organic', image: category9},
];

export const shopData = [
  {
    id: 1,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: lowestPrice2,
    price: 25,
    value: 0,
  },
  {
    id: 2,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: lowestPrice,
    price: 25,
    value: 0,
  },
  {
    id: 3,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: everydayEssentials1,
    price: 25,
    value: 0,
  },
  {
    id: 4,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: everydayEssentials2,
     price: 25,
    value: 0,
  },
  {
    id: 5,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: everydayEssentials,
     price: 25,
    value: 0,
  },
  {
    id: 6,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: lowestPrice1,
     price: 25,
    value: 0,
  },
  {
    id: 7,
    title: 'homePage.Assorted Capsicum Combo',
    name: 'categoryArr.Fruits',
    image: lowestPrice2,
     price: 25,
    value: 0,
  },
];

export const cartData = [
  {
    title: 'homePage.Assorted Capsicum',
    image: lowestPrice2,
    weight: '500g',
     price: 25,
  },
  {
    title: 'homePage.Assorted Capsicum',
    image: lowestPrice,
    weight: '500g',
     price: 25,
  },
  {
    title: 'homePage.Assorted Capsicum',
    image: everydayEssentials1,
    weight: '500g',
     price: 25,
  },
  {
    title: 'homePage.Assorted Capsicum',
    image: everydayEssentials2,
    weight: '500g',
     price: 25,
  },
];

export const locationArr = [
  {
    name: 'locationArr.locationName',
    address: 'locationArr.locationAddress',
  },
  {
    name: 'locationArr.locationName',
    address: 'locationArr.locationAddress',
  },
];

export const payments = [
  {
    type: 'paymentsArr.selectCard',
    isCard: true,
    values: [
      {value: 'paymentsArr.card1', icons: masterCard},
      {value: 'paymentsArr.card2', icons: visa},
      {value: 'paymentsArr.card3', icons: discover},
    ],
  },
  {
    type: 'paymentsArr.netBanking',
    isCard: false,
    values: [
      {value: 'paymentsArr.netBankingType1'},
      {value: 'paymentsArr.netBankingType2'},
      {value: 'paymentsArr.netBankingType3'},
      {value: 'paymentsArr.netBankingType4'},
      {value: 'paymentsArr.netBankingType5'},
      {value: 'paymentsArr.netBankingType6'},
    ],
  },
  {
    type: 'paymentsArr.walletUPI',
    isCard: false,
    values: [
      {value: 'paymentsArr.waleetUPIType1'},
      {value: 'paymentsArr.waleetUPIType2'},
      {value: 'paymentsArr.waleetUPIType3'},
      {value: 'paymentsArr.waleetUPIType4'},
      {value: 'paymentsArr.waleetUPIType5'},
      {value: 'paymentsArr.waleetUPIType6'},
    ],
  },
  {
    type: 'paymentsArr.cashOnDelivery',
    isDelivery: true,
    cashDelivery: 'paymentsArr.cashOnDelivery',
  },
];

export const orderDetails = [
  {
    title: 'homePage.Assorted Capsicum',
    image: lowestPrice2,
    weight: '500g',
     price: 25,
    quantity: 1,
  },
  {
    title: 'homePage.Assorted Capsicum',
    image: lowestPrice,
    weight: '500g',
     price: 25,
    quantity: 1,
  },
  {
    title: 'homePage.Assorted Capsicum',
    image: everydayEssentials1,
    weight: '500g',
     price: 25,
    quantity: 1,
  },
];

export const searchArr = [
  {result: 'products.productName1'},
  {result: 'products.productName2'},
  {result: 'products.productName3'},
  {result: 'products.productName4'},
];

export const trendingCategory = [
  {title: 'categoryArr.Fruits'},
  {title: 'categoryArr.Vegetables'},
  {title: 'categoryArr.Fishes'},
  {title: 'categoryArr.Fruits'},
];

export const profileData = [
  {
    title: 'drawer.Orders',
    icon: <Order color={appColors.black} />,
    darkIcon: <Order color={appColors.white} />,
    route: 'GroceryOrderSucess',
  },
  {
    title: 'drawer.Your Wishlist',
    icon: <Heart color={appColors.black} />,
    darkIcon: <Heart color={appColors.white} />,
    route: '',
  },
  {
    title: 'drawer.Payment',
    icon: <Payment color={appColors.black} />,
    darkIcon: <Payment color={appColors.white} />,
    route: 'GroceryPayment',
  },
  {
    title: 'drawer.Saved Address',
    icon: <Address color={appColors.black} />,
    darkIcon: <Address color={appColors.white} />,
    route: 'GroceryAddress',
  },
  {title: 'drawer.Langauge', icon: '', route: ''},
  {
    title: 'drawer.Notification',
    icon: <Notification color={appColors.black} />,
    darkIcon: <Notification color={appColors.white} />,
    route: '',
  },
  {
    title: 'drawer.Settings',
    icon: <Settings color={appColors.black} />,
    darkIcon: <Settings color={appColors.white} />,
    route: '',
  },
];

export const groceryData = [
  {id: 1, image: product},
  {id: 2, image: product3},
  {id: 3, image: product4},
];

export const quantity = [
  {gram: 'quantityArr.gram1', price: 24},
  {gram: 'quantityArr.gram2', price: 34},
  {gram: 'quantityArr.gram3', price: 48},
  {gram: 'quantityArr.gram4', price: 70},
  {gram: 'quantityArr.gram5', price: 100},
  {gram: 'quantityArr.gram6', price: 150},
];

export const delivery = [
  {delivery: 'deliveryTimeArr.deliveryTime1'},
  {delivery: 'deliveryTimeArr.deliveryTime2'},
  {delivery: 'deliveryTimeArr.deliveryTime3'},
  {delivery: 'deliveryTimeArr.deliveryTime4'},
  {delivery: 'deliveryTimeArr.deliveryTime5'},
  {delivery: 'deliveryTimeArr.deliveryTime6'},
];
