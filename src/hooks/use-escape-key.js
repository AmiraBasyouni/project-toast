import React from 'react';

function useEscapeKey(action) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        action();
      }
    }

    window.addEventListener('keyup', handleEscape);

    return () => window.removeEventListener('keyup', handleEscape);
  }, [action]);
}

export default useEscapeKey;
