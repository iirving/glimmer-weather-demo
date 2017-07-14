import Component, { tracked } from "@glimmer/component";

export default class TrackWeather extends Component {
	@tracked weather;
	@tracked area;
	@tracked addZip;

	constructor(options) {
		super(options);
		this.loadWeather();
	}

 onKeyUp(event) {
    this.addZip = event.target.value;
  }
  clicked () {
  		this.loadWeather();
  }

	async loadWeather() {
		let zip = this.addZip || 97239;
		console.log(zip);

		let response1 = await fetch(`https://api.wunderground.com/api/625172310aff38a6/geolookup/q/${zip}.json`);
		this.area = await response1.json();

		let city = this.area.location.city;
		let state = this.area.location.state;

		let response2 = await fetch(`https://api.wunderground.com/api/625172310aff38a6/conditions/q/${state}/${city}.json`);
		this.weather = await response2.json();
		console.log(this.weather.current_observation.temp_f);
				console.log(this.weather.current_observation.temp_c);
		setTimeout( () => { this.loadWeather(); }, 10000);
	}
};
