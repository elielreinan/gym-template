import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

export default function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    let active = true;
    const subscription = AccessibilityInfo.addEventListener('reduceMotionChanged', setReducedMotion);

    AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => {
        if (active) setReducedMotion(enabled);
      })
      .catch((error) => {
        console.warn('Não foi possível verificar a preferência de movimento reduzido.', error);
      });

    return () => {
      active = false;
      subscription?.remove();
    };
  }, []);

  return reducedMotion;
}
