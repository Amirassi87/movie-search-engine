'use client';

import React from 'react';
import { Alert, Flex } from 'antd';

export default function Error({ message }: { message: string }) {
  return (
    <div className="movie-container">
      <div className="no-search-container">
        <Flex gap="middle" vertical style={{ paddingTop: 100 }}>
          <Alert type="error" message={message} showIcon />
        </Flex>
      </div>
    </div>
  );
}
