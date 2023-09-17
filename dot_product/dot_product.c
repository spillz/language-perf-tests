#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define ARRAY_SIZE 10000

typedef struct {
    float x;
    float y;
} Point;

// Generate random float between 0 and 1
float randFloat() {
    return (float)rand() / RAND_MAX;
}

// Compute dot product for the array
float dotProduct(Point* arr, int size) {
    float sum = 0.0;
    for(int i = 0; i < size; i++) {
        sum += arr[i].x * arr[i].y;
    }
    return sum;
}

// Generate an array of random points on the heap
Point* generateRandomPoints(int size) {
    Point* points = (Point*)malloc(sizeof(Point) * size);
    if (!points) {
        fprintf(stderr, "Memory allocation failed!\n");
        exit(EXIT_FAILURE);
    }

    for(int i = 0; i < size; i++) {
        points[i].x = randFloat();
        points[i].y = randFloat();
    }
    return points;
}

int main() {


    // Measure performance
    clock_t timedMake = clock();
    clock_t timedDot = clock();
    for (int i=0;i<100;i++) {
        clock_t start = clock();
        Point *points = generateRandomPoints(100000);
        timedMake += clock()-start;
        start = clock();
        float result = dotProduct(points, ARRAY_SIZE);
        timedDot += clock()-start;
        free(points);
    }

    printf("Point create time taken: %f seconds\n", (double)timedMake/CLOCKS_PER_SEC);
    printf("Dot product time taken: %f seconds\n", (double)timedDot/CLOCKS_PER_SEC);
    printf("Total time taken: %f seconds\n", ((double)timedDot+(double)timedMake)/CLOCKS_PER_SEC);

    return 0;
}
