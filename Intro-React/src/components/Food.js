const Food = ({ foodList }) => {
  return (
    <ul>
      {foodList.map((food) => (
        <li key={food}>{food}</li>
      ))}
    </ul>
  );
};

export default Food;
