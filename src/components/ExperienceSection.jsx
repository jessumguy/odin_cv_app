import { defaultItems } from "../data/experienceDetails";
import useEditMode from "../hooks/useEditMode";
import useArrayObjectUpdater from "../hooks/useArrayObjectUpdater";

export default function ExperienceSection() {
    const { isEditMode, toggleEditMode } = useEditMode();
    const [items, updateArrayObjectItems, deleteItemById, addItem] = useArrayObjectUpdater(defaultItems);

    return (
        <main>
            <div className="experience-title">
                <h2>Experience</h2>

                {isEditMode && (
                    <button onClick={addItem}>Add</button>
                )}

                <button onClick={toggleEditMode}>
                    {isEditMode ? "Save" : "Edit"}
                </button>
            </div>

            {items.map(item => (
                <div key={item.id}>
                    {isEditMode ? (
                        <div className="experience_details-edit">
                            <input 
                                type="text"
                                value={item.companyName}
                                placeholder="Company Name"
                                onChange={e => updateArrayObjectItems(item.id, 'companyName', e.target.value)}
                            />
                            <input 
                                type="text"
                                value={item.jobTitle}
                                placeholder="Job Title"
                                onChange={e => updateArrayObjectItems(item.id, 'jobTitle', e.target.value)}
                            />
                            <input 
                                type="text"
                                value={item.location}
                                placeholder="Location"
                                onChange={e => updateArrayObjectItems(item.id, 'location', e.target.value)}
                            />
                            <input 
                                type="text"
                                value={item.jobPeriod}
                                placeholder="Job Period"
                                onChange={e => updateArrayObjectItems(item.id, 'jobPeriod', e.target.value)}
                            />
                            <button onClick={() => deleteItemById(item.id)}>Delete</button>
                        </div>
                    ) : (
                        <div className="experience_details-view">

                            <h3>{item.companyName}</h3>
                            <h5>{item.jobTitle}</h5>
                            <h5>{item.location}</h5>
                            <h5>{item.jobPeriod}</h5>                     
                        </div>
                    )}
                </div>
                )
            )}
        </main>
    )
}