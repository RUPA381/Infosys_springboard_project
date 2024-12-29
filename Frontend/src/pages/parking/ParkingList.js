import React, { useState } from 'react'
function ParkingList({parking,flats}) {
    const [selectedBlock,setSelectedBlock]=useState("All")
    const handleBlockClick=(block)=>{
        setSelectedBlock(block)
    }
    const occupiedParking = parking.filter((p) =>
        flats?.some((flat) => flat.flatNo === p.flatNo)
      );
    const filteredParking=occupiedParking.filter((p)=>{
        if (selectedBlock==="All"){
            return true
        }
        else if (selectedBlock==="A"){
            return p.flatNo[0]==="A"
        }
        else if (selectedBlock==="B"){
            return p.flatNo[0]==="B"
        }
    })
  return (
    <div className='mt-5'>
        <div className="flex space-x-5">
                <button
                    className={`w-28 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                        selectedBlock === "All" ? "bg-cyan-950 text-white" : "bg-white text-cyan-950"
                    }`}
                    onClick={() => handleBlockClick("All")}
                >
                    All
                </button>
                <button
                    className={`w-28 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                        selectedBlock === "A" ? "bg-cyan-950 text-white" : "bg-white text-cyan-950"
                    }`}
                    onClick={() => handleBlockClick("A")}
                >
                    Block-A
                </button>
                <button
                    className={`w-28 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                        selectedBlock === "B" ? "bg-cyan-950 text-white" : "bg-white text-cyan-950"
                    }`}
                    onClick={() => handleBlockClick("B")}
                >
                    Block-B
                </button>
            </div>
            <h1 className="pt-5 px-20 font-semibold text-xl">Parking List</h1>
            <div className="flex flex-col px-1  py-5 items-center">
                <table className="border-collapse w-[80%] table-fixed">
                    <thead>
                        <tr className="border border-gray-300">
                            <td className="p-1.5 font-semibold text-sky-900 opacity-75">No</td>
                            <td className="p-1.5 font-semibold text-sky-900 opacity-75">Parking No</td>
                            <td className="p-1.5 font-semibold text-sky-900 opacity-75">Flat No</td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredParking.length > 0 ? (
                            filteredParking.map((parking) => (
                                <tr key={parking.parkingId} className="border border-gray-300">
                                    <td className="p-1.5">{parking.parkingId}</td>
                                    <td className="p-1.5">{parking.parkingNo}</td>
                                    <td className="p-1.5">{parking.flatNo}</td>
                                    
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No Parking Lots available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default ParkingList