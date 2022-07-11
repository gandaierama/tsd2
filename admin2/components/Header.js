import { useState, useEffect } from 'react';
import styles from '../styles/Dash.module.css'
import Image from 'next/image';
import { userService } from '../services';


export   {Header} ;

function Header() {

  
  const handleLogout=()=> {
    userService.logout();
  }

    
    return (
      <header className={`navbar navbar-dark bg-primary sticky-top flex-md-nowrap p-0 shadow `}>
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-center" href="#">TSD Motoboys</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3 btn" onClick={handleLogout}>Sair</a>
          </div>
        </div>
      </header>
    );
}

