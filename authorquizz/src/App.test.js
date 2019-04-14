import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* global it, describe, expect */
enzyme.configure({ adapter: new Adapter() })

describe('Author Quiz', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  const wrapper = shallow(<App />)
  it('renders main', () => {
    expect(wrapper.find('main').length).toBe(1)
  })
})
