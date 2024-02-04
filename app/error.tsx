"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <span className="text-5xl mb-4">500</span>
      <div className="text-xl text-center">
        <p>Something went wrong,</p>
        <p>please try again later...</p>
      </div>

      <div className="text-center mt-8">
        <div>
          <p>error message:</p>
          <p>{error.message}</p>
        </div>
      </div>

      <Button className="w-48 mt-12" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
