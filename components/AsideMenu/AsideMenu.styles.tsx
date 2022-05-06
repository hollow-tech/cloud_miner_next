import styled from "styled-components";



export const AsideWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  inline-size: 323px; 
`

export const AsideList = styled.ul`  
`;

export const AsideItem = styled.li`
  inline-size: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  block-size: 100%;
  cursor: pointer;
  
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline-start: 70px;
  margin-inline-end: 6px;

  svg {
    inline-size: 50px;
    block-size: 50px;
  }

`;

export const AsideLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  inline-size: 100%;
  padding: 5px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.6;
  color: ${({ theme }) => theme.clean};
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  transition: 0.3s ease-in-out color;
  svg {
    transition: 0.3s ease-in-out fill;
  }
  &:hover {
    opacity: 1;
  }


`;

export const Notification = styled.span`
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-inline-start: 36px;
  color: ${({ theme }) => theme.primary};
`;

export const Active = styled.span`
  position: absolute;
  z-index: 5;
  inset-block: 0;
  inset-inline-start: 0;
  background: linear-gradient(90deg, rgba(215, 232, 255, 0.55) 0%, rgba(138, 182, 243, 0) 100%);  
  block-size: 100%;
  inline-size: 100%;
  border-inline-start: 3px solid #ffd004;
`;

export const LogoWrapper = styled.div`
  padding-top: 20px;
  padding-left: 80px;
`