import React from 'react';
import { Redirect } from 'react-router';


function Page({autherized}) {
 
    if(!autherized){
        return <Redirect to='/' />;
    }
     
    
    return(
       <div>
           <h1>Hiii  welocme to  pageautherized</h1>
        <button onClick ={this.submit()}></button>
        </div>
        
    )

};
 export default Page;