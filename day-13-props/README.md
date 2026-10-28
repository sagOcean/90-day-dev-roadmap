27th October, 2026

I am practicing the concept of props but today I didn't give the required time for studying as comparison to any other days. Of course, the concepts are still unclear but I am on the right track. The task was to build a profile card that accepts data such as name, job, stats,etc through props. I will clearly complete this task tomorrow, on 28th October.


BTW, I fixed all the props problem but haven't made the CSS ok yet. Other things are perfect. Only CSS editing is left.

28th October, 2026

Today, I fixed on some layout changes like:
1. instead of declaring stats as array(let stats = [100, "fancy", "good"]), I declared stats as an object(let stats = { followers: 100, following: "fancy", posts: "good" }) so that I don't need to depend on array indexing. I can just use stats.followers to access the number '100'.  See the changes on stats.jsx

2. in Bio.jsx, I had a seperate div for .bio and .description but I put .description inside of .bio for clean structure.