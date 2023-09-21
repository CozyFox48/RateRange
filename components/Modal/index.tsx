import React from 'react';

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-opacity-20  z-50`}>
      <div className={`bg-white p-8 rounded-lg shadow-lg  ${className}`}>
        {/* <div className="flex justify-end mb-4">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            X
          </button>
        </div> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;