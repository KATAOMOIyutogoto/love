// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Verifier.sol"; // ZKP用のVerifierコントラクト

contract LoveLetterVerifier {
    Verifier private verifier;

    constructor(address verifierAddress) {
        verifier = Verifier(verifierAddress);
    }

    function sendLoveLetter(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[1] memory input,
        string memory message
    ) public {
        require(verifier.verifyProof(a, b, c, input), "Invalid ZKP proof");
        // ラブレターを保存する処理（実装は省略）
    }
}
