import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollWallpaper({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
