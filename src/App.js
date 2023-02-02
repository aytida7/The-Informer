
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import News from './components/News';
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  

  render() {
    return (
      <div>
           
            <Router>
              <div className='sticky-top'>
              <Navbar/>
              </div>

              
      {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}

        
      /> */}
      
            
            <Routes>
                
                <Route exact path="/" element={<News  key={'home'} pageSize={9} category={'general'}/>}/>
                <Route exact path="/business" element={<News  key={'business'} pageSize={9} category={'business'}/>}/>
                <Route exact path="/entertainment" element={<News  key={'entertainment'} pageSize={9} category={'entertainment'}/>}/>
                <Route exact path="/general" element={<News  key={'general'} pageSize={9} category={'general'}/>}/>
                <Route exact path="/health" element={<News  key={'health'} pageSize={9} category={'health'}/>}/>
                <Route exact path="/science" element={<News  key={'science'} pageSize={9} category={'science'}/>}/>
                <Route exact path="/sports" element={<News  key={'sports'} pageSize={9} category={'sports'}/>}/>
                <Route exact path="/technology" element={<News  key={'technology'} pageSize={9} category={'technology'}/>}/>
                
                  
        </Routes>

            </Router>
      </div>
    )
  }
}
