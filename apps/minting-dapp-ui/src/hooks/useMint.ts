import { useMutation } from 'react-query';
import { mint } from '../contract/interact';

export function useMint() {
  return useMutation(({ amount, cost, account }) => mint({ amount, cost, account }), {

    onSettled: (data, error, cardId) => {
    },
    onError: async (err, cardId, context) => {
      console.log({ err });
      console.log('Error Minting');
    },
    onSuccess: async (err, cardId, context) => {
      console.log('successfully minted');
    },
  });
}
