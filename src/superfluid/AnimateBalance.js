import React, { useEffect, useRef, useState } from "react";
 
const AnimatedBalance = ({
  value,
  rate,
  timeout = 100,
  decimalPlaces = 7
}) => {
  const [valueShow, setValueShow] = useState(value);
  useEffect(() => {
    setValueShow(value);
    const id = setInterval(() => {
      setValueShow((currValue) => {
        return currValue + rate / (1000 / timeout);
      });
    }, timeout);
    return () => {
      clearInterval(id);
    };
  }, [value, rate]);
  return <p className="m-0 p-0">{valueShow.toFixed(decimalPlaces)} <span style={{color:'green',fontSize:'10px',fontWeight:'bold'}}>USDCx</span></p>;
};

export default AnimatedBalance;
