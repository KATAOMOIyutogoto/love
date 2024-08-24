import React, { useState } from 'react';
import { ethers } from 'ethers';
import LoveLetterVerifierAbi from './LoveLetterVerifier.json';

function App() {
    const [message, setMessage] = useState('');
    const [verificationResult, setVerificationResult] = useState(null);

    const sendLoveLetter = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract('YOUR_LOVELETTER_VERIFIER_CONTRACT_ADDRESS', LoveLetterVerifierAbi, signer);

        // Proof and input data should be obtained from ZKP generation process
        const proof = { /* proof data */ };
        const input = [1]; // 1は女性を示すと仮定

        try {
            const tx = await contract.sendLoveLetter(proof.a, proof.b, proof.c, input, message);
            await tx.wait();
            setVerificationResult('Love letter sent successfully!');
        } catch (error) {
            console.error('Error sending love letter:', error);
            setVerificationResult('Failed to send love letter.');
        }
    };

    return (
        <div className="App">
            <h1>Love Letter App</h1>
            <textarea
                placeholder="Your Love Letter"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendLoveLetter}>Send Love Letter</button>
            {verificationResult && <p>{verificationResult}</p>}
        </div>
    );
}

export default App;
