const githubReducer = (currState, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...currState,
				users: action.payload,
				loading: false,
			};
		case 'GET_USER':
			return {
				...currState,
				user: action.payload,
				loading: false,
			};
		case 'GET_REPOS':
			return {
				...currState,
				repos: action.payload,
				loading: false,
			};
		case 'SET_LOADING':
			return {
				...currState,
				loading: true,
			};
		case 'CLEAR_SEARCH_RESULTS':
			return {
				...currState,
				users: [],
			};
		default:
			return currState;
	}
};

export default githubReducer;
