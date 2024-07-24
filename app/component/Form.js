'use client'
import { useState } from "react"

export default function Form () {
    const [isTrue, setIsTrue] = useState(false)
    const [formData, setFormData] = useState({
        name:'',
        surname:'',
        email:'',
        country:''
    })
    const onChange = async(event) => {
        const name = event.target.name
        setFormData({...formData, [name]:event.target.value})
    }
    
    const submitForm = async(event) => {
        event.preventDefault()
        setIsTrue(true)
        setTimeout(() => {
            setIsTrue(false)
        }, 5000)
    }


  return (
    <form onSubmit={submitForm} className="flex flex-col gap-12 mx-auto w-full px-4 md:w-1/2 pt-16">
        <div className="flex gap-2">
            <input 
                type="text" 
                onChange={onChange} 
                value={formData.name} 
                name="name" 
                required
                className="w-full input h-12 input-shadow" 
                placeholder="Name">
            </input>
            <input 
                type="text" 
                onChange={onChange} 
                value={formData.surname} 
                name="surname" 
                required
                className="w-full input h-12 input-shadow" 
                placeholder="Surname">
            </input>            
        </div>
        <input 
            type="email" 
            onChange={onChange} 
            value={formData.email} 
            name="email" 
            required
            className="w-full input h-12 input-shadow" 
            placeholder="E-mail Adress">
        </input>
        <input 
            type="text" 
            onChange={onChange} 
            value={formData.country} 
            name="country" 
            className="w-full input h-12 input-shadow" 
            required
            placeholder="Country">
        </input>
        <button type="submit" className="h-12 w-full md:w-4/6 bg-apri mx-auto btn-1 text-white">Join</button>
        <p className="text-center color-apri">{isTrue ? 'Successfully Joined' : ''}</p>
    </form>
  )
}
