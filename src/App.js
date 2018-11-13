import React, { Component } from 'react';
import { connect } from 'react-redux'
import "bootstrap/dist/css/bootstrap.css";
import { Button } from 'reactstrap'
import './App.css'
import DatePicker from "react-date-picker";
import dayjs from 'dayjs'

import { loadHistory } from './actions/history';

import Logo from './components/logo'
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      date: new Date(),
      amount: 0
    }
  }

  changeDate = date => this.setState({date})
  changeAmount = e => this.setState({amount: e.target.value})

  hasMinDays = () => {
    const startDate = dayjs(this.state.date).format("YYYY-MM-DD");
    return  dayjs().diff(startDate, "days") >= 2;
  }

  isOnRange = () => dayjs(this.state.date).format("YYYY") > 2008;

  loadData = () => {
    const [hasMinDays, isOnRange] = [this.hasMinDays(), this.isOnRange()]
    if(hasMinDays && isOnRange) {
      const startDate = dayjs(this.state.date).format("YYYY-MM-DD");
      this.props.loadHistory(startDate);
    } else {
      window.alert(hasMinDays
        ? 'Please select a date later than Jan 2009'
        : 'The difference between today and target day must be at least 2 days'
      )
    }
  }

  render() {
    const { date } = this.state

    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main role="main" className="inner cover">
          <Logo />
          
          <form className="form-inline">
            <label className="my-1 mr-2" htmlFor="month" ref='month'>
              Go back to 
            </label>
            <DatePicker
              value={date}
              onChange={this.changeDate}
            />

            <label className="my-1 mr-2" htmlFor="amount">
              and invest
            </label>
            <input type="text" className="form-control mr-2" id="amount" placeholder="1000" onChange={this.changeAmount} />

            <label className="my-1 mr-2">
               USD in BTC
            </label>
          </form>

          <Button color="warning" className="mt-4" onClick={this.loadData}>
            START TIME MACHINE
          </Button>
        </main>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    history: state.history
  })
}

export {App}
export default connect(mapStateToProps, {loadHistory})(App);
