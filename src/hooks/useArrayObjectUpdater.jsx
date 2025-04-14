import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useArrayObjectUpdater(intialArray) {
    const [items, setItems] = useState(intialArray);

    function updateArrayObjectItems(id, key, value) {
        setItems((prevState) => 
            prevState.map((item) => 
                item.id === id ? { ...item, [key]: value } : item
            )
        )
    }

    function deleteItemById(id) {
        setItems((prevState) => prevState.filter((item) => item.id !== id));
    }

    function addItem() {
        setItems((prevState) => [
            ...prevState,
            { 
                id: uuidv4(),
                companyName: '',
                jobTitle: '',
                location: '',
                jobPeriod: ''
            }
        ])
    }

    return [items, updateArrayObjectItems, deleteItemById, addItem];
}