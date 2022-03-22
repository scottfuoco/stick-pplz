import { usePublicContractData } from '../hooks/usePublicContractData';

export const ContractData = () => {
  const {
    data, error, isLoading,
  } = usePublicContractData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching contract data</div>;
  }

  return (
    <ul>
      <li>
        isPaused
        {' '}
        {data.isPaused ? 'True' : 'False'}
      </li>
      <li>
        Cost
        {' '}
        {data.cost }
      </li>
      <li>
        Max Number of Mints per wallet
        {' '}
        {data.maxMintAmountPerTx }
      </li>
      <li>
        Total Supply
        {' '}
        {data.totalSupply }
      </li>
      <li>
        Revealed
        {' '}
        {data.revealed ? 'True' : 'False'}
      </li>
      <li>
        Whitelist Mint
        {' '}
        {data.whitelistMintEnabled ? 'True' : 'False'}
      </li>

    </ul>
  );
};
