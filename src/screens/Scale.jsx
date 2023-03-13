import { useState } from 'react'
import ClinicalFeature from '../components/ClinicalFeature'

const projectRoute = 'C:/Users/david/projects/haziel/src/assets/'

const Scale = ({ onChange }) => {
  const [clinicalFeatures, setClinicalFeatures] = useState(
    [
      {
        id: 1,
        title: "Asymptomatic",
        image: 'asymptomatic.png',
        points: 0,
        isSelected: false,
      },
      {
        id: 2,
        title: "Somatic abdominal pain",
        image: 'somatic_abdominal_pain.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 3,
        title: "Bloating",
        image: 'bloating.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 4,
        title: "Altered bowel habits",
        image: 'altered_bowel_habits.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 5,
        title: "Abdominal guarding",
        image: 'abdominal_guarding.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 6,
        title: "Fever",
        image: 'fever.png',
        points: 1,
        isSelected: false,
      },
      {
        id: 7,
        title: "Hematochezia/ Melena",
        image: 'hematochezia.png',
        points: 3,
        isSelected: false,
      },
      {
        id: 8,
        title: "Irritable peritoneal syndrome",
        image: 'irritable_peritoneal_syndrome.png',
        points: 3,
        isSelected: false,
      },
      {
        id: 9,
        title: "Obstruction",
        image: 'obstruction.png',
        points: 3,
        isSelected: false,
      },
      {
        id: 10,
        title: "CT/CAT findings",
        image: 'ct_cat.png',
        points: 0,
        isSelected: false,
      },
    ]
  )

  const [labs, setLabs] = useState(
    [
      {
        id: 11,
        title: "CRP",
        image: 'crp.png',
        points: 0,
        isSelected: false,
      },
      {
        id: 12,
        title: "Fecal calprotectin",
        image: 'fecal_calprotectin.png',
        points: 0,
        isSelected: false,
      },
      {
        id: 13,
        title: "Leukocytosis",
        image: 'leukocytosis.png',
        points: 0,
        isSelected: false,
      },
    ]
  )

  const imaging = [
    {
      name: "imaging",
      points: 0,
      value: "-1",
      title: "None"
    },
    {
      name: "imaging",
      points: 10,
      value: "0",
      title: "0: Mild clinical diverticulitis"
    },
    {
      name: "imaging",
      points: 20,
      value: "Ia",
      title: "Ia: Confined pericolic inflammation or phlegmon"
    },
    {
      name: "imaging",
      points: 30,
      value: "Ib",
      title: "Ib: Confined pericolic abscess"
    },
    {
      name: "imaging",
      points: 40,
      value: "II",
      title: " II: Pelvic, distant intra- abdominal or retroperitoneal abscess"
    },
    {
      name: "imaging",
      points: 50,
      value: "III",
      title: "III: Generalized purulent peritonitis"
    },
    {
      name: "imaging",
      points: 60,
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


    const finding = imaging.find(item => item.value == imagingSelected)
    sum += finding.points
    onChange(sum)
  }

  return (
    <div className="scale">
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
            key={item.id}
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
            key={item.id}
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
            key={item.id}
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
            key={item.id}
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
              <label htmlFor="c1-13">Yes</label>
            </div>
            <div className='checkbox-unit'>
              <input id="c1-13" type="checkbox" checked={!allLabsSelected}></input>
              <label htmlFor="c1-13">No</label>
            </div>
          </div>
          <h3>(There is no numerical value for these criteria)</h3>
        </div>

      </div>
      <div className='footer'>
        <button className='calculate' onClick={handleCalculate}>Calculate</button>
      </div>
    </div >
  )
}

export default Scale
