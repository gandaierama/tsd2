import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AlertBase from '../components/AlertBase/AlertBase'
import {useState} from 'react';
import CarrouselBase from '../components/CarrouselBase/CarrouselBase'
import CardBase from '../components/CardBase/CardBase'

import {Alert, Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';

import { FcAssistant, FcSupport } from "react-icons/fc";
import { MdOutlineLogin } from "react-icons/md";

import {FaUser, FaGooglePlusSquare, FaYoutube, FaInstagram, FaFacebookSquare} from "react-icons/fa";
export default function Home() {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
              <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
    </Head>
    <Navbar  className={styles.nav} expand="lg" fixed="top">
      <Container >
        <Navbar.Brand href="#"><img src="./logo.webp" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', color:'#fff' }}
            navbarScroll
          >
        
          </Nav>
          <div className="d-flex">
 
            <Button variant="outline-success">Baixe o app</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className={styles.containerBlue}>
      <div className="container-fluid ">
        <video autoPlay muted loop className={styles.video}>
            <source src={`./file.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>

    <div className={styles.containerLara}>
      <div className="container ">
        <div className="row">
          <div className="col col-12">
            <h2>CLIENTES</h2>
            <br/>
          </div>
          <div className="col-12">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                  <div className="row p-5 mb-5  ml-5 mr-5">
                    <div className="col-12 col-md-3 ">
                      <img src="./cliente1.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente2.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente3.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente4.jpg" className={`img rounded `+styles.img} />
                    </div>
                  </div>
   
              </Carousel.Item>
              <Carousel.Item>
                
                <div className="row p-5 mb-5  ml-5 mr-5">
                    <div className="col-12 col-md-3">
                      <img src="./cliente5.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente6.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente7.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente8.jpg" className={`img rounded `+styles.img} />
                    </div>
                  </div>
              </Carousel.Item>
              <Carousel.Item>
                  <div className="row p-5 mb-5  ml-5 mr-5">
                    <div className="col-12 col-md-3">
                      <img src="./cliente9.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente10.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente11.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente12.jpg" className={`img rounded `+styles.img} />
                    </div>
                  </div>
              </Carousel.Item>
              <Carousel.Item>
                  <div className="row p-5 mb-5 ml-5 mr-5">
                    <div className="col-12 col-md-3">
                      <img src="./cliente13.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente14.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente15.jpg" className={`img rounded `+styles.img} />
                    </div>
                    <div className="col-12 col-md-3">
                      <img src="./cliente16.jpg" className={`img rounded `+styles.img} />
                    </div>
                  </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

      </div>
    </div>

    <div className={styles.containerBlue}>
      <div className="container ">
        <div className="row pt-5 pb-5">
          <div className="col col-12 text-center">
              <h2>CONTATO</h2>
              <p>Caso precise entrar em contato conosco referente a um plano exclusivo, por gentileza preencha o formulário abaixo.</p>
              <hr/>
          </div>
          <div className="col col-md-7 p-5">
            
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Nome</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nome" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Telefone</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="(11) 1111-1111" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensagem</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-success" >Enviar</button >
            </div>

          </div>
          <div className="col col-md-5 p-5">
            <p>Central: (11) 5574-0808<br/>
            Whatsapp: (11) 95868-8931<br/>
            terceirizeseudelivery@gmail.com</p>
            <p>SIGA-NOS </p>
            <address><p>Av. Onze de Junho, 1074 <br/>
            Vila Clementino<br/>
            04041-004</p></address>
          </div>
        </div>
      </div>
    </div>
  





    </div>
  )
}
