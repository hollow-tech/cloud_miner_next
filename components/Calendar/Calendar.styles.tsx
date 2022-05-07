import styled from 'styled-components';

export const Wrapper = styled.div`
  .react-datepicker {
    font-family: 'Lato', sans-serif;
    filter: drop-shadow(35px 45px 73px rgba(32, 32, 35, 0.07));
    border-radius: 5px 5px 0px 0px;
    width: 375px;
    height: 402px;
  }
  .react-datepicker__current-month {
    margin-bottom: 40px;
  }
  .react-datepicker__month {
    width: 299.33px;
    height: 194.29px;
    padding: 25px;
  }
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;

    width: 299.33px;
    margin-bottom: 20px;
  }
  .react-datepicker__input-container input {
    width: 500px;
  }
  .react-datepicker__header {
    text-align: center;
    background-color: ${({ theme }) => theme.clean};
    position: relative;
    left: 30px;
    padding-top: 40px;
    border-bottom: none;
  }
  .react-datepicker__current-month {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 500;
  }
  .react-datepicker__day-name {
    color: ${({ theme }) => theme.primary};
  }
  .react-datepicker__navigation-icon::before {
    border-color: ${({ theme }) => theme.primary};
    border-width: 2px 2px 0 0;
    top: 10px;
  }
  .react-datepicker__navigation {
    padding-top: 40px;
    overflow: visible;
  }
`;
