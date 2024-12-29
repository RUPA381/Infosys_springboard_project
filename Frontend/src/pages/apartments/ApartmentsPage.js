import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import ApartmentCard from './ApartmentCard'
import axios from 'axios';
import { useSelector } from 'react-redux';

function ApartmentsPage() {
  const [selectedBlock, setSelectedBlock] = useState("A");
  const societyId = useSelector(store => store.auth.userDetails?.societyId)
  const allResidents = useSelector(store => store.flats.residents) || [];
  const residents = allResidents?.filter(resident => resident.societyId === societyId)
  const handleBlockClick = (block) => {
    setSelectedBlock(block);
  }
  return (
    <div className='bg-gray-100 w-screen h-screen'>
      <Header />
      <div className='flex m-5 space-x-10 w-[screen] justify-center'>
        <button className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md ${selectedBlock === "A"
            ? "bg-cyan-950 text-white"
            : "bg-white text-cyan-950"
          }`} onClick={() => handleBlockClick("A")}>Block A</button>
        <button className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md  ${selectedBlock === "B"
            ? "bg-cyan-950 text-white"
            : "bg-white text-cyan-950"
          }`} onClick={() => handleBlockClick("B")}>Block B</button>
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        {residents
          .filter((resident) => resident.flatNo?.startsWith(selectedBlock))
          .map((resident) => (
            <ApartmentCard key={resident.residentId} resident={resident} />
          ))}
      </div>
    </div>
  )
}

export default ApartmentsPage