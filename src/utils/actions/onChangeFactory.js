export const onChangeFactory = (state, setState) => (event) => {
	setState({ ...state, [event.target.name]: event.target.value });
};

export const onChangeNameFactory = (state, setState) => (name, value) => {
	setState({ ...state, [name]: value });
};
