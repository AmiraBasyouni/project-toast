import React from 'react';

// CUSTOM ESCAPE HOOK
function useEscape(callback) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', callback);
    return () => window.removeEventLisener('keydown', handleEscape);
  }, [callback]);
}

export default useEscape;
