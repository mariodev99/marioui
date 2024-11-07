import { componentMap } from "@/const";
import dynamic from "next/dynamic";

export default function ComponentDynamic({
  component_name,
}: {
  component_name: string;
}) {
  const importComponent =
    componentMap[component_name as string] ||
    (() =>
      import("@/components/examples/ScrollSlider").then((mod) => mod.default));

  // Importa el componente dinámicamente
  const DynamicComponent = dynamic(importComponent);

  return <DynamicComponent />;
}
