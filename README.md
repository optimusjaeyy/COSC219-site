# COSC 219 Site

## This site is my lab project for COSC 219 - Client-side Web Sytems.

## Site Contents:

- A short introduction about myself
- A link to my GitHub Pages
- A Contact Page

## GitHub Pages URL:

[My GitHub Pages](https://optimusjaeyy.github.io/cosc219-site/)

_Note: Finding content ideas was the most challenging part for me in making this site._

## Styling Decision:

I decided to use a light purple background for the website with soft yellow background for my paragraphs and lists. These colors are my favorite colors and using these colors made my website look more colorful and fun while still keeping the text readable. I also used padding and rounded corners to give the content more space and make the sections look cleaner.

## Layout Note:

I chose `38rem` and `58rem` as my main breakpoints because they give the page enough room to display additional columns without making the content too crowded. Below `38rem`, the project cards use one column so they remain easy to read on smaller screens. At `38rem` and above, the cards change into two columns. At `58rem` and above, they change into three columns. These breakpoints also help the layout adjust smoothly for medium to larger screens.

I used CSS Grid for the project cards because it makes it easy to create a responsive layout with many columns. It also keeps the cards organized and aligned even when there are different numbers of projects. Furthermore, I also used CSS Grid for the two-columns page layout because I want the main content and side bar to have clear columns. The main contents id wider than the sidebar, and on a narrow screen the sidebar moves underneath the main content.

I used Flexbox for the navigation links because it is well-suited for arranging links in a row and controlling their spacing. I also used flex-wrap so the navigation can stack or wrap on smaller screens instead of becoming difficult to read.

## Lab 4: Guessing Game (JavaScript)

This is a simple word guessing game where players guess letters to reveal a hidden word while trying not to run out of lives.

The answer that surprised me the most in Part A (warmup.js) was `console.log(0 || "fallback")`. As a beginner in JavaScript, I wasn't familiar with how the `||` operator works with values like `0`. Since I usually use Java, learning JavaScript handles these expressions differently has been interesting.

## Lab 5: Arrays, Loops, and Iterators

This lab is a set of functions that answer questions about a data set of 10 Okanagan trails using `map`, `filter`, `find`, `some`, `every`, `reduce`, and `sort`, with no loops. The trap that caught me the most was forgetting that inside an iterator the callback receives a whole trail object, so I kept writing `trail` or made-up property names instead if `trail.km` or `trail.rating`. I also had to remember that `sort` changes the original array, so `sortedByDistance` copies it with `[...trails]` and passes a comparator

## AI-Use Declaration:

I used ChatGPT to guide me through parts of the lab that I needed clarification on. I used it to explain HTML tags and their proper usage when I was unsure how to use them. I also used it to understand CSS concepts better and make improvements to the styling and layout of my website. I reviewed the suggestions and made the changes to my code myself. Since I am still new to JavaScript, I also used ChatGPT to guide me through each function by providing me clues rather than direct answers, and to explain JavaScript fucntions and syntax that I was unfamiliar with.

I used ClaudeAI as a tutor to explain how iterator methods work and to guide me on my code through clues and constant feedbacks. I wrote the functions myself from those clues.
