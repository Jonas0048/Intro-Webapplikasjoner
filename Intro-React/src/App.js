import { useState } from 'react';
import Alert from './components/Alert';
import Food from './components/Food';
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';

const App = () => {
  const [inputFromChild, setInputFromChild] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const food = ['Pizza', 'Hamburger', 'Coke'];

  const ifc = (input) => {
    setInputFromChild(input);
    setIsClicked(!isClicked);
    console.log(`isClicked was set to ${!isClicked}`);
  };

  return (
    <>
      <Wrapper>
        <MyComponent title="It Works" />
        <Food foodList={food} />
        <Alert input={ifc} />
        {isClicked && <p>{inputFromChild}</p>}
      </Wrapper>

      <div className="flex">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </>
  );
};

export default App;
