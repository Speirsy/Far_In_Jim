const Pricing = ({ prices }) => {
  const listItems = prices.map((price, index) => {
    return <li key={index}>{price.level}: £{price.cost} per month</li>
  });

  return (

    <div>
      <h4>Pricing</h4>
      <ul>
        { listItems }
      </ul>
      <p>£££££££</p>
   </div>
  );
};

export default Pricing;

