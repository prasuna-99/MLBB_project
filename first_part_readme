# Mobile Legends – Animated Website Loader

## Project Overview

This project is a cinematic loading-screen introduction for a Mobile Legends-themed website.

The goal is to create an animated intro where a percentage counter increases from 0% to 100%, a progress bar fills up, and the loading screen slides upward to reveal the main website.

The project is being developed using HTML, CSS, and JavaScript.

## Technologies Used

- **HTML5** – Website structure and elements.
- **CSS3** – Styling, positioning, transitions, and animations.
- **JavaScript** – Loading percentage, progress bar updates, and animation control.

## Project Features

- Full-screen loading screen.
- Percentage counter from 0% to 100%.
- Animated progress bar.
- Loading screen slides upward after completion.
- Main website appears underneath the loading screen.

## Current Project Structure

```text
MLBB_project/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How the Loading Screen Works

### 1. HTML Structure

The HTML contains two main sections:

- `.loader` – The loading screen.
- `.website` – The main website underneath the loader.

The loading content contains:
- `.percentage` – Displays the loading percentage.
- `.progress-bar` – The background track of the progress bar.
- `.progress` – The moving progress indicator.

### 2. CSS Positioning

Important CSS properties learned:

| Property | Purpose |
|---|---|
| `position: fixed` | Keeps the loader positioned relative to the viewport. |
| `top: 50%` | Positions the element halfway down. |
| `left: 50%` | Positions the element halfway across. |
| `transform: translate(-50%, -50%)` | Centers the element using its own dimensions. |
| `width` | Controls horizontal size. |
| `height` | Controls vertical size. |
| `text-align: center` | Centers inline text inside an element. |

### 3. JavaScript Loading Logic

The JavaScript uses:

- `document.querySelector()` to select HTML elements.
- `setInterval()` to update the loading percentage repeatedly.
- `textContent` to update the percentage text.
- `style.width` to update the progress bar.
- `clearInterval()` to stop the timer.
- `classList.add()` to add the CSS class that triggers the upward animation.

### 4. Loader Animation

The loader uses:

```css
.loader {
  transition: transform 1s ease-in-out;
}

.loader.hide {
  transform: translateY(-100%);
  pointer-events: none;
}
```

When the percentage reaches 100%, JavaScript adds the `hide` class.

The loader then slides upward and stops blocking interaction with the website.

---

# Learning Notes – Today's Session

## Part 1: JavaScript Selectors and DOM

### Q1. What does `#` mean in CSS selectors?

**Answer:** It selects an element using its ID.

Example:

```javascript
document.querySelector("#heading");
```

A dot (`.`) selects a class, while `#` selects an ID.

### Q2. Can we rename a JavaScript variable?

**Answer:** Yes.

For example:

```javascript
const title = document.querySelector(".percentage");
title.textContent = "100%";
```

The variable name can change as long as we use the correct name throughout the code.

### Q3. What happens if the class does not exist in HTML?

**Answer:** `querySelector()` returns `null` if it cannot find a matching element.

Trying to access a property such as `.textContent` on `null` causes a JavaScript error.

### Q4. Why store selected elements in variables?

**Answer:**

- Makes code easier to read.
- Avoids repeatedly selecting the same element.
- Allows us to reuse the selected element.

## Part 2: Understanding DOM

DOM stands for **Document Object Model**.

It represents the HTML document as objects that JavaScript can access and modify.

### Q5. What is the difference between `textContent` and `innerHTML`?

**Answer:**

- `textContent` changes the text inside an element.
- `innerHTML` changes the HTML content inside an element and interprets HTML tags.

Example:

```javascript
element.textContent = "<b>Hello</b>";
```

Displays `<b>Hello</b>` as plain text.

```javascript
element.innerHTML = "<b>Hello</b>";
```

Displays Hello in bold.

### Q6. What does `querySelectorAll()` return?

**Answer:** It returns all matching elements in a NodeList.

Difference:

| Method | Result |
|---|---|
| `querySelector()` | First matching element or `null`. |
| `querySelectorAll()` | All matching elements in a NodeList, possibly empty. |

### Q7. Why might JavaScript execute before HTML elements load?

**Answer:** If a script runs in the head without `defer`, the browser can execute it before reaching the HTML elements in the body.

This means JavaScript might not find the elements.

Solutions:

1. Place the script before `</body>`.
2. Use `defer` in the script tag.
3. Use the `DOMContentLoaded` event.

## Part 3: Understanding the Loading Process

### Q8. What happens when we change an element's `textContent`?

**Answer:** It replaces the original text inside that element.

For example:

```javascript
const heading = document.querySelector("h1");
heading.textContent = "Hello World";
```

The original heading text becomes Hello World.

### Q9. If there are three elements with the same class, what does `querySelectorAll()` select?

**Answer:** All three matching elements.

### Q10. Why use `setInterval()` instead of a normal `for` loop for the loading percentage?

**Answer:** A normal `for` loop runs very quickly and usually completes before the browser can display each intermediate value.

`setInterval()` allows the percentage to update over time, making the loading animation visible.

## Part 4: CSS Animation and Transitions

### Q11. Why use `translateY(-100%)` instead of `translateY(100%)`?

**Answer:**

- `translateY(-100%)` moves the element upward by its own height.
- `translateY(100%)` moves the element downward by its own height.

### Q12. What does `transition: transform 1s ease-in-out` do?

**Answer:**

It animates changes to the transform property over one second.

`ease-in-out` means the animation starts slowly, speeds up in the middle, and slows down at the end.

### Q13. What happens when we use `translateY(-50%)`?

**Answer:** The element moves upward by 50% of its own height.

Examples:

- `translateY(-25%)` – Moves up by 25%.
- `translateY(-50%)` – Moves up by 50%.
- `translateY(-100%)` – Moves up by 100%.

### Q14. What happens if a user clicks a button underneath the loader?

**Answer:** If the loader is covering the button, it can receive the click instead of the button.

We can use:

```css
pointer-events: none;
```

This prevents the loader from receiving pointer interactions after its hide class is applied.

## Part 5: Understanding CSS Properties

### What does `opacity` do?

Controls the transparency of an element.

- `opacity: 0` – Invisible.
- `opacity: 0.5` – Half transparent.
- `opacity: 1` – Fully visible.

### What does `transform` do?

It can move, rotate, scale, or skew an element.

Examples:

```css
transform: translateY(-100px);
transform: scale(1.2);
transform: rotate(45deg);
```

### What does `margin` do?

Controls the space outside an element.

It does not scale an element.

---

# Next Development Session

## Phase 3: Main Website Fade-In Animation

The next goal is to make the main website appear smoothly when the loader slides upward.

Planned CSS:

```css
.website {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.website.show {
  opacity: 1;
}
```

Planned JavaScript:

```javascript
const website = document.querySelector(".website");
```

Inside the loading completion condition:

```javascript
loader.classList.add("hide");
website.classList.add("show");
```

## Future Improvements

- Fade-in animation for the main website.
- Slight zoom-in effect while the website appears.
- Mobile Legends-themed hero section.
- Background images and cinematic visual effects.
- Navigation bar and interactive sections.
- Responsive design for different screen sizes.

---

## Learning Goal

The purpose of this project is not just to create a loading screen. It is to understand how HTML, CSS, and JavaScript work together.

I am learning by building the project step by step, understanding each property and function, and answering questions that help develop my problem-solving skills.

**Next session:** Continue with Phase 3 – Main Website Fade-In Animation.
