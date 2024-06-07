import React from "react";
import Item from "./Item";
import SocialIcons from "./SocialIcon";
import { Icons, PRODUCTS,RESOURCES, COMPANY,SUPPORT } from "./Menus";

const Footer = () => {
    const arr = []
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex justify-between p-10">
      <Item Links = {PRODUCTS} Title ={"PRODUCTS"}/>
      <Item Links = {RESOURCES} Title ={"RESOURCES"}/>
      <Item Links = {SUPPORT} Title ={"SUPPORT"}/>
      <Item Links = {COMPANY} Title ={"COMPANY"}/>
      </div>
      

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Bishal. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </div>
  );
};

export default Footer;