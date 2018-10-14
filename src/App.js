import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Button } from 'reactstrap'
import { today } from './helpers'
import './App.css'

import Logo from './components/logo'
import Footer from './components/footer'


class App extends Component {
  render() {
    return <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main role="main" className="inner cover">
          <Logo />
          
          <form className="form-inline">
            <label className="my-1 mr-2" htmlFor="month" ref='month'>
              Today is
            </label>
            <select className="custom-select my-1 mr-sm-2" id="month">
              <option value='1'>1</option>
              <option value='2'>2</option>
            </select>

            <select className="custom-select my-1 mr-sm-2" ref='day'>
              <option value='1'>1</option>
              <option value='2'>2</option>
            </select>

            <select className="custom-select my-1 mr-sm-2" ref='year'>
              <option value='1'>1</option>
              <option value='2'>2</option>
            </select>

            <label className="my-1 mr-2" htmlFor="amount">
              and I'll invest
            </label>
            <input type="text" className="form-control mr-2" id="amount" placeholder="1000" style={{width: 'auto'}}/>

            <label className="my-1 mr-2">
               USD in BTC
            </label>
          </form>

          <Button color="warning" className="mt-4">
            Bring me to {today()}
          </Button>
        </main>

        <Footer />
      </div>;
  }
}

export default App;
