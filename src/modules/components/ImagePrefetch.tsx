type Props = {
  src: string;
};

// Increase the network loading priority of the background image.
export function ImagePrefetch({ src }: Props) {
  return (
    <img
      style={{
        width: 1,
        height: 1,
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: -100,
        opacity: 0.1,
      }}
      src={src}
      alt="prefetch image"
    />
  );
}
