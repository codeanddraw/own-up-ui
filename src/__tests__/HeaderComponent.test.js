import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

/**
 * Factory function to create a shallow wrapper for the Header component
 * @function setup
 * @function {ShallowWrapper}
 */
const setup = (props) => shallow(<Header {...props} />)

describe('HeaderComponent: smoke test suite', () => {
    let props;

    beforeEach(() => {
        props = {
            title: "Rate Quote Coding Challenge"
        };
    })

    it('1. renders without errors', () => {
        setup(props);
    });

    it('2. renders table with class .ownUp-Header', () => {
        const wrapper = setup(props);
        expect(wrapper.exists('h1.ownUp-Header')).toBe(true);
    });

    it('3. renders table rows', () => {
        const wrapper = setup(props);
        const title = 'Rate Quote Coding Challenge';
        expect(wrapper.find('h1.ownUp-Header').text()).toEqual(title);
    });
})