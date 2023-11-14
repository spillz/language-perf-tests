# Language Performance Tests

Performance tests for misc operations across multiple languages

## Dot Product Tests

Computes the dot product of an array of 2D points. Focus on the dot product time taken.

```
============================================
Dot product tests
============================================
C version
gcc (Debian 10.2.1-6) 10.2.1 20210110
Copyright (C) 2020 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

Point create time taken: 0.570364 seconds
Dot product time taken: 0.008754 seconds
Total time taken: 0.579118 seconds

============================================
Python version
Python 3.9.2
Point create time taken: 14.16383 seconds
Dot product time taken: 1.26263 seconds
Total time taken: 15.42645 seconds

============================================
Python numpy version
Python 3.9.2
Point create time taken: 0.17348 seconds
Dot product time taken: 0.04402 seconds
Total time taken: 0.21750 seconds

============================================
Pypy version
Python 3.7.10 (7.3.5+dfsg-2+deb11u2, Nov 01 2022, 20:16:31)
[PyPy 7.3.5 with GCC 10.2.1 20210110]
Point create time taken: 1.94258 seconds
Dot product time taken: 0.15141 seconds
Total time taken: 2.09399 seconds

============================================
Node version
v18.17.1
Point create time taken: 4.845 seconds
Dot product time taken: 0.188 seconds
Total time taken: 5.033 seconds

============================================
Node array version
v18.17.1
Point create time taken: 1.735 seconds
Dot product time taken: 0.128 seconds
Total time taken: 1.863 seconds

## Set tests

Testing performance to add, lookup and remove objects in a Set vs manual implementation Array. Note that for JavaScript we have to use a String representation of the tuple object to store unique values (denoted String Set) and the default Set implementation produces incorrect output.

### JavaScript

```
Run: Add 100000 objects with 1000 values to empty Set
Trial 0 took 28.720415994524956
Trial 1 took 42.48651000112295
Trial 2 took 42.07552099972963
Trial 3 took 37.9770839959383
Trial 4 took 40.12276100367308

Set size 100000


Run: Add 100000 objects with 1000 values  to empty String Set
Trial 0 took 68.54994799941778
Trial 1 took 45.85302099585533
Trial 2 took 40.66364599764347
Trial 3 took 40.81088599562645
Trial 4 took 41.243176996707916

String set size 1000


Run: Add 100000 objects with 1000 values to empty Array implementation of set
Trial 0 took 1690.4293219968677
Trial 1 took 1528.3439579978585
Trial 2 took 1592.0281250029802
Trial 3 took 1668.2755199968815
Trial 4 took 1507.1181759983301

Array size 1000


Run: Time to lookup 100000 objects in Set
Trial 0 took 22.21755200624466
Trial 1 took 21.885885000228882
Trial 2 took 21.673176996409893
Trial 3 took 25.594478994607925
Trial 4 took 20.944739997386932

Run: Time to lookup 100000 objects in String Set
Trial 0 took 43.6781769990921
Trial 1 took 38.8420309945941
Trial 2 took 39.481354005634785
Trial 3 took 39.51213600486517
Trial 4 took 47.69062499701977

Run: Time to lookup 100000 objects in Array implementation of Set
Trial 0 took 1499.8455199971795
Trial 1 took 1482.3640620037913
Trial 2 took 1483.224478006363
Trial 3 took 1483.6317180022597
Trial 4 took 1482.0349479988217

Run: Time to remove 100000 objects from Set
Trial 0 took 27.95150999724865

Run: Time to remove 100000 objects from String Set
Trial 0 took 24.01994800567627

Run: Time to remove 100000 objects from Array implementation of Set
Trial 0 took 18.22171899676323
```

###Python

```
Run: Add 100000 objects with 1000 values to empty Set
Trial 0 took 73.72ms
Trial 1 took 74.21ms
Trial 2 took 73.90ms
Trial 3 took 74.01ms
Trial 4 took 74.03ms

Set size 1000

Run: Add 100000 objects with 1000 values to empty String Set
Trial 0 took 76.58ms
Trial 1 took 76.37ms
Trial 2 took 76.70ms
Trial 3 took 76.28ms
Trial 4 took 76.35ms

String set size 1000

Run: Add 100000 objects with 1000 values to empty List implementation of Set
Trial 0 took 810.19ms
Trial 1 took 809.25ms
Trial 2 took 809.76ms
Trial 3 took 809.90ms
Trial 4 took 809.35ms

List size 1000

Run: Time to lookup objects in Set
Trial 0 took 69.58ms
Trial 1 took 70.99ms
Trial 2 took 70.82ms
Trial 3 took 70.88ms
Trial 4 took 70.73ms

Run: Time to lookup objects in String Set
Trial 0 took 74.38ms
Trial 1 took 74.11ms
Trial 2 took 74.17ms
Trial 3 took 73.71ms
Trial 4 took 74.20ms

Run: Time to lookup objects in List
Trial 0 took 808.60ms
Trial 1 took 808.79ms
Trial 2 took 808.32ms
Trial 3 took 808.50ms
Trial 4 took 807.66ms

Run: Time to remove objects from Set
Trial 0 took 42.68ms

Run: Time to remove objects from String Set
Trial 0 took 74.27ms

Run: Time to remove objects from List
Trial 0 took 68.53ms
```