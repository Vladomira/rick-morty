"use client";
import { useEffect } from "react";

export default function Error({
  error,
  resetErrorBoundary,
}: {
  error: Error & { digest?: string };
  resetErrorBoundary: () => void;
}) {
  useEffect(() => {
    console.error("error", error);
  }, [error]);

  return (
    <div
      className="chracters__section"
      style={{
        minHeight: "calc(100vh - 65px)",
        backgroundImage:
          " linear-gradient(rgba(47, 48, 58, 0.6), rgba(47, 48, 58, 0.6)),  url(/assets/background/home-back2.jpg)",
      }}
    >
      <div className="container flex flex-col items-center ">
        <h2 className="inform__text-box--text max-w-max">{error.message}</h2>
        <button
          onClick={() => resetErrorBoundary()}
          className="bg-fuchsia-300 text-primaryYellow font-bold text-2xl mt-10 shadow-table px-4 py-2 rounded-lg max-w-max"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
