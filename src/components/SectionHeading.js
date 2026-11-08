import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

export default function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <View style={styles.container}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>
        {title} <Text style={styles.highlight}>{highlight}</Text>
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 34,
  },
  eyebrow: {
    color: colors.yellow,
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 9,
  },
  title: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 38,
    lineHeight: 46,
    fontWeight: '900',
    fontStyle: 'italic',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 9,
  },
  highlight: {
    color: colors.yellow,
  },
  description: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
