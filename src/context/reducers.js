// import React, { useState, useReducer } from 'react';
let userName = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).userName : '';
    
let email = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).email : '';
    
let token = localStorage.getItem('currentUser')
	? JSON.parse(localStorage.getItem('currentUser')).token : '';
    
export const initialState = {
    userName: '' || userName,
    email: '' || email,
    token: '' || token,
    loading: false,
    errorMessage: null,
}

export const AuthReducer = (initialState, action) => {
    switch(action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                email:action.payload.email,
                userName:action.payload.userName,
                token:action.payload.token,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                userName:'',
                email:'',
                token:'',
            };
        case 'LOGIN_ERROR':
            return {
                    ...initialState,
            }; 
            
        default:
			throw new Error(`Unhandled action type: ${action.type}`);   
    }
    
}