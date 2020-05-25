import React from 'react';

import Link from 'shared/Link';
import navigation from '../_nav';

const AppSidebar = () => {
	return (
		<nav className="text-center py-2">
			{navigation.map((e) => (
				<Link key={e.name} to={e.url} className="mx-4 p-2">
					{e.name}
				</Link>
			))}
		</nav>
	);
};

export default AppSidebar;
