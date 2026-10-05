 import Image, { type ImageProps } from "next/image";

export default function SecureImage({
  alt,
  ...props
}: ImageProps) {
  return (
    <div
      className="group relative overflow-hidden"
      data-protected-image="true"
    >
      <Image
        {...props}
        alt={alt}
        draggable={false}
        onContextMenu={(event) => event.preventDefault()}
      />

      <div
        className="pointer-events-none absolute inset-0 z-10 select-none"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-20 bg-transparent"
        aria-hidden="true"
      />
    </div>
  );
}