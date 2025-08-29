type Props = { src: string; height: number; offsetY: number; className?: string };
export default function SpriteSection({ src, height, offsetY, className }: Props) {
  return (
    <section
      aria-hidden
      className={className ?? "w-full"}
      style={{
        height,
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1920px auto",
        backgroundPosition: `center -${offsetY}px`,
      }}
    />
  );
}
