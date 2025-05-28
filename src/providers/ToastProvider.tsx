import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: {
            background: "#DCFCE7",
            color: "#166534",
            border: "1px solid #BBF7D0",
          },
          duration: 3000,
        },
        error: {
          style: {
            background: "#FEE2E2",
            color: "#B91C1C",
            border: "1px solid #FECACA",
          },
          duration: 4000,
        },
      }}
    />
  );
};

export default ToastProvider;
