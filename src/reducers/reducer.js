
import {  MAKE_REQUEST , GET_DATA , ERROR } from "../types";


const initialState = {
  jobs: [], 
  loading: false,
  error: ''
};


  export const userReducer = (state = initialState, action) => {
  
    
    switch (action.type) {
      
      case MAKE_REQUEST:
        return {
          ...state,
          loading: true
        }
     

      case GET_DATA:
        return {
          loading: false,
          jobs: action.payload,
          error: ''
        }
    
      case ERROR:
        return{
          loading: false,
          jobs: [],
          error: action.payload
        }

      

      
        
       default: 
        return state;
    }
    
  };
  