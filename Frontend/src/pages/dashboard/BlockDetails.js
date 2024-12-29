import React from 'react'
import BlockCard from './BlockCard'
import { useSelector } from 'react-redux';

function BlockDetails() {
  const societyId=useSelector(store=>store.auth.userDetails?.societyId)
  const allFlats=useSelector(store=>store.flats?.flats)
  const flats=allFlats?.filter(flat=>flat.societyId===societyId);
  const Aflats=flats.filter(flat=>flat.flatNo[0]=="A");
  const Bflats=flats.filter(flat=>flat.flatNo[0]=="B");
  const Aoccupied=Aflats.filter(flat=>flat.occupied==true);
  const Boccupied=Bflats.filter(flat=>flat.occupied==true);
  const Aunoccupied=Aflats.filter(flat=>flat.occupied==false);
  const Bunoccupied=Bflats.filter(flat=>flat.occupied==false);
  const allResidents=useSelector(store=>store.flats?.residents);
  const residents=allResidents?.filter(resident=>resident.societyId===societyId);
  const totalResidentsFlatA=residents.filter(resident=>resident.flatNo[0]=="A");
  const totalResidentsFlatB=residents.filter(resident=>resident.flatNo[0]=="B");
  return (
    <div className="flex space-x-3 justify-between flex-wrap space-y-2">
      <BlockCard block={"A"} totalFlats={Aflats?.length} totalMembers={totalResidentsFlatA?.length} occupied={Aoccupied?.length} unoccupied={Aunoccupied?.length}/>
      <BlockCard block={"B"} totalFlats={Bflats?.length} totalMembers={totalResidentsFlatB?.length} occupied={Boccupied?.length} unoccupied={Bunoccupied?.length}/>
    </div>
  )
}

export default BlockDetails