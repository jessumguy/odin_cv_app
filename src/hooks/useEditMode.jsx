import { useState } from "react";

export default function useEditMode(initialState = false) {
    const [isEditMode, setEditMode ] = useState(initialState);

    function toggleEditMode() {
        setEditMode((prev) => !prev);
    }

    return { isEditMode, toggleEditMode };
}