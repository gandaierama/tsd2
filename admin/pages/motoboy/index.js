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
import InputMask from "react-input-mask";
import CurrencyFormat from 'react-currency-format';

const { publicRuntimeConfig } = getConfig();

const nameModule ="motoboy";
const namePage ="Motoboy";

function Motoboy({ data }) {

    
    let userData = [];
    if(data.data){
    data.data.map((item, index) => {
      item.action = (
        <div>
          <div
            className="btn btn-sm btn-secondary m-1"
            onClick={() => handleUpdate(item.id)}
          >
            Editar
          </div>

          <div
            className="btn btn-sm btn-danger m-1"
            onClick={() => handleDelete(item.id)}
          >
            Apagar
          </div>
        </div>
      );
      item.inicio = new Date(item.inicio).toLocaleDateString('pt-BR');
      userData.push(item);
    });
  }
  const router = useRouter();
  console.log(data);

  const formClean={
    email: "",
    senha: "",
    nome: "",
    email: "",
    cpf: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    telefone: "",
  };
  const [formValueEdit, setFormValueEdit] = useState(formClean);
  const [formValue, setFormValue] = useState(formClean);

  const fetchHeader={
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  

  const [itemGet, setItemGet] = useState(null);
  const [lista, setLista] = useState(null);
  const [itemUp, setItemUp] = useState(null);
  const [files, setFiles] = useState([]);
  const [show, setShow] = useState(false);
  const [showCad, setShowCad] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertEdit, setShowAlertEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseCad = () => setShowCad(false);
  const handleShow = () => setShow(true);
  const handleShowCad = () => setShowCad(true);
  
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  const handleLogout = () => {
    userService.logout();
  };


 



  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 270,
      },
      {
        label: "E-mail",
        field: "email",
        width: 200,
      },
      {
        label: "cpf",
        field: "cpf",
        sort: "asc",
        width: 100,
      },
      {
        label: "Ação",
        field: "action",
        sort: "disabled",
        width: 50,
      },
    ],
    rows: data.data ,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLogo = (e) => {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    setFiles((prevState) => {
      return [...prevState, , ...filesArr];
    });
  };

  const removeFile = (f) => {
    setFiles((prevState) => {
      return [...prevState.filter((x) => x !== f)];
    });
  };

  const handleChangeEdit = (event) => {
    const { name, value } = event.target;
    setFormValueEdit((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleDelete = async (id) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: new Headers(fetchHeader),
    };
    let res;
    try {
      let result = [];
      const res = await fetch(`/api/${nameModule}/delete`, requestOptions);
      const json = await res.json();
      refreshData();
    } catch (error) {
      console.log(error);
    }
    return false;
  };


  
  const handleUpdate = async (id) => {
    console.log("Update", id);
    setFormValueEdit((prevState) => {
      return {
        ...prevState,
        id: id,
      };
    });
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: new Headers(fetchHeader),
    };
    let res;
    try {
      let result = [];
      const res = await fetch(`/api/${nameModule}/get`, requestOptions);
      const json = await res.json();

      await setFormValueEdit(json.data);
      handleShow();
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  const handleSubmitEdit = async (e) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(formValueEdit),
      headers: new Headers(fetchHeader),
    };
    let res;
    try {
      let result = [];
      const res = await fetch(`/api/${nameModule}/edit`, requestOptions);
      const json = await res.json();
      setShowAlertEdit(true);
    } catch (error) {
      console.log(error);
    }
    return false;
  };
  const handleContinueEdit = () => {
    setFormValueEdit(formClean);
    handleClose();
    refreshData();
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
      const res = await fetch(`/api/${nameModule}/insert`, requestOptions);
      const json = await res.json();
      setShowAlert(true);
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
      <ModalEdit 
        show={show}  
        onHide={handleClose} 
        handleContinue={handleContinueEdit} 
        refreshData={refreshData} 
        namePage={namePage}
        nameModule={nameModule}
        formValue={formValueEdit}
        setFormValue={setFormValueEdit}
         />
  
      

      <ModalInsert 
        show={showCad}  
        onHide={handleCloseCad} 
        handleContinue={handleContinue} 
        refreshData={refreshData} 
        namePage={namePage}
        nameModule={nameModule}
      />
     

      <Header />

      <div className="container-fluid text-light text-center ">
        <div className="row">
          <SideBar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap p-2 bg-light text-dark flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded mt-3">
              <h1 className="h2">{namePage}s</h1>
              <div className="btn-toolbar mb-2 mb-md-0 ">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-md btn-success"
                    onClick={handleShowCad}
                  >
                    Novo
                  </button>
                </div>
              </div>
            </div>

            <div className="table-responsive text-light bg-light p-3 rounded">
              <MDBDataTableV5
                hover
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={datatable}
                searchTop
                searchBottom={false}
              />
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
