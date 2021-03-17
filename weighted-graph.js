class Node {
  constructor (vertex,weight) {
    this.vertex = vertex;
    this.weight = weight;
    this.next = null;
  }
}

class Graph {
  constructor (size) {
    this.graph = {};
    this.verticesSize = 0;
    this.edgesSize = 0;
  }

  addVertex (name) {
    this.graph[name] = null;
    this.verticesSize ++;
  }

  addEdge (v1, v2, weight) {
    this.edgesSize++;
   if (this.graph[v1]){
       let edge2 = new Node (v2, weight);
       if (this.graph[v1] === null) this.graph[v1] = edge2;
        else {
          let currentNode = this.graph[v1];
          while (currentNode) {
            if (!currentNode.next) currentNode.next = edge2;
            currentNode = currentNode.next;
          }
       }
    }
    if (this.graph[v2]) {
       let edge1 = new Node (v1,weight);
       if (this.graph[v2]===null) this.graph[v2]=edge1;
       else this.graph[v2]
    }
}
let graph = new Graph(6);
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
console.log(graph.graph)
