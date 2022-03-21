// TODO: implement a signature validation backend
export const signInMessage = ({ nonce, wallet }: {nonce: string, wallet: string}) => `
Welcome to Stick Pplz NTF.  Signing this message will sign you into our system!

You wallet address is:
${wallet}

Your sign in nonce is:
${nonce}
`;

export const login = async () => {

};
