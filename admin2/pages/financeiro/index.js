import { useState, useEffect } from "react";
import getConfig from "next/config";
import styles from "../../styles/Dash.module.css";
import { userService } from "../../services";
import Image from "next/image";
import { MDBDataTableV5 } from "mdbreact";
import { clienteService } from "../../services";
import { Modal, Alert, Button, Badge } from "react-bootstrap";
import { SideBar, Header } from "../../components/";
import ModalInsert from "./components/ModalInsert";
import ModalEdit from "./components/ModalEdit";
import { useRouter } from "next/router";

const { publicRuntimeConfig } = getConfig();

const nameModule ="motoboy";
const namePage ="Financeiro";

function Motoboy({ data }) {

    
  const router = useRouter();
  console.log(data);

 

  const fetchHeader={
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  

    const formClean={
    motoboy: "",
    start: "",
    end: ""
  };

  const [formValue, setFormValue] = useState(formClean);

  const [itemGet, setItemGet] = useState(null);
  const [lista, setLista] = useState(null);
  const [show, setShow] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  const handleLogout = () => {
    userService.logout();
  };


 



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };



  const handleSubmit = async (e) => {
    let res;
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(formValue),
      headers: new Headers(fetchHeader),
    };

    try {
      let result = [];
      const res = await fetch(`/api/relatorio/search`, requestOptions);
      const json = await res.json();
      setLista(json);
      setShowReport(true);
    } catch (error) {
      console.log(error);
    }
    return false;
  };
  const handleContinue = () => {
    setFormValue(formClean);
    handleCloseCad();
    refreshData();
  };


  useEffect(() => {
    setIsRefreshing(false);
  }, [data]);

  return (
    <>


      <Header />

      <div className="container-fluid text-light text-center ">
        <div className="row">
          <SideBar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap p-2 bg-light text-dark flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded mt-3">
              <h1 className="h2">{namePage}</h1>
              <div className="btn-toolbar mb-2 mb-md-0 ">
                <div className="btn-group me-2">
                   
                </div>
              </div>
            </div>

            <div className="table-responsive text-light bg-light p-3 rounded">
                   <div className="row text-dark">
                      <div className="col-12">
                          <h5>Relatório Motoboys</h5>
                          <hr/>
                      </div>
                      <div className="col-12 col-md-3">
                          <div className="form-floating">
                            <select name="motoboy" onChange={handleChange} className="form-control">
                              <option >Escolha um motoboy</option>
                              {
                                data.data.map(item => {
                                  return(
                                    <option key={item.id} value={item.id}>
                                      {item.name}
                                    </option>
                                  )
                                })
                              }
                            </select>
                            <label>Motoboy</label>
                          </div>
                      </div>
                      <div className="col-12 col-md-3">
                          <div className="form-floating">
                            <input className="form-control" name="start" onChange={handleChange} type="date" />
                            <label>Data Inicial</label>
                          </div>
                      </div>
                      <div className="col-12 col-md-3">
                          <div className="form-floating">
                            <input className="form-control" name="end" onChange={handleChange} type="date" />
                            <label>Data Final</label>
                          </div>
                      </div>
                      <div className="col-12 col-md-3">
                          <div className="form-control">
                            <button className="btn btn-lg btn-warning w-100 " onClick={handleSubmit} title="Gerar Relatório" >
                              Gerar Relatório
                            </button>
                          </div>
                      </div>
                    </div>
                    <div className="col-12 text-dark">
                        {showReport && <span className="spinner-border spinner-border-sm mr-1">
                          <table className="">
                            <th>
                              <td>Dia</td>
                              <td>Ordem</td>
                              <td>Entregas</td>
                              <td>Total</td>
                            </th>
                            {
                                lista.map(item => {
                                  return(
                                    <tr key={item.id}>
                                      <td>{item.date}</td>
                                      <td>{item.id_orden}</td>
                                      <td>{item.entregas}</td>
                                      <td>{item.total}</td>
                                    </tr>
                                  )
                                })
                              }
                            
                          </table>

                        </span>}
                    </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default Motoboy;

export async function getServerSideProps() {
  // Fetch data from external API
  const baseUrl = `${publicRuntimeConfig.apiUrl}/${nameModule}`;
  const res = await fetch(baseUrl);
  const data = await res.json();

  // Pass data to the page via props
  return { props: {data}  };
}
