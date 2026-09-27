type BrandMarkProps = { className?: string };

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <img
      src="/brand/sydy-woven/sydy-logo-white.png"
      alt=""
      aria-hidden="true"
      width={870}
      height={350}
      className={`block h-auto shrink-0 ${className}`}
    />
  );
}
