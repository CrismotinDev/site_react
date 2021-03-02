 import React from 'react';

import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Container, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Head from 'next/head';

function Orcamento() {
    return (
        <div>
            <Head>
                <title>Orçamento - Celke</title>
            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                     background-color: #050c3d;
                     color: #00a1fc;
                     padding-top: 40px;
                     padding-bottom:40px;
                     margin-bottom: 0ren !important;

                 }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Orçamento</h1>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="form-orcamento">
                <style>
                    {`.form-orcamento
                       padding-top: 80px;
                       padding-bottom:80px;
                       background-color #fff;
                       margin-bottom: 0rem !important;

                }`}
                </style>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input type="text" name="name" id="name" placeholder="Preencha com o nome completo" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">E-mail</Label>
                            <Input type="email" name="email" id="email" placeholder="Preencha com seu melhor email" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="phone">Telefone</Label>
                            <Input type="text" name="phone" id="phone" placeholder="(XX)XXXX-XXXX" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="WhatsApp">WhatsApp</Label>
                            <Input type="text" name="WhatsApp" id="WhatsApp" placeholder="(XX)XXXX-XXXX" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="projeto">Projeto</Label>
                            <Input type="textarea" name="projeto" id="projeto" placeholder="Fale um pouco do seu projeto" />
                        </FormGroup>

                        <Button type="submit" outline color="primary">Solicitar</Button>
                    </Form>
                </Container>

            </Jumbotron>
            <Rodape/>
        </div>
    );
}
export default Orcamento;