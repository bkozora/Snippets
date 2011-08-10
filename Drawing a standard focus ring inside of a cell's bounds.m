/*
This listing shows how you draw such a focus ring. It requires you to override the NSCell drawWithFrame:inView: In this method, if the cell is supposed to draw evidence of first-responder status, set the rectangle for the focus ring, call NSSetFocusRingStyle with an argument of NSFocusRingOnly, and then create and fill a bezier path defining that rectangle. Filling in this case simply draws the ring.
*/

- (void)drawWithFrame:(NSRect)cellFrame inView:(NSView *)controlView;
{
    // other stuff might happen here
    if ([self showsFirstResponder]) {
         // showsFirstResponder is set for us by the NSControl that is drawing  us.
        NSRect focusRingFrame = cellFrame;
        focusRingFrame.size.height -= 2.0f;
        [NSGraphicsContextsaveGraphicsState];
        NSSetFocusRingStyle(NSFocusRingOnly);
        [[NSBezierPath bezierPathWithRect: NSInsetRect(focusRingFrame, 4.0f, 4.0f)] fill];
        [NSGraphicsContext restoreGraphicsState];
    }
    // other stuff might happen here
}