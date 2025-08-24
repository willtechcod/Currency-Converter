import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { currencies } from "../../constants/currencies";
import { Input } from "../../components/input";
import { ResultCard } from "../../components/ResultCard";
import { exchangeRateApi } from "../../services/api";
import { convertCurrency } from "../../utils/convertCurrency";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  async function fetchExchangeRate() {
    try {
      setLoading(true);
      if (!amount) return;
      const data = await exchangeRateApi(fromCurrency);
      const rate = data.rates[toCurrency];
      setExchangeRate(rate);
      const covertedAmount = convertCurrency(amount, rate);
      setResult(covertedAmount);
    } catch (err) {
      Alert.alert("Erro", "Não foi possível obter a taxa de câmbio.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function swapCurrencies() {
    const prevFromCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(prevFromCurrency);
    setResult("");
    setExchangeRate(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <StatusBar style="light" />
            <View style={styles.header}>
              <Text style={styles.title}>Conversor de Moedas</Text>
              <Text style={styles.subTitle}>
                Converta valores entre diferentes moedas
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.label}>De:</Text>
              <View style={styles.currencyGrid}>
                {currencies.map((currency) => (
                  <Button
                    variant="primary"
                    key={currency.code}
                    currency={currency}
                    onPress={() => setFromCurrency(currency.code)}
                    isSelected={fromCurrency === currency.code}
                  ></Button>
                ))}
              </View>

              <Input label="Valor: " value={amount} onChangeText={setAmount} />

              <TouchableOpacity
                style={styles.swapButton}
                onPress={swapCurrencies}
              >
                <Text style={styles.swapButtonText}>↑↓</Text>
              </TouchableOpacity>
              <Text style={styles.label}>Para:</Text>
              <View>
                <View style={styles.currencyGrid}>
                  {currencies.map((currency) => (
                    <Button
                      variant="secondary"
                      key={currency.code}
                      currency={currency}
                      onPress={() => setToCurrency(currency.code)}
                      isSelected={toCurrency === currency.code}
                    ></Button>
                  ))}
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={[
                styles.convertButton,
                (!amount || loading) && styles.convertButtonDisabled,
              ]}
              onPress={fetchExchangeRate}
              disabled={!amount || loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.swapButtonText}>Converter</Text>
              )}
            </TouchableOpacity>

            <ResultCard
              exchangeRate={exchangeRate}
              result={result}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              currencies={currencies}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
