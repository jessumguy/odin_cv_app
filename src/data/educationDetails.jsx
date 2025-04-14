import { v4 as uuidv4 } from "uuid";

const defaultEducationDetails = {
    id: "",
    description: ""
}

const defaultItems = [
    {
        id: uuidv4(),
        description: "Prompt Engineering Certificate, 2024"
    },{
        id: uuidv4(),
        description: "Bootcamp Certificate, 2023"
    },{
        id: uuidv4(),
        description: "B.A. Humanities, 2010 - Mid City University"
    }
]

export { defaultEducationDetails, defaultItems };