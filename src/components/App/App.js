/* @purpose
 * ToastPlayground is a temporary UI
 * which will be used to create and test our toast component
 * */

/* @depth
 * What is a toast component?
 * a toast component is a UI element
 * that displays brief, non-critical messages to users,
 * typically in the form of a small popup or notification
 * */

import React from 'react';

import ToastProvider from '../ToastProvider';
import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
