import React from 'react'
import { Agreement, Button, Container, Form, Input, Link, Title, Wrapper } from './LoginStyles';

const LogIn = () => {
    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>LOG IN</Button>
                    <Link>FORGOT YOUR PASSWORD?</Link>
                    <Link>CREATE AN ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default LogIn
