import styled from 'styled-components';
import { Typography } from '../Typography';
import Bitcoin from '../CryptoInfo/icons/bitcoin.svg';
import Calendar from '../CryptoInfo/icons/calendar.svg';
import Info from '../CryptoInfo/icons/info.svg';
import { Button } from '../Buttons';

export const VariantStyled = styled.div`
  inline-size: 330px;
  block-size: 446px;
  margin-left: 100px;
  position: relative;
`;

export const VariantBackground = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  inline-size: 290px;
  block-size: 363px;
  background-color: #eceef3;
  border-radius: 10px;
`;

export const VariantButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

export const VariantCard = styled.div`
  inline-size: 290px;
  block-size: 363px;
  border-radius: 10px;
  box-shadow: 3px 4px 44px rgba(0, 0, 0, 0.14);
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  &:hover {
    transform: translate3d(-40px, -83px, 0);
    transition: transform 0.3s linear;
  }
`;

export const VariantHeader = styled.div`
  display: flex;
  padding: 20px;
  block-size: 103px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px 10px 0px 0px;
  flex-direction: column;
  color: ${({ theme }) => theme.clean};
`;

export const VariantHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const VariantInner = styled.div`
  padding: 20px;
`;

export const VariantPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 158px;
  align-items: center;
`;

export const VariantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.secondary};
  text-align: left;
`;

export const VariantLine = styled.div`
  block-size: 1px;
  inline-size: 250px;
  background-color: #c4c4c4;
  margin-bottom: 20px;
`;

export const VariantTextHeadline2 = styled(Typography)`
  text-align: center;
  padding-right: 20px;
`;

export const VariantTextHeadline3 = styled(Typography)`
  text-align: center;
`;

export const VariantTextBody = styled(Typography)``;

export const VariantIcon1 = styled(Bitcoin)`
  margin-right: 15px;
`;
export const VariantIcon2 = styled(Calendar)`
  margin-right: 15px;
`;
export const VariantIcon3 = styled(Info)``;
