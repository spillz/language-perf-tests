import numpy as np
import time

ARRAY_SIZE = 100000

# Generate random float between 0 and 1
def generateRandomPoints(size):
    return np.random.rand(size, 2)

# Compute dot product for the array
def dotProduct(points):
    return np.sum(points[:, 0] * points[:, 1])

def main():
    timedMake = 0
    timedDot = 0

    for _ in range(100):
        start = time.time()
        points = generateRandomPoints(ARRAY_SIZE)
        timedMake += time.time() - start

        start = time.time()
        result = dotProduct(points)
        timedDot += time.time() - start

    print(f"Point create time taken: {timedMake:.5f} seconds")
    print(f"Dot product time taken: {timedDot:.5f} seconds")
    print(f"Total time taken: {timedDot+timedMake:.5f} seconds")

if __name__ == "__main__":
    main()
