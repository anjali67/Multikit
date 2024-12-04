import {
  foodBanner,
  foodBanner1,
  cuisine,
  cuisine1,
  cuisine2,
  cuisine3,
  fastDelivery,
  pureVeg,
  offer,
  nearBy1,
  nearBy2,
  nearBy3,
  resturantProduct,
  resturantProduct1,
  resturantProduct2,
  resturantProduct3,
  resturantProduct4,
  resturantProduct5,
  addressBook,
  card,
  language,
  wallet,
  orders,
  placeholder,
  resturantProduct6,
  resturantProduct7,
  resturantProduct8,
  resturantProduct9,
  resturantProduct10,
  resturantProduct11,
  resturantProduct13,
  resturantProduct14,
  bell,
  door,
} from '../../images/images';
export const homeBanner = [
  {
    title: 'foodBanner.title',
    image: foodBanner,
    offerDiscount: 'foodBanner.offerDiscount',
    termsCondition: 'foodBanner.termsCondition',
  },
  {
    title: 'foodBanner.title',
    image: foodBanner1,
    offerDiscount: 'foodBanner.offerDiscount',
    termsCondition: 'foodBanner.termsCondition',
  },
];

export const cuisineData = [
  {
    image: cuisine2,
    title: 'foodBanner.Maxican',
  },
  {
    image: cuisine,
    title: 'foodBanner.Chinese',
  },
  {
    image: cuisine1,
    title: 'foodBanner.Italian',
  },
  {
    image: cuisine3,
    title: 'foodBanner.Thai',
  },
];

export const DeliverData = [
  {
    image: fastDelivery,
    title: 'foodBanner.fastDelivery',
  },
  {
    image: pureVeg,
    title: 'foodBanner.pureVeg',
  },
  {
    image: offer,
    title: 'foodBanner.greateOffer',
  },
];

export const nearByData = [
  {
    image: nearBy1,
    title: 'NearbyArr.soupFactory',
    content: 'NearbyArr.factoryContent',
    time: 'NearbyArr.factorytime',
    distance: 'NearbyArr.factoryDistance',
    rating: '4.7',
  },
  {
    image: nearBy2,
    title: 'NearbyArr.nachoSpot',
    content: 'NearbyArr.nachoContent',
    time: 'NearbyArr.nachoTime',
    distance: 'NearbyArr.nachoDistance',
    rating: '5.0',
  },
  {
    image: nearBy3,
    title: 'NearbyArr.farmTable',
    content: 'NearbyArr.farmContent',
    time: 'NearbyArr.farmTime',
    distance: 'NearbyArr.farmDistance',
    rating: '4.2',
  },
];

export const productData = [
  {
    image: resturantProduct,
    title: 'featuredResturantArr.productTitle',
    content: 'NearbyArr.nachoContent',
    time: 'featuredResturantArr.time',
    distance: 'featuredResturantArr.distance',
    offer: 'featuredResturantArr.offerDiscount',
    bestSeller: 'featuredResturantArr.bestSeller',
    rating: 4.1,
  },
  {
    image: resturantProduct1,
    title: 'featuredResturantArr.productTitle',
    content: 'NearbyArr.factoryContent',
    time: 'NearbyArr.farmTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount1',
    rating: 4.2,
  },
  {
    image: resturantProduct2,
    title: 'featuredResturantArr.product2Title',
    content: 'NearbyArr.farmContent',
    time: 'NearbyArr.nachoTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount',
    rating: 4.4,
  },
];

export const foodData = [
  {
    image: resturantProduct3,
    title: 'foodBanner.zenGarden',
    content: 'NearbyArr.nachoContent',
    time: 'featuredResturantArr.time',
    distance: 'featuredResturantArr.distance',
    offer: 'featuredResturantArr.offerDiscount',
    rating: 4.1,
  },
  {
    image: resturantProduct4,
    title: 'foodBanner.yinAndYummy',
    content: 'NearbyArr.factoryContent',
    time: 'NearbyArr.farmTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount1',
    rating: 4.2,
  },
  {
    image: resturantProduct5,
    title: 'featuredResturantArr.product2Title',
    content: 'NearbyArr.farmContent',
    time: 'NearbyArr.nachoTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount',
    rating: 4.4,
  },
];

export const resentSearchData = [
  {
    result: 'NearbyArr.soupFactory',
  },
  {
    result: 'NearbyArr.nachoSpot',
  },
  {
    result: 'NearbyArr.cheeseBurstPizza',
  },
  {
    result: 'NearbyArr.mexicanFood',
  },
];

export const profileData = [
  {
    title: 'drawer.Orders',
    innerPages: [
      {
        title: 'drawer.Orders',
        icon: orders,
        seperator: true,
        gotoScreen: 'FoodOrder',
      },
      {
        title: 'foodProfile.favouriteOrders',
        icon: placeholder,
        seperator: true,
        gotoScreen: 'FavouriteOrders',
      },
      {
        title: 'foodProfile.addressBook',
        icon: addressBook,
        seperator: false,
        gotoScreen: 'AddressBook',
      },
    ],
  },
  {
    title: 'foodProfile.payments',
    innerPages: [
      {
        title: 'foodProfile.Wallets',
        icon: wallet,
        seperator: true,
        gotoScreen: '',
      },
      {
        title: 'foodProfile.SavedCard',
        icon: card,
        seperator: false,
        gotoScreen: '',
      },
    ],
  },
  {
    title: 'foodProfile.Language',
    innerPages: [
      {
        title: 'foodProfile.English',
        icon: language,
        seperator: false,
        gotoScreen: '',
      },
    ],
  },
];

export const OrdersData = [
  {
    title: 'NearbyArr.soupFactory',
    image: resturantProduct6,
    content: 'foodOrder.content',
    paid: 30,
    date: 'foodOrder.dateMonth',
    time: 'foodOrder.time',
    items: [
      {name: 'foodOrder.soupItem'},
      {name: 'foodOrder.soupItem1'},
      {name: 'foodOrder.soupItem2'},
    ],
  },
  {
    title: 'featuredResturantArr.product1Title',
    image: resturantProduct,
    content: 'foodOrder.content',
    paid: 50,
    date: 'foodOrder.dateMonth1',
    time: 'foodOrder.time1',
    items: [{name: 'foodOrder.earthItem'}, {name: 'foodOrder.earthItem1'}],
  },
  {
    title: 'NearbyArr.farmTable',
    image: resturantProduct6,
    content: 'foodOrder.content',
    paid: 30,
    date: 'foodOrder.dateMonth',
    time: 'foodOrder.time',
    items: [
      {name: 'foodOrder.soupItem'},
      {name: 'foodOrder.soupItem1'},
      {name: 'foodOrder.soupItem2'},
    ],
  },
];

export const faviourateOrderData = [
  {
    image: resturantProduct,
    title: 'featuredResturantArr.productTitle',
    content: 'NearbyArr.nachoContent',
    time: 'featuredResturantArr.time',
    distance: 'featuredResturantArr.distance',
    offer: 'featuredResturantArr.offerDiscount',
    rating: 4.1,
  },
  {
    image: resturantProduct1,
    title: 'featuredResturantArr.productTitle',
    content: 'NearbyArr.factoryContent',
    time: 'NearbyArr.farmTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount1',
    rating: 4.2,
  },
  {
    image: resturantProduct3,
    title: 'featuredResturantArr.product2Title',
    content: 'NearbyArr.farmContent',
    time: 'NearbyArr.nachoTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount',
    rating: 4.4,
  },
  {
    image: resturantProduct4,
    title: 'featuredResturantArr.product2Title',
    content: 'NearbyArr.farmContent',
    time: 'NearbyArr.nachoTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount',
    rating: 4.4,
  },
];

export const shopOrderData = [
  {
    image: resturantProduct4,
    title: 'featuredResturantArr.productTitle',
    content: 'NearbyArr.nachoContent',
    time: 'featuredResturantArr.time',
    distance: 'featuredResturantArr.distance',
    offer: 'featuredResturantArr.offerDiscount',
    bestSeller: 'featuredResturantArr.bestSeller',
    rating: 4.1,
  },
  {
    image: resturantProduct,
    title: 'featuredResturantArr.productTitle',
    content: 'NearbyArr.factoryContent',
    time: 'NearbyArr.farmTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount1',
    bestSeller: 'featuredResturantArr.newlyopen',
    rating: 4.2,
  },
  {
    image: resturantProduct1,
    title: 'featuredResturantArr.product2Title',
    content: 'NearbyArr.farmContent',
    time: 'NearbyArr.nachoTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount',
    rating: 4.4,
  },
  {
    image: resturantProduct3,
    title: 'featuredResturantArr.product2Title',
    content: 'NearbyArr.farmContent',
    time: 'NearbyArr.nachoTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount',
    rating: 4.4,
  },
  {
    image: resturantProduct4,
    title: 'featuredResturantArr.productTitle',
    content: 'NearbyArr.nachoContent',
    time: 'featuredResturantArr.time',
    distance: 'featuredResturantArr.distance',
    offer: 'featuredResturantArr.offerDiscount',
    rating: 4.1,
  },
  {
    image: resturantProduct,
    title: 'featuredResturantArr.productTitle',
    content: 'NearbyArr.factoryContent',
    time: 'NearbyArr.farmTime',
    distance: 'NearbyArr.farmDistance',
    offer: 'featuredResturantArr.offerDiscount1',
    rating: 4.2,
  },
];

export const ResturentData = [
  {
    title: 'foodResturants.recommended',
    foodItem: [
      {
        id: 0,
        image: resturantProduct7,
        title: 'foodResturants.vegCheese',
        rate: '4.5',
        price: 25,
        clickedItem: false,
        quantity: 0,
      },
      {
        id: 1,
        image: resturantProduct4,
        title: 'foodResturants.barbarescaPasta',
        rate: '4.5',
        price: 25,
        clickedItem: false,
        quantity: 0,
      },
      {
        id: 2,
        image: resturantProduct5,
        title: 'foodResturants.sproutsSalad',
        rate: '4.5',
        price: 35,
        clickedItem: false,
        quantity: 0,
      },
    ],
  },
  {
    title: 'foodResturants.quickBites',
    foodItem: [
      {
        id: 3,
        image: resturantProduct6,
        title: 'foodResturants.fries',
        rate: '4.5',
        price: 25,
        clickedItem: false,
        quantity: 0,
      },
      {
        id: 4,
        image: resturantProduct8,
        title: 'foodResturants.cheeseSticks',
        rate: '4.5',
        price: 25,
        clickedItem: false,
        quantity: 0,
      },
      {
        id: 5,
        image: resturantProduct9,
        title: 'foodResturants.garlicBread',
        rate: '4.5',
        price: 35,
        clickedItem: false,
        quantity: 0,
      },
      {
        id: 6,
        image: resturantProduct10,
        title: 'foodResturants.sandwich',
        rate: '4.5',
        price: 35,
        clickedItem: false,
        quantity: 0,
      },
    ],
  },
  {
    title: 'foodResturants.sandwiches',
    foodItem: [
      {
        id: 7,
        image: resturantProduct10,
        title: 'foodResturants.grilledSandwich',
        rate: '4.5',
        price: 25,
        clickedItem: false,
        quantity: 0,
      },
      {
        id: 8,
        image: resturantProduct11,
        title: 'foodResturants.hamSandwich',
        rate: '4.5',
        price: 25,
        clickedItem: false,
        quantity: 0,
      },
      {
        id: 9,
        image: resturantProduct13,
        title: 'foodResturants.cheeseSandwich',
        rate: '4.5',
        price: 35,
        clickedItem: false,
        quantity: 0,
      },
    ],
  },
  {
    title: 'foodResturants.pizza',
    foodItem: [
      {
        id: 10,
        image: resturantProduct13,
        title: 'foodResturants.greekPizza',
        rate: '4.5',
        price: 25,
        clickedItem: false,
        quantity: 0,
      },
      {
        id: 11,
        image: resturantProduct14,
        title: 'foodResturants.margherita',
        rate: '4.5',
        price: 35,
        clickedItem: false,
        quantity: 0,
      },
    ],
  },
];

export const ResturantItems = [
  {title: 'foodResturants.recommended'},
  {title: 'foodResturants.quickBites'},
  {title: 'foodResturants.sandwiches'},
  {title: 'foodResturants.pizza'},
];

export const vegetables = [
  {id: 0, name: 'productModal.lettuce', showmore: false, isChecked: false},
  {id: 1, name: 'productModal.cucumbers', showmore: false, isChecked: false},
  {id: 2, name: 'productModal.tomatoes', showmore: false, isChecked: false},
  {id: 3, name: 'productModal.capsicums', showmore: false, isChecked: false},
  {id: 4, name: 'productModal.olives', showmore: true, isChecked: false},
  {id: 5, name: 'productModal.onion', showmore: true, isChecked: false},
  {id: 6, name: 'productModal.babyCorn', showmore: true, isChecked: false},
];

export const viewCartData = [
  {
    id: 0,
    image: resturantProduct10,
    title: 'foodResturants.grilledSandwich',
    price: 25,
  },
  {
    id: 1,
    image: resturantProduct11,
    title: 'foodResturants.hamSandwich',
    price: 25,
  },
  {
    id: 2,
    image: resturantProduct13,
    title: 'foodResturants.cheeseSandwich',
    price: 35.0,
  },
];

export const deliveryData = [
  {
    id: 0,
    name: 'foodCart.leaveAtDoor',
    image: door,
    isChecked: false,
  },
  {
    id: 1,
    name: 'foodCart.dontRingBell',
    image: bell,
    isChecked: false,
  },
];

export const myOffers = [
  {
    off: 'myOffersArr.off1',
    onOrderAbove: 'myOffersArr.orderabove',
    onOrder: 'myOffersArr.onOrder',
    code: 'myOffersArr.offerCode',
    price: 20,
  },
  {
    off: 'myOffersArr.off2',
    onOrderAbove: 'myOffersArr.hdfcCredit',
    onOrder: 'myOffersArr.onOrder',
    code: 'myOffersArr.offerCode',
    price: 25,
  },
  {
    off: 'myOffersArr.off3',
    onOrderAbove: 'myOffersArr.hdfcCredit',
    onOrder: 'myOffersArr.onOrder',
    code: 'myOffersArr.offerCode',
    price: 40,
  },
];

export const Offers = [
  {
    title: 'offers.title',
    content: 'offers.content',
  },
  {
    title: 'offers.title1',
    content: 'offers.content1',
  },
];
