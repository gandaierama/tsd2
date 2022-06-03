import { useState, useEffect } from 'react';
import styles from '../styles/Dash.module.css'
import { userService } from '../services';
import Image from 'next/image';
import SideBar  from '../components/'
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
    <SideBar/>

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