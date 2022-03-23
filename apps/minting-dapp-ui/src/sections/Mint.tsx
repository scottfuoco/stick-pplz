import { ethers } from 'ethers';
import { ReactElement, useState } from 'react';
import { MintButton } from '../components/Buttons/MintButton';
import { usePublicContractData } from '../hooks/usePublicContractData';

const MintWrapper = ({ children }: {children: ReactElement}) => (
  <section className="flex items-center justify-center w-full bg-blue-600 rounded-3xl md:max-w-3xl">
    {children}
  </section>
);

type MintButtonProps = {
  onClick: () => void;
  children: ReactElement;
}

const MaxMintButton = ({ children, onClick }: MintButtonProps) => (
  <button
    className="px-4 py-2 text-4xl bg-gray-400 rounded-xl hover:bg-green-400"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

const Mint = () => {
  const { data, error, isLoading } = usePublicContractData();
  const [mintAmount, setMintAmount] = useState(1);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching contract data :'(</div>;
  }

  const {
    isPaused, cost, maxMintAmountPerTx, totalSupply, maxSupply, revealed, whitelistMintEnabled,
  } = data;

  const costStateMap = {
    5000000000000000: 'Whitelist Sale!',
    7000000000000000: 'Early Support Sale!',
    9000000000000000: 'Public Sale!',
  };

  if (isPaused) {
    return (
      <MintWrapper>
        <p>
          The contract is currently paused!
        </p>
      </MintWrapper>
    );
  }

  const incrementMintAmount = () => {
    if (mintAmount >= maxMintAmountPerTx) return;
    setMintAmount((curr) => curr + 1);
  };

  const decrementMintAmount = () => {
    if (mintAmount <= 1) return;
    setMintAmount((curr) => curr - 1);
  };

  return (
    <MintWrapper>
      <div className="grid justify-center grid-cols-2 p-4 rounded-lg">

        <div className="grid place-items-center">
          <img className="rounded-xl" src="/images/stickguy-rare.png" />
          <h3>{`Supply ${totalSupply} / ${maxSupply}`}</h3>
        </div>

        <div className="grid justify-center">
          <div>
            <h2 className="text-4xl">{costStateMap[cost]}</h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-8 mb-4">
              <MaxMintButton onClick={incrementMintAmount}>+</MaxMintButton>
              {mintAmount}
              <MaxMintButton onClick={decrementMintAmount}>-</MaxMintButton>
            </div>
            <h3>{`Max Mint: ${maxMintAmountPerTx}`}</h3>
          </div>

          <div className="flex items-center justify-between mb-4 border-gray-400 border-y">
            <span>Total:</span>
            <span>{`${ethers.utils.formatEther((cost * mintAmount).toString())} + Gas`}</span>
          </div>

          <div className="w-full">
            <div className="grid">
              <MintButton amount={mintAmount} />
            </div>
          </div>
        </div>
      </div>
    </MintWrapper>
  );
};

export { Mint };
