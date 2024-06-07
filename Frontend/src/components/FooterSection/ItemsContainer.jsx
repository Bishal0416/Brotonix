import React from "react";
import {PRODUCTS} from "./Menus"

const Item = ({}) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{"title"}</h1>
      {PRODUCTS.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;