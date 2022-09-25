export const maybeFixMetamaskConnection = async () => {
    const waitSeconds = 2;
    if (typeof window !== "undefined" && typeof window.ethereum !== 'undefined' &&  !window.ethereum._state.initialized) {
        while(!ethereum._state.initialized) {
            await new Promise(resolve => setTimeout(resolve, waitSeconds * 1000)); 
            window.location.reload();
        }
    }
}