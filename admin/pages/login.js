import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from '../styles/Login.module.css'
import { userService } from '../services';
import Head from 'next/head';
import Image from 'next/image';
export default Login;

function Login() {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/');
        }
    }, []);

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(error => {
                setError('apiError', { message: error });
            });
    }

    // function onSubmit({ username, password }) {

            
    //         const returnUrl = router.query.returnUrl || '/';
    //         router.push(returnUrl);
    
    // }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Image className="mt-2" src={`/logo.png`} alt="" width="200" height="200"/>
                        <h1 className="h3 mb-3 fw-normal text-light">Administrador</h1>

                        <div className="form-floating mt-5">
                        
                        <input name="username"  id="floatingInput" type="email" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.username?.message}</div>
                        <label htmlFor="floatingInput">E-mail</label>
                        </div>
                        <div className="form-floating mt-5">
                        
                        <input name="password" id="floatingPassword"  type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                        <label htmlFor="floatingPassword">Senha</label>
                        </div>

               
                        <button disabled={formState.isSubmitting} className="btn btn-warning w-100 btn-lg">
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Entrar
                        </button>
                        {errors.apiError &&
                        <div className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</div>
                        }

                    </form>
                </div>
            </div>
        </div>
  
</main>


        
        </div>
        </>
    );
}