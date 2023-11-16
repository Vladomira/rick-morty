import { fetchLocations } from '../../src/service/api';
import { LocationData } from '../../src/types/Map';

async function Map() {
  let locations: LocationData[] | undefined;
  try {
    locations = await fetchLocations();
  } catch (error) {
    console.error('Error fetching character:', error);
  }
  return <ul>{locations?.map((el, idx) => <li key={idx}>{el.name}</li>)}</ul>;
}

export default Map;
