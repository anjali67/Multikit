import {
  hotel1,
  hotel2,
  hotel3,
  apartment,
  glamping,
  hotel,
  motel,
  villa,
  hotelImg,
  hotelImg1,
  hotelImg2,
  hotelImg3,
  hotelImg4,
  hotelImg5,
  hotelImg6,
} from '../../images/images';

import {Wifi} from '@assets/images/hotel_theme/svg/wifi';
import {Gym} from '@assets/images/hotel_theme/svg/gym';
import {Bbq} from '@assets/images/hotel_theme/svg/bbq';
import {Spa} from '@assets/images/hotel_theme/svg/spa';
import {Parking} from '@assets/images/hotel_theme/svg/parking';
import {UserProfileImg} from '@assets/images/hotel_theme/svg/user';
import {BookMark} from '@assets/images/hotel_theme/svg/bookmark';
import {PaymentIcon} from '@assets/images/hotel_theme/svg/card';
import {HotelBookingIcon} from '@assets/images/hotel_theme/svg/booking';
import {LogoutIcon} from '@assets/images/hotel_theme/svg/logout';
import {SettingIcon} from '@assets/images/hotel_theme/svg/settings';
import {HotelBellNotification} from '@assets/images/hotel_theme/svg/bellnotification';
import {LowToHigh} from '@assets/images/hotel_theme/svg/lowToHigh';
import {HightToLow} from '@assets/images/hotel_theme/svg/highToLow';
import {Popularity} from '@assets/images/hotel_theme/svg/popularity';
import {RatingIcon} from '@assets/images/hotel_theme/svg/ratingIcon';

import appColors from '@theme/appColors';

export const onBoardData = [
  {
    image: hotel1,
    title: 'hotelBooking.onBoardingTitle',
    content: 'financial.onBoardingcontent',
  },
  {
    image: hotel2,
    title: 'hotelBooking.onBoardingTitle1',
    content: 'financial.onBoardingcontent',
  },
  {
    image: hotel3,
    title: 'hotelBooking.onBoardingTitle2',
    content: 'financial.onBoardingcontent',
  },
];

export const hotelCategoryData = [
  {
    image: hotel,
    name: 'hotelBooking.hotels',
  },
  {
    image: motel,
    name: 'hotelBooking.motels',
  },
  {
    image: apartment,
    name: 'hotelBooking.appart',
  },
  {
    image: villa,
    name: 'hotelBooking.Villas',
  },
  {
    image: glamping,
    name: 'hotelBooking.Clamping',
  },
];

export const hotels = [
  {
    image: hotelImg,
    name: 'hotelBooking.santorini',
    property: '2,502',
  },
  {
    image: hotelImg1,
    name: 'hotelBooking.mykonos',
    property: '2,502',
  },
];

export const recommendedData = [
  {
    image: hotelImg2,
    name: 'hotelBooking.hotelTitle',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
    price: 50,
    available: 'hotelBooking.night',
  },
  {
    image: hotelImg3,
    name: 'hotelBooking.hotelTitle1',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
    price: 50,
    available: 'hotelBooking.night',
  },
  {
    image: hotelImg4,
    name: 'hotelBooking.hotelTitle2',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
    price: 50,
    available: 'hotelBooking.night',
  },
];

export const wishlistData = [
  {
    image: hotelImg2,
    name: 'hotelBooking.hotelTitle',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
    price: 50,
    available: 'hotelBooking.night',
  },
  {
    image: hotelImg3,
    name: 'hotelBooking.hotelTitle1',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
    price: 50,
    available: 'hotelBooking.night',
  },
  {
    image: hotelImg4,
    name: 'hotelBooking.hotelBliss',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
    price: 50,
    available: 'hotelBooking.night',
  },
  {
    image: hotelImg6,
    name: 'hotelBooking.theFrescoHotel',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
    price: 50,
    available: 'hotelBooking.night',
  },
];

export const filterData = [
  {id: 0, name: 'hotelBooking.freeCancelation', selected: false},
  {id: 1, name: 'hotelBooking.breakfastAvailable', selected: false},
];

export const hotelBookingData = [
  {
    date: 'hotelBooking.datePlaceholder',
    name: 'hotelBooking.hotelTitle',
    address: 'hotelBooking.address',
    price: 50,
    image: hotelImg2,
  },
  {
    date: 'hotelBooking.datePlaceholder',
    name: 'hotelBooking.hotelTitle',
    address: 'hotelBooking.address',
    price: 50,
    image: hotelImg5,
  },
  {
    date: 'hotelBooking.datePlaceholder',
    name: 'hotelBooking.hotelTitle',
    address: 'hotelBooking.address',
    price: 50,
    image: hotelImg2,
  },
];

export const amenitiesData = [
  {
    name: 'hotelBooking.wifi',
    icon: <Wifi />,
  },
  {
    name: 'hotelBooking.gym',
    icon: <Gym />,
  },
  {
    name: 'hotelBooking.restro',
    icon: <Bbq />,
  },
  {
    name: 'hotelBooking.Spa',
    icon: <Spa />,
  },
  {
    name: 'hotelBooking.parking',
    icon: <Parking />,
  },
  {
    name: 'hotelBooking.more',
  },
];

export const progressData = [
  {
    id: 1,
    progress: 260,
    rating: '4.0',
    name: 'hotelBooking.location',
  },
  {
    id: 2,
    progress: 280,
    rating: '4.5',
    name: 'hotelBooking.service',
  },
  {
    id: 3,
    progress: 390,
    rating: '4.8',
    name: 'hotelBooking.valueMoney',
  },
];

export const reviews = [
  {
    title: 'ecommerce.reviewTitle',
    date: 'ecommerce.reviewDate',
    content: 'hotelBooking.reviewContent',
    rate: 4.5,
  },
  {
    title: 'ecommerce.reviewTitle',
    date: 'ecommerce.reviewDate',
    content: 'hotelBooking.reviewContent',
    rate: 4.5,
  },
];

export const profileData = [
  {
    title: 'hotelBooking.profileDetails',
    icon: <UserProfileImg color={appColors.black} />,
    darkIcon: <UserProfileImg color={appColors.white} />,
    route: 'HotelBookingProfile',
    showArrow: true,
  },
  {
    title: 'hotelBooking.bookingHistory',
    icon: <HotelBookingIcon color={appColors.black} />,
    darkIcon: <HotelBookingIcon color={appColors.white} />,
    route: 'HotelBookings',
    showArrow: true,
  },
  {
    title: 'drawer.Notification',
    icon: <HotelBellNotification color={appColors.black} />,
    darkIcon: <HotelBellNotification color={appColors.white} />,
    route: '',
    showArrow: true,
  },
  {
    title: 'drawer.Your Wishlist',
    icon: <BookMark color={appColors.black} />,
    darkIcon: <BookMark color={appColors.white} />,
    route: 'HotelBookingWishlist',
    showArrow: true,
  },
  {
    title: 'drawer.Payment',
    icon: <PaymentIcon color={appColors.black} />,
    darkIcon: <PaymentIcon color={appColors.white} />,
    route: 'HotelPayment',
    showArrow: true,
  },
  {
    title: 'drawer.Settings',
    icon: <SettingIcon color={appColors.black} />,
    darkIcon: <SettingIcon color={appColors.white} />,
    route: '',
    showArrow: true,
  },
  {
    title: 'common.Logout',
    icon: <LogoutIcon color={appColors.black} />,
    darkIcon: <LogoutIcon color={appColors.white} />,
    route: 'HotelLogin',
    showArrow: false,
    textColor: appColors.onBoardGradiant,
  },
];

export const deluxRoomData = [
  {id: 0, name: 'hotelBooking.doublebed'},
  {id: 1, name: 'hotelBooking.breakfastIncluded'},
  {id: 2, name: 'hotelBooking.120Sq'},
  {id: 3, name: 'hotelBooking.mountainView'},
  {id: 4, name: 'hotelBooking.airconditioning'},
  {id: 5, name: 'hotelBooking.balcony'},
  {id: 6, name: 'hotelBooking.miniFridge'},
  {id: 7, name: 'hotelBooking.t.V'},
];

export const deluxHotelFacility = [
  {id: 0, name: 'hotelBooking.doublebed'},
  {id: 1, name: 'hotelBooking.breakfastIncluded'},
  {id: 2, name: 'hotelBooking.120Sq'},
  {id: 3, name: 'hotelBooking.mountainView'},
  {id: 4, name: 'hotelBooking.airconditioning'},
  {id: 5, name: 'hotelBooking.wifi'},
];

export const hotelReviewData = [
  {
    image: hotelImg2,
    name: 'hotelBooking.hotelTitle',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
  },
];

export const hotelCategory = [
  {
    image: hotelImg,
    rate: 4.5,
    title: 'hotelBooking.crownePlaza',
    address: 'hotelBooking.hotelAddress',
    price: 25,
  },
  {
    image: hotelImg1,
    rate: 4.5,
    title: 'hotelBooking.hotelTitle',
    address: 'hotelBooking.hotelAddress1',
    price: 35,
  },
  {
    image: hotelImg2,
    rate: 4.5,
    title: 'hotelBooking.hotelBliss',
    address: 'hotelBooking.hotelAddress2',
    price: 44,
  },
  {
    image: hotelImg3,
    rate: 4.5,
    title: 'hotelBooking.hotelAddress3',
    address: 'hotelBooking.hotelAddress4',
    price: 25,
  },
  {
    image: hotelImg4,
    rate: 4.5,
    title: 'hotelBooking.theNewView',
    address: 'hotelBooking.hotelAddress5',
    price: 25,
  },
  {
    image: hotelImg5,
    rate: 4.5,
    title: 'hotelBooking.theFrescoHotel',
    address: 'hotelBooking.hotelAddress6',
    price: 25,
  },
];

export const sortData = [
  {
    name: 'hotelBooking.popularity',
    icon: <Popularity />,
  },
  {
    name: 'hotelBooking.lowToHight',
    icon: <LowToHigh />,
  },
  {
    name: 'hotelBooking.hightToLow',
    icon: <HightToLow />,
  },
  {
    name: 'hotelBooking.userRating',
    icon: <RatingIcon />,
  },
];

export const starRating = [
  {
    totalStar: 5,
    rate: 5,
  },
  {
    totalStar: 4,
    rate: 25,
  },
  {
    totalStar: 3,
    rate: 0,
  },
];

export const mapData = [
  {
    image: hotelImg3,
    name: 'hotelBooking.hotelTitle2',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
    price: 50,
    available: 'hotelBooking.night',
  },
  {
    image: hotelImg4,
    name: 'hotelBooking.hotelTitle2',
    address: 'hotelBooking.hotelAddress',
    rating: 4.5,
    ratings: 'productDetailsPage.productRatings',
    price: 50,
    available: 'hotelBooking.night',
  },
];
