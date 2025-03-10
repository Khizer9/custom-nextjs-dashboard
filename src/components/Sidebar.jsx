"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tooltip } from "antd";
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
      <button
        onClick={toggleSidebar}
        className="bg-transparent border-none text-white mb-4"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav>
        <ul>
          <Tooltip title="Users" placement="right">
            <li className="mb-4 sidebar-navlinks" onClick={() => router.push("/users")}>
              Users
            </li>
          </Tooltip>
          <Tooltip title="About" placement="right">
            <li className="mb-4 sidebar-navlinks" onClick={() => router.push("/about")}>
              About
            </li>
          </Tooltip>
          <Tooltip title="Contact" placement="right">
            <li className="mb-4 sidebar-navlinks">Contact</li>
          </Tooltip>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
