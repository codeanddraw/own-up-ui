let quoteReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_QUOTES':
			return [...action.payload];

		case 'ERROR_QUOTES':
			return "ERROR";

		default:
			return state;
	}
};

export default quoteReducer;