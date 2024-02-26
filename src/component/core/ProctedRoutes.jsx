import {  useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router'

const ProctedRoutes = ({children}) => {
    const navigate=useNavigate();
    const token=useSelector((state)=>state.auth.token);
    useEffect(() => {
        if (token === null) {
            navigate('/login');
        }
    }, [token,navigate]);
    
  if(token !==null)  return children;
  }
export default ProctedRoutes;

