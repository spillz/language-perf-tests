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