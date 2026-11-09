import React, { useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  ImageBackground,
  Platform,
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
import useReducedMotion from '../hooks/useReducedMotion';

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
  const entrance = useRef(new Animated.Value(1)).current;
  const accentSweep = useRef(new Animated.Value(0)).current;
  const reducedMotion = useReducedMotion();
  const isWide = width >= 820;

  useEffect(() => {
    if (!fontsLoaded || reducedMotion) {
      entrance.stopAnimation();
      entrance.setValue(1);
      return;
    }

    entrance.setValue(0);
    const animation = Animated.timing(entrance, {
      toValue: 1,
      duration: 700,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: Platform.OS !== 'web',
    });
    animation.start();
    return () => animation.stop();
  }, [entrance, fontsLoaded, reducedMotion]);

  useEffect(() => {
    if (!fontsLoaded || reducedMotion) {
      accentSweep.stopAnimation();
      accentSweep.setValue(0);
      return;
    }

    const animation = Animated.loop(
      Animated.timing(accentSweep, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: Platform.OS !== 'web',
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [accentSweep, fontsLoaded, reducedMotion]);

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
      scrollRef.current?.scrollTo({ y: Math.max(0, position - 72), animated: !reducedMotion });
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
            <Animated.View
              style={[
                styles.heroContent,
                {
                  opacity: entrance.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] }),
                  transform: [
                    { translateY: entrance.interpolate({ inputRange: [0, 1], outputRange: [16, 0] }) },
                  ],
                },
              ]}
            >
              <View style={styles.openBadge}>
                <View style={styles.openDot} />
                <Text style={styles.openBadgeText}>Modelo demonstrativo</Text>
              </View>
              <Text style={[styles.heroTitle, isWide && styles.heroTitleWide]}>
                Seu espaço{'\n'}
                <Text style={styles.heroTitleHighlight}>Para Evoluir!</Text>
              </Text>
              <Text style={styles.heroDescription}>
                Um modelo de site para apresentar modalidades, planos e a estrutura da sua academia.
              </Text>
              <View style={[styles.heroActions, isWide && styles.heroActionsWide]}>
                {WHATSAPP_URL ? (
                  <ActionButton
                    onPress={() => openExternalLink(WHATSAPP_URL)}
                    accessibilityLabel="Consultar visita pelo WhatsApp"
                  >
                    <FontAwesome5 color={colors.white} name="whatsapp" size={18} />
                    <Text style={styles.buttonText}>Consultar visita</Text>
                  </ActionButton>
                ) : null}
                <ActionButton onPress={() => scrollToSection('plans')} secondary>
                  <Text style={styles.buttonText}>Ver Planos</Text>
                </ActionButton>
              </View>
              <Text style={styles.heroNote}>
                Conteúdo e imagens ilustrativos. Personalize as informações para sua academia.
              </Text>
            </Animated.View>
            <View pointerEvents="none" style={styles.heroRing} />
          </ImageBackground>
        </View>

        <View style={styles.heroAccent}>
          <Animated.View
            pointerEvents="none"
            style={[
              styles.heroAccentSweep,
              {
                transform: [
                  {
                    translateX: accentSweep.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-240, width + 240],
                    }),
                  },
                  { skewX: '-25deg' },
                ],
              },
            ]}
          >
            <LinearGradient
              colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.38)', 'rgba(255,255,255,0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFill}
            />
          </Animated.View>
          <FontAwesome5 color={colors.background} name="bolt" size={16} />
          <Text style={styles.heroAccentText}>Seu treino. Sua evolução.</Text>
          <FontAwesome5 color={colors.background} name="bolt" size={16} />
        </View>

        <View style={[styles.highlights, isWide && styles.highlightsWide]}>
          {[
            ['dumbbell', 'Musculação', 'Treinos para seus objetivos'],
            ['spa', 'Pilates', 'Movimento e bem-estar'],
            ['users', 'Aulas coletivas', 'Energia para treinar em grupo'],
          ].map(([icon, title, description], index) => (
            <View
              key={title}
              style={[
                styles.highlightItem,
                index === 2 && styles.highlightItemLast,
                isWide && styles.highlightItemWide,
              ]}
            >
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
            description="Exemplos de planos que podem ser adaptados para sua academia."
          />
          <View style={[styles.planList, isWide && styles.planListWide]}>
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </View>
          <Text style={styles.planNote}>
            Planos e benefícios ilustrativos. Defina valores e condições antes da publicação.
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
              Personalize este modelo para apresentar sua academia e seus planos.
            </Text>
            {WHATSAPP_URL ? (
              <ActionButton
                onPress={() => openExternalLink(WHATSAPP_URL)}
                accessibilityLabel="Conversar com a equipe pelo WhatsApp"
              >
                <FontAwesome5 color={colors.white} name="whatsapp" size={18} />
                <Text style={styles.buttonText}>Fale com a equipe</Text>
              </ActionButton>
            ) : (
              <ActionButton onPress={() => scrollToSection('plans')}>
                <Text style={styles.buttonText}>Ver planos</Text>
              </ActionButton>
            )}
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
  heroRing: {
    position: 'absolute',
    width: 330,
    height: 330,
    right: -115,
    top: 50,
    borderRadius: 165,
    borderWidth: 1,
    borderColor: 'rgba(147,197,253,0.22)',
  },
  heroAccent: {
    minHeight: 54,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    backgroundColor: colors.yellow,
    overflow: 'hidden',
  },
  heroAccentSweep: {
    position: 'absolute',
    left: 0,
    top: -30,
    bottom: -30,
    width: 180,
  },
  heroAccentText: {
    flexShrink: 1,
    color: colors.background,
    fontFamily: 'Oswald-Bold',
    fontSize: 17,
    letterSpacing: 1.2,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  highlights: {
    marginTop: 16,
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
  highlightItemLast: {
    borderBottomWidth: 0,
  },
  highlightItemWide: {
    borderBottomWidth: 0,
    paddingHorizontal: 10,
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
