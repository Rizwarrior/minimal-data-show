export const track = (event: string, props?: Record<string, unknown>) => {
  // Minimal analytics stub — replace or integrate with your provider later
  if (typeof window !== 'undefined') {
    // Push to dataLayer if present (for GTM), otherwise log
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event, ...props });
  }
  // Always log for dev visibility
  console.info(`[analytics] ${event}`, props || {});
};
