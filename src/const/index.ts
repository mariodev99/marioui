export const componentMap: Record<string, unknown> = {
    ScrollSlider: () =>
      import("@/components/examples/ScrollSlider").then((mod) => mod.default),
    SliderInfinity: () =>
      import("@/components/examples/SliderInfinity").then((mod) => mod.default),
  };
  