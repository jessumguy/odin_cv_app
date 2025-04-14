import { v4 as uuidv4 } from "uuid";

const defaultExperienceDetails = {
    id: "",
    companyName: "",
    jobTitle: "",
    location: "",
    jobPeriod: ""
}

const defaultItems = [
    {
        id: uuidv4(),
        companyName: "Wuber Eats",
        jobTitle: "Delivery Engineer",
        location: "Large City",
        jobPeriod: "Nov 2024 - Present"
    },{
        id: uuidv4(),
        companyName: "McWages",
        jobTitle: "Crew Member",
        location: "Mid City",
        jobPeriod: "Jan 2012 - Dec 2020"
    }
]

export { defaultExperienceDetails, defaultItems };