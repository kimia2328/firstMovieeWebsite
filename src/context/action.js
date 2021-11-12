const ROOT_URL = 'https://6154122f2473940017efaba8.mockapi.io/api/lft/users';

export async function loginUser(dispatch, loginPayload){
    const requestOptions = {
        method:'post',
        headers:{'Content_Type':'application/json'},
        body: JSON.stringify(loginPayload),
    }
    try {
        dispatch({type:'REQUEST_LOGIN'});
        let response = await fetch(`${ROOT_URL}`, requestOptions);
        let data = await response.json();

        if(data.userName){
            await console.log("here", data);
            dispatch({type:'LOGIN_SUCCESS', payload:data});
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }
        return;
    } catch(error) {
        dispatch({type:'LOGIN_ERROR', error: error});
        console.log(error);
    }
}

export async function logout(dispatch) {
    dispatch({type:'LOGOUT'});
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}