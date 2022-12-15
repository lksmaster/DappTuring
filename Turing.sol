pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
 
contract Turing is ERC20 {
   //address owner = msg.sender;
   //address public professora = 0xA5095296F7fF9Bdb01c22e3E0aC974C8963378ad;
   address public professora = 0x6701D0C23d51231E676698446E55F4936F5d99dF;
   bool[20][20] public jaVotou;
   bool votacaoFinalizada = false;
 
   modifier onlyProf() {
       // acesso apenas da professora
       require(msg.sender == professora);
       _;
   }
   modifier podeVotar(string memory nome, uint256 amount) {
       // condicoes para poder votar
       require(
           jaVotou[id[msg.sender]][id[endereco[nome]]] == false && // nao votou nesse nome ainda
               amount <= 2 * 10**18 && // limite de 2 turings
               msg.sender != endereco[nome] && // nao esta votando em si mesmo
               votacaoFinalizada == false && // a votacao ainda esta aberta
               msg.sender != professora); // a professora nao pode votar
               // enderecos fora da lista conseguem pagar a transacao, porem ela é revertida.
       _;
   }
   mapping(string => address) private endereco;
   mapping(address => uint256) private id;
 
   constructor() ERC20("Turing", "TUR") {
       endereco["Andre"] = 0xD07318971e2C15b4f8d3d28A0AEF8F16B9D8EAb6;
       endereco["Antonio"] = 0x127B963B9918261Ef713cB7950c4AD16d4Fe18c6;
       endereco["Ratonilo"] = 0x5d84D451296908aFA110e6B37b64B1605658283f;
       endereco["eduardo"] = 0x500E357176eE9D56c336e0DC090717a5B1119cC2;
       endereco["Enzo"] = 0x5217A9963846a4fD62d35BB7d58eAB2dF9D9CBb8;
       endereco["Fernando"] = 0xFED450e1300CEe0f69b1F01FA85140646E596567;
       endereco["Juliana"] = 0xFec23E4c9540bfA6BBE39c4728652F2def99bc1e;
       endereco["Altoe"] = 0x6701D0C23d51231E676698446E55F4936F5d99dF;
       endereco["Salgado"] = 0x8321730F4D59c01f5739f1684ABa85f8262f8980;
       endereco["Regata"] = 0x4A35eFD10c4b467508C35f8C309Ebc34ae1e129a;
       endereco["Luis"] = 0xDD551702Dc580B7fDa2ddB7a1Ca63d29E8CDCf33;
       endereco["Nicolas"] = 0x01fe9DdD4916019beC6268724189B2EED8C2D49a;
       endereco["Rauta"] = 0x726150C568f3C7f1BB3C47fd1A224a5C3F706BB1;
       endereco["Silva"] = 0xCAFE34A88dCac60a48e64107A44D3d8651448cd9;
       endereco["Sophie"] = 0xDfb0B8b7530a6444c73bFAda4A2ee3e482dCB1E3;
       endereco["Thiago"] = 0xBeb89bd95dD9624dEd83b12dB782EAE30805ef97;
       endereco["Brito"] = 0xEe4768Af8caEeB042Da5205fcd66fdEBa0F3FD4f;
       endereco["ulopesu"] = 0x89e66f9b31DAd708b4c5B78EF9097b1cf429c8ee;
       endereco["Vinicius"] = 0x48cd1D1478eBD643dba50FB3e99030BE4F84d468;
       endereco["Bonella"] = 0xFADAf046e6Acd9E276940C728f6B3Ac1A043054c;
 
       id[0xD07318971e2C15b4f8d3d28A0AEF8F16B9D8EAb6] = 0;
       id[0x127B963B9918261Ef713cB7950c4AD16d4Fe18c6] = 1;
       id[0x5d84D451296908aFA110e6B37b64B1605658283f] = 2;
       id[0x500E357176eE9D56c336e0DC090717a5B1119cC2] = 3;
       id[0x5217A9963846a4fD62d35BB7d58eAB2dF9D9CBb8] = 4;
       id[0xFED450e1300CEe0f69b1F01FA85140646E596567] = 5;
       id[0xFec23E4c9540bfA6BBE39c4728652F2def99bc1e] = 6;
       id[0x6701D0C23d51231E676698446E55F4936F5d99dF] = 7;
       id[0x8321730F4D59c01f5739f1684ABa85f8262f8980] = 8;
       id[0x4A35eFD10c4b467508C35f8C309Ebc34ae1e129a] = 9;
       id[0xDD551702Dc580B7fDa2ddB7a1Ca63d29E8CDCf33] = 10;
       id[0x01fe9DdD4916019beC6268724189B2EED8C2D49a] = 11;
       id[0x726150C568f3C7f1BB3C47fd1A224a5C3F706BB1] = 12;
       id[0xCAFE34A88dCac60a48e64107A44D3d8651448cd9] = 13;
       id[0xDfb0B8b7530a6444c73bFAda4A2ee3e482dCB1E3] = 14;
       id[0xBeb89bd95dD9624dEd83b12dB782EAE30805ef97] = 15;
       id[0xEe4768Af8caEeB042Da5205fcd66fdEBa0F3FD4f] = 16;
       id[0x89e66f9b31DAd708b4c5B78EF9097b1cf429c8ee] = 17;
       id[0x48cd1D1478eBD643dba50FB3e99030BE4F84d468] = 18;
       id[0xFADAf046e6Acd9E276940C728f6B3Ac1A043054c] = 19;
   }
 
   function issueToken(address receiver, uint256 amount) public onlyProf {
       _mint(receiver, amount);
   }
 
   function vote(string memory nome, uint256 amount) public podeVotar(nome, amount)
   {
       _mint(msg.sender, 2 * 10**17); // 0,2 Turings para quem esta votando
       _mint(endereco[nome], amount);
       jaVotou[id[msg.sender]][id[endereco[nome]]] = true;
   }
 
   function endVoting() public onlyProf {
       votacaoFinalizada = true; // fim da votacao
   }
 
   function balanceOfCodinome(string memory nome) public view returns (uint256){
       return balanceOf(endereco[nome]);
   }

   function profDonate(string memory nome, uint256 amount) public onlyProf{
       issueToken(endereco[nome], amount);
   }
}