import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import {App} from '../App';
import dayjs from 'dayjs'


describe('App main component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test App method isOnRange', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().isOnRange()).toBeTruthy()
    wrapper.setState({ date: dayjs('2008-12-12').toDate() })
    expect(wrapper.instance().isOnRange()).toBeFalsy();
  })

  it("test App method hasMinDays", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().hasMinDays()).toBeFalsy();
    wrapper.setState({ date: dayjs().subtract(7, 'day').toDate() })
    expect(wrapper.instance().hasMinDays()).toBeTruthy();
  });
})
