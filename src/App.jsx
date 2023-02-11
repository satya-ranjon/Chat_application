import React, { lazy, Suspense } from "react";
import AppWrap from "./layouts/AppWrap";

const Imag = lazy(() => import("./img"));

export default function App() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <AppWrap />
    </Suspense>
  );
}
