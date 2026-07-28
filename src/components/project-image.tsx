"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  containerClassName?: string;
}

/**
 * Componente optimizado de imagen para el portfolio.
 * Utiliza Next.js Image para compresión WebP/AVIF y lazy loading,
 * con un Skeleton Loader suave que elimina saltos de layout (CLS).
 */
export function ProjectImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = true,
  width,
  height,
  containerClassName,
}: ProjectImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      {isLoading && (
        <Skeleton className="absolute inset-0 z-10 w-full h-full rounded-none bg-muted/70 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={sizes}
        onLoad={() => setIsLoading(false)}
        className={cn(
          "transition-all duration-500",
          isLoading ? "scale-105 blur-xs opacity-0" : "opacity-100",
          className
        )}
      />
    </div>
  );
}
