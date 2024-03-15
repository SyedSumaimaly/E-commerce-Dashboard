import React from "react";
import Modal from "react-modal";

const ProductModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal w-1/2 bg-white rounded-lg shadow-xl mx-auto fixed top-[6%] left-[25%]" // Custom class for the modal
      overlayClassName="overlay" // Custom class for the overlay
      contentLabel="Add Product Modal"
    >
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        {/* Form fields for adding a product */}
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="text-lg font-medium">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-lg font-medium">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-lg font-medium">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 me-4"
          >
            Add
          </button>
          <button
          onClick={onRequestClose}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Close
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ProductModal;
