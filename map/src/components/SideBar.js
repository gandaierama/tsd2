import { useState, useEffect } from 'react';
import styles from '../styles/Dash.module.css'
import Image from 'next/image';


import Link from 'next/link'
export   {SideBar} ;

function SideBar() {

    
    return (
      <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light collapse `+styles.sidebar}>
      <div className="position-sticky pt-3">
         <Image className="mt-2" src={`/logo.png`} alt="" width="200" height="200"/>

        
        <hr className="text-dark"/>
        <ul className="nav flex-column mb-2 p-2">
          <li className="nav-item"><hr/></li>
          <li className="nav-item p-1">
            <Link  aria-current="page" href="/">
              <div className="btn btn-primary btn-sm 
            w-100 mt-1 ">
                <span data-feather="home" className="align-text-bottom"></span>
                Home
              </div>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link  href="/motoboy">
              <div className="btn btn-primary btn-sm 
            w-100 mt-1 ">
                <span data-feather="file" className="align-text-bottom"></span>
                Motoboys
              </div>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className=" btn btn-primary btn-sm w-100 mt-1" href="/clientes">
              <div className="btn btn-primary btn-sm 
            w-100 mt-1 ">
                <span data-feather="shopping-cart" className="align-text-bottom"></span>
                Clientes
              </div>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className="btn btn-primary btn-sm w-100 mt-1" href="/contratos">
            <div className="btn btn-primary btn-sm 
            w-100 mt-1 ">
              <span data-feather="shopping-cart" className="align-text-bottom"></span>
              Contratos
            </div>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className="btn btn-primary btn-sm w-100 mt-1" href="/ordens">
              <div className="btn btn-primary btn-sm 
            w-100 mt-1 ">
                <span data-feather="users" className="align-text-bottom"></span>
                Ordens
              </div>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className="btn  btn-primary btn-sm w-100 mt-1" href="/entregas">
              <div className="btn btn-primary btn-sm 
            w-100 mt-1 ">
                <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                Entregas
              </div>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className="btn btn-primary btn-sm w-100 mt-1" href="/pacotes">
              <div className="btn btn-primary btn-sm 
            w-100 mt-1 ">
                <span data-feather="layers" className="align-text-bottom"></span>
                Pacotes de preços
              </div> 
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className="btn btn-primary btn-sm w-100 mt-1" href="/pagamentos">
              <div className="btn btn-primary btn-sm 
            w-100 mt-1 ">
                <span data-feather="layers" className="align-text-bottom"></span>
                Pagamentos
              </div>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className="btn btn-primary btn-sm w-100 mt-1" href="/financeiro">
              <div className="btn btn-primary btn-sm 
            w-100 mt-1 ">
                <span data-feather="layers" className="align-text-bottom"></span>
                Financeiro
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}