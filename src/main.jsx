import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import HeaderSection from './components/HeaderSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import EducationSection from './components/EducationSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='resume'>
      <HeaderSection />
      <hr />
      <ExperienceSection />
      <hr />
      <EducationSection />
    </div>
  </StrictMode>
)
