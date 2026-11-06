import { imageSlots, type ImageSlotName } from "@/data/image-slots";

export function SlotImage({
  slot,
  alt,
  className,
  fit = "cover",
}: {
  slot: ImageSlotName;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
}) {
  const image = imageSlots[slot];
  return (
    <img
      src={image.src}
      width={image.width}
      height={image.height}
      alt={alt}
      data-image-slot={slot}
      data-expected-ratio={image.ratio}
      className={className}
      style={{ objectFit: fit, objectPosition: image.position }}
    />
  );
}
