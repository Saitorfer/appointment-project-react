import React from "react";
import Patient from "./Patient";


function PatientList({ patients, setPatient }) {

  return (
    <>
      <div className="md:w-1/2 lg;w-3/5 md:h-screen overflow-y-scroll">
        {patients && patients.length ? (
          //if there is elements in patient list
          <>
            <h2 className="font-black text-3xl text-center"> Patient List </h2>

            <p className="text-lg mt-5 text-center mb-10">
              Manage your {''}
              <span className="text-indigo-600 font-bold">Patients and Appointments</span>
            </p>

            {patients.map((patient) => (
              <Patient
                // now we use a randomID in From class
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
              />
            ))}

          </>
        ) : (
          //if there is NO elements in patient list
          <>
            <h2 className="font-black text-3xl text-center"> Nothing to show </h2>

            <p className="text-lg mt-5 text-center mb-10">
              Please start adding patients {''}
              <span className="text-indigo-600 font-bold">and they will appear here</span>
            </p>
          </>
        )}



      </div>
    </>
  )
}

export default PatientList;
