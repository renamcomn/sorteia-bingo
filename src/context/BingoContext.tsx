import { createContext, useState } from "react";

type BingoContextData = {
    sorted: number | undefined;
    numbersSorted: number[];
    sorterNumber(): void;
}

export const BingoContext  = createContext<BingoContextData>({} as BingoContextData);

export const BingoProvider: React.FC = ({ children } : any) => {

    const [sorted, setSorted] = useState<number>();
    const [numbers, setNumbers] = useState<number[]>([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
        40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75
    ]);
    const [numbersSorted, setNumbersSorted] = useState<number[]>([]);

    function sorterNumber() {
        
        let array = numbersSorted;

        if(numbers.length > 0) {
            // random number
            let number = numbers[Math.floor(Math.random() * numbers.length)];
            const msg = new SpeechSynthesisUtterance();
            msg.text = number.toString();
            window.speechSynthesis.speak(msg);
            array.push(number);

            // verify and remove sorted number from array
            var index = numbers.indexOf(number);
            if(index != -1) {
                numbers.splice(index, 1);
            }

            setNumbersSorted(array);

            setNumbers(numbers);
            setSorted(number);
            return numbers;
        }
       
    }

    return(
        <BingoContext.Provider value={{
            sorted,
            numbersSorted,
            sorterNumber
        }}>
            {children}
        </BingoContext.Provider>
    );
}