"use client";

import React, { useState } from "react";
import { Table, Input, Dropdown, Menu, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Search } = Input;

const Page = () => {

  const [searchText, setSearchText] = useState("");

  const router = useRouter();
  // Sample Data
  const dataSource = [
    { key: "1", name: "John Doe", age: 32, address: "New York" },
    { key: "2", name: "Jane Smith", age: 28, address: "London" },
    { key: "3", name: "Michael Brown", age: 45, address: "San Francisco" },
    { key: "4", name: "John Doe", age: 32, address: "New York" },
    { key: "5", name: "Jane Smith", age: 28, address: "London" },
    { key: "6", name: "Michael Brown", age: 45, address: "San Francisco" },
    { key: "7", name: "John Doe", age: 32, address: "New York" },
    { key: "8", name: "Jane Smith", age: 28, address: "London" },
    { key: "9", name: "Michael Brown", age: 45, address: "San Francisco" },
    { key: "10", name: "John Doe", age: 32, address: "New York" },
    { key: "11", name: "Jane Smith", age: 28, address: "London" },
    { key: "12", name: "Michael Brown", age: 45, address: "San Francisco" },
    { key: "13", name: "John Doe", age: 32, address: "New York" },
    { key: "14", name: "Jane Smith", age: 28, address: "London" },
    { key: "15", name: "Michael Brown", age: 45, address: "San Francisco" },
  ];

  // Columns with Filters and Actions
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filterDropdown: () => (
        <Search
          placeholder="Search Name"
          style={{ marginBottom: 8 }}
        />
      ),
      filterIcon: <EllipsisOutlined />,
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => {
        const menuItems = [
          {
            key: "1",
            label: "Edit",
          },
          {
            key: "2",
            label: "Delete",
          },
          {
            key: "3",
            label: "More",
          },
        ];
    
        return (
          <Dropdown
            menu={{ items: menuItems }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button
              type="text"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                lineHeight: "1",
                padding: "0",
                marginLeft: "15px",
              }}
            >
              ⋮
            </Button>
          </Dropdown>
        );
      },
    }
  ];

  // Filter Data Based on Search
  const filteredData = dataSource.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-end items-center mb-4">
        <Button onClick={() => router.push("/create-user")}>Create New User</Button>
      </div>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 10 }}
        bordered
      />
    </div>
  );
};

export default Page;
