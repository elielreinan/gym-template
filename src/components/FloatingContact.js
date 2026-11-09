import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { WHATSAPP_URL } from '../data/siteContent';
import colors from '../theme/colors';
import openExternalLink from '../utils/openExternalLink';

export default function FloatingContact() {
  if (!WHATSAPP_URL) return null;

  return (
    <Pressable
      accessibilityLabel="Falar com a academia pelo WhatsApp"
      accessibilityRole="button"
      onPress={() => openExternalLink(WHATSAPP_URL)}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <FontAwesome5 color={colors.white} name="whatsapp" size={26} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    backgroundColor: colors.blue,
    borderColor: colors.white,
    borderWidth: 2,
    elevation: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  pressed: {
    opacity: 0.8,
  },
});
