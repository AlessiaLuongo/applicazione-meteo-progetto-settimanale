import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ComponentSearchBar = ({ onSubmit }) => {
  const [cityInputValue, setCityInputValue] = useState("");
  const [countryCodeInputValue, setCountryCodeInputValue] = useState("");

  const handleCityInput = (e) => {
    setCityInputValue(e.target.value);
  };

  const handleCountryInput = (e) => {
    setCountryCodeInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cityInputValue, countryCodeInputValue);
  };

  return (
    <Form className="mb-5" onSubmit={handleSubmit}>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="City Name"
            value={cityInputValue}
            onChange={handleCityInput}
            className="mr-sm-2"
          />
          <Form.Control
            type="text"
            placeholder="Country Code"
            value={countryCodeInputValue}
            onChange={handleCountryInput}
            className="mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" variant="dark">
            <i class="bi bi-search"></i>
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ComponentSearchBar;
