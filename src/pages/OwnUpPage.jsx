import React from 'react';
import { connect } from 'react-redux';
import { fetchRateQuotes } from '../actions';
import FormContainer from '../container/FormContainer'
import TableContainer from '../container/TableContainer'
import Header from '../components/Header'

/**
 * OwnUp page that collates all components and containers
 * @return {JSX}
 */
class OwnUpPage extends React.Component {
    
    //Callback to handle form submission
    handleFormSubmission = obj => {
        this.props.fetchRateQuotes(obj);
    };

    render() {
        let classname = 'ownUpPage'

        return <div className={`${classname}`}>
            <Header title={`Rate Quote Coding Challenge`} />
            <FormContainer onSubmit={this.handleFormSubmission} />
            <TableContainer quotesList={this.props} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return { quotes: state.quotes }
}

export default connect(mapStateToProps, { fetchRateQuotes })(OwnUpPage);