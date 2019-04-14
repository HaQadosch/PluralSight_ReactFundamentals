import React from 'react'
import ReactDOM from 'react-dom'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Book } from './Book'

/* global it, describe, expect */
enzyme.configure({ adapter: new Adapter() })

describe('Book Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Book />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
