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

const nameModule ="ordens";
const namePage ="Ordens";

function Ordens({ data, data2 }) {

    
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
  console.log(data2);

  const formClean={
      nome:"",
      diaria1: 0,
      diaria2: "",
      diaria3: "",
      entrega1: "",
      entrega2: "",
      entrega3: "",
      segunda: "",
      terca: "",
      quarta: "",
      quinta: "",
      sexta: "",
      sabado: "",
      domingo: "",
      dia1: false,
      moto1: "",
      periodo1: "",
      start1: "",
      end1: "",
      dia2: false,
      moto2: "",
      periodo2: "",
      start2: "",
      end2: "",
      dia3: false,
      moto3: "",
      periodo3: "",
      start3: "",
      end3: "",
      dia4: false,
      moto4: "",
      periodo4: "",
      start4: "",
      end4: "",
      dia5: false,
      moto5: "",
      periodo5: "",
      start5: "",
      end5: "",
      dia6: false,
      moto6: "",
      periodo6: "",
      start6: "",
      end6: "",
      dia7: false,
      moto7: "",
      periodo7: "",
      start7: "",
      end7: "",

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
        field: "cliente",
        width: 270,
      },
      {
        label: "Data",
        field: "inicio",
        width: 200,
      },
      {
        label: "Motoboys",
        field: "motoboys",
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
              <h1 className="h2">{namePage}</h1>
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
export default Ordens;

export async function getServerSideProps() {
  // Fetch data from external API
  const baseUrl = `${publicRuntimeConfig.apiUrl}/${nameModule}`;
  const res = await fetch(baseUrl);
  const data = await res.json();


  const baseUrl2 = `${publicRuntimeConfig.apiUrl}/contratos`;
  const res2 = await fetch(baseUrl2);
  const data2 = await res2.json();

  // Pass data to the page via props
  return { props: {data:data, data2: data2}  };
}
