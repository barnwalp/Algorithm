from operator import itemgetter


def prims(g, edges, vertices, edges_in_mst):
    cost_of_mst = 0

    # creating a dictionary with vertices as its key and distance from the
    # selected edges as value
    near = {}
    # no_of_vertices = len(vertices)
    for vertex in vertices:
        near[vertex] = float("inf")
    print(f'near array is: {near}')
    print(f'edges are: {edges}')

    # finding the edge with lowest weight
    min_tuple = min(edges, key=itemgetter(2))

    # storing the minimum weight edge in minimun spanning tree
    edges_in_mst[0] = min_tuple[:2]

    # adding the vertices of selected edge in a set
    vertices_in_mst = set()
    vertices_in_mst.add(min_tuple[0])
    vertices_in_mst.add(min_tuple[1])
    # print(vertices_in_mst)

    # adding the cost of the edge to the total cost of MST
    cost = min_tuple[2]
    cost_of_mst += cost
    # print(f'{cost_of_mst} - -> {edges_in_mst}')

    for key, value in near.items():
        # print(f'{key} --> {value}')
        # print(vertices_in_mst)
        # if vertex has already been selected in MST, distance
        # of it in the near dictionary should be zero
        if key in vertices_in_mst:
            near[key] = 0
        else:
            for vertex, value_in_vertex in g.items():
                for inner_vertex, weight in value_in_vertex.items():
                    if inner_vertex in vertices_in_mst:
                        if near[key] > weight:
                            near[key] = weight

        # find the key of dictionary which corresponds to the minimum value
        # smallest_weight = min(near, key=near.get)


if __name__ == "__main__":
    g = {
        1: {2: 28, 6: 10},
        2: {1: 28, 3: 16, 7: 14},
        3: {2: 16, 4: 12},
        4: {3: 12, 5: 22, 7: 18},
        5: {4: 22, 6: 25, 7: 24},
        6: {1: 10, 5: 25},
        7: {2: 14, 4: 18, 5: 24}
    }
    size = len(g)

    print(f'cost matrix using dictionary is: {g[1][6]}')
    # generating vertices
    vertices = g.keys()
    # print(f'vertices of the graph are: {vertices}')
    no_of_vertices = len(vertices)

    # creating an empty cost matrix of size [vertices+1][vertices+1]
    # as list will start with index 0 and vertices start with 1; so to
    # accomodate 7 vertices, 8 indices will be required
    # cost_matrix = [
    #     [float("inf") for _ in range(size+1)]
    #     for _ in range(size+1)
    # ]

    # populating the cost matrix with the weight of the edge, cost of
    # the two vertices (say k, l) will be denoted by cost_matrix[k][l]
    # for key, value in g.items():
    #     cost_matrix[key][key] = 0
    #     for adjacent_key, weight in value.items():
    #         # print(f'{adjacent_key} --> {weight}')
    #         cost_matrix[key][adjacent_key] = weight
    # print(cost_matrix)

    # generating weighted edges like following
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

    # ceating an empty 2D list of dimension [no_of_verties-1][2]
    edges_in_mst = [
        [None for _ in range(2)]
        for _ in range(no_of_vertices-1)
    ]
    print(edges_in_mst)

    prims(g, edges, vertices, edges_in_mst)

    # check = [_ for _ in range(5)]
    # print(check)
