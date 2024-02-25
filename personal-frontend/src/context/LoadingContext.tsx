import React, { ReactNode, createContext, useState } from "react";

interface LoadingContextProps {
    loading: boolean;
    setLoading: (value: boolean) => void;
}

const initialContextValue: LoadingContextProps = {
    loading: false,
    setLoading: () => {},
  };

const LoadingContext = createContext<LoadingContextProps>(initialContextValue);

const LoadingProvider : React.FC<{ children: ReactNode }> = ({children}) => {
    const [loading, setLoading] = useState(false);

    const toggleLoading = (value: boolean) => {
        setLoading(value);
    }

    return (
        <LoadingContext.Provider value={{loading, setLoading: toggleLoading}}>
            <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 items-center justify-center z-50 ${loading? 'flex ' : 'hidden'}`}>
                <svg className="animate-spin h-12 w-12 text-white dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="80" strokeDashoffset="60"></circle>
                </svg>
            </div>
            {children}
        </LoadingContext.Provider>
    )
}

export {LoadingContext, LoadingProvider};