type BrandMarkProps = { className?: string };

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <img
      src="/brand/sydy-final/sydy-logo-white.svg"
      alt=""
      aria-hidden="true"
      width={714}
      height={420}
      className={`block h-auto shrink-0 ${className}`}
    />
  );
}
