import React from 'react';

import Statistics from './components/Statistics';
import statisticalData from './mocks/statisticalData.json';

function App() {
   return <Statistics title="Upload stats" stats={statisticalData} />;
}

export default App;
