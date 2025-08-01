"use client";

import React from 'react';
import { Alert, Flex } from 'antd';

export default function Error(){

  return (
    <>
       <Flex gap="middle" vertical style={{padding:50}}>
        <Alert
          type="error"
          message="Something went wrong!"
          description="try again."
        />
        
    </Flex>
    </>
  );
  }
