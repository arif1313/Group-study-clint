import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AutContext } from "../Contex/ContexApi";
import PropTypes from 'prop-types';

const Privet = ({children}) => {
const location =useLocation()
    const {user,loading} = useContext(AutContext);
    if(loading){
        return <span className="loading loading-spinner text-success text-center ml-96 mt-36"></span>
    }
if(user){
    return children;
}
    return <Navigate state={location.pathname} to="/login"> </Navigate>;
};
Privet.propTypes = {
    children:PropTypes.node

}
export default Privet;