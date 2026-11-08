import { Alert, Linking } from 'react-native';

export default async function openExternalLink(url) {
  try {
    await Linking.openURL(url);
  } catch {
    Alert.alert('Não foi possível abrir o link', 'Tente novamente em instantes.');
  }
}
