import React from "react";
import { useState } from "react";
import {
  TbLayoutDashboard,
  TbLayoutSidebarRight,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import { FaChevronDown, FaChevronRight, FaDropbox, FaHistory } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [subMenu, setSubMenu] = useState({});
  const toggleSubMenu = (menu) => {
    setSubMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const Menus = [
    {
      title: "Dashboard",
      icon: <TbLayoutDashboard />,
      path: "/",
    },
    {
      title: "Inventory",
      icon: <FaDropbox />,
      path: "/Inventory",
    },
    {
      title: "Transactions",
      icon: <FaMoneyBillTransfer />,
      path: "/Transactions",
    },
    {
      title: "Transactions History",
      icon: <FaHistory />,
      path: "/THistory",
    },
    {
      title: "Stores",
      icon: <TbLayoutDashboard />,
      path: "/Stores",
    },
    {
      title: "Settings",
      icon: <FaWrench />,
      path: "/Settings",
      subMenu: ["General", "Notifications"],
      key: "settings",
    },
  ];

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } bg-zinc-900 h-screen p-5 pt-8 relative duration-300`}
    >
      <div
        className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 rounded-full ${
          open ? "bg-amber-50" : "rotate-180 bg-amber-100"
        } flex items-center justify-center transition-all`}
        onClick={() => setOpen(!open)}
      >
        {open ? <TbLayoutSidebarRight /> : <TbLayoutSidebarLeftCollapse />}
      </div>

      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className={`${
            open ? "w-10 h-10" : "w-8 h-8"
          } rounded-full transition-all`}
        />
        <h1
          className={`text-white font-semibold text-xl ml-4 transition-all ${
            !open && "hidden"
          }`}
        >
          WMS
        </h1>
      </div>

      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li key={index}>
            <Link
              to={Menu.path || "#"}
              className="flex flex-row items-center rounded-md py-3 px-3 cursor-pointer text-sm gap-x-4 p-2 hover:text-white text-zinc-50 hover:bg-zinc-700 transition-all ease-in-out duration-300"
              onClick={() => toggleSubMenu(Menu.key)}
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              {Menu.subMenu && (
                <span
                  className={`${
                    subMenu[Menu.key] ? "rotate-360" : ""
                  } ml-auto transition-transform duration-200`}
                >
                  {subMenu[Menu.key] ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              )}
            </Link>
            {Menu.subMenu && subMenu[Menu.key] && open && (
              <ul className="pl-3 pt-4 text-zinc-300">
                {Menu.subMenu.map((subMenu, subIndex) => (
                  <li
                  key={subIndex}
                  className="text-sm flex items-center gap-x-2 py-3 px-2 hover:bg-zinc-800 rounded-lg"
                >
                    {subMenu}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
