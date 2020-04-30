const getUserName = (user) => {
	return user ? `${user.name} ${user.lastName}(${user.company})` : 'Loading...';
};

export default getUserName;
