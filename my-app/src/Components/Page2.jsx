import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Page2 extends Component{
Page1({autherized}) {
 
    if(!autherized){
        return <Redirect to='/Signin' />;



    }

    
    return(
       <div>
           <h1>Hiii  welocme to  pageautherized</h1>
        <button onClick ={this.submit()}></button>
        </div>
        
    );
    }
}
 export default Page2;