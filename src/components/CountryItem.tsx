import { ICountry, Color } from './../types';
import Badge from './Badge';

const CountryItem = ({ flags, name, capital, region, area, population }: ICountry) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<img className="col-md-1 float-left" src={`${flags}`} alt="Country flag" />
			<span className="col mx-5">{name}</span>
			<span className="col">{capital}</span>
			<span className="col">{region}</span>
			<Badge color={Color.Primary} type={'area'} value={area} />
			<Badge color={Color.Secondary} type={'population'} value={population} />
		</li>
	);
};

export default CountryItem;
