export const NAVBAR = [
	{
		text: 'Meat',
		to: '/product/category/meat',
		id: '5eb170aa1e7ab922540be279',
	},
	{
		text: 'Seafood',
		to: '/product/category/seafood',
		id: '5eb41edd1a9cc31adc147a00',
	},
	{
		text: 'Vegetables',
		to: '/product/category/vegetables',
		id: '5eb41eee1a9cc31adc147a01',
	},
	{
		text: 'Fruits',
		to: '/product/category/fruits',
		id: '5eb41f0d1a9cc31adc147a02',
	},
	{
		text: 'Eggs',
		to: '/product/category/eggs',
		id: '5eb41f151a9cc31adc147a03',
	},
	{
		text: 'Dairy',
		to: '/product/category/dairy',
		id: '5eb41f1b1a9cc31adc147a04',
	},
	{
		text: 'Bread',
		to: '/product/category/bread',
		id: '5eb41f1e1a9cc31adc147a05',
	},
];

export const getCategoryId = (name) => {
	const i = NAVBAR.findIndex((e) => e.text.toLowerCase() === name);
	return NAVBAR[i].id;
};
