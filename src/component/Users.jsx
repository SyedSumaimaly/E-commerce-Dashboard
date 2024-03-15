import React from "react";
import { Table } from 'flowbite-react';

const tableData = [
    { productName: 'John', email: 'abc@gmail.com'},
    { productName: 'Alex', email: '123@gmail.com'},
    { productName: 'David', email: 'xyz@gmail.com'}
  ];

const Users = () => {
  return (
    <div className="w-full p-6">
      <div className="flex justify-between w-full mb-6">
        <p className="text-2xl font-semibold">Users</p>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>  
          <Table.HeadCell>
            <span className="sr-only">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {/* Render table rows using map */}
          {tableData.map((row, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {row.productName}
              </Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Delete
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Users;
