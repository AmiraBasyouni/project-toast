import React from 'react';

function useEscapeKey(handler) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        handler(e);
      }
    }

    window.addEventListener('keyup', handleEscape);

    return () => window.removeEventListener('keyup', handleEscape);
  }, [handler]);
}

export default useEscapeKey;
