import React, { useRef } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView as SafeAreaContextView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
import { Oswald_600SemiBold } from '@expo-google-fonts/oswald/600SemiBold';
import { Oswald_700Bold } from '@expo-google-fonts/oswald/700Bold';
import ActionButton from '../components/ActionButton';
import FAQSection from '../components/FAQSection';
import FacilityCard from '../components/FacilityCard';
import FloatingContact from '../components/FloatingContact';
import PlanCard from '../components/PlanCard';
import ScheduleSection from '../components/ScheduleSection';
import SectionHeading from '../components/SectionHeading';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import colors from '../theme/colors';
import { FACILITIES, PLANS, WHATSAPP_URL } from '../data/siteContent';
import openExternalLink from '../utils/openExternalLink';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=75&w=1200&auto=format&fit=crop';

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
    'Oswald-SemiBold': Oswald_600SemiBold,
    'Oswald-Bold': Oswald_700Bold,
  });
  const { width } = useWindowDimensions();
  const scrollRef = useRef(null);
  const sectionPositions = useRef({});
  const isWide = width >= 820;

  if (fontError) {
    throw fontError;
  }

  if (!fontsLoaded) {
    return (
      <SafeAreaContextView style={styles.fontLoading}>
        <StatusBar barStyle="light-content" backgroundColor={colors.background} />
        <ActivityIndicator color={colors.yellow} size="large" />
        <Text style={styles.fontLoadingText}>Preparando sua experiência</Text>
      </SafeAreaContextView>
    );
  }

  const rememberSection = (section) => (event) => {
    sectionPositions.current[section] = event.nativeEvent.layout.y;
  };

  const scrollToSection = (section) => {
    const position = sectionPositions.current[section];
    if (typeof position === 'number') {
      scrollRef.current?.scrollTo({ y: Math.max(0, position - 72), animated: true });
    }
  };

  return (
    <SafeAreaContextView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollContent}
        stickyHeaderIndices={[0]}
      >
        <SiteHeader isWide={isWide} onNavigate={scrollToSection} />
        <View onLayout={rememberSection('hero')}>
          <ImageBackground
            imageStyle={styles.heroImage}
            source={{ uri: HERO_IMAGE }}
            style={styles.hero}
          >
            <LinearGradient
              colors={['rgba(8,20,41,0.58)', 'rgba(12,35,84,0.94)']}
              end={{ x: 1, y: 1 }}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.heroContent}>
              <View style={styles.openBadge}>
                <View style={styles.openDot} />
                <Text style={styles.openBadgeText}>Inscrições Abertas</Text>
              </View>
              <Text style={[styles.heroTitle, isWide && styles.heroTitleWide]}>
                Viver Bem é{'\n'}
                <Text style={styles.heroTitleHighlight}>Para Você!</Text>
              </Text>
              <Text style={styles.heroDescription}>
                A estrutura mais completa do Uruguai, Salvador. Musculação, Pilates e Aulas
                Coletivas com foco total nos seus resultados.
              </Text>
              <View style={[styles.heroActions, isWide && styles.heroActionsWide]}>
                <ActionButton
                  onPress={() => openExternalLink(WHATSAPP_URL)}
                  accessibilityLabel="Consultar visita pelo WhatsApp"
                >
                  <FontAwesome5 color={colors.white} name="whatsapp" size={18} />
                  <Text style={styles.buttonText}>Consultar visita</Text>
                </ActionButton>
                <ActionButton onPress={() => scrollToSection('plans')} secondary>
                  <Text style={styles.buttonText}>Ver Planos</Text>
                </ActionButton>
              </View>
              <Text style={styles.heroNote}>
                Visitas e horários: consulte nossa equipe pelo WhatsApp. Imagem ilustrativa.
              </Text>
            </View>
            <View style={styles.heroAccent} />
          </ImageBackground>
        </View>

        <View style={[styles.highlights, isWide && styles.highlightsWide]}>
          {[
            ['snowflake', '100% Climatizada', 'Treino no clima perfeito'],
            ['spa', 'Pilates com Fisioterapeutas', 'Cuidado profissional'],
            ['dumbbell', 'Equipamentos de Ponta', 'Máquinas de última geração'],
          ].map(([icon, title, description]) => (
            <View key={title} style={styles.highlightItem}>
              <View style={styles.highlightIcon}>
                <FontAwesome5 color={colors.yellow} name={icon} size={24} />
              </View>
              <View style={styles.highlightCopy}>
                <Text style={styles.highlightTitle}>{title}</Text>
                <Text style={styles.highlightDescription}>{description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View
          onLayout={rememberSection('structure')}
          style={[styles.section, isWide && styles.wideSection]}
        >
          <SectionHeading
            eyebrow="Treine do seu jeito"
            title="Nossa"
            highlight="Estrutura"
            description="Ambientes projetados para o seu máximo desempenho."
          />
          <View style={[styles.facilityList, isWide && styles.facilityListWide]}>
            {FACILITIES.map((item) => (
              <FacilityCard key={item.title} item={item} />
            ))}
          </View>
          <Text style={styles.imageNotice}>Imagens ilustrativas.</Text>
        </View>

        <View onLayout={rememberSection('schedule')}>
          <ScheduleSection />
        </View>

        <View
          onLayout={rememberSection('plans')}
          style={[styles.plansSection, isWide && styles.wideSection]}
        >
          <SectionHeading
            eyebrow="Planos para cada objetivo"
            title="Escolha o"
            highlight="Seu Plano"
            description="Mensalidades que cabem no seu bolso com estrutura de gigante."
          />
          <View style={[styles.planList, isWide && styles.planListWide]}>
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </View>
          <Text style={styles.planNote}>
            Consulte a equipe sobre formas de pagamento, condições e valores atualizados.
          </Text>
        </View>

        <View style={styles.callout}>
          <LinearGradient
            colors={[colors.blue, colors.surface]}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.calloutContent}>
            <Text style={styles.calloutEyebrow}>Seu próximo passo</Text>
            <Text style={styles.calloutTitle}>Vamos começar?</Text>
            <Text style={styles.calloutText}>
              Tire suas dúvidas com a nossa equipe e encontre o plano que combina com você.
            </Text>
            <ActionButton
              onPress={() => openExternalLink(WHATSAPP_URL)}
              accessibilityLabel="Conversar com a equipe pelo WhatsApp"
            >
              <FontAwesome5 color={colors.white} name="whatsapp" size={18} />
              <Text style={styles.buttonText}>Fale com a equipe</Text>
            </ActionButton>
          </View>
          <View style={styles.calloutMark} />
        </View>

        <FAQSection />
        <SiteFooter isWide={isWide} />
      </ScrollView>
      <FloatingContact />
    </SafeAreaContextView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    backgroundColor: colors.background,
    paddingBottom: 80,
  },
  fontLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    backgroundColor: colors.background,
  },
  fontLoadingText: {
    color: colors.text,
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
  hero: {
    minHeight: 600,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 68,
    overflow: 'hidden',
  },
  heroImage: {
    resizeMode: 'cover',
  },
  heroContent: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    zIndex: 1,
  },
  openBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    backgroundColor: 'rgba(30,58,138,0.55)',
    borderColor: '#5672bd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 23,
  },
  openDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.yellow,
  },
  openBadgeText: {
    color: colors.yellow,
    fontFamily: 'Oswald-SemiBold',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 50,
    lineHeight: 57,
    fontWeight: '900',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  heroTitleWide: {
    fontSize: 78,
    lineHeight: 84,
  },
  heroTitleHighlight: {
    color: colors.yellow,
  },
  heroDescription: {
    maxWidth: 650,
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    lineHeight: 28,
    borderLeftColor: colors.yellow,
    borderLeftWidth: 4,
    paddingLeft: 15,
    marginBottom: 30,
  },
  heroActions: {
    alignItems: 'stretch',
    gap: 13,
  },
  heroActionsWide: {
    flexDirection: 'row',
  },
  heroNote: {
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 14,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  secondaryButtonText: {
    color: colors.white,
  },
  heroAccent: {
    position: 'absolute',
    bottom: 0,
    right: -80,
    width: '45%',
    height: 14,
    backgroundColor: colors.yellow,
    transform: [{ skewX: '-35deg' }],
  },
  highlights: {
    marginTop: -22,
    marginHorizontal: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.blue,
    borderRadius: 14,
    zIndex: 1,
    elevation: 8,
  },
  highlightsWide: {
    maxWidth: 1160,
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  highlightItem: {
    minHeight: 78,
    paddingVertical: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 13,
    borderBottomColor: 'rgba(255,255,255,0.16)',
    borderBottomWidth: 1,
  },
  highlightIcon: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  highlightCopy: {
    flex: 1,
  },
  highlightTitle: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  highlightDescription: {
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    marginTop: 2,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 76,
    paddingBottom: 38,
  },
  wideSection: {
    paddingHorizontal: 36,
    maxWidth: 1240,
    width: '100%',
    alignSelf: 'center',
  },
  facilityList: {
    gap: 18,
  },
  facilityListWide: {
    flexDirection: 'row',
  },
  imageNotice: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 14,
  },
  plansSection: {
    paddingHorizontal: 20,
    paddingTop: 74,
    paddingBottom: 82,
    backgroundColor: colors.surface,
  },
  planList: {
    gap: 24,
  },
  planListWide: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 20,
  },
  planNote: {
    color: colors.muted,
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 24,
  },
  callout: {
    overflow: 'hidden',
    paddingHorizontal: 24,
    paddingVertical: 52,
  },
  calloutContent: {
    width: '100%',
    maxWidth: 760,
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 1,
  },
  calloutEyebrow: {
    color: colors.yellow,
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  calloutTitle: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 35,
    fontWeight: '900',
    fontStyle: 'italic',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 8,
  },
  calloutText: {
    maxWidth: 540,
    color: '#dbeafe',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 22,
  },
  calloutMark: {
    position: 'absolute',
    top: -110,
    right: -80,
    width: 230,
    height: 230,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: 'rgba(255,210,28,0.25)',
  },
});
