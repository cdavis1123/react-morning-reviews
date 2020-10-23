
import React from 'react'
import List from './Components/List'
import './App.css'



//class App extends Component{
  //  constructor(){
    //    super()
      //  this.state = {
//
  //      }
    //}



//render(){
  //  return(
    //    <div className='App'>
      //      <h1 className='movie-list-title'>The Most Amazing Movie List</h1>
        //</div>
    //);
//}


//}

function App(){

    return(
        <div className='App' id='my-id'>
            <h1 className='move-list-title'>The Most Amazing Movie List</h1>
            <List/>
        </div>
    );
}




export default App;