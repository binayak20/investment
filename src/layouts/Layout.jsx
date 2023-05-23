import React from 'react';
import { MantineProvider } from '@mantine/core';
import WebRoutes from '../routes/WebRoutes';

const Layout = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <WebRoutes />
    </MantineProvider>
  )
}

export default Layout