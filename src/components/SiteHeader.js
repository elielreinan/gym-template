import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BrandLogo from './BrandLogo';
import ActionButton from './ActionButton';
import colors from '../theme/colors';
import { WHATSAPP_URL } from '../data/siteContent';
import openExternalLink from '../utils/openExternalLink';

const LINKS = [
  ['Modalidades', 'structure'],
  ['Horários', 'schedule'],
  ['Planos', 'plans'],
];

export default function SiteHeader({ isWide, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (section) => {
    setMenuOpen(false);
    onNavigate(section);
  };

  return (
    <View style={styles.header}>
      <BrandLogo />
      {isWide ? (
        <View style={styles.navigation}>
          {LINKS.map(([label, section]) => (
            <Pressable
              key={label}
              accessibilityRole="button"
              onPress={() => navigate(section)}
              style={({ hovered, focused }) => [
                styles.navItem,
                (hovered || focused) && styles.navItemActive,
              ]}
            >
              <Text style={styles.navText}>{label}</Text>
            </Pressable>
          ))}
          <ActionButton
            compact
            onPress={() => openExternalLink(WHATSAPP_URL)}
            accessibilityLabel="Consultar matrícula pelo WhatsApp"
          >
            <Text style={styles.buttonText}>Consultar matrícula</Text>
          </ActionButton>
        </View>
      ) : (
        <Pressable
          accessibilityLabel={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          accessibilityRole="button"
          accessibilityState={{ expanded: menuOpen }}
          onPress={() => setMenuOpen((open) => !open)}
          style={styles.menuButton}
        >
          <Ionicons color={colors.text} name={menuOpen ? 'close' : 'menu'} size={29} />
        </Pressable>
      )}
      {!isWide && menuOpen ? (
        <View style={styles.mobileNavigation}>
          {LINKS.map(([label, section]) => (
            <Pressable
              key={label}
              accessibilityRole="button"
              onPress={() => navigate(section)}
              style={styles.mobileNavItem}
            >
              <Text style={styles.navText}>{label}</Text>
            </Pressable>
          ))}
          <ActionButton
            compact
            onPress={() => openExternalLink(WHATSAPP_URL)}
            accessibilityLabel="Consultar matrícula pelo WhatsApp"
          >
            <Text style={styles.buttonText}>Consultar matrícula</Text>
          </ActionButton>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 72,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: colors.background,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    zIndex: 5,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },
  navItem: {
    paddingVertical: 11,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  navItemActive: {
    borderBottomColor: colors.yellow,
  },
  navText: {
    color: colors.text,
    fontFamily: 'Oswald-SemiBold',
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  menuButton: {
    padding: 7,
  },
  mobileNavigation: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    gap: 2,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.12)',
    elevation: 8,
  },
  mobileNavItem: {
    paddingVertical: 12,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
});
