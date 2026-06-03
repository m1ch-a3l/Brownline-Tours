"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating?: number;
  max?: number;
  size?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

export default function StarRating({
  rating = 0,
  max = 5,
  size = 16,
  interactive = false,
  onChange,
  className = "",
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const displayRating = hovered !== null ? hovered : rating;

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[...Array(max)].map((_, i) => {
        const value = i + 1;
        const filled = value <= displayRating;
        return (
          <button
            key={i}
            type={interactive ? "button" : undefined}
            onClick={interactive && onChange ? () => onChange(value) : undefined}
            onMouseEnter={interactive ? () => setHovered(value) : undefined}
            onMouseLeave={interactive ? () => setHovered(null) : undefined}
            className={interactive ? "cursor-pointer" : "cursor-default pointer-events-none"}
            aria-label={`${value} star${value !== 1 ? "s" : ""}`}
          >
            <Star
              size={size}
              className={
                filled
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-200 fill-slate-200"
              }
            />
          </button>
        );
      })}
    </div>
  );
}
