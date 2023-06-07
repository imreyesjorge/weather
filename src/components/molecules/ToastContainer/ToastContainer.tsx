'use client'

import { useContext } from "react";
import { Toast } from "../../atoms/Toast";
import { ToastContext } from "../../../context/ToastContext";

export const ToastContainer = () => {
  const { toastData, createToast } = useContext(ToastContext)

  return (
    <article>
      {toastData && <Toast title={toastData?.title} desc={toastData?.desc} type={toastData?.type} />}
    </article>
  )
};