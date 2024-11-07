import { Component, Tool, Website } from "@/types";
import { collection, getDocs, limit, query } from "firebase/firestore/lite";
import { firestore } from "../firebase-config";

export async function GetHomeData() {
    try {
      // Crear consultas para cada colección
      const websitesQuery = query(collection(firestore, "websites"), limit(4));
      const toolsQuery = query(collection(firestore, "tools"), limit(4));
      const componentsQuery = query(collection(firestore, "components"), limit(4));
  
      // Ejecutar todas las consultas en paralelo
      const [websitesSnapshot, toolsSnapshot, componentsSnapshot] = await Promise.all([
        getDocs(websitesQuery),
        getDocs(toolsQuery),
        getDocs(componentsQuery),
      ]);
  
      // Procesar los resultados de cada colección
      const websites: Website[] = websitesSnapshot.docs.map((doc) => doc.data() as Website);
      const tools: Tool[] = toolsSnapshot.docs.map((doc) => doc.data() as Tool);
      const components: Component[] = componentsSnapshot.docs.map((doc) => {
        const id = doc.id
        const data = doc.data()
  
        return {
          id,
          title: data.title,
          code: data.code,
          component_name: data.component_name,
          stack: data.stack,
        } as Component;
      });
  
      // Retornar la respuesta con los datos combinados
      return ({ websites, tools, components });
  
    } catch (error) {
        console.error(error);
        return {};
    }
}
  