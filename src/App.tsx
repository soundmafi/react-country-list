import CountryList from './components/CountryList';
import countryData from './country-data.json';
import { ICountry, Color } from './types';

const App = () => {
	const countries: ICountry[] = countryData.map((country) => ({
		name: country.name.common,
		capital: country.capital[0],
		population: country.population,
		flags: country.flags.svg,
		area: country.area,
		region: country.region,
	}));

	return (
		<div className="container">
			<h1 className="display-1">Country List</h1>
			<CountryList countries={countries} />
		</div>
	);
};

export default App;
