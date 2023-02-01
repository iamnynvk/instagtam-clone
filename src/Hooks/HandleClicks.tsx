import { PanResponder, View } from "react-native";
import { useState } from "react";

const HandleClicks = ({
  children,
  onSingleClick,
  onDoubleClick,
  onLongClick,
}: any) => {
  const [isTerminated, setTerminated] = useState(false);
  const [touchStartTime, setTouchStartTime] = useState(0);
  const [lastTap, setLastTap] = useState(0);

  const [longPressTimer, setLongPressTimer] = useState(0);
  const [singlePressTimer, setSinglePressTimer] = useState(0);

  const DOUBLE_PRESS_DELAY = 400;
  const LONG_PRESS_DELAY = 700;

  const cancelLongPressTimer = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(0);
    }
  };

  const cancelSinglePressTimer = () => {
    if (singlePressTimer) {
      clearTimeout(singlePressTimer);
      setSinglePressTimer(0);
    }
  };

  const handleTap = (event: any, gestureState: any) => {
    cancelSinglePressTimer();

    const timeNow = Date.now();
    if (lastTap && timeNow - lastTap < DOUBLE_PRESS_DELAY) {
      onDoubleClick();
    } else {
      setLastTap(timeNow);

      const timeout = setTimeout(() => {
        setLastTap(0);
        onSingleClick();
      }, DOUBLE_PRESS_DELAY);

      setSinglePressTimer(timeout);
    }
  };

  const handlePressOut = (event: any, gestureState: any) => {
    const elapsedTime = Date.now() - touchStartTime;
    if (elapsedTime > LONG_PRESS_DELAY) {
      onLongClick();
    } else {
      handleTap(event, gestureState); // handles the single or double click
    }
    setTouchStartTime(0);
  };

  const responder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,

    onPanResponderStart: () => {
      cancelLongPressTimer();

      const timeout = setTimeout(() => {
        if (!isTerminated) {
          setTouchStartTime(Date.now());
        }
      });

      setLongPressTimer(timeout);
    },

    onPanResponderRelease: (event: any, gestureState: any) => {
      handlePressOut(event, gestureState);
    },

    onPanResponderTerminate: () => {
      setTerminated(true);
    },
  });

  return (
    <View {...responder.panHandlers} key={Math.random()}>
      {children}
    </View>
  );
};

export default HandleClicks;
