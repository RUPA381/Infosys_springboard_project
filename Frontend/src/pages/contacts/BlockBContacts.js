import React, { useState } from 'react';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import UpdateContactModal from './UpdateContactModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contact/contact.action';

function BlockBContacts({ contacts }) {
  const role = useSelector((store) => store.auth.user?.role);
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState(null);

  const handleOpen = (contact) => {
    setSelectedContact(contact); 
  };

  const handleClose = () => {
    setSelectedContact(null); 
  };

  const handleDelete = (emergencyId) => {
    dispatch(deleteContact(emergencyId)); 
  };

  return (
    <div className="mx-5">
      <h1 className="font-semibold text-xl">Block-B</h1>
      <div className="flex flex-col px-1 py-5">
        <table className="border-collapse w-[80%] table-fixed">
          <thead>
            <tr className="border border-gray-300">
              <td className="p-1.5 font-semibold text-sky-900 opacity-75">No</td>
              <td className="p-1.5 font-semibold text-sky-900 opacity-75">Name</td>
              <td className="p-1.5 font-semibold text-sky-900 opacity-75">Block</td>
              <td className="p-1.5 font-semibold text-sky-900 opacity-75">Phone no</td>
              {role === 'Admin' && (
                <td className="p-1.5 font-semibold text-sky-900 opacity-75">Actions</td>
              )}
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.emergencyId} className="border border-gray-300">
                  <td className="p-1.5">{contact.emergencyId}</td>
                  <td className="p-1.5">{contact.personName}</td>
                  <td className="p-1.5">{contact.block}</td>
                  <td className="p-1.5">{contact.phoneNo}</td>
                  {role === 'Admin' && (
                    <td className="p-1.5">
                      <div className="flex space-x-5 text-sky-900 opacity-75">
                        <ModeRoundedIcon
                          fontSize="10px"
                          className="cursor-pointer"
                          onClick={() => handleOpen(contact)}
                        />
                        <DeleteRoundedIcon
                          fontSize="10px"
                          className="cursor-pointer"
                          onClick={() => handleDelete(contact.emergencyId)}
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No contacts available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selectedContact && (
        <UpdateContactModal
          open={!!selectedContact}
          close={handleClose}
          contact={selectedContact}
        />
      )}
    </div>
  );
}

export default BlockBContacts;
