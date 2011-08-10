/*
Kind of GCD singleton
*/

dispatch_queue_t get_my_background_queue()
{
	static dispatch_once_t once;
	static dispatch_queue_t my_queue;
	dispatch_once(&once, ^{
		my_queue = dispatch_queue_create("com.example.background", NULL);
	});
	return my_queue;
}
