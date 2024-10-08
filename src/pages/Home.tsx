import About from '../components/About'
import CharityCard from '../components/CharityCard'
import DonationForm from '../components/DonationForm'
import Usage from '../components/Usage'
import { dummyCharities } from '../utils/dummy'

export default function Home() {
  return (
    <div id='start' className="flex flex-col flex-grow">
      <main className="flex-1 py-16">
        <section className="md:my-16">
          <div className="px-4 md:px-6">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Donate with Crypto, Change Lives
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Make a difference using the power of blockchain. Support global charities with your cryptocurrency donations.
                </p>
              </div>
              <div className="space-x-4">
                <button className="bg-pink-500 hover:bg-white py-2 px-6 rounded-md shadow-lg text-white hover:text-pink-600 transition-all shadow-white hover:shadow-none hover:translate-y-1 ">Get Started</button>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <DonationForm charities={dummyCharities}/>
        <section id='charities' className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Charities</h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {dummyCharities.map((charity) => (
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