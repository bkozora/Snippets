/*
Example of the code to add custom items into the system Menu Bar
*/

@interface Tray : NSObject <NSApplicationDelegate> {
	NSStatusItem *trayItem;
}
@end

@implementation Tray

- (IBAction)testAction:(id)sender;
{
	NSLog(@"Hello World");
}

- (IBAction)quitAction:(id)sender;
{
	[NSApp terminate:sender];
}

- (void)applicationDidFinishLaunching:(NSNotification *)note;
{
	NSZone *zone = [NSMenu menuZone];
	NSMenu *menu = [[[NSMenu allocWithZone:zone] init] autorelease];
	NSMenuItem *item;
	
	item = [menu addItemWithTitle:@"Testing" action:@selector(testAction:) keyEquivalent:@""];
	[item setTarget:self];
	
	item = [menu addItemWithTitle:@"Quit" action:@selector(quitAction:) keyEquivalent:@""];
	[item setTarget:self];
	
	trayItem = [[[NSStatusBar systemStatusBar] statusItemWithLength:NSSquareStatusItemLength] retain];
	[trayItem setMenu:menu];
	[trayItem setHighlightMode:YES];
	[trayItem setTitle:@"HERE"];
}

- (void)dealloc;
{
	[trayItem release];
	[super dealloc];
}

@end
