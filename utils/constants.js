import { BsCode, BsMusicNoteList } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick, GiPartyPopper } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad, FaRegLaughSquint } from 'react-icons/fa';

export const topics = [
  {
    name: 'development',
    icon: <BsCode />,
  },
  {
    name: 'comedy',
    icon: <FaRegLaughSquint />,
  },
  {
    name: 'gaming',
    icon: <FaGamepad />,
  },
  {
    name: 'food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'dance',
    icon: <GiPartyPopper />,
  },
  {
    name: 'beauty',
    icon: <GiLipstick />,
  },
  {
    name: 'animals',
    icon: <FaPaw />,
  },
  {
    name: 'sports',
    icon: <FaMedal />,
  },
  {
    name: 'music',
    icon: <BsMusicNoteList /> 
  }
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'Video for Good','Advertise','Developers','Transparency','Video Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]