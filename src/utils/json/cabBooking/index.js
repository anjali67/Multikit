import {
  cabOnBoard,
  cabOnBoard1,
  cabOnBoard2,
  cab1,
  cab2,
  cab3,
  googleLogo,
  cabWallet,
  cash,
  cabCredit,
  bhimUpi,
} from '../../images/images';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import {Wallet} from '@assets/images/cab_theme/svg/wallet';
import {Cab} from '@assets/images/cab_theme/svg/cab';
import {Users} from '@assets/images/cab_theme/svg/users';
import {Phone} from '@assets/images/cab_theme/svg/phone';
import {Alert} from '@assets/images/cab_theme/svg/alert';
import {SettingIcon} from '@assets/images/hotel_theme/svg/settings';
import appColors from '@theme/appColors';
export const onBoardData = [
  {
    id: 0,
    image: cabOnBoard,
    title: 'cabBooking.onBoardTitle',
    content: 'cabBooking.onBoardContent',
  },
  {
    id: 1,
    image: cabOnBoard1,
    title: 'cabBooking.onBoardTitle1',
    content: 'cabBooking.onBoardContent',
  },
  {
    id: 2,
    image: cabOnBoard2,
    title: 'cabBooking.onBoardingTitle2',
    content: 'cabBooking.onBoardContent',
  },
];

export const chooseRideData = [
  {
    image: cab1,
    title: 'cabBooking.mini',
    content: 'cabBooking.rideContent',
    price: 15,
  },
  {
    image: cab2,
    title: 'cabBooking.sedan',
    content: 'cabBooking.rideContent1',
    price: 22,
  },
  {
    image: cab3,
    title: 'cabBooking.minivan',
    content: 'cabBooking.rideContent2',
    price: 26,
  },
];

export const rideData = [
  {
    image: cab1,
    title: 'cabBooking.mini',
    content: 'cabBooking.rideContent',
    time: 5,
  },
];

export const paymentsMethods = [
  {
    image: cabWallet,
    title: 'cabBooking.Wallet',
    balance: 'cabBooking.Balance',
    price: 25,
  },
  {
    image: googleLogo,
    title: 'cabBooking.googlePay',
  },
  {
    image: cash,
    title: 'paymentsArr.cashOnDelivery',
  },
  {
    image: cabCredit,
    title: 'paymentsArr.walletUPI',
  },
  {
    image: bhimUpi,
    title: 'cabBooking.otherUpi',
  },
];

export const menuItems = [
  {
    icon: <ClockOutline height={'22'} color={appColors.cabText} />,
    name: 'cabBooking.yourRide',
    darkIcon: <ClockOutline height={'22'} color={appColors.white} />,
    route: 'ChooseRide',
  },
  {
    icon: <Wallet strokeWidth={'1.5'} />,
    name: 'cabBooking.Wallet',
    darkIcon: <Wallet color={appColors.white} />,
    route: 'CabPayment',
  },
  {
    icon: <Cab />,
    name: 'cabBooking.becomeDriver',
    darkIcon: <Cab color={appColors.white} />,
    route: '',
  },
  {
    icon: <Users strokeWidth={'1.5'} color={appColors.cabText} />,
    name: 'cabBooking.referEarn',
    darkIcon: <Users color={appColors.white} />,
    route: 'CabPayment',
  },
  {
    icon: (
      <Phone
        strokeWidth={'1.5'}
        height={'18'}
        width={'18'}
        color={appColors.cabText}
      />
    ),
    name: 'cabBooking.support',
    darkIcon: <Phone color={appColors.white} />,
    route: '',
  },
  {
    icon: <Alert />,
    name: 'cabBooking.about',
    darkIcon: <Alert color={appColors.white} />,
    route: '',
  },
  {
    icon: <SettingIcon color={appColors.cabText} />,
    name: 'drawer.Settings',
    darkIcon: <SettingIcon color={appColors.white} />,
    route: '',
  },
];
