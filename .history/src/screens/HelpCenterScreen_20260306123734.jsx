import { Container, Row, Col, Accordion } from "react-bootstrap";

const HelpCenterScreen = () => {

  return (
    <Container className="my-4">
      <h1>Help Center</h1>
      <p className="lead">Find answers to commonly asked questions 5</p>
      <a href="./shipping" className="btn btn-primary my-2">Shipping FAQs</a>
      <a href="./payment" className="btn btn-secondary my-2">Payment FAQs</a>
    </Container>
  );
};

export default HelpCenterScreen;
