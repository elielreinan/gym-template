import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../theme/colors';
import { WHATSAPP_URL } from '../data/siteContent';
import openExternalLink from '../utils/openExternalLink';

export default function PlanCard({ plan }) {
  return (
    <View style={[styles.card, plan.featured && styles.featuredCard]}>
      {plan.featured ? (
        <View style={styles.featuredBadge}>
          <Text style={styles.featuredBadgeText}>Mais Resultados</Text>
        </View>
      ) : null}
      {plan.badge ? (
        <View style={styles.vipBadge}>
          <Text style={styles.vipBadgeText}>{plan.badge}</Text>
        </View>
      ) : null}
      <Text style={[styles.name, plan.featured && styles.featuredName, plan.badge && styles.nameWithBadge]}>
        {plan.name}
      </Text>
      <Text style={[styles.description, plan.featured && styles.featuredDescription]}>
        {plan.description}
      </Text>
      {plan.price ? (
        <View style={styles.priceRow}>
          <Text style={styles.currency}>R$</Text>
          <Text style={[styles.price, plan.featured && styles.featuredPrice]}>{plan.price}</Text>
          <Text style={styles.currency}>,00</Text>
          <Text style={styles.perMonth}>/mês</Text>
        </View>
      ) : (
        <Text style={styles.pricePlaceholder}>Valor a definir</Text>
      )}
      <View style={styles.featureList}>
        {plan.features.map((feature) => (
          <View key={feature} style={styles.featureRow}>
            <Ionicons color={colors.yellow} name="checkmark-circle" size={20} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>
      {WHATSAPP_URL ? (
        <Pressable
          accessibilityLabel={`${plan.action} pelo WhatsApp`}
          accessibilityRole="button"
          onPress={() => openExternalLink(WHATSAPP_URL)}
          style={({ pressed, hovered, focused }) => [
            styles.action,
            plan.featured ? styles.featuredAction : styles.outlinedAction,
            hovered && styles.actionHovered,
            focused && styles.actionFocused,
            pressed && styles.pressed,
          ]}
        >
          <Text style={[styles.actionText, !plan.featured && styles.outlinedActionText]}>
            {plan.action}
          </Text>
        </Pressable>
      ) : null}
      {WHATSAPP_URL ? <Text style={styles.contactHint}>Atendimento pelo WhatsApp</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 23,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    borderRadius: 18,
    backgroundColor: colors.background,
  },
  featuredCard: {
    borderColor: colors.yellow,
    borderWidth: 2,
    backgroundColor: '#142f68',
  },
  featuredBadge: {
    alignSelf: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 3,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: -36,
    marginBottom: 23,
  },
  featuredBadgeText: {
    color: colors.background,
    fontFamily: 'Oswald-Bold',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  vipBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: colors.blue,
    borderColor: colors.surface,
    borderWidth: 3,
  },
  vipBadgeText: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 10,
    fontWeight: '900',
    textAlign: 'center',
  },
  name: {
    color: colors.text,
    fontFamily: 'Oswald-Bold',
    fontSize: 25,
    fontWeight: '900',
    textTransform: 'uppercase',
    marginBottom: 7,
  },
  nameWithBadge: {
    paddingRight: 60,
  },
  featuredName: {
    color: colors.white,
    fontSize: 29,
    fontStyle: 'italic',
  },
  description: {
    minHeight: 42,
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 19,
  },
  featuredDescription: {
    color: '#bfdbfe',
  },
  priceRow: {
    minHeight: 77,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 22,
  },
  currency: {
    color: colors.yellow,
    fontFamily: 'Oswald-Bold',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 11,
  },
  price: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 66,
    lineHeight: 73,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  featuredPrice: {
    color: colors.yellow,
    fontSize: 73,
  },
  perMonth: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    marginLeft: 4,
    marginBottom: 11,
  },
  pricePlaceholder: {
    minHeight: 77,
    marginBottom: 22,
    color: colors.yellow,
    fontFamily: 'Oswald-Bold',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  featureList: {
    gap: 16,
    marginBottom: 24,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  featureText: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 21,
  },
  action: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderWidth: 2,
    borderRadius: 5,
  },
  featuredAction: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
  outlinedAction: {
    borderColor: colors.blueLight,
  },
  actionText: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  outlinedActionText: {
    color: colors.blueLight,
  },
  actionHovered: {
    backgroundColor: 'rgba(147,197,253,0.15)',
  },
  actionFocused: {
    borderColor: colors.yellow,
  },
  contactHint: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  pressed: {
    opacity: 0.78,
  },
});
