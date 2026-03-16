import { useState, useEffect } from 'react'
import { dataGrabber } from '/src/DataGrabber.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '/src/components/Header.jsx'
import Patients from '/src/components/Patients.jsx'
import Diagnostics from './components/Diagnostics'
import DiagnosticList from './components/DiagnosticList'
import Biography from './components/Biography'
import LabResults from './components/LabResults'
import MyChart from './components/MyChart'


function App() {
  const [data, setData] = useState(null);
  const [index] = useState(3); // Change this number to update the patient and associated data. We want Jessica [3]

  useEffect(() => {
    const username = import.meta.env.VITE_API_USERNAME;
    const password = import.meta.env.VITE_API_PASSWORD;

    // Calls dataGrabber function
    dataGrabber(username, password).then(json => {
      if (json && json[index]) {
        console.log('Fetched data:', json[index]);
        setData(json[index]);
      } else {
        console.warn(`No patient found at index ${index}`);
      }
    });
  }, [index]);

  // Loading text displays while data is being retireved
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <main>
        <Header />
        <Patients />
        <div id="myChart">
          <MyChart
            diagnosis_history={data.diagnosis_history}
          />
        </div>
        <Diagnostics
          diagnosis_history={data.diagnosis_history}
        />
        <DiagnosticList
          diagnosticList={data.diagnostic_list}
        />
        <Biography
          profile_picture={data.profile_picture}
          name={data.name}
          date_of_birth={data.date_of_birth}
          gender={data.gender}
          phone_number={data.phone_number}
          emergency_contact={data.emergency_contact}
          insurance_type={data.insurance_type}
        />
        <LabResults
          labResults={data.lab_results}
        />
      </main>
    </>
  )
}

export default App
