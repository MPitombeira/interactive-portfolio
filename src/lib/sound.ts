export function playSound(src: string, volume = 0.3) {
  if (typeof window === "undefined") return;
  if ((window as any).isMuted) return;

  const audio = new Audio(src);
  audio.volume = volume;
  audio.play().catch(() => {});
}