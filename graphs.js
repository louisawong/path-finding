// create a graph class

class Graph {
  // defining vertex array and adjacency list
  constructor () {
    // number of vertices
    this.size = 0;

    // stores an adjacency list of a particular vertex
    // key of a map holds a vertex and values holds an array
    // of an adjacent node
    this. adjList = new Map();
  }

  // functions to be implemented
  addVertex(v) {
    // adds the vertex v as key to adjList and initialize its values with an array
    // initialize the adjacent list with a null array
    this.size++;
    this.adjList.set(v, [])
  }

  addEdge(v, w) {
    // it adds an edge between the src and dest.
    // get the list for vertex v and put the vertex w denoting the
    // edge between v and w
    this.adjList.get(v).push(w)

    // since the graph is undirected, add an edge from w to v also
    this.adjList.get(w).push(v);

  }

  printGraph() {
    // get all the vertices
    let getKeys = this.adjList.keys();

    // iterate over the vertices
    for (var i of getKeys) {
      let getValues = this.adjList.get(i);
      let conc = ''
      for (var j of getValues) {
        conc += j + ' ';
      }
      console.log(i + ' => ' + conc)
    }
  }

  breadth (start, visited = new Map()) {

    //create an object for Queue
    let queue = [];

    //add the starting node to the queue;
    visited[start] = true;
    queue.unshift(start);

    //loop until queue is empty
    while (queue.length!=0) {
      let getQueueElement = queue.pop();

      //get the adjacent list for current vertex
      let get_Edges = this.adjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet

      let neighbours
      for (let i in get_Edges){
        let neighV = get_Edges[i];
        neighbours = this.adjList.get(get_Edges[i])

        if (!visited[neighV]){
          visited[neighV] = true;
          queue.shift(neighV);
        }
      }

      if (Object.keys(visited).length === this.num) {
        console.log(num)
        return visited;
      } else {
        for (let j = 0; j<neighbours.length; j++) {
          if (visited[neighbours[j]] == undefined) {
            this.breadth(neighbours[j], visited)
            return Object.keys(visited);
          }
        }
      }
    }
  }

}

let graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')


graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('B', 'C')
graph.addEdge('D', 'E')
graph.addEdge('C', 'E')
graph.addEdge('E', 'F')

console.log(graph.breadth('A'))


// graph.printGraph()
