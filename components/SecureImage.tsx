import Image, {
  type ImageProps,
} from "next/image";

export default function SecureImage({
  alt,
  ...props
}: ImageProps) {
  return (
    <div
      className="relative overflow-hidden"
      data-protected-image="true"
    >
      <Image
        {...props}
        alt={alt}
        draggable={false}
      />

      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
      />
    </div>
  );
}