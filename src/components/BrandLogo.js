import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

export default function BrandLogo({ footer = false }) {
  return (
    <View style={styles.logo}>
      <View style={styles.logoMark}>
        <Text style={styles.logoInitials}>VB</Text>
      </View>
      <Text style={[styles.logoName, footer && styles.logoNameFooter]}>Viver Bem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoMark: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInitials: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 18,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  logoName: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 23,
    fontWeight: '900',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  logoNameFooter: {
    fontSize: 27,
  },
});
