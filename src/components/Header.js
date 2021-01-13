import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Returns the header component in a jumbotron
 * @param {props} title
 * @return {JSX} header of the page
 */
function header({ title }) {
    let classname = 'ownUp'

    return <Jumbotron>
        <h1 className={`${classname}-Header`}>{title}</h1>
    </Jumbotron>
}

export default header
