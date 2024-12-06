"use client";
import React from "react";
import NavLink from "./NavLink";
const MenuOverlay = ({ links, togleNavBar }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            togleNavBar={togleNavBar}
            href={link.path}
            title={link.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
