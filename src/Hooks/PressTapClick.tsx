import React, { useCallback, useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";

interface DoubleTapWrapperProps {
  delay?: number;
  children: React.ReactNode;
  onSingleTap: () => void;
  onDoubleTap: () => void;
}

export default function PressTapClick({
  delay = 300,
  children,
  onSingleTap,
  onDoubleTap,
}: DoubleTapWrapperProps) {
  const [firstPress, setFirstPress] = useState(true);
  const [lastTime, setLastTime] = useState(new Date().getTime());
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  });

  const onTap = useCallback(() => {
    const now = new Date().getTime();

    // Single tap
    if (firstPress) {
      setFirstPress(false);

      setTimer(
        setTimeout(() => {
          onSingleTap && onSingleTap();

          setFirstPress(true);
          setTimer(null);
        }, delay)
      );

      setLastTime(now);
    } else {
      // Double tap
      if (now - lastTime < delay) {
        timer && clearTimeout(timer);
        onDoubleTap && onDoubleTap();
        setFirstPress(true);
      }
    }
  }, [firstPress, lastTime, delay, onDoubleTap, onSingleTap, timer]);

  return (
    <Pressable onPress={onTap} style={styles.container}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
