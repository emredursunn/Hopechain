import { Wallet } from 'lucide-react';
import * as buffer from "buffer";
import { useState, useEffect } from 'react';
import { Charity } from '../types/Charity';
import { Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js" 
import toast from 'react-hot-toast';

type Props = {
  charities: Charity[];
};

window.Buffer = buffer.Buffer;
const connection = new Connection("https://api.devnet.solana.com");

const DonationForm = ({ charities }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const [selectedCharity, setSelectedCharity] = useState('');
  const [provider, setProvider] = useState<any>(null); // Wallet provider
  const MIN_DONATION = 0.001;

  useEffect(() => {
    const checkWalletConnection = async () => {
      if ('phantom' in window) {
        const solana = window.phantom?.solana;
        if (solana && solana.isPhantom) {
          setProvider(solana);
          try {
            const response = await solana.connect({ onlyIfTrusted: true });
            setIsConnected(true);
            console.log('Connected with Public Key:', response.publicKey.toString());
          } catch (err) {
            console.error('Wallet connection error:', err);
          }
        }
      }
    };

    checkWalletConnection();
  }, []);

  const handleConnect = async () => {
    if (!provider) {
      toast.error("Please install Phantom Wallet.");
      window.open("https://phantom.app/","_blank")
      return;
    }

    try {
      const response = await provider.connect();
      setIsConnected(true);
      console.log('Connected with Public Key:', response.publicKey.toString());
    } catch (err) {
      console.error('Connection error:', err);
    }
  };

  const handleDonate = async (e:any) => {
    e.preventDefault();
    
    if (!provider) {
      toast.error("Please connect your wallet.");
      return;
    }

    else if(donationAmount < MIN_DONATION) {
      toast.error(`Please enter amount bigger than ${MIN_DONATION}`)
      return;
    }
    const receiverPublicKey = "GZLYRD626ep3yt6o9mK712xAA87Mgv3evCMdTMU8VxMx";
    const amountInLamports = Math.floor(donationAmount * LAMPORTS_PER_SOL);

    // Create a transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: provider.publicKey,
        toPubkey: new PublicKey(receiverPublicKey),
        lamports: amountInLamports,
      })
    );

    try {
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = provider.publicKey;

      // Sign and send the transaction
      const signature = await provider.signAndSendTransaction(transaction);
      console.log("Transaction sent with signature:", signature);
      
      toast.success(`Donated ${donationAmount} SOL to ${selectedCharity}`);
      setDonationAmount(0);
      setSelectedCharity('');

    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Please try again.");
    }
  };

  return (
    <section className="max-w-lg mx-auto my-8 py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg border shadow-lg shadow-black text-white">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Make a Donation
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl">
              Your SOL donation can make a real difference. Choose a charity and amount to get started.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-6">
            <form onSubmit={handleDonate} className="space-y-4">
              <select
                className="w-full px-4 py-2 rounded-md bg-white text-black"
                value={selectedCharity}
                onChange={(opt) => setSelectedCharity(opt.target.value)}
                title="Select a charity"
                required
              >
                <option value="" disabled>Select a charity</option>
                {charities.map((charity) => (
                  <option key={charity.id} value={charity.name}>{charity.name}</option>
                ))}
              </select>
              <input
                type="number"
                className="w-full px-4 py-2 rounded-md bg-white text-black"
                placeholder="Amount in SOL"
                value={donationAmount}
                onChange={(e) => setDonationAmount(parseFloat(e.target.value))}
                required
                min={MIN_DONATION}
                step="0.001" // This will allow increments of 0.001
              />
              {isConnected ? (
                <button className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 font-bold hover:text-white shadow-sm shadow-black hover:translate-y-1 transition-all rounded-md" type="submit">
                  Donate
                </button>
              ) : (
                <button type="button" className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md flex items-center justify-center" onClick={handleConnect}>
                  <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
