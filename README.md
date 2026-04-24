# Currency Converter

Aplicativo mobile para conversão de moedas fiat e criptomoedas em tempo real.

## Funcionalidades

- Conversão entre moedas fiat (USD, BRL, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR)
- Conversão entre criptomoedas (BTC, ETH, USDT, BNB, SOL, XRP, ADA, DOGE)
- Conversão de fiat para crypto e vice-versa
- Swap de moedas (trocar moeda de origem/destino)
- Modal de resultado com opção de fechar ou nova conversão

## Estrutura do Projeto

```
src/
├── components/
│   ├── Button/          # Botão de seleção de moeda
│   ├── Input/           # Campo de entrada de valor
│   ├── ResultCard/     # Card de exibição de resultado
│   └── ResultModal/    # Modal de resultado
├── constants/
│   └── currencies.js    # Lista de moedas suportadas
├── routes/
│   └── stackRoutes.js  # Configuração de navegação
├── screens/
│   ├── home/            # Tela principal de conversão
│   └── Splashscreen/    # Tela inicial
├── services/
│   └── api.js          # Integração com APIs externas
├── styles/
│   └── colors.js       # Paleta de cores
└── utils/
    └── convertCurrency.js  # Função de conversão
```

## APIs Utilizadas

### 1. ExchangeRate-API (Moedas Fiat)

API gratuita para taxas de câmbio entre moedas fiat.

**Endpoint:**
```
GET https://api.exchangerate-api.com/v4/latest/{base_currency}
```

**Exemplo de chamada:**
```
GET https://api.exchangerate-api.com/v4/latest/USD
```

**Response:**
```json
{
  "provider": "https://www.exchangerate-api.com",
  "base": "USD",
  "date": "2024-01-01",
  "rates": {
    "BRL": 4.97,
    "EUR": 0.92,
    "GBP": 0.79,
    "JPY": 140.5,
    "CAD": 1.36,
    "AUD": 1.53,
    "CHF": 0.88,
    "CNY": 7.12,
    "INR": 83.12
  }
}
```

### 2. CoinGecko API (Criptomoedas)

API gratuita para preços de criptomoedas.

**Endpoint:**
```
GET https://api.coingecko.com/api/v3/simple/price?ids={crypto_id}&vs_currencies={fiat_currency}
```

**IDs das Criptomoedas:**
| Código | ID CoinGecko |
|--------|--------------|
| BTC    | bitcoin      |
| ETH    | ethereum     |
| USDT   | tether       |
| BNB    | binancecoin  |
| SOL    | solana       |
| XRP    | ripple      |
| ADA    | cardano      |
| DOGE   | dogecoin    |

**Exemplos de Chamada:**

1. Crypto → Fiat (BTC para USD):
```
GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
```

2. Fiat → Crypto (USD para BTC):
```
GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
```
*Nota: A taxa é invertida automaticamente no código*

3. Crypto → Crypto (BTC para ETH):
```
GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=ethereum
```

**Response:**
```json
{
  "bitcoin": {
    "usd": 45000.00,
    "eur": 41000.00,
    "brl": 220000.00
  },
  "ethereum": {
    "usd": 2500.00,
    "eur": 2280.00,
    "brl": 12250.00
  }
}
```

## Installation

```bash
npm install
```

## Running

```bash
npm start
# ou
npm run ios
npm run android
```

## Tecnologias

- React Native + Expo
- React Navigation
- CoinGecko API
- ExchangeRate-API