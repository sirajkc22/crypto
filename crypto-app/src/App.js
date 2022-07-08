import React from 'react'
import './App.css'
import { Route,Switch,Link } from "react-router-dom";
import {Layout,Typography,Space} from 'antd';
import Navbar from './component/Navbar'
import Homepage from './component/Homepage';
import Cryptocurrencies from './component/Cryptocurrencies';
import Cryptodetails from './component/Cryptodetails';
import Exchanges from './component/Exchanges';
import News from './component/News';
const App=()=> {
    return (
        <div className="app">
            <div className="navbar">
            <Navbar/>
            </div>
            <div className="main">
             <Layout>
                 <div className="routes">
                     <Switch>
                        
                     <Route exact path ='/'> <Homepage/>
                     </Route> 
                     <Route exact path ='/exchanges'> 
                     <Exchanges/>
                     </Route> 
                     <Route exact path ='/cryptocurrencies'> 
                     <Cryptocurrencies/>
                     </Route>
                     <Route exact path ='/crypto/:coinId'>
                     <Cryptodetails/>
                         </Route>
                     <Route exact path ='/news'>
                         <News/>
                         </Route>  
                     </Switch>
                 </div>
             </Layout>
            
            <div className="footer">
                <Typography.Title level ={5} style={{color:'white',textAlign:'center'}}>
                    Cryptoverse <br/>
                    All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Homepage</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        
                   </Space>
                 </div> 
        </div>
    </div>
    )

}

export default App
