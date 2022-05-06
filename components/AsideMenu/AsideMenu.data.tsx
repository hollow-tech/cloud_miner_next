import { LinkMenu } from "./AsideMenu.types";

import Panel from "./icons/panel.svg";
import Balance from "./icons/balance.svg";
import Powers from "./icons/powers.svg";
import Deposits from "./icons/deposits.svg";
import Contracts from "./icons/contracts.svg";
import Orders from "./icons/orders.svg";
import Operations from "./icons/operations.svg";
import Settings from "./icons/settings.svg";
import Contact from "./icons/contact.svg";
import Notifications from "./icons/notifications.svg";
import Partners from "./icons/partners.svg";
import FA from "./icons/fa.svg";


export const links: LinkMenu[] = [
  {
    href: "/panel",
    icon: <Panel />,
    label: "Панель",
    id: 1,
  },

  {
    href: "/balance",
    icon: <Balance />,
    label: "Баланс",
    id: 2,
  },

  {
    href: "/powers",
    icon: <Powers />,
    label: "Мощности",
    id: 3,
  },

  {
    href: "/deposits",
    icon: <Deposits />,
    label: "Депозиты",
    id: 4,
  },

  {
    href: "/contracts",
    icon: <Contracts />,
    label: "Контракты",
    id: 5,
  },

  {
    href: "/orders",
    icon: <Orders />,
    label: "Заказы",
    id: 6,
  },

  {
    href: "/operations",
    icon: <Operations />,
    label: "Операции",
    id: 7,
  },

  {
    href: "/settings",
    icon: <Settings />,
    label: "Настройки",
    id: 8,
  },

  {
    href: "/connection",
    icon: <Contact />,
    label: "Связь",
    id: 9,
  },

  {
    href: "/notifications",
    icon: <Notifications />,
    label: "Уведомления",
    id: 10,
  },

  {
    href: "/partners",
    icon: <Partners />,
    label: "Партнерам",
    id: 11,
  },

  {
    href: "/fa",
    icon: <FA />,
    label: "2FA и KYC",
    id: 12,
  }
];
