import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";

const ComponentMain = ({ city, countryCode }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=f592bb1f055a6a224e93a8020d397bbb&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city, countryCode]);

  return (
    weather && (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {weather.name} - {weather.sys.country}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>

                {weather.weather.map((e) => {
                  return (
                    <Card.Text key={e.id}>
                      {e.main} - {e.description}
                    </Card.Text>
                  );
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default ComponentMain;
