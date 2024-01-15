'use client';

import { createContext, useState } from 'react';
import { ToastProps } from '../../components/atoms/Toast/Toast.types';

export const ToastContext = createContext(null);

export const ToastContextProvider = ({ children }) => {
  const [toastData, setToastData] = useState<ToastProps | null>(null);

  /**
   * Updates the context with the given new toast.
   */
  const createToast = ({ title, desc, type }: ToastProps) => {
    if (toastData) return

    setToastData({ title, desc, type });

    // Remove the toast after a short period of time
    setTimeout(() => {
      setToastData(null);
    }, 10000)
  };

  return (
    <ToastContext.Provider value={{ toastData, createToast }}>
      {children}
    </ToastContext.Provider>
  );
};
