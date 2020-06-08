from operator import itemgetter


def prims(g, edges, vertices):
    cost_of_mst = 0
    mst_edges = []

    # creating a dictionary near with vertices as its key and minimum distance
    # from the vertices of the edge already selected for MST as value

    # populating the dictionary with infinite value
    near = {}
    for vertex in vertices:
        near[vertex] = float("inf")
    print(f'near array is: {near}')
    print(f'edges are: {edges}')

    # finding the edge with lowest weight
    min_tuple = min(edges, key=itemgetter(2))
    edge = min_tuple[:2]
    # storing the minimum weight edge in minimun spanning tree
    mst_edges.append(edge)

    # adding the vertices of selected edge in a set
    vertices_in_mst = set()
    vertices_in_mst.add(min_tuple[0])
    vertices_in_mst.add(min_tuple[1])

    # adding the cost of the edge to the total cost of MST
    cost = min_tuple[2]
    cost_of_mst += cost
    # print(f'{cost_of_mst} - -> {edges_in_mst}')
    i = 0
    while(i < len(vertices)-2):
        min_weight = float("inf")
        for key, value in near.items():
            # print(f'{key} --> {value}')
            # if vertex has already been selected in MST, distance
            # of it in the near dictionary should be zero
            if key in vertices_in_mst:
                near[key] = 0
            else:
                for vertex, weight in g[key].items():
                    if vertex in vertices_in_mst:
                        current_value = near[key]
                        near[key] = min(current_value, weight)
                        if weight < min_weight:
                            temp_edge = [vertex, key]
                            temp_weight = weight
                            temp_vertex = key
                            min_weight = weight
        # print(f'{temp_edge} --> {temp_weight}')
        # print(near)
        mst_edges.append(temp_edge)
        cost_of_mst += temp_weight
        vertices_in_mst.add(temp_vertex)
        print(f'{mst_edges} --> {cost_of_mst} --> {vertices_in_mst}')
        i += 1
    return mst_edges, cost_of_mst


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
    # size = len(g)

    # generating vertices
    vertices = g.keys()
    # print(f'vertices of the graph are: {vertices}')
    no_of_vertices = len(vertices)

    # cost can simply be found using dictionary methods
    print(f'cost matrix using dictionary is: {g[1][6]}')
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

# generating weighted edges; [(1, 2, 28), (1, 6, 10)....]
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
print(f'Final edges in mst are: {edges_in_mst}')

final_edges = prims(g, edges, vertices)
print(f'edges in mst are: {final_edges}')
