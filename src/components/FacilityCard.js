import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import colors from '../theme/colors';

export default function FacilityCard({ item }) {
  return (
    <ImageBackground
      accessibilityLabel={`Imagem ilustrativa: ${item.title}`}
      imageStyle={styles.image}
      source={{ uri: item.image }}
      style={styles.card}
    >
      <LinearGradient
        colors={['rgba(8,20,41,0.02)', 'rgba(8,20,41,0.25)', 'rgba(8,20,41,0.96)']}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.content}>
        <View style={styles.icon}>
          <FontAwesome5 color={colors.white} name={item.icon} size={20} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 340,
    flex: 1,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: 14,
    backgroundColor: colors.surface,
  },
  image: {
    borderRadius: 14,
  },
  content: {
    padding: 22,
  },
  icon: {
    width: 47,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginBottom: 14,
  },
  title: {
    color: colors.white,
    fontFamily: 'Oswald-Bold',
    fontSize: 32,
    fontWeight: '900',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  description: {
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 7,
  },
});
