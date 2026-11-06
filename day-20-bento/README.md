6th November, 2026

Today I learned how to make a bento grid. Now those of you who don't know what a bento grid is, I'll tell you. Bento grid is a grid having elements on a particular row less than the total number of columns on it. One element can occupy the empty space if there are less number of elements. Kind of like jagged array(java users, you know it!).

Another thing that I found unique was "md:col-span-2". I did understand col-span-2 part: it just means to span two columns width.  I was confused about the "md" part. Here is its meaning: 

    The md: prefix stands for "medium screens and up" (specifically 768px wide and above, like tablets, laptops, and desktop monitors).

    On mobile screens (< 768px): The md: prefix is ignored. The card defaults to full-width (col-span-1 or stacked), preventing it from breaking tiny phone screens.

    On desktop screens (≥ 768px): The rule kicks in, and the card expands to take up 2 columns.


I also tried changing col-span-2 to col-span-5 although the grid container was of just 3 columns. And it did span and took that space. Through this, I understood that col-span is not about the number of columns, but the width of a column. And col-span-2 means to occupy 2 times the space of 1 column.


BTW, its so easy to use framer motion + tailwind rather than writing custom css. Just find the required className of div and you are all set.
