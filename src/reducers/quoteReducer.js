let quoteReducer = (state=[], action) => {

	switch (action.type) {

		 case 'FETCH_QUOTES':
		  return [action.payload];

		  default:
            return state;
	}
};

export default quoteReducer;