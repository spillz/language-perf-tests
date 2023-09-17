import time
import random

ARRAY_SIZE = 10000

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Generate random float between 0 and 1
def randFloat():
    return random.random()

# Compute dot product for the array
def dotProduct(points):
    return sum(p.x * p.y for p in points)

# Generate a list of random points
def generateRandomPoints(size):
    return [Point(randFloat(), randFloat()) for _ in range(size)]

def main():
    timedMake = 0
    timedDot = 0

    for _ in range(100):
        start = time.time()
        points = generateRandomPoints(100000)
        timedMake += time.time() - start

        start = time.time()
        result = dotProduct(points)
        timedDot += time.time() - start

    print(f"Point create time taken: {timedMake:.5f} seconds")
    print(f"Dot product time taken: {timedDot:.5f} seconds")
    print(f"Total time taken: {timedDot+timedMake:.5f} seconds")

if __name__ == "__main__":
    main()
