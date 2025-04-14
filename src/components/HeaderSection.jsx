import myAvatarImage from '../assets/wojak.png';
import useEditMode from '../hooks/useEditMode';
import { defaultPersonalDetails } from '../data/personalDetails';
import useObjectUpdater from '../hooks/useObjectUpdater';

export default function HeaderSection() {
    const { isEditMode, toggleEditMode } = useEditMode();
    const [personalDetails, updateObjectDetails] = useObjectUpdater(defaultPersonalDetails)

    return(
        <header>
        
            <img src={myAvatarImage} className="avatar" alt="avatar image" />

            <div className='person_details'>
                {isEditMode ? (
                    <div className='personal_details-edit'>
                        <input 
                            id='personal-name'
                            name="name" 
                            value={personalDetails.name}
                            onChange={updateObjectDetails}
                        />
                        <input 
                            name="email" 
                            value={personalDetails.email}
                            onChange={updateObjectDetails}
                        />
                        <input 
                            name="github" 
                            value={personalDetails.github}
                            onChange={updateObjectDetails}
                        />

                        <button onClick={toggleEditMode}>Save</button>
                    </div>
                ) : (
                    <div className='personaletails-view'>

                        <h1>{personalDetails.name}</h1>
                        <h3>{personalDetails.email}</h3>
                        <a href={personalDetails.github} target='_blank'><h3>{personalDetails.github}</h3></a>

                        <button onClick={toggleEditMode}>Edit</button>
                    </div>
                )}
            </div>

        </header>
    );
}