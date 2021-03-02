import React from 'react';

import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import Head from 'next/head';

import { Jumbotron, Container } from 'reactstrap';




function Home() {
    return (

        <div>
            <Head>
                <title>Home - Celke</title>
            </Head>
            <Menu />

            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                    background-color:  #050c3d;
                    color: #00a1fc; 
                    margin-bottom: 0rem !important;

                }`}

                </style>
                <Container className="text-center">
                    <h1 className="display-4">Temos a solução que a sua empresa precisa!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p className="lead">
                        <a href='/orcamento' className="btn btn-outline-primary btn-lg mt-4">Orçamento</a>

                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                  blackgroun-color: #fff;
                  margin-bottom: 0rem !important;
                  }.circulo{
                  width:140px;
                  height:140px;
                  background-color: #0A197D;
                  font-size:52px;
                  color: #fff;
                  padding-top:24px;

                 }.centralizar{
                     margin: 0 auto!important;
                     float: none !important;
                 }`}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Mauris nex urna et mi pulvinar tristique eget quis nunc.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                A
                            </div>
                            <h2 className="mt-4 mb-4">Serviço Um</h2>
                            <p>
                                Praesent quis sagittis libero ,nec suscipit neque .Quisque ut ultrices lectus,sit amet sollicitudin mauris.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                B
                             </div>
                             <h2 className="mt-4 md-4">Serviço Dois</h2>
                             <p>
                             Praesent quis sagittis libero ,nec suscipit neque .Quisque ut ultrices lectus,sit amet sollicitudin mauris.
                             </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                C
                        </div>
                        <h2 className="mt-4 md-4">Serviço três</h2>
                        <p>
                        Praesent quis sagittis libero ,nec suscipit neque .Quisque ut ultrices lectus,sit amet sollicitudin mauris.
                        </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Rodape/>

        </div>
    );
}

export default Home;