'use client';
import React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Pagination } from 'antd';

export default function PaginationHandler({
  totalResults,
  currentPage,
  query,
}: {
  totalResults: number;
  currentPage: number;
  query: string;
}) {
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePageChange = (page: number) => {
    const searchParams = new URLSearchParams(params.toString());

    if (query) {
      searchParams.set('query', query);
    }

    searchParams.set('page', page.toString());
    replace(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="pagination">
      <Pagination
        align="center"
        onChange={handlePageChange}
        current={currentPage}
        total={totalResults}
        showSizeChanger={false}
      />
    </div>
  );
}
