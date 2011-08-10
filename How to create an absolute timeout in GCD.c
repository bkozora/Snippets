struct tm tm = {};
strptime("2009-06-11 10:15", "%Y-%m-%d %H:%M", &tm);

struct timespec ts = {};
ts.tv_sec = mktime(&tm);

dispatch_time_t timeout = dispatch_walltime(&ts, 0);