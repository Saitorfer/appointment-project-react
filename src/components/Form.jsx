import { useState, useEffect } from "react"
import Error from "./Error";

function Form({ setPatients, patients }) {

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate Form

    if ([name, owner, email, entryDate, symptoms].includes("")) {
      setError(true);
      //stop here, dont execute the rest of the code
      return;
    }

    setError(false);

    //Build the patient Object
    const objectPatient = {
      name,
      owner,
      email,
      entryDate,
      symptoms
    }
    //we create a copy of patients (list) and we add the new objectpatient (patient)
    setPatients([...patients, objectPatient]);

    //reset form
    setName("");
    setOwner("");
    setEmail("");
    setEntryDate("");
    setSymptoms("");

  };

  return (
    <>
      <div className="md:w-1/2 lg:2/5 mx-5">
        <h2 className="font-black text-3xl text-center"> Patient Monitoring </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Add Patient and {''}
          <span className="text-indigo-600 font-bold">Manage them</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          {/* the error message (if error is true he send the div)*/}
          {error && <Error message="All fields must be completed" />}

          <div className="mb-5">
            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
              Pet Name
            </label>
            <input
              id="pet"
              type="text"
              placeholder="pet name"
              className="border-2 w-full p-2 mt-2 placeholder-gray=400 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
              Owner Name
            </label>
            <input
              id="owner"
              type="text"
              placeholder="Owner name"
              className="border-2 w-full p-2 mt-2 placeholder-gray=400 rounded-md"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="border-2 w-full p-2 mt-2 placeholder-gray=400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="entryDate" className="block text-gray-700 uppercase font-bold">
              Entry Date
            </label>
            <input
              id="entryDate"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray=400 rounded-md"
              value={entryDate}
              onChange={(e) => setEntryDate(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
              Symptoms
            </label>
            <textarea
              id="symptoms"
              className="border-2 w-full p-2 mt-2 placeholder-gray=400 rounded-md"
              placeholder="Describe here the symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
            hover:bg-indigo-700 cursor-pointer transition-all"
            value="Add Patient"
          />

        </form>

      </div>
    </>
  )
}

export default Form;