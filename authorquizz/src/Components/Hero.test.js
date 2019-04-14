import React from 'react'
import ReactDOM from 'react-dom'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Hero } from './Hero'

/* global it, describe, expect */
enzyme.configure({ adapter: new Adapter() })

describe('Hero Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Hero />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  const wrapper = shallow(<Hero />)
  it('renders section', () => {
    expect(wrapper.find('section').length).toBe(1)
  })
})
