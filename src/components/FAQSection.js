import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SectionHeading from './SectionHeading';
import colors from '../theme/colors';
import { FAQS } from '../data/siteContent';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

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
            <View key={item.question} style={styles.question}>
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
              {expanded ? <Text style={styles.answer}>{item.answer}</Text> : null}
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
