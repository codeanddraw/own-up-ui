import { reduxForm, Field } from 'redux-form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

/**
 * To perform validation on all formfields (input and select) 
 * @param {Object} value entered in the form
 * @return {Object} contains the error text for each field in error condition
 */
const validate = val => {
  const errors = {};

  if (!val.loanSize) {
    //console.log('loanSize is required');
    errors.loanSize = 'Required';
  } else if (isNaN(Number(val.loanSize))) {
    errors.loanSize = 'Must be a number'
  }

  if (!val.propertyType) {
    //console.log('propertyType is required');
    errors.propertyType = 'Required';
  }

  if (!val.creditScore) {
    //console.log('creditScore is required');
    errors.creditScore = 'Required'
  } else if (isNaN(Number(val.creditScore))) {
    errors.creditScore = 'Must be a number'
  } else if (Number(val.creditScore) < 300 || Number(val.creditScore > 800)) {
    errors.creditScore = 'Sorry, credit score should be between 300 and 800'
  }

  if (!val.occupancy) {
    //console.log('occupancy is required');
    errors.occupancy = 'Required';
  }

  return errors;
};

/**
 * Renders input field in the form
 * @param {input, classname, label, type, meta: { touched, error, warning }}
 * @return {JSX}
 */
const renderField = ({ input, classname, label, type, meta: { touched, error, warning } }) => {
  return <>
    <Form.Label column sm={2}> {label} </Form.Label>
    <Col sm={3}>
      <Form.Control {...input} type={type} placeholder={label} />
      {renderError(touched, error, warning, classname)}
    </Col>
  </>
}

/**
 * Renders select and options in the form
 * @param {input, classname, label, type, meta: { touched, error, warning }, optionsArray}
 * @return {JSX}
 */
const renderSelectField = ({ input, classname, label, type, meta: { touched, error, warning }, optionsArray }) => {
  return <>
    <Form.Label column sm={2}> {label} </Form.Label>
    <Col sm={3}>
      <select {...input} type={type} className={classname} >
        <option className={`${input.name}-option`} />
        {optionsArray.map((option, index) => <option className={`${input.name}-option`} key={index} value={option}>{option}</option>)}
      </select>
      {renderError(touched, error, warning, classname )}
    </Col>
  </>
}

/**
 * Renders error text
 * @param {touched, error, warning, classname}
 * @return {JSX}
 */
const renderError = (touched, error, warning, classname) => {
  return touched && ((error && <span className={`${classname}-error`}>{error}</span>) || (warning && <span className={`${classname}-warning`}  >{warning}</span>)) 
}

/**
 * Renders the complete Form Container
 * @param {props}
 * @return {JSX}
 */
let FormContainer = props => {
  const { handleSubmit } = props;
  let classname = 'ownUp'
  let propertyTypeArray = ["SingleFamily", "Condo", "Townhouse", "MultiFamily"]
  let occupancyTypeArray = ["Primary", "Secondary", "Investment"]

  return <Form onSubmit={handleSubmit} className={`${classname}-FormContainer`}>
    <Form.Group as={Row} controlId="formHorizontalRow1">
      <Field classname={`${classname}-field__input`} name="loanSize" component={renderField} type="text" label="Loan Size" />
      <Field classname={`${classname}-field__select`} name="propertyType" component={renderSelectField} type="select" label="Property Type" optionsArray={propertyTypeArray} />
    </Form.Group>

    <Form.Group as={Row} controlId="formHorizontalRow2">
      <Field classname={`${classname}-field__input`} name="creditScore" component={renderField} type="text" label="Credit Score" />
      <Field classname={`${classname}-field__select`} name="occupancy" component={renderSelectField} type="select" label="Occupancy" optionsArray={occupancyTypeArray} />
    </Form.Group>

    <Form.Group as={Row}>
      <Col sm={{ offset: 10 }}>
        <Button type="submit" className={`${classname}-btn`} bsPrefix="ownUp-btn">Quote Rates</Button>
      </Col>
    </Form.Group>
  </Form>;
};

FormContainer = reduxForm({
  form: 'submissionForm',
  validate,
})(FormContainer);

export default FormContainer;
