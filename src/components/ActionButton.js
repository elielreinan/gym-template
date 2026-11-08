import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function ActionButton({
  children,
  onPress,
  secondary = false,
  compact = false,
  accessibilityLabel,
}) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed, hovered, focused }) => [
        styles.button,
        secondary ? styles.secondary : styles.primary,
        compact && styles.compact,
        hovered && (secondary ? styles.secondaryHovered : styles.primaryHovered),
        focused && styles.focused,
        pressed && styles.pressed,
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    paddingHorizontal: 22,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    borderWidth: 2,
    borderRadius: 9,
  },
  compact: {
    minHeight: 44,
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  primary: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: colors.white,
  },
  primaryHovered: {
    backgroundColor: '#2954ce',
    borderColor: '#2954ce',
  },
  secondaryHovered: {
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  focused: {
    borderColor: colors.yellow,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
});
