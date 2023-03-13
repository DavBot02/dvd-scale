import './App.css'

import React from 'react'
import { useState } from 'react'
import Scale from './screens/Scale'
import Results from './screens/Results'


const diagnostics = [
  {
    title: 'Diverticulosis',
    severity: '',
    description: "There is no treatment needed if the patient is not presenting symptoms or signs. If the clinician suspects of malignancy, a colonoscopy can be made.\nIf the patient presents an acute episode related to diverticulosis, it's vital for the clinician to reassess the patient's state. "
  },
  {
    title: 'Symptomatic uncomplicated\n diverticular disease (SUDD)',
    severity: '',
    description: `Fiber: According to the world gastroenterology organisation (WGO), clinicians should advise  spasmolytics and a high-fiber diet or fibre  supplementation. Considered first-line treatment for SUDD. Studies have shown that >25g/day reduces symptoms and complications.\n
                  Rifaximin: Poorly absorbable antibiotic with a broad spectrum of action. It acts against Gram-positive and -negative bacteria (aerobes and anaerobes). Successfully used in the treatment of SUDD and seems to be effective in SUDD remission. Studies have shown that 800mg/day reduces symptoms and complications.\n
                  Mesalazine: Used to control inflammation in SUDD. It's thought that mesalazine inhibits some key factors of the inflammatory cascade, inhibits the production of interleukin-1 and free radicals, and has intrinsic antioxidant activity. Studies have shown that 2.4g/day reduces inflammation.\n
                  Probiotics: Third choice for the treatment of SUDD. Probiotics will inhibit pathogen adherence to enterocytes and increase IgA secretion in Peyer’s patches. In turn, this will increase immune system activity inhibiting the release of anti-inflammatory cytokines and inhibiting pro-inflammatory cytokines.`
  },
  {
    title: 'Symptomatic uncomplicated\n diverticular disease',
    severity: 'Mild\n',
    description: `Fiber: According to the world gastroenterology organisation (WGO), clinicians should advise  spasmolytics and a high-fiber diet or fibre  supplementation. Considered first-line treatment for SUDD. Studies have shown that >25g/day reduces symptoms and complications.\n
                  Rifaximin: Poorly absorbable antibiotic with a broad spectrum of action. It acts against Gram-positive and -negative bacteria (aerobes and anaerobes). Successfully used in the treatment of SUDD and seems to be effective in SUDD remission. Studies have shown that 800mg/day reduces symptoms and complications.\n
                  Mesalazine: Used to control inflammation in SUDD. It's thought that mesalazine inhibits some key factors of the inflammatory cascade, inhibits the production of interleukin-1 and free radicals, and has intrinsic antioxidant activity. Studies have shown that 2.4g/day reduces inflammation.\n
                  Probiotics: Third choice for the treatment of SUDD. Probiotics will inhibit pathogen adherence to enterocytes and increase IgA secretion in Peyer’s patches. In turn, this will increase immune system activity inhibiting the release of anti-inflammatory cytokines and inhibiting pro-inflammatory cytokines.`
  },
  {
    title: 'Symptomatic uncomplicated\n diverticular disease',
    severity: 'Moderate\n',
    description: `Percutaneous drainage: Drainage of abscesses >4-5 cm.\n
    reduces the need for surgery and results in more favorable and improved outcomes.`
  },
  {
    title: 'Symptomatic uncomplicated\n diverticular disease',
    severity: 'Severe\n',
    description: `Hartmann procedure: Resection of a segment or tumor of the sigmoid diverticulitis, creating an end colostomy as well as the closure of the distal rectal stump either by stapled sutures or sewn by hand.\n 
    Primary anastomosis (with or without ileostomy): This procedure can be used as an alternative to the Hartmann procedure.
    Hartmann procedure has been the treatment of choice for most surgeons for the urgent surgical treatment of perforated diverticulitis over the past years, however primary anastomosis has shown no increase in mortality and morbidity, and better results in the operation for intestinal transit reconstruction.`
  },

]

const App = () => {

  const [screen, setScreen] = useState(0)
  const [results, setResults] = useState(0)

  const handleResults = points => {
    console.log(points)
    switch (true) {
      case (points < 9):
        setResults(0)
        break
      case (points < 14):
        setResults(1)
        break
      case (points < 43):
        setResults(2)
        break
      case (points < 53):
        setResults(3)
        break
      case (points < 71):
        setResults(4)
        break
      default:
        setResults(4)
    }
    setScreen(1)
  }

  return (
    <div className='App'>
      {screen == 0 ? <Scale onChange={handleResults}></Scale> : <Results
        severity={diagnostics[results].severity}
        title={diagnostics[results].title}
        treatments={diagnostics[results].description}
      ></Results>}
    </div>
  )
}

export default App