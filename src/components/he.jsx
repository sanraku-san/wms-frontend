import React from "react";
import { useState } from "react";
import {
  TbLayoutDashboard,
  TbLayoutSidebarRight,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import { FaChevronDown, FaChevronRight, FaDropbox } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";

export default function Sidebarfu() {
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
      path: "Transactions",
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
    <div className="w-full flex">
      <div
        className={`${
          open ? "w-74 p-5" : "w-20 p-5"
        } bg-zinc-900 h-screen pt-8 relative duration-300 ease-in-out`}
      >
        <div
          className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 border-2 rounded-full text-xl flex items-center justify-center bg-amber-50 ${
            !open && "rotate-180"
          } transition-all ease-in-out duration-300`}
          onClick={() => setOpen(!open)}
        >
          <span>
            {open ? <TbLayoutSidebarRight /> : <TbLayoutSidebarLeftCollapse />}
          </span>
        </div>

        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt="logo"
            className={`w-10 h-10 rounded-full object-cover object-center cursor-pointer ease-in-out duration-3 ${
              open && "rotate[360deg]"
            } `}
          />
          <h1
            className={`text-zinc-50 origin-left font-semibold text-xl duration-200 ease-in-out ${
              !open && "scale-0"
            }`}
          >
            WMS
          </h1>
        </div>

        <ul className="pt-6 space-y-0.5">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex flex-col rounded-md py-3 px-4 cursor-pointer text-sm gap-x-4 p-2 hover:text-white text-zinc-50 hover:bg-zinc-700 transition-all ease-in-out duration-300 ${
                Menu.gap ? "mt-9" : "t-2"
              } ${index === 0 && "bg-zinc-800/40"}`}
            >
              <Link
                to={Menu.path || "#"}
                className="flex items-center gap-x-4"
                onClick={() => toggleSubMenu(Menu.key)}
              >
                <span className="text-lg">{Menu.icon}</span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left ease-in-out duration-300`}
                >
                  {Menu.title}
                </span>
                {Menu.subMenu && (
                  <span
                    className={`ml-auto cursor-pointer text-sm ${
                      subMenu[Menu.key] ? "rotate-360" : ""
                    }transition-transform ease-in-out duration-300 ${
                      !open ? "hidden" : ""
                    }`}
                  >
                    {subMenu[Menu.key] ? <FaChevronDown /> : <FaChevronRight />}
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
                      <span className="text-zinc-4">
                        <FaChevronRight className="text-xs" />
                      </span>
                      {subMenu}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="h-screen flex-1 space-y-6"></div>
    </div>
  );
}
