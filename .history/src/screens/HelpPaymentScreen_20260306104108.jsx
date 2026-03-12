import { Container, Row, Col, Accordion } from "react-bootstrap";

const HelpPaymentScreen = () => {
  const faqs = [
    {
      category: "Payment",
      questions: [
        { q: "What payment methods do you accept?", a: "We accept all major credit cards and PayPal." },
        { q: "Is my payment information secure?", a: "Yes, we use industry-standard encryption." },
      ]
    },
    {
      category: "Returns",
      questions: [
        { q: "What is your return policy?", a: "We accept returns within 30 days of purchase." },
        { q: "How do I start a return?", a: "Contact our support team with your order number." },
      ]
    },
  ];

  return (
    <Container className="my-4">
      <h1>Help Center</h1>
      <p className="lead">Find answers to commonly asked questions</p>
      
      {faqs.map((category, idx) => (
        <div key={idx} className="my-4">
          <h3>{category.category}</h3>
          <Accordion>
            {category.questions.map((item, qIdx) => (
              <Accordion.Item eventKey={`${idx}-${qIdx}`} key={qIdx}>
                <Accordion.Header>{item.q}</Accordion.Header>
                <Accordion.Body>{item.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      ))}
    </Container>
  );
};

export default HelpCenterScreen;
