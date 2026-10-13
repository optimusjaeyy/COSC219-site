# COSC 219 site

**This site is my lab project for COSC 219 - Client-side Web Sytems.**

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

I chose 38rem and 58rem as my main breakpoints because they give the page enough room to display additional columns without making the content too crowded. Below 38rem, the project cards use one column so they remain easy to read on smaller screens.At 38rem and above, the cards change into two columns. At 58rem and above, they change into three columns. These breakpoints also help the layout adjust smoothly for medium to larger screens.

I used CSS Grid for the project cards because it makes it easy to create a responsive layout with many columns. It also keeps the cards organized and aligned even when there are different numbers of projects. Furthermore, I also used CSS Grid for the two-columns page layout because I want the main content and side bat ro have clear columns. The main contents id wider than the sidebar, and on a narrow screen the sidebar moves underneath the main content.

I used Flexbox for the navigation links because it is well-suited for arranging links in a row and controlling their spacing. I also used flex-wrap so the navigation can stack or wrap on smaller screens instead of becoming difficult to read.

## Lab 4: Guessing Game (JavaScript)

This is a simple word guessiong game where players guess letters to reveal a hidden word while trying not to run out of lives.

The answer that surprised me the most in Part A (warmup.js) was `console.log(0 || "fallback")` As a beginner in JavaScript, I wasn't familiar with how the `||` operator works with values like `0`. Since I usually use Java, learning JavaScript handles these expressions differently has been interesting.

## AI-Use Declaration:

I used ChatGPT to guide me through parts of the lab that I needed clarification on. I used it to explain HTML tags and their proper usage when I was unsure how to use them. I also used it to understand CSS concepts better and make improvements to the styling and layout of my website. I reviewed the suggestions and made the changes to my code myself. Since I am still new to JavaScript, I also used ChatGPT to guide me through each function by providing me clues rather than direct answers, and to explain JavaScript fucntions and syntax that I was unfamiliar with.
