import connector from '../apis/connector';

export const fetchRateQuotes = (queryParams) => async (dispatch) => {
    await dispatch(fetchQuotes(queryParams));
};

export const fetchQuotes = (queryParams) => async dispatch => {
    let { loanSize, creditScore, propertyType, occupancy } = queryParams

    try {
        const response = await connector.get(`/quotes?loanSize=${loanSize}&creditScore=${creditScore}&propertyType=${propertyType}&occupancy=${occupancy}`);
   
        if (response.status === 200) {
            dispatch({ type: 'FETCH_QUOTES', payload: response.data.rateQuotes })
        } else {
            console.log(response.error)
            dispatch({ type: 'ERROR_QUOTES', payload: response.error })
        }
    } catch (error) {
        dispatch({ type: 'ERROR_QUOTES', payload: error })
    }
}


