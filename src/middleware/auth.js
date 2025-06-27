/* Authetifacation actions */

// LOGIN
/* export const login = (props, d) => {
    if (d.username === 'user' && d.password === 'user') {
        localStorage.setItem('auth', d)
        props.history.push('/home');        
        console.log('Login Success')
    }
    else {
        console.log('Login Failed')
    }
} */


// LOGOUT
export const logout = () => {
    localStorage.removeItem('auth')
    console.log('Logout Success')
}

// LOGIN STATUS
export const isLogin = () => {
    if (localStorage.getItem('auth')) return true;
    return false;
}

// LOGIN DATA
export const user = () => {
    const user = (localStorage.getItem('auth'));
    return user;
}