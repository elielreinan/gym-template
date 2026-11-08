import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SectionHeading from './SectionHeading';
import colors from '../theme/colors';
import { FAQS } from '../data/siteContent';
import useReducedMotion from '../hooks/useReducedMotion';

function FAQAnswer({ children, reducedMotion }) {
  const entrance = useRef(new Animated.Value(reducedMotion ? 1 : 0)).current;

  useEffect(() => {
    if (reducedMotion) {
      entrance.stopAnimation();
      entrance.setValue(1);
      return;
    }

    const animation = Animated.timing(entrance, {
      toValue: 1,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: Platform.OS !== 'web',
    });
    animation.start();
    return () => animation.stop();
  }, [entrance, reducedMotion]);

  return (
    <Animated.View
      style={{
        opacity: entrance.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] }),
        transform: [
          { translateY: entrance.interpolate({ inputRange: [0, 1], outputRange: [5, 0] }) },
        ],
      }}
    >
      <Text style={styles.answer}>{children}</Text>
    </Animated.View>
  );
}

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <View style={styles.section}>
      <SectionHeading
        eyebrow="Dúvidas frequentes"
        title="Tudo para"
        highlight="começar"
        description="Informações rápidas para dar o próximo passo com confiança."
      />
      <View style={styles.questions}>
        {FAQS.map((item, index) => {
          const expanded = expandedIndex === index;

          return (
            <View key={item.question} style={[styles.question, expanded && styles.questionExpanded]}>
              <Pressable
                accessibilityRole="button"
                accessibilityState={{ expanded }}
                onPress={() => setExpandedIndex(expanded ? -1 : index)}
                style={styles.questionButton}
              >
                <Text style={styles.questionText}>{item.question}</Text>
                <Ionicons
                  color={colors.yellow}
                  name={expanded ? 'remove-circle-outline' : 'add-circle-outline'}
                  size={23}
                />
              </Pressable>
              {expanded ? <FAQAnswer reducedMotion={reducedMotion}>{item.answer}</FAQAnswer> : null}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    maxWidth: 820,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 68,
    paddingBottom: 72,
  },
  questions: {
    gap: 12,
  },
  question: {
    paddingHorizontal: 17,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  questionExpanded: {
    borderColor: 'rgba(147,197,253,0.55)',
    backgroundColor: '#142b52',
  },
  questionButton: {
    minHeight: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  questionText: {
    flex: 1,
    color: colors.white,
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
  },
  answer: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 11,
    paddingRight: 30,
  },
});
