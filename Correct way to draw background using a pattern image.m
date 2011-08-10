/*
NSColor's colorWithPatternImage method is not the best way to fill rectangle using bitmap. Related URL has all the details about this example.
*/

// Save the current graphics state first so we can restore it.
[[NSGraphicsContext currentContext] saveGraphicsState];

// Change the pattern phase.
[[NSGraphicsContext currentContext] setPatternPhase:
    NSMakePoint(0,[self frame].size.height)];

// Stick the image in a color and fill the view with that color.
NSImage *anImage = [NSImage imageNamed:@"bricks"];
[[NSColor colorWithPatternImage:anImage] set];
NSRectFill([self bounds]);

// Restore the original graphics state.
[[NSGraphicsContext currentContext] restoreGraphicsState];