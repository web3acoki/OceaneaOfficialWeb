"use client";

import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type LoadedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  frameClassName?: string;
};

export default function LoadedImage({
  className,
  frameClassName = "relative block size-full",
  onLoad,
  src,
  alt = "",
  ...props
}: LoadedImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <span className={frameClassName}>
      {!loaded ? <span className="absolute inset-0 animate-pulse bg-[#e8e8e8]" aria-hidden="true" /> : null}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={[className, loaded ? "opacity-100" : "opacity-0", "transition-opacity duration-300"]
          .filter(Boolean)
          .join(" ")}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        {...props}
      />
    </span>
  );
}
