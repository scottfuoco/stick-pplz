import { useState } from 'react';
import { Button } from '../components/Buttons/Button';
import Whitelist from '../lib/merkletree';

const WhitelistChecker = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  console.log();

  const validateWhitelist = () => {
    const results = Whitelist.contains(input);
    setResult(results);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-5 text-2xl">

      <input className="w-full max-w-2xl" type="text" onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => validateWhitelist()}>Check Whitelist</Button>

      {result === false
        && <h3 className="text-red-600">Damn you aint on the whitelist, dude</h3>}

      {result === true
        && <h3 className="text-green-600">Wow! you're on the whitelist, bro</h3>}
    </section>
  );
};
export { WhitelistChecker };
