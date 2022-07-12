import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const title = ' with Webpack and Babel';

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App title={title} />);

if (process.env.NODE_ENV === 'development') {
    module.hot.accept();
}
