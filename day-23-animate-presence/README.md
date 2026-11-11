11th November, 2026

Today, I learned about animatePresence and what it does, but before that let us go into day21-useState-motion folder. There, what we have done is that we have applied conditional rendering that when "core" div is clicked, it will add another card and if that div is clicked once again, the card will disapper(we have used useState to do that). But the card disappears instantly, like a shock.

AnimatePresence fills this gap. When the state changes, animatePresence lets us to animate the exit part. We can write a smooth animation for the exit and when we click the button, it appears normally but when the button is clicked once again it disappears with a smooth transition. Concept of variants and staggerChildren is also used here.

The things which I still haven't learned but are important:
1. Choosing the right color,typography and therefore proper class names
