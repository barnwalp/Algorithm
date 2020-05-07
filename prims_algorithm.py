from operator import itemgetter


def prims(edges, vertices, edges_in_mst):
    min_cost = 0
    near = {}
    # no_of_vertices = len(vertices)
    for vertex in vertices:
        near[vertex] = float("inf")
    print(f'near array is: {near}')
    print(f'edges are: {edges}')
    min_tuple = min(edges, key=itemgetter(2))
    print(min_tuple)


if __name__ == "__main__":
    g = {
        1: {2: 28, 6: 10},
        2: {1: 28, 3: 16, 7: 14},
        3: {2: 16, 4: 12},
        4: {3: 12, 5: 22, 7: 18},
        5: {4: 22, 6: 25, 7: 24},
        6: {1: 10, 5: 25}
    }

    # generating vertices
    vertices = g.keys()
    print(f'vertices of the graph are: {vertices}')
    no_of_vertices = len(vertices)

    # generating edges
    # edges = [(1, 2, 28), (1, 6, 10) .............]
    edges = []
    for key, value in g.items():
        # print(f'{key} --> {value}')
        for edge, cost in value.items():
            if {key, edge} not in edges:
                edges.append({key, edge})
    for index, value in enumerate(edges):
        edges[index] = list(value)
        u = edges[index][0]
        v = edges[index][1]
        cost = g[u][v]
        # print(f'{u} --> {v} --> {cost} --> {edges[index]}')
        edges[index].append(cost)
        edges[index] = tuple(edges[index])

    edges_in_mst = [[None for _ in range(2)] for _ in range(no_of_vertices-1)]
    print(edges_in_mst)

    prims(edges, vertices, edges_in_mst)
