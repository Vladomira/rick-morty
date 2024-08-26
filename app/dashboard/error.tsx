"use client";

import { useEffect } from "react";

import InfoMessage from "@/src/components/InfoMessage";

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
    <div className="empty__scene bg-black-sky bg-image-position">
      <div className="container error__container">
        <InfoMessage message={error.message} />

        <div className="error__button-box">
          <button
            onClick={() => resetErrorBoundary()}
            className="error__button"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
