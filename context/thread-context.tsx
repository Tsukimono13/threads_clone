import {createContext, FC, JSX, PropsWithChildren, useEffect, useState} from "react";
import {Thread} from "../type/threads";
import {generateThreads} from "../utils/generate-data";

export const ThreadContext = createContext<Thread[]>([]);

export const ThreadProvider: FC<PropsWithChildren> = ({children}) => {
    const [threads, setThreads] = useState<Thread[]>([]);

    useEffect(() => {
        setThreads(generateThreads());
    }, []);

    return (
        <ThreadContext.Provider value={threads}>
            {children}
        </ThreadContext.Provider>
    );
};