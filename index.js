// 1. Declaração de variável global para armazenar a instância web3
let TuringContract;

// 2. Configuração do endereço do contrato e ABI
const Turing_Contract_Address = "0x0347d780AE193158e37D537f02F9AD25d2b7B48B";
const Turing_Contract_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "codename",
				"type": "string"
			}
		],
		"name": "balanceOfCodinome",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "codenameToAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "issueToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "codename",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

codinames = ["Andre", "Antonio", "Ratonilo", "eduardo", "Enzo", "Fernando", "Juliana", "Altoe", "Salgado", "Regata", "Luis", "Nicolas", "Rauta", "Silva", "Sophie", "Thiago", "Brito", "ulopesu", "Vinicius", "Bonella"]

// Creating variables for reusable dom elements

// main page
const votacaoSection = document.querySelector(".votacao");
const votarButton = document.querySelector("#votar");

const main_para_acabar = document.querySelector("#ir-acabar");
const main_para_doar = document.querySelector("#ir-doar");
main_para_acabar.style.display = "none";
main_para_doar.style.display = "none";
const main_para_tabela = document.querySelector("#ir-tabela");

// donate page
const doacao_de_tokens = document.querySelector(".doacao-de-tokens");
const voltar_da_doar = document.querySelector("#ir-votar");
const doarButton = document.querySelector("#doar");
const backBtn = document.querySelector(".back-btn");

// end page
const finalizar_section = document.querySelector(".finalizar-section");
const encerrarButton = document.querySelector("#acabar-votacao");
const backBtn2 = document.querySelector(".back-btn-2");

// tabela
const tabelaSection = document.querySelector(".table-section");
const backBtn3 = document.querySelector(".back-btn-3");
const botaoRecarregar = document.querySelector(".refresh-btn");

/* Prompt user to sign in to MetaMask */

const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    const signer = provider.getSigner(accounts[0]);
	const signer_address = signer["_address"]
	// CONFERIR PROF
	if (signer_address == "0x6701D0C23d51231E676698446E55F4936F5d99dF")
	{
		main_para_acabar.style.display = "block";
		main_para_doar.style.display = "block";
		document.querySelector(".observacao").style.display = "none";
	}

    TuringContract = new ethers.Contract(
      Turing_Contract_Address,
      Turing_Contract_ABI,
      signer
    );
  });
});


const ir_para_doacao = () =>
{
	doacao_de_tokens.style.display = "block";
	votacaoSection.style.display = "none";
}

main_para_doar.addEventListener("click", ir_para_doacao);

const ir_para_acabar = () =>
{
	finalizar_section.style.display = "block";
  	votacaoSection.style.display = "none";
}

main_para_acabar.addEventListener("click", ir_para_acabar);

const botao_voltar = () =>
{
	finalizar_section.style.display = "none";
	doacao_de_tokens.style.display = "none";
	tabelaSection.style.display = "none";
	votacaoSection.style.display = "block";
}

backBtn.addEventListener("click", botao_voltar);
backBtn2.addEventListener("click", botao_voltar);
backBtn3.addEventListener("click", botao_voltar);

// VOTACAO
const botao_votar = () => {
  // update button value
  votarButton.value = "Votando...";

  const codinome = document.querySelector("#codi-name");
  const turings = document.querySelector("#qtd-turings");

  // Getting values from the inputs
  CODINOME = codinome.value;
  TURINGS = String(parseFloat(turings.value)*10**16) + "00";
  TURINGS_UINT256 = ethers.BigNumber.from(TURINGS)

  TuringContract.vote(CODINOME, TURINGS_UINT256)
    .then(() => {
      // update button value
      votarButton.value = "Votado...";

      /* Reset form */
      codinome.value = "";
      turings.value = "";

      // update button value
      votarButton.value = "Votar";
    })
    .catch((err) => {
      // If error occurs, display error message
      votarButton.value = "Votar";
	  if (err.code == "UNPREDICTABLE_GAS_LIMIT")
	  {
		alert("Possíveis erros: Já votou nesse codinome || Esta votando em si mesmo || O valor ultrapassou o limite de 2 Turings || Seu endereço não esta na lista.");
	  }
	  else
      	alert("Error details :" + err.code);
    });
};
votarButton.addEventListener("click", botao_votar);

// PROF DOAR TOKENS
const botao_doar = () => {
	// update button value
	doarButton.value = "Doando...";
  
	const codinome = document.querySelector("#codi-name-doacao");
	const turings = document.querySelector("#doacao-turings");
  
	// Getting values from the inputs
	CODINOME = codinome.value;
	TURINGS = String(parseFloat(turings.value)*10**16) + "00";
	TURINGS_UINT256 = ethers.BigNumber.from(TURINGS)
  
	TuringContract.profDonate(CODINOME, TURINGS_UINT256)
	  .then(() => {
		// update button value
		doarButton.value = "Doado...";
  
		/* Reset form */
		codinome.value = "";
		turings.value = "";
  
		// update button value
		doarButton.value = "Doar";
	  })
	  .catch((err) => {
		// If error occurs, display error message
		doarButton.value = "Doar";

		alert("Error issueToken details :" + err.code);
	  });
  };

doarButton.addEventListener("click", botao_doar);

// ENCERRAR VOTACAO
const botao_encerrar = () => {
	TuringContract.endVoting()
	  .then(() => {
		// update button value
		doarButton.value = "Encerrando...";
  
		// update button value
		doarButton.value = "Encerrar";
	  })
	  .catch((err) => {
		// If error occurs, display error message
		doarButton.value = "Encerrar";

		alert("Error issueToken details :" + err.code);
	  });
  };

encerrarButton.addEventListener("click", botao_encerrar);

// TABELA DE RESULTADO
const getTable = async () => { 
	tabelaSection.style.display = "block";
  	votacaoSection.style.display = "none";
	botaoRecarregar.innerHTML = "Carregando"

	for (let index = 0; index < codinames.length; index++) {
		const element = codinames[index];

		const turings = await TuringContract.balanceOfCodinome(element);
		
		document.querySelector("#detail-turings-".concat(index)).innerHTML  = turings / 10**18;
	}
	botaoRecarregar.innerHTML = "Recarregar"
};

main_para_tabela.addEventListener("click", getTable);
botaoRecarregar.addEventListener("click", getTable);