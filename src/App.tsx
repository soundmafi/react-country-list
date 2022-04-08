import countryData from './country-data.json';
import CountryList from './components/CountryList';
console.log(countryData);


console.log(countryData.map(({area, capital,name, population, flags, region}) =>  {return name.common,capital[0], population, flags.svg, area, region})
)
interface ICountry {
	area: number,
	capital: string,
	name: string,
	population: number,
	flags: string,
	region: string
}


const App = (countryData: {}[]) => {
	
	return (
		<div className='app'>
			
			<CountryList/>
		</div>
	);
};

export default App;
