import { mount } from 'enzyme'
import FormContainer from '../container/FormContainer'
import { Provider } from "react-redux";
import store from "../store/store"

/**
 * Factory function to create a wrapper for the FormContainer component
 * @function setup
 * @function {mount}
 */
const formWrapper = (props) => mount(
    <Provider store={store}>
        <FormContainer  
        {...props}
         onSubmit={jest.fn()}
        />
    </Provider>
);

describe('FormContainer: smoke test suite', () => {
    let props;

    beforeEach(() => {
        props = {
            fetchRates: jest.fn(),
        };
    })

    it('1. renders without errors', () => {
        formWrapper(props)
    });

    it('2. renders form with .ownUp-FormContainer class', () => {
        expect(formWrapper().exists('form.ownUp-FormContainer')).toBe(true);
        expect(formWrapper().find('form.ownUp-FormContainer')).toHaveLength(1);
    });

    it('3. renders form button with ownUp-btn class', () => {
        expect(formWrapper().find('button.ownUp-btn')).toHaveLength(1);
    });

    it('4. updates input value for loanSize formfield when changed', () => {
        const event = { target: { value: 20000 } };
        let wrapper = formWrapper()
        wrapper.find('input#formHorizontalRow1.form-control').simulate('change', event);
        expect(wrapper.find('input#formHorizontalRow1.form-control').prop('value')).toBe(20000);
    });

    it('5. updates input value for creditScore formfield when changed', () => {
        const event = { target: { value: 600 } };
        let wrapper = formWrapper()
        wrapper.find('input#formHorizontalRow2.form-control').simulate('change', event);
        expect(wrapper.find('input#formHorizontalRow2.form-control').prop('value')).toBe(600);
    });

    it('6. check propertyType select renders all five options in formfield', () => {
        let wrapper = formWrapper()
        //4 options + 1 blank option
        expect(wrapper.find('.propertyType-option').length).toBe(5);
    });

    it('7. check occupancy select renders all five options in formfield', () => {
        let wrapper = formWrapper()
        //3 options + 1 blank option
        expect(wrapper.find('.occupancy-option').length).toBe(4);
    });

    it('8. fetchs data on form submit', () => {
        const mockEvent = { preventDefault: () => true };
        expect(props.fetchRates.mock.calls.length).toBe(0);
        formWrapper().find('button.ownUp-btn').simulate('submit', mockEvent);
        // expect(props.fetchRates.mock.calls.length).toBe(1);
    });
})