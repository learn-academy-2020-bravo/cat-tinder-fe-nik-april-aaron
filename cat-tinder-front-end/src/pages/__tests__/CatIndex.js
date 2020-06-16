import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex'
import { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })


it('renders the cat index', () => {
  const catindex = shallow(<CatIndex />)
  expect(catindex.find('h1').text()).toEqual('I Am A Cat')
})

