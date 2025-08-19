import React from 'react';
import { Flex, Skeleton } from 'antd';

const App: React.FC = () => (
  <Flex
    justify="center"
    align="center"
    style={{
      height: '100vh',
      width: '72%',
      backgroundColor: 'white',
      margin: 'auto',
    }}
  >
    <Skeleton active />
  </Flex>
);

export default App;
