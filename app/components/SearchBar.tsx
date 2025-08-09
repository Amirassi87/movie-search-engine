'use client';
import React from 'react';
import { Input } from 'antd';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import debounce from 'lodash.debounce';

export default function SearchBar() {
  const paramsString = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = new URLSearchParams(paramsString);

  const handleSearch = debounce((term: string) => {
    if (term) {
      searchParams.set('query', term);
      searchParams.set('page', '1');
    } else {
      searchParams.delete('query');
      searchParams.delete('page');
    }

    replace(`${pathname}?${searchParams.toString()}`);
  }, 1000);

  return (
    <div>
      <Input
        placeholder="Type to search ..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
