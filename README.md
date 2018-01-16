## The Canvas Drawing Assignment

### Introduction

During the Introduction to Web Development (COMP 1536) course at BCIT, I was first introduced to HTML, CSS and Javascript. Time went by, and as we were fast approaching the end of the course, we were introduced to HTML `<canvas>` tag along with the appropriate Javascript scripts. It was good and all, until the *assignment followed along...*


### The Assignment

The goal of the assignment was pretty simple. **Draw a car**. *Oh, okay. Wait, smokes too?* They are *animated?* And why is the car so *smooth and shiny and perfect in the example...* is that even possible? These were some of the initial thoughts I had during the first scan of the assignment. Although the `<canvas>` tag was new to me at that time, I can now say I really underestimated just how much frustration and agony `<canvas>` was going to give me.

### Result

I'm going to provide a link so you can get a visual representation of what was done in the assignment.

[Take a look](http://htmlpreview.github.io/?https://github.com/pkim92/BCIT-School-Project-Canvas/blob/master/index.html)

Yes, I had a partner. He is an awesome guy named Sham. Anyways, the car is obviously not perfect and barely passes the 2D / 3D barrier with no background, but creating that single car alone took ~**390 lines of code.** All that code in a single `drawCar()` function.. I messed up during the production and had to re-write a lot of the codes, but I had not expected that much work for that simple car.
The smoke's credit goes to **Sham**, and together we achieved a high grade for this assignment. 

### What I Learned

I have learned a lot of things during the car production. ~~Never draw anything using `<canvas>`~~ **Thinking** about the approach you'll use to draw in `<canvas>` was one of the big things I've learned by making lots of mistakes. I initially began drawing with a point - line - point method which used `moveTo()` and `lineTo()` **a lot**. Like over 300 times. Around halfway point, I realized that I could not fill my shapes with colors, at least not how I wanted to, since my shapes were not actually shapes where all sides were connected and closed. On top of that, `<canvas>` uses a grid system with coordinates (like most other drawing tools) without a pointer of the coordinates of your points/lines/shapes. To figure out where you were or where you left off, you'd have to look the the source code. There definitely was a better way of drawing this car, and I've learned the hard way that planning was very important in `<canvas>` drawing, at least in my case. 

