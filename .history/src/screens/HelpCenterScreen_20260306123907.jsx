import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HelpCenterScreen = () => {

const navigate = useNavigate();
  return (

    <Container className="my-4">
      <h1>Help Center</h1>
      <p className="lead">Find answers to commonly asked questions 5</p>
      <a onClick={() => navigate("./shipping")} className="btn btn-primary my-2">Shipping FAQs</a>
      <a onClick={() => navigate("./payment")} className="btn btn-secondary my-2">Payment FAQs</a>
    </Container>
  );
};

export default HelpCenterScreen;
