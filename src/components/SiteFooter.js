import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import BrandLogo from './BrandLogo';
import colors from '../theme/colors';
import { DEVELOPER_INSTAGRAM_URL, INSTAGRAM_URL, MAP_URL, WHATSAPP_URL } from '../data/siteContent';
import openExternalLink from '../utils/openExternalLink';

export default function SiteFooter({ isWide }) {
  return (
    <View style={styles.footer}>
      <View style={[styles.content, isWide && styles.contentWide]}>
        <View style={styles.block}>
          <BrandLogo footer />
          <Text style={styles.description}>
            A academia feita para você atingir resultados reais com a melhor estrutura.
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.heading}>Endereço</Text>
          <View style={styles.addressRow}>
            <Ionicons color={colors.yellow} name="location" size={19} />
            <Text style={styles.text}>Uruguai, Salvador - BA</Text>
          </View>
          <Text style={styles.text}>Venha nos fazer uma visita!</Text>
          <Pressable
            accessibilityRole="link"
            accessibilityLabel="Ver o bairro Uruguai no Google Maps"
            onPress={() => openExternalLink(MAP_URL)}
            style={styles.mapLink}
          >
            <Text style={styles.mapLinkText}>Ver o bairro no mapa</Text>
          </Pressable>
          <Text style={styles.text}>Endereço completo e horários: consulte pelo WhatsApp.</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.heading}>Conecte-se</Text>
          <View style={styles.socialLinks}>
            <Pressable
              accessibilityLabel="WhatsApp"
              accessibilityRole="link"
              onPress={() => openExternalLink(WHATSAPP_URL)}
              style={styles.socialButton}
            >
              <FontAwesome5 color={colors.white} name="whatsapp" size={22} />
            </Pressable>
            <Pressable
              accessibilityLabel="Instagram"
              accessibilityRole="link"
              onPress={() => openExternalLink(INSTAGRAM_URL)}
              style={styles.socialButton}
            >
              <FontAwesome5 color={colors.white} name="instagram" size={22} />
            </Pressable>
          </View>
        </View>
      </View>
      <Text style={styles.copyright}>
        © 2026 Viver Bem Fitness. Todos os direitos reservados.
      </Text>
      <Pressable
        accessibilityLabel="Instagram da DevReds"
        accessibilityRole="link"
        onPress={() => openExternalLink(DEVELOPER_INSTAGRAM_URL)}
        style={styles.signature}
      >
        <Text style={styles.signatureText}>by DevReds</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 22,
    paddingTop: 52,
    paddingBottom: 25,
    backgroundColor: '#061025',
    borderTopColor: colors.surface,
    borderTopWidth: 1,
  },
  content: {
    gap: 32,
    paddingBottom: 32,
    borderBottomColor: 'rgba(255,255,255,0.12)',
    borderBottomWidth: 1,
  },
  contentWide: {
    maxWidth: 1160,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  block: {
    flex: 1,
    alignItems: 'flex-start',
  },
  description: {
    maxWidth: 300,
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
  },
  heading: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 19,
    fontWeight: '900',
    textTransform: 'uppercase',
    marginBottom: 13,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  text: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 22,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 13,
  },
  mapLink: {
    paddingVertical: 10,
  },
  mapLinkText: {
    color: colors.blueLight,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  socialButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: 10,
  },
  copyright: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  signature: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  signatureText: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
});
