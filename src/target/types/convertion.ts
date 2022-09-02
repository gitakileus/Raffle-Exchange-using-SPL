export type Convertion = {
  "version": "0.1.0",
  "name": "convertion",
  "instructions": [
    {
      "name": "initializeVault",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPoolYakuAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "yakuMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "vaultBump",
          "type": "u8"
        }
      ],
      "returns": null
    },
    {
      "name": "convert",
      "accounts": [
        {
          "name": "claimer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "claimerYakuAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cosmicMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimerCosmicAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "yakuMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPoolYakuAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cosmicAmount",
          "type": "u64"
        }
      ],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "vault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vaultBump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};

export const IDL: Convertion = {
  "version": "0.1.0",
  "name": "convertion",
  "instructions": [
    {
      "name": "initializeVault",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPoolYakuAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "yakuMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "vaultBump",
          "type": "u8"
        }
      ],
      "returns": null
    },
    {
      "name": "convert",
      "accounts": [
        {
          "name": "claimer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "claimerYakuAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cosmicMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimerCosmicAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "yakuMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultPoolYakuAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cosmicAmount",
          "type": "u64"
        }
      ],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "vault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vaultBump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
