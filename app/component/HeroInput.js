'use client'
import Link from "next/link"

export default function HeroInput() {
  return (
        <form onSubmit={e=>e.preventDefault()} className="w-5/6 flex flex-col gap-4 justify-center items-center">
            <input 
                type="email" 
                name="email" 
                required
                className="w-5/6 input h-12 input-shadow" 
                placeholder="Email Adress">
            </input>
            <div className="flex gap-16 mt-4 justify-center w-full">
                <button type="submit" className="btn-1 bg-apri text-white hover:bg-dark-apri text-xs w-1/2">Sign-up</button>
                <Link href='#2' className="w-1/2">
                <button className="btn-1 bg-trans bg-second text-xs w-full">More Info</button>
                </Link>
            </div>
        </form>
  )
}