"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="sidebar"
      initial={{ width: isOpen ? 250 : 80 }}
      animate={{ width: isOpen ? 250 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <button onClick={toggleSidebar} className="bg-transparent border-none text-white mb-4">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav>
        <ul>
          <li className="mb-4" onClick={() => router.push('/users')}>Users</li>
          <li className="mb-4" onClick={() => router.push('/about')}>About</li>
          <li className="mb-4">Contact</li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
