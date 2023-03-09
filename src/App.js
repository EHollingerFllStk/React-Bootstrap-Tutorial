import "./styles.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form
} from "react-bootstrap";
// import Alert from "react-bootstrap/Alert";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@email.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email addresss, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <Button variant="secondary" type="submit">
                    Login
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Card className="mb-3">
            <Card.Img src="https://t4.ftcdn.net/jpg/01/31/89/13/360_F_131891333_YtJeWozj269tpiWnwz4vBkCBe7h26qNU.jpg" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>This is an example of bootstrap card</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item active>Test</Breadcrumb.Item>
          </Breadcrumb>
          <Alert varient="success">This is a button</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}
