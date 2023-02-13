import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/ordersSlice';

function SelectComp() {
  const [opened, setOpened] = useState(false)
  const value = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  function toggle() {
    setOpened(prev => !prev)
  }

  function selectHandler(value) {
    dispatch(setFilter(value))
    toggle()
  }

  return (
    <div className={clsx('main__select', opened && 'opened')}>
      <button className="main__select-current"  onClick={toggle}>
        <span>{value}</span>
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.49988 4.59244L9.47546 0.231616C9.75321 -0.0730436 10.2131 -0.0777508 10.5027 0.221103C10.7923 0.519956 10.802 1.0092 10.5242 1.31386L6.0243 6.24983C5.88163 6.40632 5.6909 6.48367 5.49988 6.48139C5.30885 6.48367 5.11811 6.40632 4.97544 6.24983L0.475595 1.31385C0.197852 1.00919 0.207471 0.519942 0.49708 0.221091C0.786688 -0.0777595 1.24662 -0.0730479 1.52436 0.231615L5.49988 4.59244Z"
            fill="#A0A0B6"
          />
        </svg>
      </button>
      <ul className="main__select-menu">
        <li>
          <button value="24 Hours" onClick={() => selectHandler('24 Hours')}>24 Hours</button>
        </li>
        <li>
          <button value="7 Days" onClick={() => selectHandler('7 Days')}>7 Days</button>
        </li>
        <li>
          <button value="30 Days" onClick={() => selectHandler('30 Days')}>30 Days</button>
        </li>
        <li>
          <button value="All-Time" onClick={() => selectHandler('All-Time')}>All-Time</button>
        </li>
      </ul>
    </div>
  );
}

export default SelectComp;
