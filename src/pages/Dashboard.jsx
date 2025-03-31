import React, { useEffect, useState } from "react";
import useUserStore from "@/Store/useUserStore";
import { Table, Input, Button } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { unstableSetRender } from "antd";
import { createRoot } from "react-dom/client";

const Dashboard = () => {
  const { users, fetchUsers } = useUserStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      root.unmount();
    };
  });

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredUsers = Array.isArray(users)
    ? users.filter(
        (user) =>
          user &&
          [user.name, user.email, user.phone].some((field) =>
            field?.toLowerCase().includes(search.toLowerCase())
          )
      )
    : [];

  const exportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(filteredUsers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users_list.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("User List", 20, 10);
    autoTable(doc, {
      head: [["Name", "Email", "Phone"]],
      body: filteredUsers.map((u) => [u.name, u.email, u.phone]),
    });
    doc.save("users_list.pdf");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => text || "N/A",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => text || "N/A",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text) => text || "N/A",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => (date ? new Date(date).toLocaleString() : "N/A"),
    },
  ];

  return (
    <div className="p-6 min-h-screen text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        User Dashboard
      </h2>
      {!users ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <Input
              prefix={<SearchOutlined className="text-gray-500" />}
              placeholder="Search Users..."
              value={search}
              onChange={handleSearch}
              className="md:w-1/3 w-full border border-gray-700 rounded-lg"
            />
            <div className="flex gap-2">
              <Button
                icon={<DownloadOutlined />}
                onClick={exportCSV}
                className="bg-green-600 text-white hover:bg-green-500"
              >
                Export CSV
              </Button>
              <Button
                icon={<DownloadOutlined />}
                onClick={exportPDF}
                className="bg-blue-600 text-white hover:bg-blue-500"
              >
                Export PDF
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <div className="min-w-[800px]">
              <Table
                columns={columns}
                dataSource={filteredUsers}
                rowKey="id"
                pagination={{ pageSize: 10 }}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
