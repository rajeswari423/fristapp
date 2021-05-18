import React from "react";
import {Link} from "react-router-dom";


export default class Routing extends React.Component {
render(){
return(
    <div class="container" style={{backgroundColor:"lightgray"}}>
   <ul>
    <li> <Link to="/Welcome"><button>Welcome</button> </Link> </li>
    <li> <Link to="/Signin"><button>Signin</button> </Link> </li>
    <li> <Link to="/LifeCycle"><button>LifeCycle</button> </Link> </li>
    <li> <Link to="/BookService"><button>BookService</button> </Link> </li>
  
   </ul>
   </div>
);
}
}