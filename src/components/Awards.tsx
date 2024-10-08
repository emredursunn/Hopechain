import { useEffect, useState } from "react";
import { getUserByPublicKey } from "../services/service";
import { useUserStore } from "../store/userStore";
import { User } from "../types/User";
import nft1 from "../assets/orman.jpeg";
import nft2 from "../assets/mevsim.png";
import nft3 from "../assets/kalp.jpeg";
import nft4 from "../assets/madlya.png";
import nft5 from "../assets/karakter.png";
import { useModalStore } from "../store/modalStore";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const Awards = () => {
  const { publicKey } = useUserStore();
  const { isModalOpen, closeModal } = useModalStore();
  const [user, setUser] = useState<User | null>(null);

  const nftImages = [
    { src: nft1, threshold: 50 },
    { src: nft2, threshold: 100 },
    { src: nft3, threshold: 150 },
    { src: nft4, threshold: 200 },
    { src: nft5, threshold: 250 },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      if (publicKey) {
        try {
          const response = await getUserByPublicKey(publicKey);
          if (response) {
            setUser(response);
            console.log(response);
          }
        } catch (error) {
          toast.error("Failed to fetch user data");
        }
      } else {
        toast.error("You have to connect your phantom wallet first");
      }
    };

    if (isModalOpen) {
      fetchUser();
    }
  }, [publicKey, isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      {isModalOpen && user && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
          <motion.div
            className="bg-white rounded-lg p-4 md:p-8 shadow-lg relative max-w-md mx-auto w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black bg-white rounded-full p-1 md:p-2"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">Your Awards</h2>
            <div className="grid grid-cols-2 gap-4">
              {nftImages.map((nft, index) => (
                <div key={index} className="relative">
                  <img
                    src={nft.src}
                    alt={`NFT ${index + 1}`}
                    className={`w-full h-full object-cover rounded-lg ${
                      user && user.totalDonation < nft.threshold
                        ? "blur-sm"
                        : ""
                    }`}
                  />
                  {user && user.totalDonation < nft.threshold && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white text-center">
                      Donate {nft.threshold - user.totalDonation} more SOL to
                      unlock
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Awards;
