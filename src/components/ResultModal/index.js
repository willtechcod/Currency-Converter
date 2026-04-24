import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function ResultModal({ visible, result, exchangeRate, fromCurrency, toCurrency, currencies, amount, onClose, onNewConversion }) {
  if (!visible) return null;

  const fromInfo = currencies.find(c => c.code === fromCurrency);
  const toInfo = currencies.find(c => c.code === toCurrency);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Resultado</Text>
          
          <Text style={styles.modalFromLabel}>De:</Text>
          <Text style={styles.modalAmount}>
            {fromInfo?.symbol}{amount} {fromCurrency}
          </Text>

          <Text style={styles.modalToLabel}>Para:</Text>
          <Text style={styles.modalResult}>
            {toInfo?.symbol} {result}
          </Text>
          <Text style={styles.modalCurrencyCode}>{toCurrency}</Text>

          <Text style={styles.modalRate}>
            Taxa: 1 {fromCurrency} = {exchangeRate?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })} {toCurrency}
          </Text>

          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.modalButton, styles.modalButtonOutline]} onPress={onNewConversion}>
            <Text style={[styles.modalButtonText, styles.modalButtonTextOutline]}>Nova Conversão</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}