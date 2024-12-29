import React, { useEffect, useState } from 'react';
import BlockAContacts from './BlockAContacts';
import BlockBContacts from './BlockBContacts';
import { useSelector } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddContactModal from './AddContactModal';

function ContactsPage() {
    const societyId=useSelector(store=>store.auth.userDetails?.societyId)
    const allContacts=useSelector(store=>store.contact?.contacts);
    const contacts=allContacts?.filter(contact=>contact.societyId===societyId)
    const [open,setOpen]=useState(false)
    const [blockAContacts, setBlockAContacts] = useState([]);
    const [blockBContacts, setBlockBContacts] = useState([]);
    const [selectedBlock,setSelectedBlock]=useState("All");
    const role=useSelector(store=>store.auth.user?.role);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
        const handleBlockClick=(block)=>{
            setSelectedBlock(block)
        }
    useEffect(() => {
        const blockA = contacts.filter((contact) => contact.block === "A");
        const blockB = contacts.filter((contact) => contact.block === "B");
        setBlockAContacts(blockA);
        setBlockBContacts(blockB);
    }, [contacts]); 

    return (
        <div className='p-5'>
           <div className='flex justify-between items-center w-[100%]'>
           
           <div className='w-3/4'>
           <h1 className='text-xl font-semibold mx-5'>Security Guard Details</h1>
           </div>
           <div className='w-1/4'>
           {role==='Admin'?
           <button className="bg-gradient-to-r from-cyan-950 to-cyan-600 text-white p-2 rounded-lg cursor-pointer float-right"
          onClick={handleOpen}>
          <AddCircleIcon />
          <span className="px-1 py-0.5">Add Security</span>
        </button>:null}
        </div>
        <AddContactModal open={open} close={handleClose} />
           </div>
            <div className="flex space-x-5 m-5">
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
            {
                selectedBlock==="A"?
                    <BlockAContacts contacts={blockAContacts} />
                    :selectedBlock==="B"?<BlockBContacts contacts={blockBContacts} />:
                <div>
                    <BlockAContacts contacts={blockAContacts} />
                    <BlockBContacts contacts={blockBContacts} />
                </div>
            }
           
        </div>
    );
}

export default ContactsPage;
