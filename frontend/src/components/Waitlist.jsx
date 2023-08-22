import { useState } from "react"
import { db } from "../firebaseConfig"
import { addDoc, collection, doc } from "firebase/firestore"



function Waitlist() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formData
    
    const refresh = () => window.location.reload(true)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        // await setDoc(userColRef, data)
        try {
            await addDoc(collection(db, 'waitListData'), formData)
            
        } catch (err) {
            alert(err)
        }
        refresh()
    }

  return (
    <div className='bg-slate-100 m-10 border border-slate-200 p-10'>
        <form onSubmit={onSubmit}> 
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" value={name} id="name" className="block py-2.5 px-0 w-full text-sm text-[#111111] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#111111] dark:border-gray-600 dark:focus:border-[#111111] focus:outline-none focus:ring-0 focus:border-[#111111] peer" required 
                    onChange={onChange} />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#111111] peer-focus:dark:text-[#111111] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" value={email} id="email" className="block py-2.5 px-0 w-full text-sm text-[#111111] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#111111] dark:border-gray-600 dark:focus:border-[#111111] focus:outline-none focus:ring-0 focus:border-[#111111] peer" required 
                    onChange={onChange} />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#111111] peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
            </div>
            <button type="submit" className="text-white bg-[#111111] hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-[#111111] font-medium text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#111111] dark:hover:bg-gray-400 dark:focus:ring-[#111111]">Submit</button>
        </form>
    </div>
  )
}

export default Waitlist
