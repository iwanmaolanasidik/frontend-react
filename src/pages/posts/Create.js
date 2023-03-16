import {useState} from 'react'

import {Card, Container, Row, Col, Form, Alert, Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'

import axios from 'axios';

import {useNavigate} from "react-router-dom"

function CreatePost(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    //set validasi
    const [validation, setValidation] = useState({});

    const navigate = useNavigate();

    //method "storePost"
    const storePost = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:3000/api/posts/store',{
            title: title,
            content: content
        })
        .then(()=> {
            //redirect
            navigate('/posts');
        })
        .catch((error) => {
            //assign validation os state
            setValidation(error.response.data);
        })
    };
    return(
        <Container className='mt-3'>
            <Row>
                <Col md="{12}">
                    <Card className='border-0 rounded shadow-sm'>
                        <Card.Body>
                            {
                                validation.errors &&
                                <Alert variant="danger">
                                    <ul className='mt-0 mb-0'>
                                        { validation.errors.map((error, index)=>(
                                            <li key={index}>{`${error.param} : ${error.msg}`}</li>
                                        )) }
                                    </ul>
                                </Alert>
                            }

                            <Form onSubmit={storePost}>
                                <FormGroup className='mb-3' controlId='formBasicTitle'>
                                    <FormLabel>TITLE</FormLabel>
                                    <FormControl type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Masukan Title"/>
                                </FormGroup>

                                <FormGroup className='mb-3' controlId='formBasicContent'>
                                    <FormLabel>CONTENT</FormLabel>
                                    <FormControl as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukan Content"/>
                                </FormGroup>

                                <Button variant="primary" type="submit">
                                    SIMPAN
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CreatePost;