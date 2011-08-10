/*
Great example of benchmarking
*/

struct timeval start, end, delta;
assert(gettimeofday(&start, NULL) != -1);

// LAPS should be huge (about a million, probably)
for (int i = 0; i < LAPS; i++)
	test_function();
	
assert(gettimeofday(&end, NULL) != -1);
timersub(&end, &start, &delta);
uint64_t delta_ns = (delta.tv_sec * NSEC_PER_SEC + delta.tv_usec * NSEC_PER_USEC) / LAPS;