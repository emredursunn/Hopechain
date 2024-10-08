import React from 'react'

const Usage = () => {
  return (
<section id='usage' className="max-w-4xl mx-auto my-8 py-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg text-white">
      <div className="px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">How It Works</h1>
        
        <div className="space-y-8">
          <div className="bg-white text-black rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">1. Connect Your Wallet</h2>
            <p>
              Start by connecting your cryptocurrency wallet to our platform. We support popular wallets like Phantom. 
              This will allow you to manage your donations securely.
            </p>
          </div>
          
          <div className="bg-white text-black rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">2. Choose a Charity</h2>
            <p>
              Browse through our list of verified charities. Each charity has a detailed profile showing their mission, 
              goals, and how your donation will help.
            </p>
          </div>
          
          <div className="bg-white text-black rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">3. Make a Donation</h2>
            <p>
              Enter the amount you wish to donate in SOL and confirm your transaction. Your donation will be processed 
              instantly, and you will receive a confirmation along with the transaction details.
            </p>
          </div>
          
          <div className="bg-white text-black rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">4. Track Your Impact</h2>
            <p>
              After your donation, you can track the impact of your contribution. Our platform provides updates 
              from the charities you support, ensuring you see how your donation is making a difference.
            </p>
          </div>
        </div>
      </div>
    </section>  )
}

export default Usage