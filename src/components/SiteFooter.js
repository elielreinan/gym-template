import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import BrandLogo from './BrandLogo';
import colors from '../theme/colors';
import {
  ADDRESS, DEVELOPER_INSTAGRAM_URL, INSTAGRAM_URL, MAP_URL, WHATSAPP_URL,
} from '../data/siteContent';
import openExternalLink from '../utils/openExternalLink';

export default function SiteFooter({ isWide }) {
  return (
    <View style={styles.footer}>
      <View style={[styles.content, isWide && styles.contentWide]}>
        <View style={styles.block}>
          <BrandLogo footer />
          <Text style={styles.description}>
            Um modelo de site para apresentar sua academia e conectar pessoas ao movimento.
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.heading}>Endereço</Text>
          <View style={styles.addressRow}>
            <Ionicons color={colors.yellow} name="location" size={19} />
            <Text style={styles.text}>{ADDRESS || 'Endereço a definir'}</Text>
          </View>
          {MAP_URL ? (
            <Pressable
              accessibilityRole="link"
              accessibilityLabel="Ver endereço no Google Maps"
              onPress={() => openExternalLink(MAP_URL)}
              style={styles.mapLink}
            >
              <Text style={styles.mapLinkText}>Ver no mapa</Text>
            </Pressable>
          ) : null}
          <Text style={styles.text}>Horários de funcionamento a definir.</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.heading}>Conecte-se</Text>
          {WHATSAPP_URL || INSTAGRAM_URL ? (
            <View style={styles.socialLinks}>
              {WHATSAPP_URL ? (
                <Pressable
                  accessibilityLabel="WhatsApp"
                  accessibilityRole="link"
                  onPress={() => openExternalLink(WHATSAPP_URL)}
                  style={styles.socialButton}
                >
                  <FontAwesome5 color={colors.white} name="whatsapp" size={22} />
                </Pressable>
              ) : null}
              {INSTAGRAM_URL ? (
                <Pressable
                  accessibilityLabel="Instagram"
                  accessibilityRole="link"
                  onPress={() => openExternalLink(INSTAGRAM_URL)}
                  style={styles.socialButton}
                >
                  <FontAwesome5 color={colors.white} name="instagram" size={22} />
                </Pressable>
              ) : null}
            </View>
          ) : <Text style={styles.text}>Contatos a definir.</Text>}
        </View>
      </View>
      <Text style={styles.copyright}>
        Gym Fitness · Modelo demonstrativo.
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
