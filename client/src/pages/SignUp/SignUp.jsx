import React from 'react'
import { Agreement, Button, Container, Form, Input, Title, Wrapper } from './SignUpStyles'

const SignUp = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="email"/>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data 
                            in accordance with the <b>PRIVACY POLICY.</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default SignUp
