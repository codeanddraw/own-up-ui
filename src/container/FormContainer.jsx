import { reduxForm, Field } from 'redux-form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

/**
 * validation on the form fields
 */
const validate = val => {
  const errors = {};

  if (!val.loanSize) {
    console.log('loanSize is required');
    errors.loanSize = 'Required';
  } else if (isNaN(Number(val.loanSize))) {
    errors.loanSize = 'Must be a number'
  }

  if (!val.propertyType) {
    console.log('propertyType is required');
    errors.propertyType = 'Required';
  }

  if (!val.creditScore) {
    console.log('creditScore is required');
    errors.creditScore = 'Required'
  } else if (isNaN(Number(val.creditScore))) {
    errors.creditScore = 'Must be a number'
  } else if (Number(val.creditScore) < 300 || Number(val.creditScore > 800)) {
    errors.creditScore = 'Sorry, credit score should be between 300 and 800'
  }

  if (!val.occupancy) {
    console.log('occupancy is required');
    errors.occupancy = 'Required';
  }

  return errors;
};

/**
 * Renders the fields and error message
 */
const renderField = ({ input, classname, label, type, meta: { touched, error, warning } }) => {
  return <>
    <Form.Label column sm={2}> {label} </Form.Label>
    <Col sm={3}>
      <Form.Control {...input} type={type} placeholder={label} />
      {touched && ((error && <span className={`${classname}-error`}>{error}</span>) || (warning && <span className={`${classname}-warning`} >{warning}</span>))}
    </Col>
  </>
}

/**
* Renders the dropdown 
*/
const renderDropDown = (input, name, label, type, classname) => {
  return <>
    <Form.Label column sm={2}> {label} </Form.Label>
    <Col sm={3}>
      <Field as={type} className={classname} name={name} component={type} >
        <option />
        {input.map((item, index) => {
          return <option key={index}> {item} </option>
        })}
      </Field>
    </Col>
  </>
}

/**
 * Renders the complete Form Container
 */
let FormContainer = props => {
  const { handleSubmit } = props;
  let classname = 'ownUp'
  let propertyTypeArray = ["SingleFamily", "Condo", "Townhouse", "MultiFamily"]
  let occupancyTypeArray = ["Primary", "Secondary", "Investment"]

  return <Form onSubmit={handleSubmit} className={`${classname}-FormContainer`}>
    <Form.Group as={Row} controlId="formHorizontalLoan">
      <Field classname={`${classname}-field__input`} name="loanSize" component={renderField} type="text" label="Loan Size" />
      {renderDropDown(propertyTypeArray, "propertyType", "Property Type", "select", `${classname}-field__select`)}
    </Form.Group>

    <Form.Group as={Row} controlId="formHorizontalLoan">
      <Field classname={`${classname}-field__input`} name="creditScore" component={renderField} type="text" label="Credit Score" />
      {renderDropDown(occupancyTypeArray, "occupancy", "Occupancy", "select", `${classname}-field__select`)}
    </Form.Group>

    <Form.Group as={Row}>
      <Col sm={{ offset: 10 }}>
        <Button type="submit" bsPrefix="ownUp-btn">Quote Rates</Button>
      </Col>
    </Form.Group>
  </Form>;
};

FormContainer = reduxForm({
  form: 'submissionForm',
  validate,
})(FormContainer);

export default FormContainer;
