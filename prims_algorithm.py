from operator import itemgetter


def prims(g, edges, vertices, edges_in_mst):
    min_cost = 0

    # creating a dictionary with vertices as its key and distance from the
    # selected edges as value
    near = {}
    # no_of_vertices = len(vertices)
    for vertex in vertices:
        near[vertex] = float("inf")
    # print(f'near array is: {near}')
    print(f'edges are: {edges}')

    # finding the edge with lowest weight
    min_tuple = min(edges, key=itemgetter(2))

    # storing the minimum weight edge in minimun spanning tree
    edges_in_mst[0] = min_tuple[:2]

    # adding the vertices of selected edge in a set
    set_of_vertices = set()
    set_of_vertices.add(min_tuple[0])
    set_of_vertices.add(min_tuple[1])
    # print(set_of_vertices)

    # adding the cost of the edge to the total cost of MST
    cost = min_tuple[2]
    min_cost += cost
    # print(f'{min_cost} - -> {edges_in_mst}')

    for key, value in near.items():
        print(f'{key} --> {value}')
        if key in set_of_vertices:
            near[key] = 0
        else:
            for key_2, value_2 in g.items():
                for key_3, value_3 in value_2.items():
                    if key_3 in set_of_vertices:
                        if near[key] > value_3:
                            near[key] = value_3
        smallest_weight = min(near, key=itemgetter(1))
        print(near)


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
    # print(f'vertices of the graph are: {vertices}')
    no_of_vertices = len(vertices)

    # generating weighted edges
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

    # ceating an empty 2D list of dimension [5][2]
    edges_in_mst = [[None for _ in range(2)] for _ in range(no_of_vertices-1)]
    # print(edges_in_mst)

    prims(g, edges, vertices, edges_in_mst)
