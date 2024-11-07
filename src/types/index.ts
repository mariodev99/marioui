export interface Website {
    id: string;
    title: string;
    url: string;
    image: string;
  }
  
  export interface Tool {
    id: string;
    title: string;
    categories: string[];
    image: string
    url: string
  }
  
  export interface Component {
    id: string;
    title: string;
    code: string;
    component_name: string
    stack: string[]
  }
  