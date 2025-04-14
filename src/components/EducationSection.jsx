import { defaultItems } from "../data/educationDetails";
import useEditMode from "../hooks/useEditMode";
import useArrayObjectUpdater from "../hooks/useArrayObjectUpdater";

export default function EducationSection() {
    const { isEditMode, toggleEditMode } = useEditMode();
    const [items, updateArrayObjectItems, deleteItemById, addItem] = useArrayObjectUpdater(defaultItems);

    return (
        <main>
            <div>
                <h2>Education & Certificates</h2>

                {isEditMode && (
                    <button onClick={addItem}>Add</button>
                )}

                <button onClick={toggleEditMode}>
                    {isEditMode ? "Save" : "Edit All"}
                </button>
            </div>

            {items.map(item  => (
                <div key={item.id}>
                    {isEditMode ? (
                        <div>
                            <input 
                                type="text"
                                value={item.description} 
                                placeholder="Education Description"
                                onChange={e => updateArrayObjectItems(item.id, 'description', e.target.value)}
                            />
                            <button onClick={() => deleteItemById(item.id)}>Delete</button>
                        </div>
                    ) : (
                        <div>
                            <h5>{item.description}</h5>
                        </div>
                    )}
                </div>
            ))}
        </main>
    )
}