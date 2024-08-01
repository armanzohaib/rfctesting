'use client';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert: React.FC = () => {
  return <ToastContainer />;
};

// Define types for the showToast function parameters
type ToastType = 'success' | 'error' | 'default';

// Function to show toast notifications
export const showToast = (message: string, type: ToastType = 'success'): void => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
  }
};

export default Alert;
