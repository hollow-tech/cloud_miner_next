
import type { NextPage } from 'next';
import { Menu } from '../components';
import { links } from '../components/AsideMenu/AsideMenu.data';
import { BalanceInfo } from '../components/BalanceInfo';
import { Button } from '../components/Buttons';
import { CardInfo } from '../components/CardInfo';
import { Variant } from '../components/Variants';
import { Checkbox, ToggleSwitch } from '../components/Checkboxs';
import { CryptoInfo } from '../components/CryptoInfo';
import { Typography } from '../components/Typography';
import { Aside } from '../modules/Aside';

const Home: NextPage = () => {
  return (
    <>
      <Button variants="contained" color="#0B65C6">
        Пополнить
      </Button>
      <Button variants="outlined" color="#0B65C6">
        Пополнить
      </Button>
      <Typography variants="headline1">Headline1</Typography>
      <Typography variants="headline2">Headline2</Typography>
      <Typography variants="headline3">Headline3</Typography>
      <Typography variants="body">Body</Typography>
      <Typography variants="subtitle">subtitle</Typography>
      <Checkbox type="checkbox"></Checkbox>
      <Aside></Aside>
      <CardInfo
        title="Всего"
        currency="SWH"
        balance="1234.54"
        href="#"
        btnLabel="Вывести"
      ></CardInfo>

      <Menu label={'admin.com'}></Menu>
      <CryptoInfo></CryptoInfo>
      <Variant></Variant>
    </>
  );
};

export default Home;
