import { useState, useEffect } from "react"
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {

  const [patients, setPatients] = useState([]);
  //this is for the edit and remove part
  const [patient, setPatient] = useState({});

  //load the local storage 9Firest time)
  useEffect(() => {
    const getPatientsLocalMemory = () => {
      // ??[] if its empty give me a []
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS);
      console.log(patientsLS);
    }
    getPatientsLocalMemory();
  }, []);

  //local storage
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter(patientState => patientState.id
      !== id)

    setPatients(updatedPatients);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPatients={setPatients}
          patients={patients}
          patient={patient}
          //we need it to clean the patient afeter updated him
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
