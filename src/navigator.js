import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainSplash from './screens/mainTheme/splash';
import GrocerySplash from './screens/groceryApp/splash';
import FoodOrderSplash from './screens/foodOrderApp/spalsh';
import EcommerceSpalsh from './screens/ecommerceApp/spalsh';
import FinancialSplash from './screens/financialApp/splash';
import hotelBookingSplash from './screens/hotelBookingApp/splash';
import CabBookingSpalsh from './screens/cabBookingApp/splash';
import LearningSplash from './screens/learningApp/splash';
import ChattingSplash from './screens/chattingApp/splash';
import FitnessAppSplash from './screens/fitnessApp/splash';
import BlogAppSplash from './screens/blogApp/splash';
import OnBoarding from './screens/mainTheme/elements/onBoarding';
import SignIn from './screens/mainTheme/elements/signIn';
import SignUp from './screens/mainTheme/elements/signUp';
import BottomPanel from './screens/mainTheme/elements/bottomPanel';
import HomePages from './screens/mainTheme/elements/homePages';
import Search from './screens/mainTheme/elements/search';
import AccountSetting from './screens/mainTheme/elements/accountSettings';
import Listing from './screens/mainTheme/elements/listing';
import GridBox from './screens/mainTheme/elements/gridBox';
import Payment from './screens/mainTheme/elements/payment';
import GroceryAppList from './screens/mainTheme/screens/groceryAppList';
import FoodOrderingAppList from './screens/mainTheme/screens/foodOrderingAppList';
import EcommerceAppList from './screens/mainTheme/screens/ecommerceAppList';
import FinancialAppList from './screens/mainTheme/screens/financialAppList';
import HotelBookingAppList from './screens/mainTheme/screens/hotelBookingAppList';
import CabBookingAppList from './screens/mainTheme/screens/cabBookingAppList';
import NftAppList from './screens/mainTheme/screens/nftAppList';
import LearningAppList from './screens/mainTheme/screens/learningAppList';
import ChattingAppList from './screens/mainTheme/screens/chattingAppList';
import FitnessAppList from './screens/mainTheme/screens/fitnessAppList';
import BlogAppList from './screens/mainTheme/screens/blogAppList';
import Accordion from './screens/mainTheme/widgets/accordion';
import GrocerySignIn from './screens/groceryApp/auth/signIn';
import GroceryOnBoarding from './screens/groceryApp/onBoarding';
import GrocerySignUp from './screens/groceryApp/auth/signUp';
import GroceryDrawer from './drawer/grocery';
import CategoryShop from './screens/groceryApp/category/shop';
import GroceryAddress from './screens/groceryApp/cart/address';
import GroceryPayment from './screens/groceryApp/cart/payment';
import GroceryCategory from './screens/groceryApp/category';
import GroceryAccount from './screens/groceryApp/profile';
import GrocerySearch from './screens/groceryApp/search';
import GroceryCart from './screens/groceryApp/cart';
import GroceryOrderSucess from './screens/groceryApp/cart/orderSucess';
import GroceryOrderSummary from './screens/groceryApp/cart/orderSummary';
import GroceryProduct from './screens/groceryApp/home/product';
import FoodOnBoarding from './screens/foodOrderApp/onBoarding';
import FoodLogin from './screens/foodOrderApp/auth/login';
import FoodOtp from './screens/foodOrderApp/auth/otp';
import FoodLocation from './screens/foodOrderApp/auth/location';
import FindResturant from './screens/foodOrderApp/auth/findResturant';
import FoodTab from './bottomTab/foodTab';
import FoodOrder from './screens/foodOrderApp/profile/order';
import FavouriteOrders from './screens/foodOrderApp/profile/favouriteOrders';
import FoodShop from './screens/foodOrderApp/search/shop';
import Restaurant from './screens/foodOrderApp/restaurant';
import FoodCart from './screens/foodOrderApp/cart';
import FoodPayment from './screens/foodOrderApp/cart/payment';
import OrderPlaced from './screens/foodOrderApp/cart/payment/orderPlaced';
import AddressBook from './screens/foodOrderApp/profile/addressBook';
import EcommerceOnBoarding from './screens/ecommerceApp/onBoarding';
import EcommerceSignIn from './screens/ecommerceApp/auth/SignIn';
import CreateAccount from './screens/ecommerceApp/auth/CreateAccount';
import EcommerceOrderHistory from './screens/ecommerceApp/account/orderHistory';
import EcommerceDrawer from './drawer/ecommerce';
import ecommerceWishlist from './screens/ecommerceApp/account/wishlist';
import ecommerceOrderDetails from './screens/ecommerceApp/account/orderDetail';
import EcommerceSavedAddresss from './screens/ecommerceApp/account/savedAddress';
import EcommercePayment from './screens/ecommerceApp/account/payment';
import OrderSucess from './screens/ecommerceApp/account/payment/orderSucess';
import EcommerceCart from './screens/ecommerceApp/product/cart';
import ProductDetails from './screens/ecommerceApp/product/productDetail';
import EcommerceShop from './screens/ecommerceApp/shop';
import ShopPage from './screens/ecommerceApp/shop/shop';
import FinancialOnBoarding from './screens/financialApp/onBoarding';
import FinancialLogin from './screens/financialApp/auth/login';
import FinanceRegister from './screens/financialApp/auth/register';
import FinanceVerification from './screens/financialApp/auth/verification';
import FinanceAddCard from './screens/financialApp/auth/addCard';
import FinanceTab from './bottomTab/financeTab';
import FinanceHome from './screens/financialApp/home';
import FinancePayment from './screens/financialApp/payment';
import FinanceActivity from './screens/financialApp/activity';
import FinanceProfile from './screens/financialApp/profile';
import FinancePay from './screens/financialApp/pay';
import MobileRecharge from './screens/financialApp/billsRecharge/mobileRechrge';
import ElectricityBills from './screens/financialApp/billsRecharge/billsSection/electricity';
import CreditCardsBills from './screens/financialApp/billsRecharge/billsSection/creditCards';
import BroadBandRecharge from './screens/financialApp/billsRecharge/billsSection/BroadbandRecharge';
import ScanQr from './screens/financialApp/profile/scan';
import HotelOnBoarding from './screens/hotelBookingApp/onBoard';
import HotelLogin from './screens/hotelBookingApp/auth/login';
import hotelSignUp from './screens/hotelBookingApp/auth/signUp';
import SingleDetailPage from './screens/hotelBookingApp/home/singleDetail';
import ChooseRoom from './screens/hotelBookingApp/home/chooseRoom';
import ReviewDetail from './screens/hotelBookingApp/home/reviewDetail';
import GuestDetails from './screens/hotelBookingApp/home/guestDetail';
import HotelPayment from './screens/hotelBookingApp/home/payment';
import PaymentSucess from './screens/hotelBookingApp/home/payment/paymentSucess';
import CategorySection from './otherComponent/hotelBooking/category';
import FilterModal from './otherComponent/hotelBooking/modal/filterModal';
import Map from './otherComponent/hotelBooking/modal/mapModal';
import HotelBookingDrawer from './drawer/hotelBooking';
import HotelBookingWishlist from './screens/hotelBookingApp/wishlist';
import HotelBookings from './screens/hotelBookingApp/booking';
import CabOnBoarding from './screens/cabBookingApp/onBoarding';
import ChooseRide from './screens/cabBookingApp/ride';
import RideDetails from './screens/cabBookingApp/rideDetail';
import BookedRide from './screens/cabBookingApp/bookedRide';
import CabPayment from './screens/cabBookingApp/payment';
import CabAuthScreen from './screens/cabBookingApp/auth';
import CabSignup from './screens/cabBookingApp/auth/signup';
import PhoneVerification from './screens/cabBookingApp/auth/phoneVerification';
import VerifyNumber from './screens/cabBookingApp/auth/verifyNumber';
import GpsLocation from './screens/cabBookingApp/auth/gps';
import CabBookingDrawer from './drawer/cabBooking';
import CabBookingHome from './screens/cabBookingApp/home';
import ChatOnBoarding from './screens/chattingApp/onBoarding';
import ChatLogin from './screens/chattingApp/auth/login';
import ChatSignup from './screens/chattingApp/auth/signUp';
import ChatOtp from './screens/chattingApp/auth/otp';
import ChatTab from './bottomTab/chatTab';
import Chat from './screens/chattingApp/messages/chat';
import ChatProfile from './otherComponent/chatting/userProfile';
import AudioCalling from './otherComponent/chatting/audioCalling';
import VideoCalling from './otherComponent/chatting/videoCalling';
import blogOnBoarding from './screens/blogApp/onBoarding';
import blogGettingStarted from './screens/blogApp/gettingStarted';
import BlogSignIn from './screens/blogApp/auth/signIn';
import BlogSignUp from './screens/blogApp/auth/signUp';
import ChooseTopic from './screens/blogApp/chooseTopic';
import ActionSheet from './screens/mainTheme/widgets/actionSheet';
import Alert from './screens/mainTheme/widgets/alert';
import Modal from './screens/mainTheme/widgets/modal';
import SingleBlog from './screens/blogApp/home/singleBlog';
import BlogListing from './screens/blogApp/home/blogListing';
import BlogDrawer from './drawer/blog';
import BlogHome from './screens/blogApp/home';
import BlogSearch from './screens/blogApp/search';
import AddPost from './screens/blogApp/addPost';
import Notification from '@screens/blogApp/notification';
import Profile from '@screens/blogApp/profile';
import NftSplash from './screens/nftApp/splash';
import NftRegister from './screens/nftApp/auth/register';
import NftLogin from './screens/nftApp/auth/login';
import Verification from './screens/nftApp/auth/verification';
import NftOnBoarding from './screens/nftApp/onBoarding';
import NftsSplash from './screens/nftApp/splash';
import DateTimePicker from './screens/mainTheme/widgets/dateTimePicker';
import Icons from './screens/mainTheme/widgets/icons';
import NftSingleDetails from './screens/nftApp/home/singleDetail';
import NftDetails from './screens/nftApp/details';
import NftWallet from './screens/nftApp/wallet';
import Auction from './screens/nftApp/auction';
import NftDrawer from './drawer/nft';
import NftCart from './screens/nftApp/cart';
import NftProfile from './screens/nftApp/profile';
import NftSearch from './screens/nftApp/search';
import FitnessonBoarding from './screens/fitnessApp/onBoarding';
import FitnessListing from './screens/fitnessApp/fitnessListing';
import FitnessSignUp from './screens/fitnessApp/auth/signUp';
import FitnessSignIn from './screens/fitnessApp/auth/signIn';
import FitnessOtp from './screens/fitnessApp/auth/otp';
import FitnessTab from './bottomTab/fitnessTab';
import FitnessProfile from './screens/fitnessApp/profile';
import Reports from './screens/fitnessApp/reports';
import ProgressStepsSlider from './otherComponent/fitness/stepperSlider';
import Exercise from './screens/fitnessApp/exercise';
import Weekly from './screens/fitnessApp/home/weekly';
import ExerciseVideo from './screens/fitnessApp/home/exerciseVideo';
import Videos from './screens/fitnessApp/home/exerciseVideo/videos';
import LearningOnBoarding from './screens/learningApp/onboarding';
import LearningSignIn from './screens/learningApp/auth/signIn';
import LearningSignUp from './screens/learningApp/auth/signUp';
import LearningForgotPassword from './screens/learningApp/auth/forgotPassword';
import LearningResetPassword from './screens/learningApp/auth/resetPassword';
import LearningOtp from './screens/learningApp/auth/otp';
import LearningDrawer from './drawer/learning';
import MyCourses from './screens/learningApp/myCourses';
import InstructorDetail from './screens/learningApp/instructorDetail';
import LearningCategory from './screens/learningApp/home/category';
import LockedCourses from './screens/learningApp/courses/lockedCourses';
import CourseTab from './screens/learningApp/courses/coursesTab';
import Cart from './otherComponent/learning/courses/cart';
import CheckOut from './otherComponent/learning/courses/checkOut';
import Account from './screens/learningApp/account';
import Loader from './screens/mainTheme/widgets/loader';
import ProgressBar from './screens/mainTheme/widgets/progressBar';
import Buttons from './screens/mainTheme/widgets/buttons';
import CheckBoxRadio from './screens/mainTheme/widgets/checkBoxRadio';
import SideMenu from './screens/mainTheme/widgets/sideMenu';
import RangeSlider from './screens/mainTheme/widgets/rangeSlider';
import Slider from './screens/mainTheme/widgets/slider';
import SearchBar from './screens/mainTheme/widgets/searchBar';
import PullToRefresh from './screens/mainTheme/widgets/pullTorefresh';
import Input from './screens/mainTheme/widgets/input';
import MainDrawer from './drawer/mainTheme';
import Tab from './screens/mainTheme/widgets/tab';
import Toast from './screens/mainTheme/widgets/toast';
import GroceryBottomTab from './screens/mainTheme/screens/bottomPanel/groceryBottomTab';
import EcommerceBottomTab from './screens/mainTheme/screens/bottomPanel/ecommerceTab';
import FinancialBottomTab from './screens/mainTheme/screens/bottomPanel/financialBottomTab';
import HotelBookingTabBar from './screens/mainTheme/screens/bottomPanel/hotelBookingTab';
import LearningBottomTabBar from './screens/mainTheme/screens/bottomPanel/learningBottomTab';
import ChatBottomTabBar from './screens/mainTheme/screens/bottomPanel/chatBottomTabBar';
import FitnessBottomTabBar from './screens/mainTheme/screens/bottomPanel/fitnessBottomTabBar';
import BlogTabbBar from './screens/mainTheme/screens/bottomPanel/blogTabBar';
import NftBottomTabBar from './screens/mainTheme/screens/bottomPanel/nftBottomTab';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={MainSplash}>
        <Stack.Screen name="MainSplash" component={MainSplash} />
        <Stack.Screen name="MainDrawer" component={MainDrawer} />
        <Stack.Screen name="GrocerySplash" component={GrocerySplash} />
        <Stack.Screen name="EcommerceSpalsh" component={EcommerceSpalsh} />
        <Stack.Screen name="NftSplash" component={NftSplash} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="BottomPanel" component={BottomPanel} />
        <Stack.Screen name="HomePages" component={HomePages} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="AccountSetting" component={AccountSetting} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="GridBox" component={GridBox} />
        <Stack.Screen name="SideMenu" component={SideMenu} />
        <Stack.Screen name="GroceryAppList" component={GroceryAppList} />
        <Stack.Screen
          name="FoodOrderingAppList"
          component={FoodOrderingAppList}
        />
        <Stack.Screen name="EcommerceAppList" component={EcommerceAppList} />
        <Stack.Screen name="FinancialAppList" component={FinancialAppList} />
        <Stack.Screen
          name="HotelBookingAppList"
          component={HotelBookingAppList}
        />
        <Stack.Screen name="CabBookingAppList" component={CabBookingAppList} />
        <Stack.Screen name="NftAppList" component={NftAppList} />
        <Stack.Screen name="LearningAppList" component={LearningAppList} />
        <Stack.Screen name="ChattingAppList" component={ChattingAppList} />
        <Stack.Screen name="FitnessAppList" component={FitnessAppList} />
        <Stack.Screen name="BlogAppList" component={BlogAppList} />
        <Stack.Screen name="NftBottomTabBar" component={NftBottomTabBar} />
        <Stack.Screen name="BlogTabbBar" component={BlogTabbBar} />
        <Stack.Screen
          name="FitnessBottomTabBar"
          component={FitnessBottomTabBar}
        />
        <Stack.Screen name="ChatBottomTabBar" component={ChatBottomTabBar} />
        <Stack.Screen
          name="LearningBottomTabBar"
          component={LearningBottomTabBar}
        />
        <Stack.Screen
          name="HotelBookingTabBar"
          component={HotelBookingTabBar}
        />
        <Stack.Screen
          name="FinancialBottomTab"
          component={FinancialBottomTab}
        />
        <Stack.Screen
          name="EcommerceBottomTab"
          component={EcommerceBottomTab}
        />
        <Stack.Screen name="GroceryBottomTab" component={GroceryBottomTab} />
        <Stack.Screen name="Accordion" component={Accordion} />
        <Stack.Screen name="ActionSheet" component={ActionSheet} />
        <Stack.Screen name="Alert" component={Alert} />
        <Stack.Screen name="Modal" component={Modal} />
        <Stack.Screen name="DateTimePicker" component={DateTimePicker} />
        <Stack.Screen name="Icons" component={Icons} />
        <Stack.Screen name="ProgressBar" component={ProgressBar} />
        <Stack.Screen name="Buttons" component={Buttons} />
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="CheckBoxRadio" component={CheckBoxRadio} />
        <Stack.Screen name="RangeSlider" component={RangeSlider} />
        <Stack.Screen name="Slider" component={Slider} />
        <Stack.Screen name="SearchBar" component={SearchBar} />
        <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Toast" component={Toast} />

        <Stack.Screen name="GroceryOnBoarding" component={GroceryOnBoarding} />
        <Stack.Screen name="GrocerySignIn" component={GrocerySignIn} />
        <Stack.Screen name="GrocerySignUp" component={GrocerySignUp} />
        <Stack.Screen name="GroceryDrawer" component={GroceryDrawer} />
        <Stack.Screen name="CategoryShop" component={CategoryShop} />
        <Stack.Screen name="GroceryPayment" component={GroceryPayment} />
        <Stack.Screen name="GroceryCart" component={GroceryCart} />
        <Stack.Screen name="GroceryCategory" component={GroceryCategory} />
        <Stack.Screen name="GroceryAccount" component={GroceryAccount} />
        <Stack.Screen name="GrocerySearch" component={GrocerySearch} />
        <Stack.Screen
          name="GroceryOrderSucess"
          component={GroceryOrderSucess}
        />
        <Stack.Screen
          name="GroceryOrderSummary"
          component={GroceryOrderSummary}
        />
        <Stack.Screen name="GroceryProduct" component={GroceryProduct} />
        <Stack.Screen name="GroceryAddress" component={GroceryAddress} />
        <Stack.Screen name="FoodOrderSplash" component={FoodOrderSplash} />
        <Stack.Screen name="FoodOnBoarding" component={FoodOnBoarding} />
        <Stack.Screen name="FoodLogin" component={FoodLogin} />
        <Stack.Screen name="FoodOtp" component={FoodOtp} />
        <Stack.Screen name="FoodLocation" component={FoodLocation} />
        <Stack.Screen name="FindResturant" component={FindResturant} />
        <Stack.Screen name="FoodTab" component={FoodTab} />
        <Stack.Screen name="FoodOrder" component={FoodOrder} />
        <Stack.Screen name="FavouriteOrders" component={FavouriteOrders} />
        <Stack.Screen name="FoodShop" component={FoodShop} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="FoodCart" component={FoodCart} />
        <Stack.Screen name="FoodPayment" component={FoodPayment} />
        <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
        <Stack.Screen name="AddressBook" component={AddressBook} />
        <Stack.Screen
          name="EcommerceOnBoarding"
          component={EcommerceOnBoarding}
        />
        <Stack.Screen name="EcommerceSignIn" component={EcommerceSignIn} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="EcommerceDrawer" component={EcommerceDrawer} />
        <Stack.Screen name="ecommerceWishlist" component={ecommerceWishlist} />
        <Stack.Screen
          name="EcommerceOrderHistory"
          component={EcommerceOrderHistory}
        />
        <Stack.Screen
          name="ecommerceOrderDetails"
          component={ecommerceOrderDetails}
        />
        <Stack.Screen
          name="EcommerceSavedAddresss"
          component={EcommerceSavedAddresss}
        />
        <Stack.Screen name="EcommercePayment" component={EcommercePayment} />
        <Stack.Screen name="EcommerceShop" component={EcommerceShop} />
        <Stack.Screen name="OrderSucess" component={OrderSucess} />
        <Stack.Screen name="EcommerceCart" component={EcommerceCart} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ShopPage" component={ShopPage} />
        <Stack.Screen name="FinancialSplash" component={FinancialSplash} />
        <Stack.Screen
          name="FinancialOnBoarding"
          component={FinancialOnBoarding}
        />
        <Stack.Screen name="FinancialLogin" component={FinancialLogin} />
        <Stack.Screen name="FinanceRegister" component={FinanceRegister} />
        <Stack.Screen
          name="FinanceVerification"
          component={FinanceVerification}
        />
        <Stack.Screen name="FinanceAddCard" component={FinanceAddCard} />
        <Stack.Screen name="FinanceTab" component={FinanceTab} />
        <Stack.Screen name="FinancePay" component={FinancePay} />
        <Stack.Screen name="FinancePayment" component={FinancePayment} />
        <Stack.Screen name="FinanceActivity" component={FinanceActivity} />
        <Stack.Screen name="FinanceProfile" component={FinanceProfile} />
        <Stack.Screen name="ScanQr" component={ScanQr} />
        <Stack.Screen name="MobileRecharge" component={MobileRecharge} />
        <Stack.Screen name="ElectricityBills" component={ElectricityBills} />
        <Stack.Screen name="CreditCardsBills" component={CreditCardsBills} />
        <Stack.Screen name="BroadBandRecharge" component={BroadBandRecharge} />
        <Stack.Screen name="FinanceHome" component={FinanceHome} />
        <Stack.Screen
          name="hotelBookingSplash"
          component={hotelBookingSplash}
        />
        <Stack.Screen name="HotelOnBoarding" component={HotelOnBoarding} />
        <Stack.Screen name="HotelLogin" component={HotelLogin} />
        <Stack.Screen name="hotelSignUp" component={hotelSignUp} />
        <Stack.Screen
          name="HotelBookingDrawer"
          component={HotelBookingDrawer}
        />
        <Stack.Screen
          name="HotelBookingWishlist"
          component={HotelBookingWishlist}
        />
        <Stack.Screen name="HotelBookings" component={HotelBookings} />
        <Stack.Screen name="SingleDetailPage" component={SingleDetailPage} />
        <Stack.Screen name="ChooseRoom" component={ChooseRoom} />
        <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
        <Stack.Screen name="GuestDetails" component={GuestDetails} />
        <Stack.Screen name="HotelPayment" component={HotelPayment} />
        <Stack.Screen name="PaymentSucess" component={PaymentSucess} />
        <Stack.Screen name="CategorySection" component={CategorySection} />
        <Stack.Screen name="FilterModal" component={FilterModal} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="CabBookingSpalsh" component={CabBookingSpalsh} />
        <Stack.Screen name="CabOnBoarding" component={CabOnBoarding} />
        <Stack.Screen name="ChooseRide" component={ChooseRide} />
        <Stack.Screen name="RideDetails" component={RideDetails} />
        <Stack.Screen name="BookedRide" component={BookedRide} />
        <Stack.Screen name="CabPayment" component={CabPayment} />
        <Stack.Screen name="CabAuthScreen" component={CabAuthScreen} />
        <Stack.Screen name="CabSignup" component={CabSignup} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
        <Stack.Screen name="GpsLocation" component={GpsLocation} />
        <Stack.Screen name="CabBookingDrawer" component={CabBookingDrawer} />
        <Stack.Screen name="CabBookingHome" component={CabBookingHome} />
        <Stack.Screen name="ChattingSplash" component={ChattingSplash} />
        <Stack.Screen name="ChatOnBoarding" component={ChatOnBoarding} />
        <Stack.Screen name="ChatLogin" component={ChatLogin} />
        <Stack.Screen name="ChatSignup" component={ChatSignup} />
        <Stack.Screen name="ChatOtp" component={ChatOtp} />
        <Stack.Screen name="ChatTab" component={ChatTab} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ChatProfile" component={ChatProfile} />
        <Stack.Screen name="AudioCalling" component={AudioCalling} />
        <Stack.Screen name="VideoCalling" component={VideoCalling} />
        <Stack.Screen name="blogOnBoarding" component={blogOnBoarding} />
        <Stack.Screen
          name="blogGettingStarted"
          component={blogGettingStarted}
        />
        <Stack.Screen name="BlogAppSplash" component={BlogAppSplash} />
        <Stack.Screen name="BlogDrawer" component={BlogDrawer} />
        <Stack.Screen name="BlogHome" component={BlogHome} />
        <Stack.Screen name="BlogSearch" component={BlogSearch} />
        <Stack.Screen name="AddPost" component={AddPost} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BlogSignIn" component={BlogSignIn} />
        <Stack.Screen name="BlogSignUp" component={BlogSignUp} />
        <Stack.Screen name="ChooseTopic" component={ChooseTopic} />
        <Stack.Screen name="SingleBlog" component={SingleBlog} />
        <Stack.Screen name="BlogListing" component={BlogListing} />
        <Stack.Screen name="NftsSplash" component={NftsSplash} />
        <Stack.Screen name="NftOnBoarding" component={NftOnBoarding} />
        <Stack.Screen name="NftLogin" component={NftLogin} />
        <Stack.Screen name="NftRegister" component={NftRegister} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="NftCart" component={NftCart} />
        <Stack.Screen name="Auction" component={Auction} />
        <Stack.Screen name="NftWallet" component={NftWallet} />
        <Stack.Screen name="NftProfile" component={NftProfile} />
        <Stack.Screen name="NftSearch" component={NftSearch} />
        <Stack.Screen name="NftSingleDetails" component={NftSingleDetails} />
        <Stack.Screen name="NftDetails" component={NftDetails} />
        <Stack.Screen name="NftDrawer" component={NftDrawer} />
        <Stack.Screen name="FitnessAppSplash" component={FitnessAppSplash} />
        <Stack.Screen name="FitnessonBoarding" component={FitnessonBoarding} />
        <Stack.Screen name="FitnessListing" component={FitnessListing} />
        <Stack.Screen name="FitnessSignUp" component={FitnessSignUp} />
        <Stack.Screen name="FitnessSignIn" component={FitnessSignIn} />
        <Stack.Screen name="FitnessOtp" component={FitnessOtp} />
        <Stack.Screen name="FitnessTab" component={FitnessTab} />
        <Stack.Screen name="FitnessProfile" component={FitnessProfile} />

        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen
          name="ProgressStepsSlider"
          component={ProgressStepsSlider}
        />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="ExerciseVideo" component={ExerciseVideo} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="LearningSplash" component={LearningSplash} />
        <Stack.Screen
          name="LearningOnBoarding"
          component={LearningOnBoarding}
        />
        <Stack.Screen name="LearningSignIn" component={LearningSignIn} />
        <Stack.Screen name="LearningSignUp" component={LearningSignUp} />
        <Stack.Screen
          name="LearningForgotPassword"
          component={LearningForgotPassword}
        />
        <Stack.Screen
          name="LearningResetPassword"
          component={LearningResetPassword}
        />
        <Stack.Screen name="LearningOtp" component={LearningOtp} />
        <Stack.Screen name="LearningDrawer" component={LearningDrawer} />
        <Stack.Screen name="MyCourses" component={MyCourses} />
        <Stack.Screen name="InstructorDetail" component={InstructorDetail} />
        <Stack.Screen name="LearningCategory" component={LearningCategory} />
        <Stack.Screen name="LockedCourses" component={LockedCourses} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CourseTab" component={CourseTab} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
