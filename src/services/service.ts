import axios from "axios";
import { BASE_URL } from "./api";

export const transfer = async ({
  senderPrivateKey,
  receiverPublicKey,
  amount,
}: {
  senderPrivateKey: string;
  receiverPublicKey: string;
  amount: string;
}) => {
  const response = await axios.post(BASE_URL, {
    senderPrivateKey,
    receiverPublicKey,
    amount,
  });
  return response;
};
