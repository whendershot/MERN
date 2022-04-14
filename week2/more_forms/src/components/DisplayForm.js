import Container from 'react-bootstrap/Container';

const DisplayForm = (props) => {
    
    const {firstName, lastName, email, password, confirm} = props;
    
    return (
        <Container>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </Container>
        
    );
};

export default DisplayForm;