import React from "react";
import { Table } from 'flowbite-react';

const tableData = [
    { productName: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
    { productName: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { productName: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' }
  ];

const Products = () => {
  return (
    <div className="w-full p-6">
      <div className="flex justify-between w-full">
        <p className="text-2xl font-semibold">Products</p>
        <button className="p-2 bg-blue-700 text-white rounded-lg">
          Add Product
        </button>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
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
              <Table.Cell>{row.color}</Table.Cell>
              <Table.Cell>{row.category}</Table.Cell>
              <Table.Cell>{row.price}</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
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

export default Products;
