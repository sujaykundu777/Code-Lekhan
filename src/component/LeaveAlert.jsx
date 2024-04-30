import React, { useEffect } from 'react';

const LeaveAlert = () => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; // Required for Chrome
      return ''; // Required for Firefox
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <div></div>; // Empty div to satisfy React requirement of returning JSX
};

export default LeaveAlert;
