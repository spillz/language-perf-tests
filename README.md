# language-perf-tests
Performance tests for misc operations across multiple languages


# Dot Product Tests

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

Point create time taken: 0.593064 seconds
Dot product time taken: 0.011583 seconds
Total time taken: 0.604647 seconds

============================================
Python version
Python 3.9.2
Point create time taken: 15.52125 seconds
Dot product time taken: 1.26294 seconds
Total time taken: 16.78419 seconds

============================================
Python numpy version
Python 3.9.2
Point create time taken: 0.16199 seconds
Dot product time taken: 0.04179 seconds
Total time taken: 0.20378 seconds

============================================
Node version
v18.17.1
Point create time taken: 5.192 seconds
Dot product time taken: 0.18 seconds
Total time taken: 5.372 seconds

============================================
Node array version
v18.17.1
Point create time taken: 2.991 seconds
Dot product time taken: 0.15 seconds
Total time taken: 3.141 seconds
```
