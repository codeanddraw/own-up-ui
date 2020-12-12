import Jumbotron from 'react-bootstrap/Jumbotron';

function header({ title }) {
    let classname = 'ownUp'

    return (
        <Jumbotron>
            <h1 className={`${classname}-Header`}> {title} </h1>
        </Jumbotron>
    )
}

export default header
