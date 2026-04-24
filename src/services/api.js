const FIAT_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';
const CRYPTO_BASE_URL = 'https://api.coingecko.com/api/v3';

const CRYPTO_CURRENCIES = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL', 'XRP', 'ADA', 'DOGE'];

const COINGECKO_IDS = {
    'BTC': 'bitcoin',
    'ETH': 'ethereum',
    'USDT': 'tether',
    'BNB': 'binancecoin',
    'SOL': 'solana',
    'XRP': 'ripple',
    'ADA': 'cardano',
    'DOGE': 'dogecoin'
};

export function isCrypto(currency) {
    return CRYPTO_CURRENCIES.includes(currency);
}

export async function exchangeRateApi(fromCurrency, toCurrency) {
    try {
        if (isCrypto(fromCurrency) || isCrypto(toCurrency)) {
            return await getCryptoRate(fromCurrency, toCurrency);
        }
        const response = await fetch(`${FIAT_BASE_URL}/${fromCurrency}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

async function getCryptoRate(fromCurrency, toCurrency) {
    const fromIsCrypto = isCrypto(fromCurrency);
    const toIsCrypto = isCrypto(toCurrency);
    
    let cryptoId, vsCurrency, rate;
    
    if (fromIsCrypto && !toIsCrypto) {
        cryptoId = COINGECKO_IDS[fromCurrency];
        vsCurrency = toCurrency.toLowerCase();
    } else if (!fromIsCrypto && toIsCrypto) {
        cryptoId = COINGECKO_IDS[toCurrency];
        vsCurrency = fromCurrency.toLowerCase();
    } else {
        cryptoId = COINGECKO_IDS[fromCurrency];
        vsCurrency = toCurrency.toLowerCase();
    }
    
    if (!cryptoId) {
        console.error('Crypto ID não encontrado');
        return { rates: { [toCurrency]: 0 } };
    }
    
    const response = await fetch(
        `${CRYPTO_BASE_URL}/simple/price?ids=${cryptoId}&vs_currencies=${vsCurrency}`
    );
    const data = await response.json();
    
    rate = data[cryptoId]?.[vsCurrency] || 0;
    
    if (!fromIsCrypto && toIsCrypto && rate > 0) {
        rate = 1 / rate;
    }
    
    return {
        rates: {
            [toCurrency]: rate
        }
    };
}