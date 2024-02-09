import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
const ComponentDetail = () => {
  const [detailWeather, setDetailWeather] = useState(null);

  const fetchDetailWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=f592bb1f055a6a224e93a8020d397bbb&units=metric`
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
      <ListGroup>
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
        <ListGroup.Item>{detailWeather.main.temp} C</ListGroup.Item>
        <ListGroup.Item>
          Feels like: {detailWeather.main.feels_like} C
        </ListGroup.Item>
        <ListGroup.Item>Humidity: {detailWeather.main.humidity}</ListGroup.Item>
      </ListGroup>
    )
  );
};
export default ComponentDetail;
