import React from 'react';
import { Table } from 'flowbite-react';

function OrderTable() {
    return (
        <div className="overflow-x-auto">

            <h1 className='text-2xl font-semibold p-2'>Order History</h1>

            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Person name</Table.HeadCell>
                    <Table.HeadCell>Product name</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Silver
                        </Table.Cell>
                        <Table.Cell>Apple Pro</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                pending
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Silver
                        </Table.Cell>
                        <Table.Cell>Apple Pro</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                pending
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Silver
                        </Table.Cell>
                        <Table.Cell>Apple Pro</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                pending
                            </a>
                        </Table.Cell>
                    </Table.Row>


                </Table.Body>
            </Table>
        </div>
    );
}

export default OrderTable;




