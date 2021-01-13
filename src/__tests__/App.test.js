import { shallow } from 'enzyme'
import App from '../App'

/**
 * Factory function to create a shallow wrapper for the app component
 * @function setup
 * @function {ShallowWrapper}
 */
const setup = () => shallow(<App/>)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

describe('App Component: smoke test suite', () => {
 
  it('renders without error', () => {
    const wrapper = setup()
    const appComponent = findByTestAttr(wrapper, 'ownUp-Page')
    expect(appComponent.length).toBe(1)
  })
})