import { createContext, useState } from "react";

type BingoContextData = {
    sorted: number;
    sorterNumber(): Promise<void>;
}

export const BingoContext  = createContext<BingoContextData>({} as BingoContextData);

export const BingoProvider: React.FC = ({ children }) => {

    const [sorted, setSorted] = useState<number>();

    function sorterNumber() {
        let number = Math.floor(Math.random() * 75 + 1);
        console.log(number);
        setSorted(number);
        return number
    }

    return(
        <BingoContext.Provider value={{
            sorted,
            sorterNumber
        }}>
            {children}
        </BingoContext.Provider>
    );
}