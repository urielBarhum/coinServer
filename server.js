import express from 'express';
const app = express();
const port = 3000; // You can change the port as needed
app.use(express.json());
export const coins = [
    {
        id: 'bitcoin',
        name: 'Bitcoin',
        price: 45000,
        low: 44000,
        high: 46000,
        openMarket: 44000,
        closeMarket: 45500,
        trending: true,
        details: 'Bitcoin is the first cryptocurrency and has the highest market capitalization. It was created by an unknown person or group of people using the pseudonym Satoshi Nakamoto and was released as open-source software in 2009. Bitcoin is often referred to as digital gold and is widely used as a store of value.'
    },
    {
        id: 'ethereum',
        name: 'Ethereum',
        price: 3300,
        low: 3200,
        high: 3400,
        openMarket: 3250,
        closeMarket: 3350,
        trending: true,
        details: 'Ethereum is known for its smart contract capabilities. It was proposed by Vitalik Buterin in late 2013, and development was crowdfunded in 2014. Ethereum allows developers to build decentralized applications (DApps) on its blockchain.'
    },
    {
        id: 'ripple',
        name: 'Ripple',
        price: 1.2,
        low: 1.1,
        high: 1.3,
        openMarket: 1.15,
        closeMarket: 1.25,
        trending: true,
        details: 'Ripple, or XRP, is known for its focus on facilitating fast and low-cost cross-border payments. It aims to enable secure and instant global transactions.'
    },
    {
        id: 'stellar',
        name: 'Stellar',
        price: 0.35,
        low: 0.34,
        high: 0.36,
        openMarket: 0.34,
        closeMarket: 0.355,
        trending: true,
        details: 'Stellar is designed to connect banks, payment systems, and individuals, making it easier to move money quickly, reliably, and at almost no cost.'
    },
    {
        id: 'cardano',
        name: 'Cardano',
        price: 2.2,
        low: 2.15,
        high: 2.25,
        openMarket: 2.18,
        closeMarket: 2.21,
        trending: true,
        details: 'Cardano is a proof-of-stake blockchain platform that aims to provide a more secure and scalable infrastructure for the development of smart contracts and decentralized applications.'
    },
    {
        id: 'litecoin',
        name: 'Litecoin',
        price: 160,
        low: 155,
        high: 165,
        openMarket: 162,
        closeMarket: 163,
        trending: true,
        details: 'Litecoin is often referred to as the silver to Bitcoin\'s gold. It offers faster transaction confirmation times and improved storage efficiency compared to Bitcoin.'
    },
    {
        id: 'polkadot',
        name: 'Polkadot',
        price: 30,
        low: 29,
        high: 31,
        openMarket: 29.5,
        closeMarket: 30.5,
        trending: true,
        details: 'Polkadot is a multi-chain network that aims to enable different blockchains to interoperate and share information, allowing for more scalable and flexible applications.'
    },
    {
        id: 'dogecoin',
        name: 'Dogecoin',
        price: 0.25,
        low: 0.24,
        high: 0.26,
        openMarket: 0.24,
        closeMarket: 0.255,
        trending: true,
        details: 'Dogecoin started as a meme but has gained popularity as a cryptocurrency for tipping and small transactions. It features the Shiba Inu dog from the "Doge" meme as its logo.'
    },
    {
        id: 'chainlink',
        name: 'Chainlink',
        price: 27,
        low: 26.5,
        high: 27.5,
        openMarket: 26.8,
        closeMarket: 27.2,
        trending: true,
        details: 'Chainlink provides tamper-proof data for complex smart contracts on any blockchain. It enables smart contracts to securely interact with external data sources, APIs, and payment systems.'
    },
    {
        id: 'binancecoin',
        name: 'Binance Coin',
        price: 400,
        low: 395,
        high: 405,
        openMarket: 398,
        closeMarket: 402,
        trending: true,
        details: 'Binance Coin (BNB) is the native cryptocurrency of the Binance exchange. It can be used to pay for trading fees on the platform and for various other purposes within the Binance ecosystem.'
    },
    {
        id: 'tezos',
        name: 'Tezos',
        price: 4.5,
        low: 4.4,
        high: 4.6,
        openMarket: 4.42,
        closeMarket: 4.55,
        trending: true,
        details: 'Tezos is a blockchain platform that can evolve by upgrading itself. It focuses on security, scalability, and on-chain governance, allowing token holders to vote on network upgrades.'
    },
    {
        id: 'monero',
        name: 'Monero',
        price: 230,
        low: 225,
        high: 235,
        openMarket: 226,
        closeMarket: 232,
        trending: true,
        details: 'Monero is a privacy-focused cryptocurrency that provides untraceable and private transactions. It is designed to offer anonymity and security to its users.'
    },
    {
        id: 'eos',
        name: 'EOS',
        price: 5.8,
        low: 5.7,
        high: 5.9,
        openMarket: 5.75,
        closeMarket: 5.85,
        trending: true,
        details: 'EOS is a blockchain platform that aims to provide fast, scalable, and user-friendly decentralized applications and smart contracts.'
    },
    {
        id: 'avalanche',
        name: 'Avalanche',
        price: 60,
        low: 59,
        high: 61,
        openMarket: 59.5,
        closeMarket: 60.5,
        trending: true,
        details: 'Avalanche is a highly scalable blockchain platform that enables the creation of custom blockchain networks and decentralized applications.'
    },
    {
        id: 'theta',
        name: 'Theta',
        price: 6,
        low: 5.8,
        high: 6.2,
        openMarket: 5.85,
        closeMarket: 6.1,
        trending: true,
        details: 'Theta is a decentralized video delivery network that aims to improve video streaming quality and reduce the cost of delivering video content.'
    },
    {
        id: 'vechain',
        name: 'VeChain',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.097,
        closeMarket: 0.102,
        trending: true,
        details: 'VeChain focuses on supply chain management and uses blockchain technology to enhance transparency and traceability in various industries.'
    },
    {
        id: 'tron',
        name: 'TRON',
        price: 0.06,
        low: 0.055,
        high: 0.065,
        openMarket: 0.058,
        closeMarket: 0.062,
        trending: true,
        details: 'TRON is a blockchain platform for decentralized applications and entertainment content. It aims to create a decentralized internet.'
    },
    {
        id: 'neo',
        name: 'NEO',
        price: 40,
        low: 39,
        high: 41,
        openMarket: 39.5,
        closeMarket: 40.5,
        trending: true,
        details: 'NEO, often referred to as "Ethereum of China," is a blockchain platform that supports smart contracts and digital assets. It aims to digitize assets and automate the management of digital assets using smart contracts.'
    },
    {
        id: 'cosmos',
        name: 'Cosmos',
        price: 20,
        low: 19,
        high: 21,
        openMarket: 19.5,
        closeMarket: 20.5,
        trending: true,
        details: 'Cosmos is a network of interconnected blockchains that aims to enable seamless communication and interaction between different blockchain networks.'
    },
    {
        id: 'dash',
        name: 'Dash',
        price: 150,
        low: 145,
        high: 155,
        openMarket: 146,
        closeMarket: 152,
        trending: true,
        details: 'Dash focuses on fast and low-cost transactions, making it suitable for everyday payments. It offers optional privacy features for users.'
    },
    {
        id: 'waves',
        name: 'Waves',
        price: 15,
        low: 14.5,
        high: 15.5,
        openMarket: 14.8,
        closeMarket: 15.2,
        trending: true,
        details: 'Waves is a blockchain platform that allows users to create and launch custom tokens and decentralized applications (DApps) quickly.'
    },
    {
        id: 'zilliqa',
        name: 'Zilliqa',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.097,
        closeMarket: 0.101,
        trending: true,
        details: 'Zilliqa is a blockchain platform that focuses on scalability and security, aiming to provide high-performance and secure smart contracts.'
    },
    {
        id: 'ontology',
        name: 'Ontology',
        price: 1.5,
        low: 1.45,
        high: 1.55,
        openMarket: 1.48,
        closeMarket: 1.53,
        trending: true,
        details: 'Ontology is a blockchain platform that aims to provide a secure and decentralized way for businesses to integrate blockchain technology into their operations.'
    },
    {
        id: 'omisego',
        name: 'OmiseGO',
        price: 3,
        low: 2.95,
        high: 3.05,
        openMarket: 2.98,
        closeMarket: 3.02,
        trending: true,
        details: 'OmiseGO is a blockchain platform that focuses on enabling financial services, including remittances and digital payments, across borders.'
    },
    {
        id: 'digibyte',
        name: 'DigiByte',
        price: 0.05,
        low: 0.048,
        high: 0.052,
        openMarket: 0.049,
        closeMarket: 0.051,
        trending: true,
        details: 'DigiByte is a decentralized blockchain and cryptocurrency known for its security and fast transaction speeds. It aims to provide a secure and efficient means of value transfer.'
    },
    {
        id: 'bytecoin',
        name: 'Bytecoin',
        price: 0.002,
        low: 0.0019,
        high: 0.0021,
        openMarket: 0.00195,
        closeMarket: 0.00205,
        trending: true,
        details: 'Bytecoin is one of the earliest privacy-focused cryptocurrencies. It uses advanced cryptographic techniques to provide enhanced privacy for its users.'
    },
    {
        id: 'verge',
        name: 'Verge',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'Verge focuses on privacy and anonymity in transactions. It offers multiple anonymity-centric features to protect user privacy.'
    },
    {
        id: 'siacoin',
        name: 'Siacoin',
        price: 0.005,
        low: 0.0048,
        high: 0.0052,
        openMarket: 0.00485,
        closeMarket: 0.00515,
        trending: true,
        details: 'Siacoin is a decentralized storage platform that allows users to rent and lease storage space on the network. It aims to provide a more efficient and cost-effective storage solution compared to traditional cloud storage providers.'
    },
    {
        id: 'icon',
        name: 'ICON',
        price: 1,
        low: 0.95,
        high: 1.05,
        openMarket: 0.97,
        closeMarket: 1.03,
        trending: true,
        details: 'ICON is a blockchain platform that aims to connect various blockchain networks and allow them to interact with one another. It seeks to create a decentralized ecosystem.'
    },
    {
        id: 'augur',
        name: 'Augur',
        price: 30,
        low: 29.5,
        high: 30.5,
        openMarket: 29.8,
        closeMarket: 30.2,
        trending: true,
        details: 'Augur is a decentralized prediction market platform that enables users to create and participate in prediction markets on various topics.'
    },
    {
        id: 'kybernetwork',
        name: 'Kyber Network',
        price: 2,
        low: 1.95,
        high: 2.05,
        openMarket: 1.98,
        closeMarket: 2.02,
        trending: true,
        details: 'Kyber Network is a decentralized liquidity protocol that allows users to swap tokens instantly and without the need for an order book.'
    },
    {
        id: 'golem',
        name: 'Golem',
        price: 0.2,
        low: 0.195,
        high: 0.205,
        openMarket: 0.198,
        closeMarket: 0.202,
        trending: true,
        details: 'Golem is a decentralized computing network that enables users to rent their computer power to others. It aims to create a global, open-source, and decentralized supercomputer.'
    },
    {
        id: 'aave',
        name: 'Aave',
        price: 300,
        low: 295,
        high: 305,
        openMarket: 298,
        closeMarket: 302,
        trending: true,
        details: 'Aave is a decentralized lending platform that allows users to lend and borrow a wide range of cryptocurrencies. It operates on the Ethereum blockchain.'
    },
    {
        id: 'decred',
        name: 'Decred',
        price: 60,
        low: 59.5,
        high: 60.5,
        openMarket: 59.8,
        closeMarket: 60.2,
        trending: true,
        details: 'Decred is a community-driven cryptocurrency with a strong emphasis on governance, security, and sustainability. It features a unique hybrid consensus mechanism.'
    },
    {
        id: 'loopring',
        name: 'Loopring',
        price: 0.3,
        low: 0.295,
        high: 0.305,
        openMarket: 0.298,
        closeMarket: 0.302,
        trending: true,
        details: 'Loopring is a decentralized exchange protocol that enables the creation of non-custodial and orderbook-based exchanges.'
    },
    {
        id: 'funfair',
        name: 'FunFair',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'FunFair is a blockchain-based platform that aims to provide fair and transparent online casino gaming. It uses smart contracts to ensure fairness.'
    },
    {
        id: 'powerledger',
        name: 'Power Ledger',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Power Ledger is a blockchain platform that focuses on decentralized energy trading. It allows users to buy and sell excess renewable energy.'
    },
    {
        id: 'civic',
        name: 'Civic',
        price: 0.2,
        low: 0.195,
        high: 0.205,
        openMarket: 0.198,
        closeMarket: 0.202,
        trending: true,
        details: 'Civic is a blockchain-based identity verification platform that aims to provide secure and private identity verification services.'
    },
    {
        id: 'maidsafecoin',
        name: 'MaidSafeCoin',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.098,
        closeMarket: 0.102,
        trending: true,
        details: 'MaidSafeCoin is the native cryptocurrency of the MaidSafe network, which aims to provide a secure and decentralized data storage and communication platform.'
    },
    {
        id: 'nem',
        name: 'NEM',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.098,
        closeMarket: 0.102,
        trending: true,
        details: 'NEM is a blockchain platform that aims to provide secure and scalable solutions for enterprises and businesses.'
    },
    {
        id: 'factom',
        name: 'Factom',
        price: 10,
        low: 9.5,
        high: 10.5,
        openMarket: 9.8,
        closeMarket: 10.2,
        trending: true,
        details: 'Factom is a blockchain-based data integrity platform that aims to provide secure and tamper-proof record-keeping solutions for businesses.'
    },
    {
        id: 'zcoin',
        name: 'Zcoin',
        price: 5,
        low: 4.95,
        high: 5.05,
        openMarket: 4.98,
        closeMarket: 5.02,
        trending: true,
        details: 'Zcoin is a privacy-focused cryptocurrency that uses zero-knowledge proofs to provide anonymity and fungibility for its users.'
    },
    {
        id: 'aeternity',
        name: 'Aeternity',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Aeternity is a blockchain platform that focuses on scalability, efficiency, and state channels for faster and cheaper transactions and smart contracts.'
    },
    {
        id: 'syscoin',
        name: 'Syscoin',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.098,
        closeMarket: 0.102,
        trending: true,
        details: 'Syscoin is a blockchain platform that enables businesses to create and launch custom tokens and digital assets on its network.'
    },
    {
        id: 'dent',
        name: 'Dent',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'Dent is a blockchain-based platform that focuses on mobile data sharing and selling. It aims to create a global marketplace for mobile data.'
    },
    {
        id: 'reddcoin',
        name: 'Reddcoin',
        price: 0.001,
        low: 0.0009,
        high: 0.0011,
        openMarket: 0.00095,
        closeMarket: 0.00105,
        trending: true,
        details: 'Reddcoin is a social cryptocurrency that aims to enable seamless digital tipping and microtransactions on social media platforms.'
    },
    {
        id: 'kin',
        name: 'Kin',
        price: 0.0001,
        low: 0.00009,
        high: 0.00011,
        openMarket: 0.000095,
        closeMarket: 0.000105,
        trending: true,
        details: 'Kin is a cryptocurrency designed for digital services and apps, with a focus on providing incentives for content creators and users.'
    },
    {
        id: 'bytom',
        name: 'Bytom',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.098,
        closeMarket: 0.102,
        trending: true,
        details: 'Bytom is a blockchain platform that aims to bridge the digital and physical worlds by allowing assets to be represented as tokens on the blockchain.'
    },
    {
        id: 'elastos',
        name: 'Elastos',
        price: 3,
        low: 2.95,
        high: 3.05,
        openMarket: 2.98,
        closeMarket: 3.02,
        trending: true,
        details: 'Elastos is a blockchain platform that focuses on providing a secure and decentralized internet infrastructure.'
    },
    {
        id: 'iost',
        name: 'IOST',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'IOST is a blockchain platform that aims to provide scalable and secure infrastructure for smart contracts and DApps.'
    },
    {
        id: 'zencash',
        name: 'Horizen',
        price: 20,
        low: 19.5,
        high: 20.5,
        openMarket: 19.8,
        closeMarket: 20.2,
        trending: true,
        details: 'Horizen, formerly known as ZenCash, is a privacy-focused cryptocurrency and blockchain platform that aims to provide enhanced privacy and security features.'
    },
    {
        id: 'nexus',
        name: 'Nexus',
        price: 1,
        low: 0.95,
        high: 1.05,
        openMarket: 0.97,
        closeMarket: 1.03,
        trending: true,
        details: 'Nexus is a blockchain platform that focuses on improving scalability and security for a wide range of applications, including decentralized finance (DeFi).'
    },
    {
        id: 'nxt',
        name: 'Nxt',
        price: 0.05,
        low: 0.048,
        high: 0.052,
        openMarket: 0.049,
        closeMarket: 0.051,
        trending: true,
        details: 'Nxt is a blockchain platform that allows users to create their own custom blockchain applications and tokens.'
    },
    {
        id: 'ark',
        name: 'Ark',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Ark is a blockchain platform that aims to provide easy access to blockchain technology for developers and businesses.'
    },
    {
        id: 'groestlcoin',
        name: 'Groestlcoin',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Groestlcoin is a cryptocurrency that focuses on fast and low-cost transactions, with a strong emphasis on privacy.'
    },
    {
        id: 'pivx',
        name: 'PIVX',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'PIVX is a privacy-focused cryptocurrency that uses a combination of technologies to provide enhanced privacy and security for its users.'
    },
    {
        id: 'dentacoin',
        name: 'Dentacoin',
        price: 0.0001,
        low: 0.00009,
        high: 0.00011,
        openMarket: 0.000095,
        closeMarket: 0.000105,
        trending: true,
        details: 'Dentacoin is a blockchain platform that focuses on improving dental healthcare through blockchain technology and incentivizing dental care.'
    },
    {
        id: 'stakenet',
        name: 'Stakenet',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Stakenet is a blockchain platform that offers a wide range of services, including staking, masternodes, and decentralized applications.'
    },
    {
        id: 'peercoin',
        name: 'Peercoin',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Peercoin is a blockchain platform that aims to provide energy-efficient and environmentally friendly cryptocurrency solutions.'
    },
    {
        id: 'electroneum',
        name: 'Electroneum',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'Electroneum is a cryptocurrency designed for mobile usage, with a focus on providing easy access to digital payments.'
    },
    {
        id: 'cloakcoin',
        name: 'CloakCoin',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'CloakCoin is a privacy-focused cryptocurrency that uses advanced encryption techniques to provide enhanced privacy and anonymity.'
    },
    {
        id: 'emercoin',
        name: 'Emercoin',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Emercoin is a blockchain platform that offers a range of services, including digital identities, secure storage, and decentralized DNS.'
    },
    {
        id: 'aion',
        name: 'Aion',
        price: 0.2,
        low: 0.195,
        high: 0.205,
        openMarket: 0.198,
        closeMarket: 0.202,
        trending: true,
        details: 'Aion is a blockchain platform that focuses on bridging different blockchain networks and allowing them to communicate and share information.'
    },
    {
        id: 'wax',
        name: 'WAX',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.098,
        closeMarket: 0.102,
        trending: true,
        details: 'WAX is a blockchain platform that focuses on digital item trading and decentralized virtual goods marketplaces.'
    },
    {
        id: 'nexus',
        name: 'Nexus',
        price: 1,
        low: 0.95,
        high: 1.05,
        openMarket: 0.97,
        closeMarket: 1.03,
        trending: true,
        details: 'Nexus is a blockchain platform that focuses on improving scalability and security for a wide range of applications, including decentralized finance (DeFi).'
    },
    {
        id: 'nxt',
        name: 'Nxt',
        price: 0.05,
        low: 0.048,
        high: 0.052,
        openMarket: 0.049,
        closeMarket: 0.051,
        trending: true,
        details: 'Nxt is a blockchain platform that allows users to create their own custom blockchain applications and tokens.'
    },
    {
        id: 'ark',
        name: 'Ark',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Ark is a blockchain platform that aims to provide easy access to blockchain technology for developers and businesses.'
    },
    {
        id: 'groestlcoin',
        name: 'Groestlcoin',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Groestlcoin is a cryptocurrency that focuses on fast and low-cost transactions, with a strong emphasis on privacy.'
    },
    {
        id: 'pivx',
        name: 'PIVX',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'PIVX is a privacy-focused cryptocurrency that uses a combination of technologies to provide enhanced privacy and security for its users.'
    },
    {
        id: 'dentacoin',
        name: 'Dentacoin',
        price: 0.0001,
        low: 0.00009,
        high: 0.00011,
        openMarket: 0.000095,
        closeMarket: 0.000105,
        trending: true,
        details: 'Dentacoin is a blockchain platform that focuses on improving dental healthcare through blockchain technology and incentivizing dental care.'
    },
    {
        id: 'stakenet',
        name: 'Stakenet',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Stakenet is a blockchain platform that offers a wide range of services, including staking, masternodes, and decentralized applications.'
    },
    {
        id: 'peercoin',
        name: 'Peercoin',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Peercoin is a blockchain platform that aims to provide energy-efficient and environmentally friendly cryptocurrency solutions.'
    },
    {
        id: 'electroneum',
        name: 'Electroneum',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'Electroneum is a cryptocurrency designed for mobile usage, with a focus on providing easy access to digital payments.'
    },
    {
        id: 'cloakcoin',
        name: 'CloakCoin',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'CloakCoin is a privacy-focused cryptocurrency that uses advanced encryption techniques to provide enhanced privacy and anonymity.'
    },
    {
        id: 'emercoin',
        name: 'Emercoin',
        price: 0.5,
        low: 0.495,
        high: 0.505,
        openMarket: 0.498,
        closeMarket: 0.502,
        trending: true,
        details: 'Emercoin is a blockchain platform that offers a range of services, including digital identities, secure storage, and decentralized DNS.'
    },
    {
        id: 'aion',
        name: 'Aion',
        price: 0.2,
        low: 0.195,
        high: 0.205,
        openMarket: 0.198,
        closeMarket: 0.202,
        trending: true,
        details: 'Aion is a blockchain platform that focuses on bridging different blockchain networks and allowing them to communicate and share information.'
    },
    {
        id: 'wax',
        name: 'WAX',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.098,
        closeMarket: 0.102,
        trending: true,
        details: 'WAX is a blockchain platform that focuses on digital item trading and decentralized virtual goods marketplaces.'
    },
    {
        id: 'kin',
        name: 'Kin',
        price: 0.0001,
        low: 0.00009,
        high: 0.00011,
        openMarket: 0.000095,
        closeMarket: 0.000105,
        trending: true,
        details: 'Kin is a cryptocurrency designed for digital services and apps, with a focus on providing incentives for content creators and users.'
    },
    {
        id: 'bytom',
        name: 'Bytom',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.098,
        closeMarket: 0.102,
        trending: true,
        details: 'Bytom is a blockchain platform that aims to bridge the digital and physical worlds by allowing assets to be represented as tokens on the blockchain.'
    },
    {
        id: 'elastos',
        name: 'Elastos',
        price: 3,
        low: 2.95,
        high: 3.05,
        openMarket: 2.98,
        closeMarket: 3.02,
        trending: true,
        details: 'Elastos is a blockchain platform that focuses on providing a secure and decentralized internet infrastructure.'
    },
    {
        id: 'iost',
        name: 'IOST',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'IOST is a blockchain platform that aims to provide scalable and secure infrastructure for smart contracts and DApps.'
    },
    {
        id: 'zencash',
        name: 'Horizen',
        price: 20,
        low: 19.5,
        high: 20.5,
        openMarket: 19.8,
        closeMarket: 20.2,
        trending: true,
        details: 'Horizen, formerly known as ZenCash, is a privacy-focused cryptocurrency and blockchain platform that aims to provide enhanced privacy and security features.'
    },
    {
        id: 'zclassic',
        name: 'Zclassic',
        price: 5,
        low: 4.95,
        high: 5.05,
        openMarket: 4.98,
        closeMarket: 5.02,
        trending: true,
        details: 'Zclassic is a privacy-focused cryptocurrency that aims to provide enhanced privacy and security features for its users.'
    },
    {
        id: 'bitcoinhex',
        name: 'Bitcoin Hex',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'Bitcoin Hex is a cryptocurrency that aims to provide staking and yield generation opportunities for Bitcoin holders.'
    },
    {
        id: 'kin',
        name: 'Kin',
        price: 0.0001,
        low: 0.00009,
        high: 0.00011,
        openMarket: 0.000095,
        closeMarket: 0.000105,
        trending: true,
        details: 'Kin is a cryptocurrency designed for digital services and apps, with a focus on providing incentives for content creators and users.'
    },
    {
        id: 'bytom',
        name: 'Bytom',
        price: 0.1,
        low: 0.095,
        high: 0.105,
        openMarket: 0.098,
        closeMarket: 0.102,
        trending: true,
        details: 'Bytom is a blockchain platform that aims to bridge the digital and physical worlds by allowing assets to be represented as tokens on the blockchain.'
    },
    {
        id: 'elastos',
        name: 'Elastos',
        price: 3,
        low: 2.95,
        high: 3.05,
        openMarket: 2.98,
        closeMarket: 3.02,
        trending: true,
        details: 'Elastos is a blockchain platform that focuses on providing a secure and decentralized internet infrastructure.'
    },
    {
        id: 'iost',
        name: 'IOST',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'IOST is a blockchain platform that aims to provide scalable and secure infrastructure for smart contracts and DApps.'
    },
    {
        id: 'zencash',
        name: 'Horizen',
        price: 20,
        low: 19.5,
        high: 20.5,
        openMarket: 19.8,
        closeMarket: 20.2,
        trending: true,
        details: 'Horizen, formerly known as ZenCash, is a privacy-focused cryptocurrency and blockchain platform that aims to provide enhanced privacy and security features.'
    },
    {
        id: 'zclassic',
        name: 'Zclassic',
        price: 5,
        low: 4.95,
        high: 5.05,
        openMarket: 4.98,
        closeMarket: 5.02,
        trending: true,
        details: 'Zclassic is a privacy-focused cryptocurrency that aims to provide enhanced privacy and security features for its users.'
    },
    {
        id: 'bitcoinhex',
        name: 'Bitcoin Hex',
        price: 0.01,
        low: 0.0095,
        high: 0.0105,
        openMarket: 0.0097,
        closeMarket: 0.0103,
        trending: true,
        details: 'Bitcoin Hex is a cryptocurrency that aims to provide staking and yield generation opportunities for Bitcoin holders.'
    },
]




app.get('/coins', (req, res) => {
  res.json(coins);
});

// Route to get a coin by ID
app.get('/coins/:id', (req, res) => {
  const coinId = req.params.id;
  const coin = coins.find((c) => c.id == coinId);

  if (!coin) {
    res.status(404).json({ message: 'Coin not found' });
  } else {
    res.json(coin);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
