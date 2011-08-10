/*
In Mac OS X 10.5 a new class NSGradient is introduced, that makes it really easy to work with gradients (as you might have guessed from the name). The sample code below shows a basic yet functional implementation of an NSView subclass that has either an colored or gradient background. Please check the related URL to find an example of good colors.
*/

@interface ColorGradientView : NSView
{
  NSColor *startingColor;
  NSColor *endingColor;
  int angle;
}

// Define the variables as properties
@property(nonatomic, retain) NSColor *startingColor;
@property(nonatomic, retain) NSColor *endingColor;
@property(assign) int angle;

@end

@implementation ColorGradientView

// Automatically create accessor methods
@synthesize startingColor;
@synthesize endingColor;
@synthesize angle;

- (id)initWithFrame:(NSRect)frame;
{
  if (self = [super initWithFrame:frame]) {
    [self setStartingColor:[NSColor colorWithCalibratedWhite:1.0 alpha:1.0]];
    [self setEndingColor:nil];
    [self setAngle:270];
  }
  return self;
}

- (void)drawRect:(NSRect)rect;
{
  if (endingColor == nil || [startingColor isEqual:endingColor]) {
    // Fill view with a standard background color
    [startingColor set];
    NSRectFill(rect);
  }
  else {
    // Fill view with a top-down gradient
    // from startingColor to endingColor
    NSGradient* aGradient = [[[NSGradient alloc]
        initWithStartingColor:startingColor
        endingColor:endingColor] autorelease];
    [aGradient drawInRect:[self bounds] angle:angle];
  }
}

- (void)setStartingColor:(NSColor *)newColor;
{
	[startingColor autorelease];
	startingColor = [newColor retain];
	
	[self setNeedsDisplay:YES];
}

- (void)setEndingColor:(NSColor *)newColor;
{
	[endingColor autorelease];
	endingColor = [newColor retain];
	
	[self setNeedsDisplay:YES];
}

- (void)dealloc;
{
	[self setStartingColor:nil];
	[self setEndingColor:nil];
	[super dealloc];
}

@end