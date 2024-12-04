import {
  cardBox1,
  cardBox2,
  sendBg,
  receiveBg,
  exchangeBg,
  scanBg,
  people1,
  people2,
  people3,
  people4,
  people5,
  logoLetter,
  amazon,
  card1,
  visaImg,
  homesection,
  aliexpress,
  electricity1,
  electricity2,
  electricity3,
  electricity4,
  electricity5,
  electricity6,
  electricity7,
  card2,
  card3,
  card4,
  card5,
  broadBand1,
  broadBand2,
  broadBand3,
  broadBand4,
  card,
} from '../../images/images';
import {Home} from '@assets/images/ecommerce_theme/svg/home';
import {Card} from '@assets/images/finance_theme/svg/card';
import {Payment} from '@assets/images/finance_theme/svg/payment';
import {Activity} from '@assets/images/finance_theme/svg/activity';
import {UserLine} from '@assets/images/grocery_assets/svg/userline';
import {Send} from '@assets/images/finance_theme/svg/send';
import {Receive} from '@assets/images/finance_theme/svg/receive';
import {Exchange} from '@assets/images/finance_theme/svg/exchange';
import {Scanner} from '@assets/images/finance_theme/svg/scanner';
import {ElectricalBill} from '@assets/images/finance_theme/svg/electricityBill';
import {MobileBill} from '@assets/images/finance_theme/svg/mobileBill';
import {CardBill} from '@assets/images/finance_theme/svg/cardBill';
import {BroadBandBill} from '@assets/images/finance_theme/svg/brodBandBill';
import {Flight} from '@assets/images/finance_theme/svg/flight';
import {Train} from '@assets/images/finance_theme/svg/train';
import {Bike} from '@assets/images/finance_theme/svg/bike';
import {Bus} from '@assets/images/finance_theme/svg/bus';
import {UserShared} from '@assets/images/finance_theme/svg/userShared';
import {User} from '@assets/images/grocery_assets/svg/user';
import {Settings} from '@assets/images/finance_theme/svg/settings';
import {Help} from '@assets/images/finance_theme/svg/help';
import {Logout} from '@assets/images/finance_theme/svg/logout';
import appColors from '@theme/appColors';
export const onBoardingData = [
  {
    id: 0,
    title: 'financial.safeSecure',
    content: 'financial.onBoardingcontent',
    cardImage: cardBox1,
    cardImage1: cardBox2,
  },
  {
    id: 1,
    title: 'financial.thinkDifferent',
    content: 'financial.onBoardingcontent',
    cardImage: cardBox1,
    cardImage1: cardBox2,
  },
  {
    id: 2,
    title: 'financial.getRewards',
    content: 'financial.onBoardingcontent',
    cardImage: cardBox1,
    cardImage1: cardBox2,
  },
];

export const tabs = [
  {
    icon: <Home />,
    activeIcon: <Home color={'red'} />,
    route: 'FinanceHome',
  },
  {
    icon: <Card />,
    activeIcon: <Card color={'red'} />,
    route: '',
  },
  {
    icon: <Payment />,
    activeIcon: <Payment color={'red'} />,
    route: '',
  },
  {
    icon: <Activity />,
    activeIcon: <Activity color={'red'} />,
    route: '',
  },
  {
    icon: <UserLine color={'#696969'} />,
    activeIcon: <UserLine color={'red'} />,
    route: '',
  },
];

export const paymentData = [
  {
    icon: <Send />,
    image: sendBg,
    name: 'financial.Send',
    darkIcon: <Send color={appColors.darkTheme} />,
    gradiantColor: '#0017E2',
  },
  {
    icon: <Receive />,
    image: receiveBg,
    name: 'financial.Receive',
    darkIcon: <Receive color={appColors.darkTheme} />,
    gradiantColor: '#2629AF',
  },
  {
    icon: <Exchange />,
    image: exchangeBg,
    name: 'financial.Exchange',
    darkIcon: <Exchange color={appColors.darkTheme} />,
    gradiantColor: '#57ADDD',
  },
  {
    icon: <Scanner />,
    image: scanBg,
    name: 'financial.Scan',
    darkIcon: <Scanner color={appColors.darkTheme} />,
    gradiantColor: '#61C588',
  },
];

export const BillsRechrge = [
  {
    icon: <MobileBill />,
    name: 'financial.mobileRechrge',
    gotoScreen: 'MobileRecharge',
  },
  {
    icon: <ElectricalBill />,
    name: 'financial.electricalBills',
    gotoScreen: 'ElectricityBills',
  },
  {
    icon: <CardBill />,
    name: 'financial.creditCardBills',
    gotoScreen: 'CreditCardsBills',
  },
  {
    icon: <BroadBandBill />,
    name: 'financial.broadBandRechrge',
    gotoScreen: 'BroadBandRecharge',
  },
];

export const peopleData = [
  {name: 'financial.Dennis', image: people1},
  {name: 'financial.Michel', image: people2},
  {name: 'financial.Kathy', image: people3},
  {name: 'financial.Meyer', image: people4},
  {name: 'financial.Simon', image: people5},
];

export const recentTransactionData = [
  {
    name: 'financial.SherrySimonson',
    date: 'financial.dateTime',
    price: 25,
    symbol: '-',
    image: logoLetter,
  },
  {
    name: 'financial.Dennis',
    date: 'financial.dateTime1',
    price: 20,
    symbol: '+',
    image: people1,
  },
  {
    name: 'financial.amazon',
    date: 'financial.dateTime',
    price: 25,
    symbol: '-',
    image: amazon,
  },
];

export const bills = [
  {
    name: 'financial.waterBill',
    billNumber: '1821154545',
    totalBill: 120,
    expired: 'financial.Expired',
    billPay: 'financial.pay',
    bgColor: '#EEEEEE',
    darkBgColor: appColors.gray,
  },
  {
    name: 'financial.mobileRechrge',
    billNumber: '1821154545',
    totalBill: 120,
    expired: 'foodOrder.paid',
    billPay: 'ecommerce.viewDetails',
    bgColor: '#2629AF',
  },
  {
    name: 'financial.waterBill',
    billNumber: '1821154545',
    totalBill: 120,
    expired: 'financial.Expired',
    billPay: 'financial.pay',
    bgColor: '#61C58B',
  },
];
export const cards = [
  {
    image: homesection,
    name: 'financial.markJacob',
    cardNumber: '5451 1515 2131 1524',
    bankName: 'financial.ICICIBank',
    visa: visaImg,
    totalDue: 2562.5,
  },
  {
    image: card,
    name: 'financial.markJacob',
    cardNumber: '5451 1515 2131 1524',
    bankName: 'financial.ICICIBank',
    totalDue: 2562.5,
  },
];

export const bookingNow = [
  {icon: <Flight />, name: 'financial.flight'},
  {icon: <Train />, name: 'financial.train'},
  {icon: <Bike />, name: 'financial.CarsBike'},
  {icon: <Bus />, name: 'financial.Bus'},
];

export const activityData = [
  {
    name: 'financial.SherrySimonson',
    date: 'financial.dateTime',
    price: 25,
    symbol: '-',
    letter: 'S',
  },
  {
    name: 'financial.Dennis',
    date: 'financial.dateTime1',
    price: 20,
    symbol: '+',
    image: people1,
  },
  {
    name: 'financial.amazon',
    date: 'financial.dateTime',
    price: 25,
    symbol: '-',
    image: amazon,
  },
  {
    name: 'financial.Shopper',
    date: 'financial.dateTime',
    price: 25,
    symbol: '-',
    letter: 'S',
  },
  {
    name: 'financial.Dennis',
    date: 'financial.dateTime1',
    price: 20,
    symbol: '+',
    image: people1,
  },
  {
    name: 'financial.aliexpress',
    date: 'financial.dateTime1',
    price: 50,
    symbol: '-',
    image: aliexpress,
  },
  {
    name: 'financial.amazon',
    date: 'financial.dateTime',
    price: 25,
    symbol: '-',
    image: amazon,
  },
  {
    name: 'financial.Michel',
    date: 'financial.dateTime1',
    price: 20,
    symbol: '+',
    image: people2,
  },
];

export const financeMenuItems = [
  {
    title: 'financial.inviteFriends',
    icon: <UserShared />,
    route: '',
    darkIcon: <UserShared color={appColors.darkTheme} />,
  },
  {
    title: 'bottomTab.Profile',
    icon: <User color={appColors.gray} />,
    route: '',
    darkIcon: <User color={appColors.darkTheme} />,
  },
  {
    title: 'drawer.Settings',
    icon: <Settings />,
    route: '',
    darkIcon: <Settings color={appColors.darkTheme} />,
  },
  {
    title: 'financial.help',
    icon: <Help />,
    route: '',
    darkIcon: <Help color={appColors.darkTheme} />,
  },
  {title: 'financial.changeLanguge', icon: '', route: ''},
  {
    title: 'common.Logout',
    icon: <Logout />,
    route: '',
    darkIcon: <Logout color={appColors.darkTheme} />,
  },
];

export const messageList = [
  {sender: 'Receiver', message: 'financial.thankYou'},
  {
    sender: 'Sender',
    message: 'financial.paymentJacob',
    dateTime: 'financial.dateTime',
    payAmount: 25,
  },
  {
    sender: 'Receiver',
    message: 'financial.paymentsMsg',
    dateTime: 'financial.dateTime',
    payAmount: 20,
  },
];

export const mobileRechargeData = [
  {
    image: people1,
    name: 'financial.Dennis',
    mobileNumber: '+1 465252962',
  },
  {
    image: people2,
    name: 'financial.Michel',
    mobileNumber: '+0 441814848',
  },
];

export const electricityData = [
  {
    image: electricity1,
    name: 'financial.adaniElectricity',
  },
  {
    image: electricity2,
    name: 'financial.ajmerElectricity',
  },
  {
    image: electricity3,
    name: 'financial.BESCOM',
  },
  {
    image: electricity4,
    name: 'financial.bestMumbai',
  },
  {
    image: electricity5,
    name: 'financial.dgvcl',
  },
  {
    image: electricity6,
    name: 'financial.departmentPower',
  },
  {
    image: electricity7,
    name: 'financial.torrentPower',
  },
];

export const creditCardData = [
  {
    image: card1,
    name: 'financial.axisBank',
  },
  {
    image: card2,
    name: 'financial.hdfcBank',
  },
  {
    image: card3,
    name: 'financial.icic',
  },
  {
    image: card4,
    name: 'financial.kotakBank',
  },
  {
    image: card5,
    name: 'financial.sbi',
  },
];

export const BroadbandRechargeData = [
  {
    image: broadBand1,
    name: 'financial.airtel',
  },
  {
    image: broadBand2,
    name: 'financial.bsnl',
  },
  {
    image: broadBand3,
    name: 'financial.gtpl',
  },
  {
    image: broadBand4,
    name: 'financial.hathway',
  },
];
