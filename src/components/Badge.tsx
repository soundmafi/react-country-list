import { Color, BadgeLabel } from './../types';

interface IBadge {
	color: Color;
	type: BadgeLabel;
	value: Number;
}

const Badge = ({ color, type, value }: IBadge) => {
	return (
		<span className={`badge col px-1 py-2 mx-2 bg-${color}`}>
			{type}: {value}
		</span>
	);
};

export default Badge;
