import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ActionButton from './ActionButton';
import SectionHeading from './SectionHeading';
import { FACILITIES, WHATSAPP_URL } from '../data/siteContent';
import colors from '../theme/colors';
import openExternalLink from '../utils/openExternalLink';

export default function ScheduleSection() {
  return (
    <View style={styles.section}>
      <SectionHeading
        eyebrow="Planeje seu treino"
        title="Aulas e"
        highlight="horários"
        description="Encontre a atividade ideal para sua rotina."
      />
      <View style={styles.card}>
        {FACILITIES.map((item) => (
          <View key={item.title} style={styles.row}>
            <Ionicons color={colors.yellow} name="time-outline" size={22} />
            <Text style={styles.activity}>{item.title}</Text>
            <Text style={styles.availability}>Consultar horários</Text>
          </View>
        ))}
        <Text style={styles.note}>
          Consulte a equipe para conhecer os dias e horários atualizados das aulas e da academia.
        </Text>
        <ActionButton
          accessibilityLabel="Consultar horários pelo WhatsApp"
          onPress={() => openExternalLink(WHATSAPP_URL)}
        >
          <Text style={styles.buttonText}>Consultar pelo WhatsApp</Text>
        </ActionButton>
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
    paddingTop: 64,
    paddingBottom: 72,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  row: {
    minHeight: 55,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  activity: {
    color: colors.white,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    flex: 1,
  },
  availability: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textAlign: 'right',
  },
  note: {
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 21,
    marginVertical: 20,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
