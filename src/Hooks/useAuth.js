import React from 'react';

const useAuth = () => {
    const [isAuth, setIsAuth] = React.useState (true);
    React.useEffect(() =>{
        function handleAuth (){
            console.log(isAuth);
        }
        handleAuth();
    }, []);

    return isAuth;
}
export default useAuth;