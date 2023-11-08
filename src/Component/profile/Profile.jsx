import { useContext } from "react";
import { AutContext } from "../Contex/ContexApi";

import avatar from '../../../public/images/304b221e61d7b1dcfdabbe0bcab4f1c8.jpg'

const Profile = () => {
    const { user } = useContext(AutContext);
    const{displayName,email,photoURL,metadata}=user
    const {creationTime,lastSignInTime}=metadata

   
    return (
        <>
        <h1 className="text-2xl text-center font-bold mt-12">User Bio</h1>
        <div className="rounded-md  flex  justify-center items-center">
        <div className="hero w-2/3 rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/0yq800Z/cover1.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left text-neutral-content font-bold flex-col-reverse md:flex-row">
                <div className="">
                    <p className="p-5">Name: {displayName}</p>
                    <p className="p-5">Email: {email}</p>
                    <p className="p-5">Acount Created : {creationTime}</p>
                    <p className="p-5">Last Login Time : {lastSignInTime
}</p>
                </div>
                <div className=" text-center">
                    <img className="w-36 h-36 rounded-full" src={photoURL?photoURL:avatar} alt="" />
                    <div>Your photo</div>
                </div>

            </div>
            </div>

        </div>
       
        </>
    );
};

export default Profile;