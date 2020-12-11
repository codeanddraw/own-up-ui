import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormContainer() {
  let classname = 'ownUp'

  return (
    <div className={`${classname}-FormContainer`}>

      <Form>
        <Form.Group as={Row} controlId="formHorizontalLoan">
          <Form.Label column sm={2}> Loan Size </Form.Label>
          <Col sm={3}> 
             <Form.Control type="text" placeholder="Loan" /> 
          </Col>

          <Form.Label column sm={2}>Property Type</Form.Label>
          <Col sm={3}> 
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose Property Type...</option>
            <option>SingleFamily</option>
            <option>Condo</option>
            <option>Townhouse</option>
            <option>MultiFamily</option>
          </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalScore">
          <Form.Label column sm={2}> Credit Score </Form.Label>
          <Col sm={3}> <Form.Control type="text" placeholder="Score" /> </Col>
        
          <Form.Label column sm={2}>Occupancy</Form.Label>
          <Col sm={3}> 
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose Occupancy...</option>
            <option>Primary</option>
            <option>Secondary</option>
            <option>Investment</option>
          </Form.Control>
          </Col>
        
        </Form.Group>
      
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 10 }}>
            <Button type="submit" bsPrefix="ownUp-btn">Quote Rates</Button>
          </Col>
        </Form.Group>
        </Form>
        
    </div>
  );
}

export default FormContainer;
