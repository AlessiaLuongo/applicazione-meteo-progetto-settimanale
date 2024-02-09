import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import ComponentNextDays from "./ComponentNextDays";

const ComponentDetail = (props) => {
  const [detailWeather, setDetailWeather] = useState(null);

  const fetchDetailWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.countryCode}&APPID=f592bb1f055a6a224e93a8020d397bbb&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setDetailWeather(data);
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetailWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    detailWeather && (
      <>
        <ListGroup className="my-5">
          <ListGroup.Item>
            <p>
              {detailWeather.name} - {detailWeather.sys.country}
            </p>
          </ListGroup.Item>
          {detailWeather.weather.map((e) => {
            return (
              <ListGroup.Item key={e.id}>
                {e.main} - {e.description}
              </ListGroup.Item>
            );
          })}
          <ListGroup.Item>{detailWeather.main.temp} &deg;C</ListGroup.Item>
          <ListGroup.Item>
            Feels like: {detailWeather.main.feels_like}&deg;C
          </ListGroup.Item>
          <ListGroup.Item>
            Humidity: {detailWeather.main.humidity}
          </ListGroup.Item>
        </ListGroup>

        <ComponentNextDays city={props.city} countryCode={props.countryCode} />
      </>
    )
  );
};
export default ComponentDetail;
