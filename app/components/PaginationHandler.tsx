'use client';
import React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Pagination } from 'antd';
import { useRef } from 'react';

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
  const router = useRouter();
  const paginationRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: number) => {
    const searchParams = new URLSearchParams(params.toString());

    if (query) {
      searchParams.set('query', query);
    }

    searchParams.set('page', page.toString());
    router.replace(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  return (
    <div className="pagination" ref={paginationRef}>
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
