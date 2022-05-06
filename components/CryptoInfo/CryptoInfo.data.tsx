import { CryptoLogo } from "./CryptoInfo.types";
import Binance from './icons/binance.svg'
import Bitcoin from './icons/bitcoin.svg'
import Dogecoin from './icons/dogecoin.svg'
import Etherium from './icons/etherium.svg'
import Litecoin from './icons/litecoin.svg'
import Stellar from './icons/stellar.svg'
import Tether from './icons/tether.svg'




export const links: CryptoLogo[] = [
  {
    icon: <Binance />,
    label: "Binance",
    id: 1,
  },

  {
    icon: <Bitcoin />,
    label: "Bitcoin",
    id: 2,
  },

  {
    icon: <Dogecoin />,
    label: "Dogecoin",
    id: 3,
  },

  {
    icon: <Etherium />,
    label: "Etherium",
    id: 4,
  },

  {
    icon: <Litecoin />,
    label: "Litecoin",
    id: 5,
  },

  {
    icon: <Stellar />,
    label: "Stellar",
    id: 6,
  },

  {
    icon: <Tether />,
    label: "Tether",
    id: 7,
  }
];
