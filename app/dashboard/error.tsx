"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="character__section h-[100vh]">
      <h2 className="inform__text-box--text">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-fuchsia-300 text-primaryYellow font-bold text-2xl mt-10 shadow-table px-4 py-2 rounded-lg"
      >
        Try again
      </button>
    </div>
  );
}
