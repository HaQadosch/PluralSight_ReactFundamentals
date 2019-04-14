import React from 'react'
import ReactDOM from 'react-dom'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Continue } from './Continue'

/* global it, describe, expect */
enzyme.configure({ adapter: new Adapter() })

describe('Continue Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Continue />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
