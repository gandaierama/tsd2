import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from "next/script"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../styles/globals.css'
import { userService } from '../services';
import { Nav } from '../components';

export default App;

function App({ Component, pageProps }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);


    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        const publicPaths = ['/login'];
        const path = url.split('?')[0];
        console.log(userService.userValue);
        console.log(publicPaths.includes(path));
        if (!userService.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            console.log("nao logado");
            router.push('/login');
        } else {
            console.log("logado");
            setAuthorized(true);
        }
    }


    useEffect(() => {
        // run auth check on initial load
        authCheck(router.asPath);

        // set authorized to false to hide page content while changing routes
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // run auth check on route change
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, [router ]);
    return (
        <>
     

                    {authorized &&
                        <Component {...pageProps} />
                    }
     

            
                <Script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous"/>
        </>
    );
}