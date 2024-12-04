import {
  chatUser,
  chatUser1,
  chatUser2,
  chatUser3,
  chatUser4,
  chatUser5,
  chatUser6,
  chatImg,
  chatAudio,
  document,
  gallary,
  headphone,
  chatProfile,
  location,
  camera,
} from '../../images/images';

import {MessageBorderLine} from '@assets/images/chat_theme/svg/messageBorderLine';
import {Lock} from '@assets/images/chat_theme/svg/lock';
import {UserPlus} from '@assets/images/chat_theme/svg/userPlus';
import {HotelBellNotification} from '@assets/images/hotel_theme/svg/bellnotification';
import {HelpCircle} from '@assets/images/chat_theme/svg/helpCircle';
import {User} from '@assets/images/chat_theme/svg/user';
import {Backup} from '@assets/images/chat_theme/svg/backup';
import {Volume} from '@assets/images/chat_theme/svg/volume';
import {Image} from '@assets/images/chat_theme/svg/image';
import {UserProfileImg} from '@assets/images/hotel_theme/svg/user';
import appColors from '@theme/appColors';
import {DisappearMsg} from '@assets/images/chat_theme/svg/disapperarMsg';

export const statusProfileData = [
  {
    image: chatUser,
    name: 'chatting.addNew',
    displayStatus: false,
  },
  {
    image: chatUser1,
    name: 'chatting.Pippa',
    displayStatus: true,
  },
  {
    image: chatUser2,
    name: 'chatting.rachel',
    displayStatus: true,
  },
  {
    image: chatUser3,
    name: 'chatting.tracey',
    displayStatus: true,
  },
  {
    image: chatUser4,
    name: 'chatting.eric',
    displayStatus: false,
  },
  {
    image: chatUser5,
    name: 'chatting.james',
    displayStatus: false,
  },
];

export const recentChats = [
  {
    image: chatUser1,
    userName: 'chatting.user',
    message: 'chatting.userMsg',
    status: true,
    time: 'chatting.time',
    totalUpcomingMsg: 5,
    messageDelivered: false,
    messageSent: false,
  },
  {
    image: chatUser5,
    userName: 'chatting.user1',
    message: 'chatting.userMsg1',
    status: true,
    time: 'chatting.time',
    totalUpcomingMsg: 5,
    messageDelivered: false,
    messageSent: false,
  },
  {
    image: chatUser3,
    userName: 'chatting.user2',
    message: 'chatting.userMsg2',
    status: false,
    time: 'chatting.time',
    messageDelivered: true,
    messageSent: false,
  },
  {
    image: chatUser2,
    userName: 'chatting.user3',
    message: 'chatting.userMsg3',
    status: false,
    time: 'chatting.time',
    messageDelivered: false,
    messageSent: true,
  },
  {
    image: chatUser1,
    userName: 'chatting.user4',
    message: 'chatting.userMsg4',
    status: false,
    time: 'chatting.time',
    msgShown: true,
    messageDelivered: false,
    messageSent: false,
  },
  {
    image: chatUser4,
    userName: 'chatting.user4',
    message: 'chatting.userMsg4',
    status: false,
    time: 'chatting.time',
    msgShown: true,
    messageDelivered: true,
    messageSent: false,
  },
  {
    image: chatUser5,
    userName: 'chatting.user4',
    message: 'chatting.userMsg4',
    status: false,
    time: 'chatting.time',
    msgShown: true,
    totalUpcomingMsg: 2,
    messageDelivered: false,
    messageSent: false,
  },
  {
    image: chatUser,
    userName: 'chatting.user4',
    message: 'chatting.userMsg4',
    status: false,
    time: 'chatting.time',
    msgShown: true,
    totalUpcomingMsg: 4,
    messageDelivered: false,
    messageSent: false,
  },
];

export const chatData = [
  {
    name: 'foodProfile.account',
    icon: <User />,
  },
  {
    name: 'chatting.chats',
    icon: <MessageBorderLine strokeWidth={'1.3'} />,
  },
  {
    name: 'drawer.Notification',
    icon: (
      <HotelBellNotification strokeWidth={'1.3'} height={'22'} width={'22'} />
    ),
  },
  {
    name: 'financial.help',
    icon: <HelpCircle />,
  },
  {
    name: 'chatting.backup',
    icon: <Backup />,
  },
  {
    name: 'chatting.privacy',
    icon: <Lock />,
  },
  {
    name: 'chatting.InviteFriend',
    icon: <UserPlus />,
  },
];

export const callsList = [
  {
    image: chatUser1,
    name: 'chatting.user',
    type: 'calls',
    numberCalls: 2,
    dateTime: '8.00 AM, 26 May',
    callsType: 'video',
  },
  {
    image: chatUser2,
    name: 'chatting.user1',
    type: 'miscall',
    numberCalls: 1,
    dateTime: '8.00 AM, 26 May',
    callsType: 'video',
  },
  {
    image: chatUser3,
    name: 'chatting.user2',
    type: 'calls',
    numberCalls: 1,
    dateTime: '8.00 AM, 26 May',
    callsType: 'video',
  },
  {
    image: chatUser4,
    name: 'chatting.user3',
    type: 'calls',
    numberCalls: 2,
    dateTime: '8.00 AM, 26 May',
    callsType: 'video',
  },
  {
    image: chatUser,
    name: 'chatting.user4',
    type: 'received',
    numberCalls: 3,
    dateTime: '8.00 AM, 26 May',
    callsType: 'phone',
  },
  {
    image: chatUser4,
    name: 'chatting.user5',
    type: 'miscall',
    numberCalls: 2,
    dateTime: '8.00 AM, 26 May',
    callsType: 'phone',
  },
  {
    image: chatUser5,
    name: 'chatting.user6',
    type: 'received',
    numberCalls: 1,
    dateTime: '8.00 AM, 26 May',
    callsType: 'phone',
  },
  {
    image: chatUser6,
    name: 'chatting.user7',
    type: 'calls',
    numberCalls: 3,
    dateTime: '8.00 AM, 26 May',
    callsType: 'video',
  },
];

export const messageList = [
  {
    sender: 'Receiver',
    message: chatImg,
    msgTime: '7.04',
    messageType: 'image',
    readMsg: true,
  },
  {
    sender: 'Sender',
    message: 'chatting.chatMsg',
    msgTime: '7.04',
    messageType: 'msg',
    readMsg: true,
  },
  {
    sender: 'Sender',
    message: 'chatting.chatMsg1',
    msgTime: '7.08',
    messageType: 'msg',
    readMsg: true,
  },
  {
    sender: 'Receiver',
    message: chatAudio,
    msgTime: '5.20',
    messageType: 'audio',
    readMsg: true,
  },
  {
    sender: 'Sender',
    message: 'chatting.chatMsg2',
    audioTime: 'chatting.chatTime',
    messageType: 'audioCall',
    audioType: 'callStarted',
    readMsg: false,
  },
  {
    sender: 'Sender',
    message: 'chatting.chatMsg2',
    audioTime: 'chatting.chatTime1',
    messageType: 'audioCall',
    audioType: 'callEnded',
    readMsg: false,
  },
  {
    sender: 'Receiver',
    message: 'chatting.chatMsg3',
    msgTime: '7.40',
    messageType: 'msg',
    readMsg: true,
  },
];

export const attachementData = [
  {
    icon: document,
    bgColor: '#2E2EFF',
  },
  {
    icon: camera,
    bgColor: 'red',
  },
  {
    icon: gallary,
    bgColor: '#800080',
  },
  {
    icon: headphone,
    bgColor: '#FFC300',
  },
  {
    icon: location,
    bgColor: '#097969',
  },
  {
    icon: chatProfile,
    bgColor: '#0E86D4',
  },
];

export const settingData = [
  {
    icon: <Volume />,
    name: 'chatting.muteNotification',
    darkIcon: <Volume color={appColors.white} />,
  },
  {
    icon: <UserProfileImg strokeWidth={'1.3'} />,
    name: 'chatting.addNickName',
    darkIcon: <UserProfileImg color={appColors.white} />,
  },
  {
    icon: <Image />,
    name: 'chatting.mediaCisibillity',
    darkIcon: <Image color={appColors.white} />,
  },
  {
    icon: <DisappearMsg />,
    darkIcon: <DisappearMsg />,
    name: 'chatting.DisappearingMsg',
  },
];
