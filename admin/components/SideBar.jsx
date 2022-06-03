import { useState, useEffect } from 'react';
import styles from '../styles/Dash.module.css'
import Image from 'next/image';




function SideBar() {

    
    return (
      <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light collapse `+styles.sidebar}>
      <div className="position-sticky pt-3">
         <Image className="mt-2" src={`/logo.png`} alt="" width="200" height="200"/>

        
        <hr className="text-dark"/>
        <ul className="nav flex-column mb-2 p-2">
          <li className="nav-item"><hr/></li>
          <li className="nav-item p-1">
            <a className="btn btn-primary btn-sm 
            w-100 mt-1 " aria-current="page" href="#">
              <span data-feather="home" className="align-text-bottom"></span>
              Home
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn btn-primary btn-sm w-100 mt-1" href="#">
              <span data-feather="file" className="align-text-bottom"></span>
              Motoboys
            </a>
          </li>
          <li className="nav-item p-1">
            <a className=" btn btn-primary btn-sm w-100 mt-1" href="#">
              <span data-feather="shopping-cart" className="align-text-bottom"></span>
              Clientes
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn btn-primary btn-sm w-100 mt-1" href="#">
              <span data-feather="shopping-cart" className="align-text-bottom"></span>
              Contratos
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn btn-primary btn-sm w-100 mt-1" href="#">
              <span data-feather="users" className="align-text-bottom"></span>
              Ordens
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn  btn-primary btn-sm w-100 mt-1" href="#">
              <span data-feather="bar-chart-2" className="align-text-bottom"></span>
              Entregas
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn btn-primary btn-sm w-100 mt-1" href="#">
              <span data-feather="layers" className="align-text-bottom"></span>
              Pacotes de preços 
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn btn-primary btn-sm w-100 mt-1" href="#">
              <span data-feather="layers" className="align-text-bottom"></span>
              Pagamentos
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn btn-primary btn-sm w-100 mt-1" href="#">
              <span data-feather="layers" className="align-text-bottom"></span>
              Financeiro
            </a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default  SideBar ;