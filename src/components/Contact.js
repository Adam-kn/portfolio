import React from 'react';
import { BtnSubmit, Col1, Col2, ContactForm, ContactLab, Container, ErrorMs, FromWarp, Img, ImgWrapper, Input, Row, Textarea, TextWrapper, TopLine, Wrapper } from '../Styles';
import contact from '../imges/contact.svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Contact = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const onSubmit = values => {
        let postUrl = 'https://api.emailjs.com/api/v1.0/email/send';

        axios({
            method: 'POST',
            url: postUrl,
            data: {
                service_id: 'Portfolio',
                template_id: 'template_sxrt2bi',
                user_id: 'user_nnrSoQdWYZ4RjlY0EzL9z',
                template_params: {
                    'contact': values.contact,
                    'message': values.message
                },
            },
        })
        reset();
    };

    return (
        <>
            <Container lightBg={false} id='contacts'>
                <Wrapper>
                    <TopLine> Contacts </TopLine>
                    <Row imgStart={false}>
                        <Col1>
                            <TextWrapper>
                                <ContactForm  onSubmit={handleSubmit(onSubmit)}>
                                    <FromWarp>
                                        <ContactLab htmlFor="contact"> Email ou Numéro de téléphone </ContactLab> <br /> <br />
                                        <Input id="contact" {...register('contact', {required: true, maxLength: 30})}/><br /> <br />
                                        {errors.contact && errors.contact.type === "required" && <ErrorMs> Champ obligatoire </ErrorMs>}
                                    </FromWarp>
                                    <FromWarp>
                                        <ContactLab htmlFor="message"> Message </ContactLab> <br /> <br />
                                        <Textarea id="message" {...register('message', {required: true})}/><br /> <br />
                                        {errors.message && errors.message.type === "required" && <ErrorMs> Champ obligatoire </ErrorMs>}
                                    </FromWarp> <br /> <br />
                                    <BtnSubmit type="submit"/>
                                </ContactForm>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <ImgWrapper>
                                 <Img src={contact} alt=""/>
                            </ImgWrapper>
                        </Col2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    );
};

export default Contact;