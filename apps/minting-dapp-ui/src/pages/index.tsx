import { useEffect, useState } from 'react';

import { getPublicVariables } from './services/contract/interact';

export default function Web() {
  const [publicVariables, setPublicVariables] = useState(null);

  useEffect(() => {
    async function fetchVariables() {
      setPublicVariables(await getPublicVariables());
    }
    fetchVariables();
  }, []);

  console.log({ publicVariables });
  return (
    <div>
      <h1 className="">MINTING DAPP WIP!</h1>
    </div>
  );
}
