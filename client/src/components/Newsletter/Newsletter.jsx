import { PaperAirplaneIcon } from '@heroicons/react/outline'
import React from 'react'
import { Button, Container, Description, Input, InputContainer, Title } from './NewsletterStyles'

const Newsletter = () => {
    return (
        <Container>
            <Title>
                Newsletter
            </Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <PaperAirplaneIcon className="w-6 h-6"/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
