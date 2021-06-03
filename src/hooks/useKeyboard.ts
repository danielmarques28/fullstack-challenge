import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboard = () => {
  const [keyboardIsOpen, setKeyboardIsOpen] = useState<boolean>(false);

  const _keyboardDidShow = () => setKeyboardIsOpen(true);
  const _keyboardDidHide = () => setKeyboardIsOpen(false);

  useEffect(() => {
    const subscriptionShow = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    const subscriptionHide = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );

    return () => {
      subscriptionShow.remove();
      subscriptionHide.remove();
    };
  }, []);

  return { keyboardIsOpen };
};

export default useKeyboard;
