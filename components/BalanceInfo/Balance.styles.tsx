import styled from 'styled-components';

export const BalanceStyled = styled.div`
	inline-size: 200px;
	block-size: 100px;
	font-size: 18px;
	line-height: 38px;
	font-weight: 500;
`

export const BalanceStatus = styled.div`
`

export const BalanceAmount = styled.div`
	color: ${({ theme }) => theme.text};
	font-size: 32px;
	line-height: 38px;
`

export const BalanceDollar = styled.div`
	color: ${({ theme }) => theme.up}; 
`