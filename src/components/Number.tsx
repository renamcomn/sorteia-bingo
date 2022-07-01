import { useContext } from "react";
import { BingoContext } from "../context/BingoContext";

function Number() {
    const { sorted } = useContext(BingoContext);
    return(
        <p>{sorted}</p>
    )
}

export default Number;