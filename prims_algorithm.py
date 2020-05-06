def prims(edges, cost, no_of_vertices, mst):
    pass


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
    print(g.keys())

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
        # edges[index][2] =
    print(edges)

    # finding the weight of the edge
