import React from 'react';
import { connect } from 'react-redux';
import { fetchRateQuotes } from '../actions';
import FormContainer from '../container/FormContainer'
import TableContainer from '../container/TableContainer'

class OwnUpPage extends React.Component {

    handleFormSubmission = obj => {
        this.props.fetchRateQuotes(obj);
    };

    render() {
        let classname = 'ownUpPage'

        return <div className={`${classname}`}>
            <FormContainer onSubmit={this.handleFormSubmission} />
            <TableContainer quotesList={this.props} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return { quotes: state.quotes }
}

export default connect(mapStateToProps, { fetchRateQuotes })(OwnUpPage);