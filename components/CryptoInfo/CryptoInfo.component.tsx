import { BalanceButton, BalanceIcon, BalanceUpperContainer, CryptoStyled, LastPayoutInfo, MiningButtons } from "./CryptoInfo.styles";

import { BalanceInfo } from '../BalanceInfo';
import { Button } from '../Buttons'
import { theme } from '../../styles/theme';
import Bitcoin from './icons/bitcoin.svg'



export const CryptoInfo: React.FC = () => {
	return (
		<CryptoStyled>
			<BalanceUpperContainer>
				<BalanceIcon>
					<Bitcoin />
					Bitcoin
				</BalanceIcon>
				<BalanceInfo></BalanceInfo>
				<BalanceInfo></BalanceInfo>
				<BalanceInfo></BalanceInfo>
				<LastPayoutInfo>У вас пока не было выплат. Первая выплата осуществляется в течение суток с момента покупки майнингового контракта</LastPayoutInfo>
			</BalanceUpperContainer>
			<BalanceButton>
				<MiningButtons>
					<Button variants='outlined' color = {theme.primary} >Пополнить</Button>
					<Button variants='contained' color = {theme.primary}>Майнить</Button>
				</MiningButtons>
				<Button variants='contained' color = {theme.primary}>Вывести BTC</Button>
			</BalanceButton>
		</CryptoStyled>
	)
}



