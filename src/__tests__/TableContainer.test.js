import React from 'react';
import { shallow } from 'enzyme';
import TableContainer from '../container/TableContainer';

describe('TableContainer: smoke test suite', () => {
    let props;

    beforeEach(() => {
        props = {
            quotesList:{
                quotes: [{
                    'apr': 10.874999999999996,
                    'closingCosts': 1000.04,
                    'interestRate': 3.625,
                    'lenderName': 'TFB Federal Credit Union',
                    'loanType': '7/1 ARM',
                    'monthlyPayment': 0.018242052080887194,
                }]
         }
        };
    })

    it('1. renders without errors', () => {
        shallow(<TableContainer {...props} />);
    });

    it('2. renders table with class .ownUp-TableContainer', () => {
        const wrapper = shallow(<TableContainer {...props} />);
        expect(wrapper.exists('.ownUp-TableContainer')).toBe(true);
    });

    it('3. renders table rows', () => {
        const wrapper = shallow(<TableContainer {...props} />);
        expect(wrapper.exists('tr')).toBe(true);
    });
})