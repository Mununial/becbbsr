'use client';

import dynamic from 'next/dynamic';

const SubpagesRouter = dynamic(() => import('@/components/SubpagesRouter'), {
  ssr: false,
  loading: () => (
    <div className="fixed top-0 left-0 z-[99999] h-[3px] w-1/3 bg-gradient-to-r from-accent via-yellow-400 to-accent animate-pulse" />
  ),
});

export default function Home() {
  return <SubpagesRouter />;
}
