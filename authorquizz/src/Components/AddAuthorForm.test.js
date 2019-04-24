import React from 'react'
import ReactDOM from 'react-dom'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { AddAuthorForm } from './AddAuthorForm'

/* global it, describe, expect */
enzyme.configure({ adapter: new Adapter() })

describe('AddAuthorForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddAuthorForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
