import { useState } from "react";

export default function useObjectUpdater(initialObject) {
    const [objectDetails, setObjectDetails] = useState(initialObject);

    function updateObjectDetails(e) {
        setObjectDetails((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value,
        }))
    }

    return [objectDetails, updateObjectDetails];
}