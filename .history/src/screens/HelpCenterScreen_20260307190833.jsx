import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HelpCenterScreen = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "Shipping FAQs",
      description: "Learn about delivery times, international shipping, and tracking your order.",
      path: "./shipping",
      variant: "primary",
    },
    {
      title: "Payment FAQs",
      description: "Find out about accepted payment methods, security, and billing issues.",
      path: "./payment",
      variant: "success",
    },
  ];

  return (
    <Container className="my-5">
      <div className="mb-4">
        <h1 className="fw-bold">Help Center</h1>
        <p className="lead text-muted">Find answers to commonly asked questions</p>
      </div>
      <Row className="g-4">
        {topics.map((topic) => (
          <Col key={topic.path} xs={12} sm={6} md={4}>
            <Card
              className="h-100 shadow-sm border-0 text-center"
              style={{ cursor: "pointer", transition: "transform 0.15s, box-shadow 0.15s" }}
              onClick={() => navigate(topic.path)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <Card.Body className="p-4">
                <div style={{ fontSize: "2.5rem" }}>{topic.icon}</div>
                <Card.Title className="mt-3 fw-semibold">{topic.title}</Card.Title>
                <Card.Text className="text-muted small">{topic.description}</Card.Text>
              </Card.Body>
              <Card.Footer className={`bg-${topic.variant} border-0`}>
                <span className="text-white fw-semibold small">View FAQs →</span>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HelpCenterScreen;
