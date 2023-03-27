import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
    </div>
  );
}