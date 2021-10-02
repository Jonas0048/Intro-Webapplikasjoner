import { useState } from 'react';

const Alert = ({ input }) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    console.log('Clicked');
    input(value);
    alert(value);
  };
  const handleChange = (e) => {
    console.log('Changed');
    setValue(e.target.value);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <input type="text" value={value} onChange={handleChange}></input>
    </>
  );
};

export default Alert;
