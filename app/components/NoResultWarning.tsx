'use client';

import React from 'react';
import { Alert, Flex } from 'antd';

export default function NoResultWarning() {
  return (
    <>
      <Flex gap="middle" vertical style={{ padding: 50 }}>
        <Alert
          type="error"
          message="No Results Found!"
          description="try another keywords."
        />
      </Flex>
    </>
  );
}
