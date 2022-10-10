import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function HelloWorld() {
  return (
    <Container style={{textAlign: 'left', display: 'inline'}}>
        <Container style={{paddingLeft: '1rem'}}><h1>Hello, world!</h1></Container>
        <Container style={{display: 'flex'}}>
            <Container style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                <InputGroup.Text id="basic-addon1">First Name </InputGroup.Text>
                <Form.Control placeholder="Name"/>
            </Container>
            <Container style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                <InputGroup.Text id="basic-addon1">Last Name </InputGroup.Text>
                <Form.Control placeholder="Name"/>
            </Container>
            <Button>Save</Button>
        </Container>
    </Container>
  );
}

export default HelloWorld;
