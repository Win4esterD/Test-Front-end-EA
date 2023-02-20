import React from 'react';
import './styles/defaults.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopUp from './components/Popup';

class App extends React.Component{
  render(){
    return(
      <div>
        <PopUp />
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;