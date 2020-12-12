import connector from '../apis/connector';

export const fetchRateQuotes = (queryParams) => async (dispatch) => {
    await dispatch(fetchQuotes(queryParams));
};

export const fetchQuotes = (queryParams) => async dispatch => {
    let { loanSize, creditScore, propertyType, occupancy } = queryParams

    const response = await connector.get(`/quotes?loanSize=${loanSize}&creditScore=${creditScore}&propertyType=${propertyType}&occupancy=${occupancy}`);
    dispatch({ type: 'FETCH_QUOTES', payload: response.data.rateQuotes });
};

