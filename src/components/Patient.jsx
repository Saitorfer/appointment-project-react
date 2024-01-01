import React from 'react'

const Patient = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Name: {""}
                <span className="font-normal normal-case">
                    Luna
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {""}
                <span className="font-normal normal-case">
                    David
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
                <span className="font-normal normal-case">
                    a@a.com
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Entry Date: {""}
                <span className="font-normal normal-case">
                    10/10/2022
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {""}
                <span className="font-normal normal-case">
                    ta malita
                </span>
            </p>


        </div>
    )
}

export default Patient
