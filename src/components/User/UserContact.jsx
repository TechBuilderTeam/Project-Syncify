import React, { useContext, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserContact = ({user,contact,reload, setReload}) => {
    console.log({user,contact,reload, setReload})
    const [contactAdd, setContactAdd] = useState()
    const [countryCode, setCountryCode] = useState('+88');

    const handleModalClose = () => {
        document.getElementById('my_modal_2').close();
    }

    

    const handleAddContact= async (e) => {

        e.preventDefault();
    
        const userContactInfo = {
            phone: e.target.phone.value,
            email: e.target.email.value,
             user: user?.userId
         }
         
       
       console.log({userContactInfo})
    
       
    
        try {
          const result = await axios.post(`https://projectsyncifyapi.onrender.com/api/v1/profile/contact/`, userContactInfo)
          console.log({result});
    
          toast.success("update successfully")
          setReload(!reload)
          handleModalClose()
        } catch (error) {
          console.log('error from designation -> ', error)
        }
    
      };

    return (
        <div>
            <div className=" py-10 px-10 md:px-20  md:py-12">
                <div className="flex justify-between mb-4">
                    <h1 className="text-3xl font-bold">Contact</h1>

                    <button className=" text-4xl   font-bold rounded" onClick={() => document.getElementById('my_modal_2').showModal()} >
                        <FaPlus />
                    </button>
                    <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-white dark:bg-black">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_2").close()}>✕</button>
                            <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#0c01a1] ">Add Contact</h3>
                            <form onSubmit={handleAddContact}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Email</span>
                                    </label>
                                    <input type="email" value={user?.email} name="email" className="input input-bordered bg-slate-200 dark:bg-black" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Phone Number</span>
                                    </label>
                                    <div className="flex">
                                        <select
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            className="input input-bordered bg-slate-200 dark:bg-black mr-2"
                                        >
                                            <option value="+88">+880 (BAN)</option>
                                            <option value="+1">+1 (US)</option>
                                            <option value="+44">+44 (UK)</option>
                                            <option value="+91">+91 (India)</option>
                                            <option value="+61">+61 (Australia)</option>
                                            <option value="+81">+81 (Japan)</option>
                                       
                                        </select>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="input input-bordered bg-slate-200 dark:bg-black flex-1"
                                            pattern="^\d{1,14}$"
                                            placeholder="100 000 0000" 
                                            required
                                        />
                                    </div>
                                </div>



                                <div className="modal-action">
                                    <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full ">Add Contact</button>
                                </div>
                            </form>
                        </div>
                    </dialog>

                </div>
                <div className="mt-4 text-lg font-bold">
                    <h1>Email: {contact?.email}</h1>
                    <h1>Phone Number: {contact?.phone}</h1>

                </div>



            </div>

        </div>
    );
};

export default UserContact;