import { useState, useEffect } from 'react';
import styles from '../styles/Dash.module.css'
import { userService } from '../services';
import Image from 'next/image';
export default Home;

function Home() {
    const [users, setUsers] = useState(null);

    // useEffect(() => {
    //     userService.getAll().then(x => setUsers(x));
    // }, []);

        useEffect(() => {
         setUsers([{'id':'1', 'name':'Daniel', 'email': 'daniel@teste.com' }]);
    }, []);
    return (
        <>
        <header className={`navbar navbar-dark bg-primary sticky-top flex-md-nowrap p-0 shadow `}>
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">TSD Motoboys</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3 btn" href="#">Sign out</a>
    </div>
  </div>
</header>
        <div className="container-fluid text-light ">
  <div className="row">
    <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light collapse `+styles.sidebar}>
      <div className="position-sticky pt-3">
         <Image className="mt-2" src={`/logo.png`} alt="" width="200" height="200"/>
       {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.id}>{user.name} {user.email}</li>
                        )}
                    </ul>
                }
                {!users && <div className="spinner-border spinner-border-sm"></div>}
        

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Páginas</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" className="align-text-bottom"></span>
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <span data-feather="home" className="align-text-bottom"></span>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./motoboys">
              <span data-feather="file" className="align-text-bottom"></span>
              Motoboys
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./clientes">
              <span data-feather="shopping-cart" className="align-text-bottom"></span>
              Clientes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./contratos">
              <span data-feather="shopping-cart" className="align-text-bottom"></span>
              Contratos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users" className="align-text-bottom"></span>
              Ordens
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="bar-chart-2" className="align-text-bottom"></span>
              Entregas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers" className="align-text-bottom"></span>
              Valores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers" className="align-text-bottom"></span>
              Pagamentos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers" className="align-text-bottom"></span>
              Financeiro
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Home</h1>
      
      </div>

      <div className="container-fluid rounded bg-light text-dark pb-2">
      
      <div className="row mt-5 py-3">
            
      <h2>Dados de hoje</h2>
        <div className="col-12"><hr/></div>
        <div className="col-12 col-md-6 h-100">
          <div className="card bg-success text-center text-light">

              <div className="card-header">
                <h4>Valor total do dia</h4>
              </div>
              <div className="card-body">
                <h1 className="display-1 border-5"> R$ 0</h1>
              </div>
   
          </div>
        </div>

        <div className="col-12 col-md-6 h-100">
          <div className="card bg-danger text-center text-light">

              <div className="card-header">
                <h4>Pagamentos do dia</h4>
              </div>
              <div className="card-body">
                <h1 className="display-1 border-5"> R$ 0</h1>
              </div>
   
          </div>
        </div>
        <div className="col-12"><hr/></div>
                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Ordens Ativas</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Entregas do dia</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Motoboys ativos</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Ordens concluídas</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>
      </div>
      </div>
    </main>
  </div>
</div>
       
        </>
    );
}