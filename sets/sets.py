import time

class Tuple:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

    def product(self):
        return self.x * self.y * self.z

    def __str__(self):
        return f"{self.x}, {self.y}, {self.z}"

    # Ensure that the Tuple can be used as a dictionary key or in a set
    def __hash__(self):
        return hash((self.x, self.y, self.z))

    def __eq__(self, other):
        return (self.x, self.y, self.z) == (other.x, other.y, other.z)

def time_it(callback, repetitions):
    start = time.perf_counter()
    for i in range(repetitions):
        callback(i)
    end = time.perf_counter()
    return (end - start) * 1000  # Convert to milliseconds

def perf_run(callback, repetitions, trials, name, init=None):
    print('Run:', name)
    for i in range(trials):
        if init is not None:
            init(i)
        time_taken = time_it(callback, repetitions)
        print(f'Trial {i} took {time_taken:.2f}ms')
    print()

count = 100000
uniques = 1000
tuples = [Tuple(i % uniques + 4, i % uniques - 7, i % uniques + 100) for i in range(count)]

# Using set for unique Tuple objects
my_set = set()
perf_run(lambda i: my_set.add(tuples[i]), count, 5, f'Add {count} objects with {uniques} values to empty Set', lambda trial: my_set.clear())
print('Set size', len(my_set))
print()

# Using set for unique string representations of Tuple objects
my_set_str = set()
perf_run(lambda i: my_set_str.add(str(tuples[i])), count, 5, f'Add {count} objects with {uniques} values to empty String Set', lambda trial: my_set_str.clear())
print('String set size', len(my_set_str))
print()

# Using list to keep unique string representations of Tuple objects
my_list = []
perf_run(lambda i: my_list.append(str(tuples[i])) if str(tuples[i]) not in my_list else None, count, 5, f'Add {count} objects with {uniques} values to empty List implementation of Set', lambda trial: my_list.clear())
print('List size', len(my_list))
print()

# Lookup objects in the set
perf_run(lambda i: tuples[i] in my_set, count, 5, 'Time to lookup objects in Set')

# Lookup string representations in the string set
perf_run(lambda i: str(tuples[i]) in my_set_str, count, 5, 'Time to lookup objects in String Set')

# Lookup string representations in the list
perf_run(lambda i: str(tuples[i]) in my_list, count, 5, 'Time to lookup objects in List')

# Remove objects from the set
perf_run(lambda i: my_set.discard(tuples[i]), count, 1, 'Time to remove objects from Set')
# print('Set size:', len(my_set))
# print()

# Remove string representations from the string set
perf_run(lambda i: my_set_str.discard(str(tuples[i])), count, 1, 'Time to remove objects from String Set')
# print('String set size:', len(my_set_str))
# print()

# Remove string representations from the list
perf_run(lambda i: my_list.remove(str(tuples[i])) if str(tuples[i]) in my_list else None, count, 1, 'Time to remove objects from List')
# print('List size:', len(my_list))
# print()
