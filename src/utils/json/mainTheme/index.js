import {
  groceryApp,
  fitnessApp,
  financialApp,
  ecommerceApp,
  chattingApp,
  cabBookingApp,
  blogApp,
  learningApp,
  nftApp,
  hotelBookingApp,
  foodOrderApp,
  onBoarding,
  signIn,
  signUp,
  bottomPanel,
  homePage,
  accountSetting,
  listing,
  gridBox,
  payment,
  search,
  bookGif,
  splashLogo,
  grocerySplash,
  financeLogo,
  nftLoader,
  chatLoader,
  moon,
  globe,
  leftToRight,
  currency,
} from '../../images/images';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import {UserPlus} from '@assets/images/chat_theme/svg/userPlus';
import {Check} from '@assets/images/ecommerce_theme/svg/check';
import {Cross} from '@assets/images/common/svg/cross';
import {Pause} from '@assets/images/fitness_theme/svg/pause';
import {File} from '@assets/images/learning_theme/svg/file';
import { StarIcon } from '../../../assets/images/hotel_theme/svg/ratingStar';
import {Play} from '@assets/images/fitness_theme/svg/play';
import {Send} from '@assets/images/chat_theme/svg/send';
import {BookMark} from '@assets/images/hotel_theme/svg/bookmark';
import {Share} from '@assets/images/blog_theme/svg/share';
import {LockIcon} from '@assets/images/blog_theme/svg/lock';
import {MicIcon} from '@assets/images/blog_theme/svg/mic';
import {SettingIcon} from '@assets/images/blog_theme/svg/setting';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import {Alert} from '@assets/images/cab_theme/svg/alert';
import {Wallet} from '@assets/images/nft_theme/svg/wallet';
import {Phone} from '@assets/images/cab_theme/svg/phone';
import {Delete} from '@assets/images/grocery_assets/svg/delete';
import {Download} from '@assets/images/learning_theme/svg/download';
import {City} from '@assets/images/food_ordering_theme/svg/city';
import {Wifi} from '@assets/images/hotel_theme/svg/wifi';
import {HightToLow} from '@assets/images/hotel_theme/svg/highToLow';
import {Swap} from '@assets/images/hotel_theme/svg/swap';
import {MenuScale} from '@assets/images/food_ordering_theme/svg/menuScale';
import {loader} from '../../images/images';
import appColors from '@theme/appColors';
import Rupees from '@assets/images/common/svg/rupees';
import Dollar from '@assets/images/common/svg/dollar';
import AustralianDollar from '@assets/images/common/svg/australianDollar';
import Euro from '@assets/images/common/svg/euro';
import KoreanWon from '@assets/images/common/svg/koreanWon';
import {profile} from '../../images/images';

export const apps = [
  {
    title: 'mainTheme.groceryApp',
    content: 'mainTheme.groceryContent',
    image: groceryApp,
    screen: 'GrocerySplash',
  },
  {
    title: 'mainTheme.foodOrdering',
    content: 'mainTheme.foodContent',
    image: foodOrderApp,
    screen: 'FoodOrderSplash',
  },
  {
    title: 'mainTheme.ecommerce',
    content: 'mainTheme.ecommerceContent',
    image: ecommerceApp,
    screen: 'EcommerceSpalsh',
  },
  {
    title: 'mainTheme.financial',
    content: 'mainTheme.financialContent',
    image: financialApp,
    screen: 'FinancialSplash',
  },
  {
    title: 'mainTheme.hotelbooking',
    content: 'mainTheme.hotelBookingContent',
    image: hotelBookingApp,
    screen: 'hotelBookingSplash',
  },
  {
    title: 'mainTheme.cabbooking',
    content: 'mainTheme.cabBookingContent',
    image: cabBookingApp,
    screen: 'CabBookingSpalsh',
  },
  {
    title: 'mainTheme.nft',
    content: 'mainTheme.nftContent',
    image: nftApp,
    screen: 'NftSplash',
  },
  {
    title: 'mainTheme.learning',
    content: 'mainTheme.learningContent',
    image: learningApp,
    screen: 'LearningSplash',
  },
  {
    title: 'mainTheme.chatting',
    content: 'mainTheme.chattingContent',
    image: chattingApp,
    screen: 'ChattingSplash',
  },
  {
    title: 'mainTheme.fitness',
    content: 'mainTheme.fitnessContent',
    image: fitnessApp,
    screen: 'FitnessAppSplash',
  },
  {
    title: 'mainTheme.blog',
    content: 'mainTheme.blogContent',
    image: blogApp,
    screen: 'BlogAppSplash',
  },
];

export const elementsPages = [
  {
    title: 'mainTheme.onboarding',
    content: 'mainTheme.onBoardingContent',
    image: onBoarding,
    number: 1,
    screen: 'OnBoarding',
  },
  {
    title: 'fitness.signIn',
    content: 'mainTheme.signInContent',
    image: signIn,
    number: 2,
    screen: 'SignIn',
  },
  {
    title: 'signUp.signUp',
    content: 'mainTheme.signUpContent',
    image: signUp,
    number: 3,
    screen: 'SignUp',
  },
  {
    title: 'mainTheme.bottomPanel',
    content: 'mainTheme.bottomPanelContent',
    image: bottomPanel,
    number: 4,
    screen: 'BottomPanel',
  },
  {
    title: 'mainTheme.homePages',
    content: 'mainTheme.homePageContent',
    image: homePage,
    number: 5,
    screen: 'HomePages',
  },
  {
    title: 'bottomTab.Search',
    content: 'mainTheme.searchContent',
    image: search,
    number: 6,
    screen: 'Search',
  },
  {
    title: 'mainTheme.accountSettings',
    content: 'mainTheme.accountSettingsContent',
    image: accountSetting,
    number: 7,
    screen: 'AccountSetting',
  },
  {
    title: 'mainTheme.listing',
    content: 'mainTheme.listingContent',
    image: listing,
    number: 8,
    screen: 'Listing',
  },
  {
    title: 'mainTheme.gridBox',
    content: 'mainTheme.gridBoxContent',
    image: gridBox,
    number: 9,
    screen: 'GridBox',
  },
  {
    title: 'financial.Payment',
    content: 'mainTheme.paymentContent',
    image: payment,
    number: 10,
    screen: 'Payment',
  },
];

export const onBoardingScreens = [
  {
    title: 'mainTheme.onBoardingTitle1',
    gotoScreen: 'GroceryOnBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle2',
    gotoScreen: 'FoodOnBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle3',
    gotoScreen: 'EcommerceOnBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle4',
    gotoScreen: 'FinancialOnBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle5',
    gotoScreen: 'HotelOnBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle6',
    gotoScreen: 'NftOnBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle7',
    gotoScreen: 'CabOnBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle8',
    gotoScreen: 'LearningOnBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle9',
    gotoScreen: 'ChatOnBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle10',
    gotoScreen: 'FitnessonBoarding',
  },
  {
    title: 'mainTheme.onBoardingTitle11',
    gotoScreen: 'blogOnBoarding',
  },
];

export const signInScreens = [
  {
    title: 'mainTheme.signIn1',
    gotoScreen: 'GrocerySignIn',
  },
  {
    title: 'mainTheme.signIn2',
    gotoScreen: 'FoodLogin',
  },
  {
    title: 'mainTheme.signIn3',
    gotoScreen: 'EcommerceSignIn',
  },
  {
    title: 'mainTheme.signIn4',
    gotoScreen: 'FinancialLogin',
  },
  {
    title: 'mainTheme.signIn5',
    gotoScreen: 'HotelLogin',
  },
  {
    title: 'mainTheme.signIn6',
    gotoScreen: 'NftLogin',
  },
  {
    title: 'mainTheme.signIn7',
    gotoScreen: 'CabAuthScreen',
  },
  {
    title: 'mainTheme.signIn8',
    gotoScreen: 'LearningSignIn',
  },
  {
    title: 'mainTheme.signIn9',
    gotoScreen: 'ChatLogin',
  },
  {
    title: 'mainTheme.signIn10',
    gotoScreen: 'FitnessSignIn',
  },
  {
    title: 'mainTheme.signIn11',
    gotoScreen: 'BlogSignIn',
  },
];

export const signUpScreens = [
  {
    title: 'mainTheme.signUp1',
    gotoScreen: 'GrocerySignUp',
  },
  {
    title: 'mainTheme.signUp2',
    gotoScreen: 'CreateAccount',
  },
  {
    title: 'mainTheme.signUp3',
    gotoScreen: 'FinanceRegister',
  },
  {
    title: 'mainTheme.signUp4',
    gotoScreen: 'hotelSignUp',
  },
  {
    title: 'mainTheme.signUp5',
    gotoScreen: 'NftRegister',
  },
  {
    title: 'mainTheme.signUp6',
    gotoScreen: 'CabAuthScreen',
  },
  {
    title: 'mainTheme.signUp7',
    gotoScreen: 'LearningSignUp',
  },
  {
    title: 'mainTheme.signUp8',
    gotoScreen: 'ChatSignup',
  },
  {
    title: 'mainTheme.signUp9',
    gotoScreen: 'FitnessSignUp',
  },
  {
    title: 'mainTheme.signUp10',
    gotoScreen: 'BlogSignUp',
  },
];

export const bottomPanelScreens = [
  {
    title: 'mainTheme.bottomPanel1',
    gotoScreen: 'GroceryBottomTab',
  },
  {
    title: 'mainTheme.bottomPanel2',
    gotoScreen: 'EcommerceBottomTab',
  },
  {
    title: 'mainTheme.bottomPanel3',
    gotoScreen: 'FinancialBottomTab',
  },
  {
    title: 'mainTheme.bottomPanel4',
    gotoScreen: 'HotelBookingTabBar',
  },
  {
    title: 'mainTheme.bottomPanel5',
    gotoScreen: 'NftBottomTabBar',
  },
  {
    title: 'mainTheme.bottomPanel6',
    gotoScreen: 'LearningBottomTabBar',
  },
  {
    title: 'mainTheme.bottomPanel7',
    gotoScreen: 'ChatBottomTabBar',
  },
  {
    title: 'mainTheme.bottomPanel8',
    gotoScreen: 'FitnessBottomTabBar',
  },
  {
    title: 'mainTheme.bottomPanel9',
    gotoScreen: 'BlogTabbBar',
  },
];

export const homeScreens = [
  {
    title: 'mainTheme.homeScreen1',
    gotoScreen: 'GroceryDrawer',
  },
  {
    title: 'mainTheme.homeScreen2',
    gotoScreen: 'FoodTab',
  },
  {
    title: 'mainTheme.homeScreen3',
    gotoScreen: 'EcommerceDrawer',
  },
  {
    title: 'mainTheme.homeScreen4',
    gotoScreen: 'FinanceTab',
  },
  {
    title: 'mainTheme.homeScreen5',
    gotoScreen: 'HotelBookingDrawer',
  },
  {
    title: 'mainTheme.homeScreen6',
    gotoScreen: 'NftDrawer',
  },
  {
    title: 'mainTheme.homeScreen7',
    gotoScreen: 'CabBookingDrawer',
  },
  {
    title: 'mainTheme.homeScreen8',
    gotoScreen: 'LearningDrawer',
  },
  {
    title: 'mainTheme.homeScreen9',
    gotoScreen: 'ChatTab',
  },
  {
    title: 'mainTheme.homeScreen10',
    gotoScreen: 'FitnessTab',
  },
  {
    title: 'mainTheme.homeScreen11',
    gotoScreen: 'BlogDrawer',
  },
];

export const searchScreens = [
  {
    title: 'mainTheme.searchScreens1',
    gotoScreen: 'GroceryDrawer',
  },
  {
    title: 'mainTheme.searchScreens2',
    gotoScreen: 'FoodTab',
  },
  {
    title: 'mainTheme.searchScreens3',
    gotoScreen: 'EcommerceDrawer',
  },
  {
    title: 'mainTheme.searchScreens4',
    gotoScreen: 'HotelBookingDrawer',
  },
  {
    title: 'mainTheme.searchScreens5',
    gotoScreen: 'LearningDrawer',
  },
  {
    title: 'mainTheme.searchScreens6',
    gotoScreen: 'BlogDrawer',
  },
  {
    title: 'mainTheme.searchScreens7',
    gotoScreen: 'NftDrawer',
  },
];

export const accountScreens = [
  {
    title: 'mainTheme.accountScreens1',
    gotoScreen: 'GroceryDrawer',
  },
  {
    title: 'mainTheme.accountScreens2',
    gotoScreen: 'FoodTab',
  },
  {
    title: 'mainTheme.accountScreens3',
    gotoScreen: 'EcommerceDrawer',
  },
  {
    title: 'mainTheme.accountScreens4',
    gotoScreen: 'FinanceTab',
  },
  {
    title: 'mainTheme.accountScreens5',
    gotoScreen: 'HotelBookingDrawer',
  },
  {
    title: 'mainTheme.accountScreens6',
    gotoScreen: 'NftDrawer',
  },
  {
    title: 'mainTheme.accountScreens7',
    gotoScreen: 'LearningDrawer',
  },
  {
    title: 'mainTheme.accountScreens8',
    gotoScreen: 'ChatTab',
  },
  {
    title: 'mainTheme.accountScreens9',
    gotoScreen: 'FitnessTab',
  },
  {
    title: 'mainTheme.accountScreens10',
    gotoScreen: 'BlogDrawer',
  },
];

export const listingScreens = [
  {
    title: 'mainTheme.listingScreens1',
    gotoScreen: 'CategoryShop',
  },
  {
    title: 'mainTheme.listingScreens2',
    gotoScreen: 'Restaurant',
  },
  {
    title: 'mainTheme.listingScreens3',
    gotoScreen: 'EcommerceOrderHistory',
  },
  {
    title: 'mainTheme.listingScreens4',
    gotoScreen: 'FinanceActivity',
  },
  {
    title: 'mainTheme.listingScreens5',
    gotoScreen: 'HotelBookingWishlist',
  },
  {
    title: 'mainTheme.listingScreens6',
    gotoScreen: 'NftCart',
  },
  {
    title: 'mainTheme.listingScreens7',
    gotoScreen: 'LearningCategory',
  },

  {
    title: 'mainTheme.listingScreens8',
    gotoScreen: 'FitnessTab',
  },
  {
    title: 'mainTheme.listingScreens9',
    gotoScreen: 'BlogListing',
  },
];

export const gridBoxScreens = [
  {
    title: 'mainTheme.gridBoxScreens1',
    gotoScreen: 'GroceryCategory',
  },
  {
    title: 'mainTheme.gridBoxScreens2',
    gotoScreen: 'FoodShop',
  },
  {
    title: 'mainTheme.gridBoxScreens3',
    gotoScreen: 'ecommerceWishlist',
  },
  {
    title: 'mainTheme.gridBoxScreens4',
    gotoScreen: 'CategorySection',
  },
  {
    title: 'mainTheme.gridBoxScreens5',
    gotoScreen: 'NftDetails',
  },
  {
    title: 'mainTheme.gridBoxScreens6',
    gotoScreen: 'InstructorDetail',
  },

  {
    title: 'mainTheme.gridBoxScreens7',
    gotoScreen: 'FitnessListing',
  },
  {
    title: 'mainTheme.gridBoxScreens8',
    gotoScreen: 'ChooseTopic',
  },
];

export const paymentScreens = [
  {
    title: 'mainTheme.paymentScreens1',
    gotoScreen: 'GroceryPayment',
  },
  {
    title: 'mainTheme.paymentScreens2',
    gotoScreen: 'FoodPayment',
  },
  {
    title: 'mainTheme.paymentScreens3',
    gotoScreen: 'EcommercePayment',
  },
  {
    title: 'mainTheme.paymentScreens4',
    gotoScreen: 'FinancePayment',
  },

  {
    title: 'mainTheme.paymentScreens5',
    gotoScreen: 'CheckOut',
  },

  {
    title: 'mainTheme.paymentScreens6',
    gotoScreen: 'CabPayment',
  },
  {
    title: 'mainTheme.paymentScreens7',
    gotoScreen: 'HotelPayment',
  },
];

export const screens = [
  {
    title: 'mainTheme.groceryApp',
    numofScreens: '(12 Screens)',
    screen: 'GroceryAppList',
  },
  {
    title: 'mainTheme.foodOrdering',
    numofScreens: '(17 Screens)',
    screen: 'FoodOrderingAppList',
  },
  {
    title: 'mainTheme.ecommerce',
    numofScreens: '(16 Screens)',
    screen: 'EcommerceAppList',
  },
  {
    title: 'mainTheme.financial',
    numofScreens: '(13 Screens)',
    screen: 'FinancialAppList',
  },
  {
    title: 'mainTheme.hotelbooking',
    numofScreens: '(17 Screens)',
    screen: 'HotelBookingAppList',
  },
  {
    title: 'mainTheme.cabbooking',
    numofScreens: '(11 Screens)',
    screen: 'CabBookingAppList',
  },
  {
    title: 'mainTheme.nft',
    numofScreens: '(13 Screens)',
    screen: 'NftAppList',
  },

  {
    title: 'mainTheme.learning',
    numofScreens: '(17 Screens)',
    screen: 'LearningAppList',
  },
  {
    title: 'mainTheme.chat',
    numofScreens: '(11 Screens)',
    screen: 'ChattingAppList',
  },
  {
    title: 'mainTheme.fitness',
    numofScreens: '(12 Screens)',
    screen: 'FitnessAppList',
  },
  {
    title: 'mainTheme.blog',
    numofScreens: '(12 Screens)',
    screen: 'BlogAppList',
  },
];

export const groceryAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'GroceryOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'GrocerySignIn',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'GrocerySignUp',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'GroceryDrawer',
  },
  {
    title: 'bottomTab.Category',
    gotoScreen: 'GroceryDrawer',
  },
  {
    title: 'ecommerce.shop',
    gotoScreen: 'CategoryShop',
  },
  {
    title: 'bottomTab.Cart',
    gotoScreen: 'GroceryDrawer',
  },
  {
    title: 'orderDetailPage.address',
    gotoScreen: 'GroceryAddress',
  },
  {
    title: 'financial.Payment',
    gotoScreen: 'GroceryPayment',
  },
  {
    title: 'mainTheme.orderSuccess',
    gotoScreen: 'GroceryOrderSucess',
  },
  {
    title: 'bottomTab.Search',
    gotoScreen: 'GroceryDrawer',
  },
  {
    title: 'foodProfile.account',
    gotoScreen: 'GroceryDrawer',
  },
];

export const foodOrderingAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'FoodOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'FoodLogin',
  },
  {
    title: 'mainTheme.Otp',
    gotoScreen: 'FoodOtp',
  },
  {
    title: 'hotelBooking.location',
    gotoScreen: 'FoodLocation',
  },
  {
    title: 'mainTheme.findRestaurant',
    gotoScreen: 'FindResturant',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'FoodTab',
  },
  {
    title: 'bottomTab.Search',
    gotoScreen: 'FoodTab',
  },
  {
    title: 'ecommerce.shop',
    gotoScreen: 'FoodShop',
  },
  {
    title: 'mainTheme.restaurant',
    gotoScreen: 'Restaurant',
  },
  {
    title: 'bottomTab.Cart',
    gotoScreen: 'FoodCart',
  },
  {
    title: 'financial.Payment',
    gotoScreen: 'FoodPayment',
  },
  {
    title: 'mainTheme.orderPlaced',
    gotoScreen: 'OrderPlaced',
  },
  {
    title: 'ecommerce.OrderHistory',
    gotoScreen: 'AddressBook',
  },
  {
    title: 'mainTheme.favourite',
    gotoScreen: 'FavouriteOrders',
  },
  {
    title: 'orderDetailPage.address',
    gotoScreen: 'AddressBook',
  },
  {
    title: 'bottomTab.Offers',
    gotoScreen: 'FoodTab',
  },
  {
    title: 'foodProfile.account',
    gotoScreen: 'FoodTab',
  },
];

export const ecommerceAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'EcommerceOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'EcommerceSignIn',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'CreateAccount',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'EcommerceDrawer',
  },
  {
    title: 'bottomTab.Search',
    gotoScreen: 'EcommerceDrawer',
  },
  {
    title: 'ecommerce.shop',
    gotoScreen: 'EcommerceDrawer',
  },
  {
    title: 'bottomTab.Category',
    gotoScreen: 'EcommerceDrawer',
  },
  {
    title: 'bottomTab.Cart',
    gotoScreen: 'EcommerceCart',
  },
  {
    title: 'financial.Payment',
    gotoScreen: 'EcommercePayment',
  },
  {
    title: 'ecommerce.productDetails',
    gotoScreen: 'ProductDetails',
  },
  {
    title: 'ecommerce.OrderHistory',
    gotoScreen: 'EcommerceOrderHistory',
  },
  {
    title: 'common.Order Details',
    gotoScreen: 'ecommerceOrderDetails',
  },
  {
    title: 'mainTheme.favourite',
    gotoScreen: 'EcommerceDrawer',
  },
  {
    title: 'orderDetailPage.address',
    gotoScreen: 'EcommerceSavedAddresss',
  },
  {
    title: 'mainTheme.orderSucess',
    gotoScreen: 'OrderSucess',
  },
  {
    title: 'foodProfile.account',
    gotoScreen: 'EcommerceDrawer',
  },
];

export const financialAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'FinancialOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'FinancialLogin',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'FinanceRegister',
  },
  {
    title: 'mainTheme.otp',
    gotoScreen: 'FinanceVerification',
  },
  {
    title: 'financial.addCard',
    gotoScreen: 'FinanceAddCard',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'FinanceTab',
  },
  {
    title: 'financial.Cards',
    gotoScreen: 'FinanceTab',
  },
  {
    title: 'financial.Payment',
    gotoScreen: 'FinanceTab',
  },
  {
    title: 'financial.Activity',
    gotoScreen: 'FinanceTab',
  },
  {
    title: 'bottomTab.Profile',
    gotoScreen: 'FinanceTab',
  },
  {
    title: 'mainTheme.contactPay',
    gotoScreen: 'FinancePay',
  },
  {
    title: 'financial.myRecharge',
    gotoScreen: 'MobileRecharge',
  },
  {
    title: 'financial.Scan',
    gotoScreen: 'ScanQr',
  },
];

export const HotelBookingApplist = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'HotelOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'HotelLogin',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'hotelSignUp',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'HotelBookingDrawer',
  },
  {
    title: 'bottomTab.Search',
    gotoScreen: 'HotelBookingDrawer',
  },
  {
    title: 'mainTheme.Booking',
    gotoScreen: 'HotelBookingDrawer',
  },
  {
    title: 'ecommerce.whishlist',
    gotoScreen: 'HotelBookingDrawer',
  },
  {
    title: 'financial.Payment',
    gotoScreen: 'HotelPayment',
  },
  {
    title: 'bottomTab.Category',
    gotoScreen: 'CategorySection',
  },
  {
    title: 'hotelBooking.selectRoom',
    gotoScreen: 'ChooseRoom',
  },
  {
    title: 'hotelBooking.reviewDetail',
    gotoScreen: 'ReviewDetail',
  },
  {
    title: 'hotelBooking.guestDetails',
    gotoScreen: 'GuestDetails',
  },
  {
    title: 'mainTheme.bookingSuccess',
    gotoScreen: 'PaymentSucess',
  },
  {
    title: 'mainTheme.bookingHistory',
    gotoScreen: 'HotelBookingDrawer',
  },
  {
    title: 'mainTheme.bookingWishlist',
    gotoScreen: 'HotelBookingDrawer',
  },
];

export const cabBookingAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'CabOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'CabAuthScreen',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'CabAuthScreen',
  },

  {
    title: 'cabBooking.enterNumber',
    gotoScreen: 'PhoneVerification',
  },
  {
    title: 'mainTheme.otp',
    gotoScreen: 'VerifyNumber',
  },
  {
    title: 'mainTheme.gPSLocation',
    gotoScreen: 'GpsLocation',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'CabBookingDrawer',
  },
  {
    title: 'cabBooking.chooseRide',
    gotoScreen: 'ChooseRide',
  },
  {
    title: 'cabBooking.rideDetails',
    gotoScreen: 'RideDetails',
  },
  {
    title: 'financial.Payment',
    gotoScreen: 'CabPayment',
  },
  {
    title: 'mainTheme.bookedRide',
    gotoScreen: 'BookedRide',
  },
];

export const nftAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'NftOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'NftLogin',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'NftRegister',
  },
  {
    title: 'mainTheme.otp',
    gotoScreen: 'Verification',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'NftDrawer',
  },
  {
    title: 'bottomTab.Search',
    gotoScreen: 'NftDrawer',
  },
  {
    title: 'bottomTab.Cart',
    gotoScreen: 'NftCart',
  },
  {
    title: 'cabBooking.Wallet',
    gotoScreen: 'NftDrawer',
  },
  {
    title: 'bottomTab.Profile',
    gotoScreen: 'NftDrawer',
  },
  {
    title: 'ecommerce.Collection',
    gotoScreen: 'NftDetails',
  },
  {
    title: 'mainTheme.nftDetail',
    gotoScreen: 'NftDetails',
  },
  {
    title: 'mainTheme.NftSingleDetail',
    gotoScreen: 'NftDrawer',
  },
  {
    title: 'mainTheme.auction',
    gotoScreen: 'Auction',
  },
];

export const learningAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'LearningOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'LearningSignIn',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'LearningSignUp',
  },
  {
    title: 'mainTheme.forgotPassword',
    gotoScreen: 'LearningForgotPassword',
  },
  {
    title: 'learning.resetPassword',
    gotoScreen: 'LearningResetPassword',
  },
  {
    title: 'mainTheme.otp',
    gotoScreen: 'LearningOtp',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'LearningDrawer',
  },
  {
    title: 'bottomTab.Search',
    gotoScreen: 'LearningDrawer',
  },
  {
    title: 'learning.myCourses',
    gotoScreen: 'LearningDrawer',
  },
  {
    title: 'ecommerce.whishlist',
    gotoScreen: 'LearningDrawer',
  },
  {
    title: 'foodProfile.account',
    gotoScreen: 'LearningDrawer',
  },
  {
    title: 'bottomTab.Category',
    gotoScreen: 'LearningCategory',
  },
  {
    title: 'mainTheme.lokedCourses',
    gotoScreen: 'LockedCourses',
  },
  {
    title: 'bottomTab.Cart',
    gotoScreen: 'Cart',
  },
  {
    title: 'nft.checkOut',
    gotoScreen: 'CheckOut',
  },
  {
    title: 'mainTheme.unLockCourses',
    gotoScreen: 'CourseTab',
  },
  {
    title: 'learning.instructor',
    gotoScreen: 'InstructorDetail',
  },
];

export const chattingAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'ChatOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'ChatLogin',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'ChatSignup',
  },
  {
    title: 'mainTheme.otp',
    gotoScreen: 'ChatOtp',
  },
  {
    title: 'chatting.messages',
    gotoScreen: 'ChatTab',
  },
  {
    title: 'chatting.calls',
    gotoScreen: 'ChatTab',
  },
  {
    title: 'bottomTab.Profile',
    gotoScreen: 'ChatTab',
  },
  {
    title: 'mainTheme.chatMessage',
    gotoScreen: 'Chat',
  },
  {
    title: 'bottomTab.Profile',
    gotoScreen: 'ChatProfile',
  },
  {
    title: 'mainTheme.audioCall',
    gotoScreen: 'AudioCalling',
  },
  {
    title: 'mainTheme.videoCall',
    gotoScreen: 'VideoCallings',
  },
];

export const fitnessAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'FitnessonBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'FitnessSignIn',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'FitnessSignUp',
  },
  {
    title: 'mainTheme.otp',
    gotoScreen: 'FitnessOtp',
  },
  {
    title: 'mainTheme.fromStepper',
    gotoScreen: 'ProgressStepsSlider',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'FitnessTab',
  },
  {
    title: 'hotelBooking.gym',
    gotoScreen: 'Exercise',
  },
  {
    title: 'mainTheme.report',
    gotoScreen: 'Reports',
  },
  {
    title: 'bottomTab.Profile',
    gotoScreen: 'FitnessProfile',
  },
  {
    title: 'mainTheme.weekList',
    gotoScreen: 'Weekly',
  },

  {
    title: 'mainTheme.weeklyExercise',
    gotoScreen: 'Weekly',
  },
  {
    title: 'mainTheme.exerciseVideo',
    gotoScreen: 'ExerciseVideo',
  },
];

export const blogAppList = [
  {
    title: 'mainTheme.onboarding',
    gotoScreen: 'blogOnBoarding',
  },
  {
    title: 'fitness.signIn',
    gotoScreen: 'BlogSignIn',
  },
  {
    title: 'signUp.signUp',
    gotoScreen: 'BlogSignUp',
  },
  {
    title: 'onBoarding.GetStarted',
    gotoScreen: 'blogGettingStarted',
  },
  {
    title: 'bottomTab.home',
    gotoScreen: 'BlogDrawer',
  },
  {
    title: 'bottomTab.Search',
    gotoScreen: 'BlogDrawer',
  },
  {
    title: 'drawer.Notification',
    gotoScreen: 'BlogDrawer',
  },
  {
    title: 'blog.chooseYourTopics',
    gotoScreen: 'ChooseTopic',
  },
  {
    title: 'blog.addPost',
    gotoScreen: 'AddPost',
  },
  {
    title: 'mainTheme.blogList',
    gotoScreen: 'BlogListing',
  },
  {
    title: 'mainTheme.blogDetail',
    gotoScreen: 'SingleBlog',
  },
  {
    title: 'bottomTab.Profile',
    gotoScreen: 'BlogDrawer',
  },
];

export const widgets = [
  {
    title: 'mainTheme.accordion',
    screens: 'Accordion',
  },
  {
    title: 'mainTheme.actionSheet',
    screens: 'ActionSheet',
  },
  {
    title: 'mainTheme.alert',
    screens: 'Alert',
  },
  {
    title: 'mainTheme.buttons',
    screens: 'Buttons',
  },
  {
    title: 'mainTheme.checksRadio',
    screens: 'CheckBoxRadio',
  },
  {
    title: 'mainTheme.DateTimePicker',
    screens: 'DateTimePicker',
  },
  {
    title: 'mainTheme.icons',
    screens: 'Icons',
  },
  {
    title: 'mainTheme.input',
    screens: 'Input',
  },
  {
    title: 'mainTheme.loader',
    screens: 'Loader',
  },
  {
    title: 'mainTheme.modal',
    screens: 'Modal',
  },
  {
    title: 'mainTheme.progressbar',
    screens: 'ProgressBar',
  },
  {
    title: 'mainTheme.pullRefresh',
    screens: 'PullToRefresh',
  },
  {
    title: 'mainTheme.rangeSlider',
    screens: 'RangeSlider',
  },
  {
    title: 'mainTheme.searchBar',
    screens: 'SearchBar',
  },
  {
    title: 'mainTheme.sidemenu',
    screens: 'SideMenu',
  },
  {
    title: 'mainTheme.slider',
    screens: 'Slider',
  },
  {
    title: 'mainTheme.tab',
    screens: 'Tab',
  },
  {
    title: 'mainTheme.toast',
    screens: 'Toast',
  },
];

export const languages = [
  {languge: 'foodProfile.English', key: 'en'},
  {languge: 'mainTheme.arabic', key: 'ar'},
  {languge: 'mainTheme.hindi', key: 'hi'},
  {languge: 'mainTheme.korean', key: 'kr'},
  {languge: 'mainTheme.french', key: 'fr'},
];

export const iconsArr = [
  {
    icon: <DownArrow color={appColors.blackColor} />,
    darkIcon: <DownArrow color={appColors.white} />,
  },
  {
    icon: <RightArrow color={appColors.blackColor} />,
    darkIcon: <RightArrow color={appColors.white} />,
  },
  {
    icon: <BackArrow color={appColors.blackColor} />,
    darkIcon: <BackArrow color={appColors.white} />,
  },
  {
    icon: <MenuScale strokeWidth={'1.5'} color={appColors.blackColor} />,
    darkIcon: <MenuScale strokeWidth={'1.5'} color={appColors.white} />,
  },
  {
    icon: <UserPlus strokeWidth={'1.5'} color={appColors.blackColor} />,
    darkIcon: <UserPlus strokeWidth={'1.5'} color={appColors.white} />,
  },
  {
    icon: <Check color={appColors.blackColor} />,
    darkIcon: <Check color={appColors.white} />,
  },
  {
    icon: <Cross strokeWidth={'1.4'} color={appColors.blackColor} />,
    darkIcon: <Cross strokeWidth={'1.4'} color={appColors.white} />,
  },
  {
    icon: <Play strokeWidth={'1.4'} color={appColors.blackColor} />,
    darkIcon: <Play strokeWidth={'1.4'} color={appColors.white} />,
  },
  {
    icon: <Pause color={appColors.blackColor} />,
    darkIcon: <Pause color={appColors.white} />,
  },
  {
    icon: <File color={appColors.blackColor} />,
    darkIcon: <File color={appColors.white} />,
  },
  {
    icon: <Send strokeWidth={'1.3'} color={appColors.blackColor} />,
    darkIcon: <Send strokeWidth={'1.3'} color={appColors.white} />,
  },
  {
    icon: <StarIcon height={"30"} color={appColors.blackColor} />,
    darkIcon: <StarIcon width={"30"} color={appColors.white} />,
  },
  {
    icon: <BookMark color={appColors.blackColor} />,
    darkIcon: <BookMark color={appColors.white} />,
  },
  {
    icon: <Share color={appColors.blackColor} />,
    darkIcon: <Share color={appColors.white} />,
  },
  {
    icon: <LockIcon color={appColors.blackColor} />,
    darkIcon: <LockIcon color={appColors.white} />,
  },
  {
    icon: <MicIcon color={appColors.blackColor} />,
    darkIcon: <MicIcon color={appColors.white} />,
  },
  {
    icon: <SettingIcon color={appColors.blackColor} />,
    darkIcon: <SettingIcon color={appColors.white} />,
  },
  {
    icon: <ClockOutline color={appColors.blackColor} />,
    darkIcon: <ClockOutline color={appColors.white} />,
  },
  {
    icon: <Alert color={appColors.blackColor} />,
    darkIcon: <Alert color={appColors.white} />,
  },
  {
    icon: <Wallet color={appColors.blackColor} />,
    darkIcon: <Wallet color={appColors.white} />,
  },
  {
    icon: <Phone color={appColors.blackColor} />,
    darkIcon: <Phone color={appColors.white} />,
  },
  {
    icon: <Delete color={appColors.blackColor} />,
    darkIcon: <Delete color={appColors.white} />,
  },
  {
    icon: <Download color={appColors.blackColor} />,
    darkIcon: <Download color={appColors.white} />,
  },
  {
    icon: <City color={appColors.blackColor} />,
    darkIcon: <City color={appColors.white} />,
  },
  {
    icon: <Wifi color={appColors.blackColor} />,
    darkIcon: <Wifi color={appColors.white} />,
  },
  {
    icon: (
      <HightToLow height={'25'} width={'25'} color={appColors.blackColor} />
    ),
    darkIcon: <HightToLow height={'25'} width={'25'} color={appColors.white} />,
  },
  {
    icon: <Swap color={appColors.blackColor} />,
    darkIcon: <Swap color={appColors.white} />,
  },
];

export const loaderArr = [
  {
    image: bookGif,
    name: 'mainTheme.learningLoader',
  },
  {
    image: chatLoader,
    name: 'mainTheme.classicLoader',
  },
  {
    image: splashLogo,
    name: 'mainTheme.foodDelivery',
  },
  {
    image: grocerySplash,
    name: 'mainTheme.groceryLoader',
  },
  {
    image: nftLoader,
    name: 'mainTheme.nftLoader',
  },
  {
    image: loader,
    name: 'mainTheme.financeLoader',
  },
];

export const radioButtons = [
  {
    name: 'mainTheme.checkthis',
  },
  {
    name: 'mainTheme.orcheckthis',
  },
  {
    name: 'mainTheme.orthis',
  },
  {
    name: 'mainTheme.ormaybethis',
  },
  {
    name: 'mainTheme.orthisone',
  },
];

export const checkBoxes = [
  {
    name: 'mainTheme.checkme',
  },
  {
    name: 'mainTheme.Checkmetoo',
  },
  {
    name: 'mainTheme.AlsoCheckme',
  },
  {
    name: 'mainTheme.Andcheckme',
  },
  {
    name: 'mainTheme.Andcheckmetoo',
  },
];

export const filterData = [
  {
    id: 1,
    name: 'mainTheme.blackShirt',
  },
  {
    id: 2,
    name: 'mainTheme.blackTshirts',
  },
  {
    id: 3,
    name: 'mainTheme.blackJeans',
  },
  {
    id: 4,
    name: 'mainTheme.blackTrouser',
  },
  {
    id: 5,
    name: 'mainTheme.blackShorts',
  },
  {
    id: 6,
    name: 'mainTheme.blackinKids',
  },
  {
    id: 7,
    name: 'mainTheme.blackDress',
  },
];

export const userData = [
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
  {
    name: 'mainTheme.username',
    image: profile,
  },
];

export const drawerContent = [
  {
    icon: moon,
    name: 'mainTheme.lightMode',
  },
  {
    icon: globe,
    name: 'mainTheme.langugae',
  },
  {
    icon: leftToRight,
    name: 'mainTheme.leftToRight',
  },
  {
    icon: currency,
    name: 'mainTheme.curruncyChange',
  },
];

export const curruncy = [
  {
    key: '₹',
    name: 'mainTheme.indianRupees',
    icons: <Rupees />,
    value: 1,
  },
  {
    key: '$',
    name: 'mainTheme.usDollar',
    icons: <Dollar />,
    value: 0.013,
  },
  {
    key: '€',
    name: 'mainTheme.euro',
    icons: <Euro />,
    value: 0.012,
  },
  {
    key: 'A$',
    name: 'mainTheme.australianDollar',
    icons: <AustralianDollar />,
    value: 0.018,
  },
  {
    key: '₩',
    name: 'mainTheme.koreanWon',
    icons: <KoreanWon />,
    value: 16.44,
  },
];

export const DrawerData = [
  {
    name: 'mainTheme.grocerySideMenu',
  },
  {
    name: 'mainTheme.ecommerceSideMenu',
  },
  {
    name: 'mainTheme.hotelSideMenu',
  },
  {
    name: 'mainTheme.learningSideMenu',
  },
  {
    name: 'mainTheme.blogSideMenu',
  },
  {
    name: 'mainTheme.nftSideMenu',
  },
];
