import { BehaviorSubject } from 'rxjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
const jwt = require('jsonwebtoken');
import styles from '../styles/Login.module.css'
import getConfig from 'next/config';
import Head from 'next/head';
import Image from 'next/image';
import { userService } from '../services';

const { serverRuntimeConfig } = getConfig();
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));
export default Login;

function Login() {
    const router = useRouter();

    useEffect(() => {
        setIsRefreshing(false);
        if (userService.userValue) {
            router.push('/');
        }
    }, [ router]);

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMensage, setErrorMensage] = useState(false);
    const [formValue, setFormValue] = useState({
    email: "",
    senha: ""
    });

    const refreshData = () => {
      router.replace("/");
      setIsRefreshing(true);
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

    const onSubmit = async()=> {
     console.log("senha", formValue.senha);
     console.log("login", formValue.email);

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ 
              email: formValue.email,
              senha: formValue.senha
            }),
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }),
          };
          let res;
          try {
              let result=[];
              const res=await fetch(`/api/login`, requestOptions);
              console.log(res);
              const json = await res.json();
              console.log(json);
              if(json.data.access_token){
                // create a jwt token that is valid for 7 days
                const token = jwt.sign({ id: json.data.id }, "secretKeyTSDa1b9c5@!DDDD", { expiresIn: '7d' });
                console.log(token);
                // publish user to subscribers and store in local storage to stay logged in between page refreshes
                const data={ id: json.data.id, access_token: token };

                
                await localStorage.setItem('user', JSON.stringify(data));
                const user = await localStorage.getItem('user');
           
                const returnUrl = router.query.returnUrl || '/';
                //router.push(returnUrl);
                window.location.href='/';
                console.log(user);
              }else{
                setErrorMensage(json.data.error);
                console.log("opssss");
              }
   
              
          } catch(error) {
            console.log(error);
          }
    }


    return (
            <>
               <Head>
                <title>TSD Administrador</title>

            </Head>

        <div className={styles.containerBlue}>

        <main className={styles.formSignin +` w-100 m-auto`}>
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-12 col-md-4 offset-md-4 mt-5 ">
               

                        <Image className="mt-2" src={`/logo.png`} alt="" width="200" height="200"/>
                        <h1 className="h3 mb-3 fw-normal text-light">Administrador</h1>
                        <div className="mt-2 text-danger ">{errorMensage}</div>
                        <div className="form-floating mt-5">
                            <input 
                                onChange={handleChange} 
                                name="email"  
                                id="floatingInput"
                                type="email"
                                className={`form-control`} 
                            />
             
                        <label htmlFor="floatingInput">E-mail</label>
                        </div>
                        <div className="form-floating mt-5">                            
                            <input 
                                onChange={handleChange} 
                                name="senha" 
                                id="floatingPassword"  
                                type="password"
                                className={`form-control`} />
                     
                            <label htmlFor="floatingPassword">Senha</label>
                        </div>

                        
                        <button disabled={isSubmitting} onClick={onSubmit} className="btn btn-warning w-100 btn-lg">
                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Entrar
                        </button>
                        
                </div>
            </div>
        </div>
  
</main>


        
        </div>
        </>
    );
}