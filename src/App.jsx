import { useState } from 'react'
import ClinicalFeature from './components/ClinicalFeature'
import Modal from './components/Modal'
import './App.css'

function App() {
  const [clinicalFeatures, setClinicalFeatures] = useState(
    [
      {
        id: 1,
        title: "Asymptomatic",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 0,
        isSelected: false,
      },
      {
        id: 2,
        title: "Somatic abdominal pain",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 3,
        title: "Bloating",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 4,
        title: "Altered bowel habits",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 5,
        title: "Abdominal guarding",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 6,
        title: "Fever",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 7,
        title: "Hematochezia/ Melena",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 3,
        isSelected: false,
      },
      {
        id: 8,
        title: "Irritable peritoneal syndrome",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 3,
        isSelected: false,
      },
      {
        id: 9,
        title: "Obstruction",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 3,
        isSelected: false,
      },
      {
        id: 10,
        title: "CT/CAT findings",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 1,
        isSelected: false,
      },
    ]
  )

  const [labs, setLabs] = useState(
    [
      {
        id: 11,
        title: "CRP",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 12,
        title: "Fecal calprotectin",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 13,
        title: "Leukocytosis",
        image: 'https://cdn-icons-png.flaticon.com/512/2047/2047553.png',
        points: 1,
        isSelected: false,
      },
    ]
  )

  const imaging = [
    {
      name: "imaging",
      value: "-1",
      title: "None"
    },
    {
      name: "imaging",
      value: "0",
      title: "0: Mild clinical diverticulitis"
    },
    {
      name: "imaging",
      value: "Ia",
      title: "Ia: Confined pericolic inflammation or phlegmon"
    },
    {
      name: "imaging",
      value: "Ib",
      title: "Ib: Confined pericolic abscess"
    },
    {
      name: "imaging",
      value: "II",
      title: " II: Pelvic, distant intra- abdominal or retroperitoneal abscess"
    },
    {
      name: "imaging",
      value: "III",
      title: "III: Generalized purulent peritonitis"
    },
    {
      name: "imaging",
      value: "IV",
      title: "IV: Generalized fecal peritonitis"
    }
  ]

  const [allLabsSelected, setAllLabsSelected] = useState(false)
  const [imagingSelected, setImagingSelected] = useState("-1")

  const handleToggleClinicalFeatures = (id) => {
    const newList = clinicalFeatures.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isSelected: !item.isSelected,
        };

        return updatedItem;
      }

      return item;
    });

    setClinicalFeatures(newList);
  }

  const handleToggleLabs = (id) => {
    const newList = labs.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isSelected: !item.isSelected,
        };

        return updatedItem;
      }

      return item;
    });

    if (newList.some(item => item.isSelected)) {
      setAllLabsSelected(true)
    } else {
      setAllLabsSelected(false)
    }
    setLabs(newList);
  }


  const handleCalculate = () => {
    let sum = 0;
    clinicalFeatures.map(item => {
      if (item.isSelected) {
        sum += item.points
      }
    })
    window.alert(`Your value: ${sum}`)
  }

  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>DVD Scale</h1>
      </div>
      <div className='description'>
        <div className='text'>
          The DVD scale allows the categorization of Diverticular Disease that the patient has according to the clinical features, imaging and laboratory tests so the doctor can provide the correct diagnosis and the optimal recommended treatment
        </div>
      </div>
      <div className='row '>
        {clinicalFeatures.slice(0, 1).map(item => (
          <ClinicalFeature
            id={item.id}
            title={item.title}
            image={item.image}
            points={item.points}
            isSelected={item.isSelected}
            onClick={() => handleToggleClinicalFeatures(item.id)}
          ></ClinicalFeature>
        ))}
        <h2 className='displayPoints'>0 points each one</h2>
      </div>
      <div className='row'>
        {clinicalFeatures.slice(1, 6).map(item => (
          <ClinicalFeature
            id={item.id}
            title={item.title}
            image={item.image}
            points={item.points}
            isSelected={item.isSelected}
            onClick={() => handleToggleClinicalFeatures(item.id)}
          ></ClinicalFeature>
        ))}
        <h2 className='displayPoints'>1 point each one</h2>
      </div>
      <div className='row'>
        {clinicalFeatures.slice(6, 9).map(item => (
          <ClinicalFeature
            id={item.id}
            title={item.title}
            image={item.image}
            points={item.points}
            isSelected={item.isSelected}
            onClick={() => handleToggleClinicalFeatures(item.id)}
          ></ClinicalFeature>
        ))}
        <h2 className='displayPoints'>3 points each one</h2>
      </div>
      <div className='row'>
        <ClinicalFeature
          id={clinicalFeatures[9].id}
          title={clinicalFeatures[9].title}
          image={clinicalFeatures[9].image}
          points={clinicalFeatures[9].points}
          isSelected={clinicalFeatures[9].isSelected}
          onClick={() => handleToggleClinicalFeatures(clinicalFeatures[9].id)}
        ></ClinicalFeature>
        <div className='imaging-checkboxes'>
          {clinicalFeatures[9].isSelected && (
            imaging.map(item => (
              <div>
                <input
                  type='radio'
                  name={item.name}
                  value={item.value}
                  id={item.value}
                  checked={imagingSelected == item.value}
                  onChange={e => setImagingSelected(e.target.value)}
                ></input>
                <label htmlFor={item.value}>{item.title}</label>
              </div>
            ))
          )}
        </div>
      </div>
      <div className='row'>
        {labs.map(item => (
          <ClinicalFeature
            id={item.id}
            title={item.title}
            image={item.image}
            points={item.points}
            isSelected={item.isSelected}
            onClick={() => handleToggleLabs(item.id)}
          ></ClinicalFeature>
        ))}
        <div className='labCriteria'>
          <h3>Is one of these 3 criteria present?</h3>
          <div className="checkbox-wrapper-13">
            <div className='checkbox-unit'>
              <input id="c1-13" type="checkbox" checked={allLabsSelected}></input>
              <label for="c1-13">Yes</label>
            </div>
            <div className='checkbox-unit'>
              <input id="c1-13" type="checkbox" checked={!allLabsSelected}></input>
              <label for="c1-13">No</label>
            </div>
          </div>
          <h3>(There is no numerical value for these criteria)</h3>
        </div>

      </div>
      <button onClick={handleCalculate}>Calculate</button>
    </div >
  )
}

export default App
