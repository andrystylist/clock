// import React from 'react';
import React, { useState, useEffect } from 'react';
import './Clock.scss';

function Clock () {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <article className='clock'>
      <h1 className='clock-title'>RELOJ DIGITAL</h1>
      <p className='clock-date'>{date.toLocaleTimeString()}</p>
    </article>
    );
}

export default Clock

