import Order from '@assets/images/drawer/order';
import Heart from '@assets/images/drawer/heart';
import Payment from '@assets/images/drawer/payment';
import Settings from '@assets/images/drawer/settings';
import Address from '@assets/images/drawer/address';
import Notification from '@assets/images/drawer/notification';
import {Mappin} from '@assets/images/grocery_assets/svg/mappin';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import {Home} from '@assets/images/ecommerce_theme/svg/home';
import {Building} from '@assets/images/ecommerce_theme/svg/building';
import appColors from '@theme/appColors';
import {
  women,
  men,
  kid,
  Beauty,
  home,
  ecommerceProduct,
  ecommerceProduct1,
  ecommerceProduct2,
  ecommerceProduct3,
  ecommerceProduct4,
  ecommerceProduct5,
  ecommerceProduct6,
  ecommerceProduct7,
  ecommerceProduct8,
  ecommerceProduct9,
  ecommerceProduct10,
  ecommerceProduct11,
  ecommerceProduct12,
  ecommerceProduct14,
  ecommerceProduct15,
  ecommerceProduct16,
  ecommerceProduct17,
  ecommerceProduct18,
  ecommerceProduct19,
} from '../../images/images';

export const ecommerceMenuItems = [
  {
    title: 'drawer.Orders',
    icon: <Order color={appColors.ecommerceFont} />,
    route: 'EcommerceOrderHistory',
    darkIcon: <Order color={appColors.white} />,
  },
  {
    title: 'drawer.Your Wishlist',
    icon: <Heart color={appColors.ecommerceFont} height={19} width={19} />,
    route: 'ecommerceWishlist',
    darkIcon: <Heart color={appColors.white} />,
  },
  {
    title: 'drawer.Payment',
    icon: <Payment color={appColors.ecommerceFont} />,
    route: 'EcommercePayment',
    darkIcon: <Payment color={appColors.white} />,
  },
  {
    title: 'drawer.Saved Address',
    icon: <Address color={appColors.ecommerceFont} />,
    route: 'EcommerceSavedAddresss',
    darkIcon: <Address color={appColors.white} />,
  },
  {title: 'drawer.Langauge', icon: '', route: ''},
  {
    title: 'drawer.Notification',
    icon: <Notification color={appColors.ecommerceFont} />,
    route: '',
    darkIcon: <Notification color={appColors.white} />,
  },
  {
    title: 'drawer.Settings',
    icon: <Settings color={appColors.ecommerceFont} />,
    route: '',
    darkIcon: <Settings color={appColors.white} />,
  },
];

export const categories = [
  {
    title: 'ecommerce.women',
    image: women,
  },
  {
    title: 'ecommerce.men',
    image: men,
  },
  {
    title: 'ecommerce.kids',
    image: kid,
  },
  {
    title: 'ecommerce.beauty',
    image: Beauty,
  },
  {
    title: 'bottomTab.home',
    image: home,
  },
];

export const productData = [
  {
    image: ecommerceProduct,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct1,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct2,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct3,
    title: 'products.productName3',
  },
];

export const ecommerceCategories = [
  {
    title: 'ecommerce.women',
  },
  {
    title: 'ecommerce.men',
  },
  {
    title: 'ecommerce.kids',
  },
  {
    title: 'ecommerce.footwear',
  },
];

export const recentSearch = [
  {
    result: 'products.productName1',
  },
  {
    result: 'products.productName2',
  },
  {
    result: 'products.productName3',
  },
  {
    result: 'products.productName4',
  },
];

export const shopData = [
  {
    productName: 'ecommerce.newArrivals',
    image: ecommerceProduct4,
  },
  {
    productName: 'ecommerce.tops&Tees',
    image: ecommerceProduct5,
  },
  {
    productName: 'ecommerce.blouses',
    image: ecommerceProduct6,
  },
  {
    productName: 'ecommerce.bottomwear',
    image: ecommerceProduct7,
  },
  {
    productName: 'ecommerce.accessories',
    image: ecommerceProduct8,
  },
  {
    productName: 'ecommerce.shoes',
    image: ecommerceProduct9,
  },
  {
    productName: 'ecommerce.nightwear',
    image: ecommerceProduct10,
  },
  {
    productName: 'ecommerce.lingerie',
    image: ecommerceProduct11,
  },
  {
    productName: 'ecommerce.swimwear',
    image: ecommerceProduct12,
  },
];

export const productHistoryData = [
  {
    image: ecommerceProduct,
    name: 'ecommerce.product_Name',
    delivered: 'ecommerce.ongoing',
    size: 'ecommerce.smallSize',
    quantity: 1,
    price: 25,
  },
  {
    image: ecommerceProduct1,
    name: 'ecommerce.product_Name',
    delivered: 'foodOrder.delivered',
    size: 'ecommerce.smallSize',
    quantity: 1,
    price: 25,
  },
  {
    image: ecommerceProduct2,
    name: 'ecommerce.product_Name',
    delivered: 'foodOrder.delivered',
    size: 'ecommerce.smallSize',
    quantity: 1,
    price: 25,
  },
  {
    image: ecommerceProduct3,
    name: 'ecommerce.product_Name',
    delivered: 'foodOrder.delivered',
    size: 'ecommerce.smallSize',
    quantity: 1,
    price: 25,
  },
];

export const wishlistData = [
  {
    image: ecommerceProduct,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct1,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct2,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct3,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct4,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct5,
    title: 'products.productName3',
  },
];

export const orderData = [
  {
    image: ecommerceProduct,
    name: 'ecommerce.product_Name',
    size: 'ecommerce.smallSize',
    quantity: 1,
    price: 25,
  },
];

export const orderTrackData = [
  {
    title: 'ecommerce.Ordered',
    time: 'ecommerce.time',
    icon: <Mappin color={appColors.white} />,
    date: '21/05/2020',
  },
  {
    title: 'ecommerce.In Transit',
    time: 'ecommerce.time',
    icon: <Mappin color={appColors.white} />,
    date: ' 21/05/2020',
  },
  {
    title: 'ecommerce.outOFDelivery',
    time: 'ecommerce.expectedDelivery',
    icon: <ClockOutline color={appColors.white} />,
  },
];

export const savedAddressData = [
  {
    icon: <Home height={'19'} width={'19'} color={appColors.white} />,
    name: 'bottomTab.home',
    title: 'ecommerce.deliveredAddress',
    address: 'ecommerce.orderAddress',
    phoneNo: '903-239-1284',
  },
  {
    icon: <Building />,
    name: 'orderPlaced.office',
    title: 'ecommerce.deliveredAddress1',
    address: 'ecommerce.addressContent',
    phoneNo: '317-898-0622',
  },
  {
    icon: <Building />,
    name: 'ecommerce.other',
    title: 'ecommerce.deliveredAddress1',
    address: 'ecommerce.addressContent',
    phoneNo: '317-898-0622',
  },
];
export const order = [
  {
    image: ecommerceProduct,
    name: 'ecommerce.productname',
    size: 'ecommerce.smallSize',
    price: 25,
    quantity: 1,
  },
  {
    image: ecommerceProduct1,
    name: 'ecommerce.productname',
    size: 'ecommerce.smallSize',
    price: 25,
    quantity: 1,
  },
];

export const cartData = [
  {
    image: ecommerceProduct,
    name: 'ecommerce.productname',
    size: 'ecommerce.smallSize',
    quantity: 1,
    price: 25,
  },
  {
    image: ecommerceProduct3,
    name: 'ecommerce.productname',
    size: 'ecommerce.smallSize',
    quantity: 1,
    price: 25,
  },
  {
    image: ecommerceProduct2,
    name: 'ecommerce.productname',
    size: 'ecommerce.smallSize',
    quantity: 1,
    price: 25,
  },
];

export const productSection = [
  {id: 0, image: ecommerceProduct},
  {id: 0, image: ecommerceProduct12},
  {id: 0, image: ecommerceProduct14},
  {id: 1, image: ecommerceProduct15},
  {id: 1, image: ecommerceProduct16},
  {id: 2, image: ecommerceProduct14},
  {id: 2, image: ecommerceProduct17},
  {id: 2, image: ecommerceProduct18},
];

export const colorSection = [
  {id: 0, image: ecommerceProduct},
  {id: 1, image: ecommerceProduct15},
  {id: 2, image: ecommerceProduct19},
];

export const sizeSection = [
  {size: 'ecommerce.smallSize'},
  {size: 'ecommerce.midiumSize'},
  {size: 'ecommerce.largeSize'},
  {size: 'ecommerce.xlSize'},
  {size: 'ecommerce.2xlSize'},
];

export const womenCollection = [
  {
    image: ecommerceProduct,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct1,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct2,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct3,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct4,
    title: 'products.productName3',
  },
  {
    image: ecommerceProduct5,
    title: 'products.productName3',
  },
];
export const progressData = [
  {
    id: 1,
    progress: 120,
    rate: 5,
  },
  {
    id: 2,
    progress: 100,
    rate: 4,
  },
  {
    id: 3,
    progress: 90,
    rate: 3,
  },
  {
    id: 4,
    progress: 80,
    rate: 2,
  },
  {
    id: 5,
    progress: 60,
    rate: 1,
  },
];

export const reviews = [
  {
    title: 'ecommerce.reviewTitle',
    date: 'ecommerce.reviewDate',
    content: 'ecommerce.reviewContent',
    rate: 4.5,
  },
  {
    title: 'ecommerce.reviewTitle',
    date: 'ecommerce.reviewDate',
    content: 'ecommerce.reviewContent1',
    rate: 4.5,
  },
];
