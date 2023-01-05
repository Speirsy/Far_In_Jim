import './myStyles.css' 
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

  return (

    <body className='bodyHome'>

  
  <div>
    <h4>Home</h4>
    <ul className='primary, font-xl'>
    <li>
      <Link to="/farinjim">Far In Jim</Link>
    </li>
    <li>    
      <Link to="/$5000songs">$5000Songs</Link>
    </li>
    </ul>
  </div>
  </body>
)
  };

export default Home;
