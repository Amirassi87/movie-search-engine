"use client";

import React from 'react';
import { Alert, Flex } from 'antd';
import useNetwork from '../hooks/useNetwork';

export default function NetworkStatus(){

  const isOnline = useNetwork();
  if(isOnline) return null;

    
  return (
    <>
    
       <Flex gap="middle" vertical style={{padding:50}}>
        <Alert
          type="error"
          message="Something went wrong!"
          description="There is no internet connection."
        />
        
    </Flex>
    </>
  );
  }
