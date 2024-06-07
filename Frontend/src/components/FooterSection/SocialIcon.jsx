import React from "react";
// import { IonIcon } from '@ionic/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
// import { all } from '@awesome/kit-KIT_CODE/icons'
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"


const SocialIcons = ({ Icons }) => {
    return (
        <>

        <div className="text-teal-500">
            {Icons.map((icon) => (
                <span
                    key={icon.name}
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
                >
                    {/* <IonIcon name={icon.name}></IonIcon> */}
                    {/* <ion-icon name = "logo-facebook"></ion-icon> */}
                    {/* console.log({icon.name}) */}
                    <FontAwesomeIcon icon={icon.name}/>
                    {/* <i className={Icons.name}></i> */}
                </span>
            ))}
        </div>
        </>
    );
};



export default SocialIcons;
