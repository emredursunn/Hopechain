// phantom.d.ts
interface PhantomProvider {
    isPhantom: boolean;
    connect: (options?: { onlyIfTrusted: boolean }) => Promise<{ publicKey: { toString: () => string } }>;
    publicKey: { toString: () => string };
    isConnected: boolean;
  }
  
  interface Window {
    phantom?: {
      solana?: PhantomProvider;
    };
  }
  