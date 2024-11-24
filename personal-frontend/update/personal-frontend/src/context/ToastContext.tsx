import Toast from "@/components/custom-ui/Toast/Toast";
import React, { ReactNode, createContext, useState } from "react";

export enum ToastType {
    NORMAL,
    SUCCESS,
    WARNING,
    ERROR
}

interface ToastContextProps {
    showToast: (type: ToastType, message: string) => void;
}

const initialContextValue: ToastContextProps = {
    showToast: () => { },
};

const ToastContext = createContext<ToastContextProps>(initialContextValue);

const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [toastClass, setToastClass] = useState<string>("");

    const showToast = (type: ToastType, message: string) => {
        switch (type) {
            case ToastType.NORMAL:
                setToastClass("toast-base");
                break;

            case ToastType.WARNING:
                setToastClass("toast-warning");
                break;

            case ToastType.ERROR:
                setToastClass("toast-error");
                break;

            case ToastType.SUCCESS:
                setToastClass("toast-success");
                break;

            default:
                break;
        }
        setToastMessage(message);

        setTimeout(() => {
            setToastClass(prevToastClass => prevToastClass + " animate-fadeOut");
        }, 1000)
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            <Toast message={toastMessage ? toastMessage : ""} className={toastClass} />
            {children}
        </ToastContext.Provider>
    )
}

export { ToastContext, ToastProvider };