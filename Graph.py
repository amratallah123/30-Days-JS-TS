class MultiStageGraphSolver:
    def __init__(self, graph):
        self.stages = len(graph)
        self.dp = [0] * self.stages  # Initialize a table to store the minimum costs
        self.graph = graph
        self._solve()

    def _solve(self):
        for stage in range(self.stages - 2, -1, -1):  # Start from the second-to-last stage and work backward
            for vertex in range(len(self.graph[stage])):
                min_cost = float('inf')
                for neighbor in self.graph[stage][vertex]:
                    cost = self.graph[stage][vertex][neighbor] + self.dp[neighbor]
                    min_cost = min(min_cost, cost)
                self.dp[vertex] = min_cost

    def find_cost_between_nodes(self, start_node, end_node):
        return self.dp[start_node] + self.graph[start_node][end_node]

    def find_min_cost_to_node(self, node):
        return self.dp[node]

# Example usage
graph = [
    {0: {1: 1, 2: 3}},
    {0: {3: 2}},
    {0: {3: 4}},
    {0: {}}
]

solver = MultiStageGraphSolver(graph)

start_node = 0
end_node = 3

cost_between_nodes = solver.find_cost_between_nodes(start_node, end_node)
min_cost_to_node = solver.find_min_cost_to_node(start_node)

print(f"Cost between node {start_node} and node {end_node}: {cost_between_nodes}")
print(f"Minimum cost to reach node {start_node}: {min_cost_to_node}")
