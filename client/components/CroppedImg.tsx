type Props = {
  src: string;
  width: number; // rendered width
  height: number; // rendered height
  cropW: number; // crop box width in source px
  cropH: number; // crop box height in source px
  x: number; // left offset in source px
  y: number; // top offset in source px
  className?: string;
};

export default function CroppedImg({ src, width, height, cropW, cropH, x, y, className }: Props) {
  // Render a cropped area from a big source image using object-position
  // We set the wrapper size to "width x height" and scale the image so that
  // 1 CSS pixel corresponds to the source crop size, then shift it with object-position
  return (
    <div
      className={className}
      style={{ width, height, overflow: "hidden", position: "relative", borderRadius: 12 }}
    >
      <img
        src={src}
        alt=""
        style={{
          width: cropW,
          height: cropH,
          objectFit: "none",
          objectPosition: `${-x}px ${-y}px`,
          transform: `scale(${width / cropW}, ${height / cropH})`,
          transformOrigin: "top left",
          display: "block",
        }}
      />
    </div>
  );
}
