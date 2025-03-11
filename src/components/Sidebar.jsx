"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tooltip } from "antd";
import Logo from "../../public/logo.png";
import Image from "next/image";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="sidebar"
      initial={{ width: isOpen ? 250 : 80 }}
      animate={{ width: isOpen ? 250 : 80 }}
      transition={{ duration: 0.1 }}
    >
      <div className="flex flex-col justify-between h-full">
        <nav>
          <div className="pb-4">
            <Image src={Logo} alt="logo" width={60} height={60} />
          </div>
          <ul className={`${isOpen ? "ml-4" : ""}`}>
            <Tooltip title="Users" placement="right">
              <li
                className="mb-4 sidebar-navlinks"
                onClick={() => router.push("/users")}
              >
                Users
              </li>
            </Tooltip>
            <Tooltip title="About" placement="right">
              <li
                className="mb-4 sidebar-navlinks"
                onClick={() => router.push("/about")}
              >
                About
              </li>
            </Tooltip>
            <Tooltip title="Contact" placement="right">
              <li className="mb-4 sidebar-navlinks">Contact</li>
            </Tooltip>
          </ul>
        </nav>

        <button
          onClick={toggleSidebar}
          className={`bg-transparent border-none text-white mb-4`}
          style={{ marginLeft: isOpen ? "12px" : "" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
