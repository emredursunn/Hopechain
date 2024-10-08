import { useEffect, useState } from 'react'
import About from '../components/About'
import CharityCard from '../components/CharityCard'
import DonationForm from '../components/DonationForm'
import Usage from '../components/Usage'
import {getAllCharities} from "../services/service.ts"
import { Charity } from '../types/Charity.ts'

export default function Home() {

  const [charityList,setCharityList] = useState<Charity[]>([]) 

  useEffect(() => {
    const fetchCharities = async () => {
      const response =await getAllCharities()
      setCharityList(response)
    }
    fetchCharities()
  },[])
  
  return (
    <div id='start' className="flex flex-col flex-grow">
      <main className="flex-1 py-16">
        <section className="md:my-16">
          <div className="px-4 md:px-6">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Donate with Crypto, Change Lives
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Make a difference using the power of blockchain. Support global charities with your cryptocurrency donations.
                </p>
              </div>
          </div>
        </section>
        <DonationForm charities={charityList}/>
        <section id='charities' className="m-auto max-w-5xl py-12 md:py-24 lg:py-32">
          <div className="flex flex-col px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Charities</h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {charityList.map((charity) => (
                <CharityCard key={charity.id} charity={charity}/>
              ))}
            </div>
          </div>
        </section>
        <Usage />
        <About />
      </main>
      
    </div>
  )
}