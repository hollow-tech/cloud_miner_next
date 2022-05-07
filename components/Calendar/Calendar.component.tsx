import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { Wrapper } from './Calendar.styles';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//   <button className="example-custom-input" onClick={onClick} ref={ref}>
//     {value}
//   </button>
// ));

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Wrapper>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        minDate={new Date()}
        inline
      />
    </Wrapper>
  );
};

<></>;