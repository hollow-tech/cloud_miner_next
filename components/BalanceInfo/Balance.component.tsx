import { BalanceAmount, BalanceDollar, BalanceStatus, BalanceStyled } from "./Balance.styles";



export const BalanceInfo: React.FC = () => {
	return (
		<BalanceStyled>
			<BalanceStatus>Баланс</BalanceStatus>
			<BalanceAmount>456,56 USD</BalanceAmount>
			<BalanceDollar>2,09 USD</BalanceDollar>
		</BalanceStyled>


	)
}



