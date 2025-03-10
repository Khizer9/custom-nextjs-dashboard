"use client";

import React, { useState } from "react";
import { Table, Input, Dropdown, Menu, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const { Search } = Input;

const Page = () => {

  const [searchText, setSearchText] = useState("");

  // Sample Data
  const dataSource = [
    { key: "1", name: "John Doe", age: 32, address: "New York" },
    { key: "2", name: "Jane Smith", age: 28, address: "London" },
    { key: "3", name: "Michael Brown", age: 45, address: "San Francisco" },
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
      render: (_, record) => (
        <Dropdown
          menu={
            <Menu>
              <Menu.Item key="1">Edit</Menu.Item>
              <Menu.Item key="2">Delete</Menu.Item>
              <Menu.Item key="3">More</Menu.Item>
            </Menu>
          }
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
      ),
    },
  ];

  // Filter Data Based on Search
  const filteredData = dataSource.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 5 }}
        bordered
      />
    </div>
  );
};

export default Page;
