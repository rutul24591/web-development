# HTML Interview Questions (1–25)

---

### 1. What is the difference between `<div>` and `<span>` elements in HTML?

- **Context**: Used for structuring content.
- **Explanation**: `<div>` is block-level, `<span>` is inline.
- **Example**:
  ```html
  <div>This is a block-level element</div>
  <span>This is an inline element</span>
  ```
- **Interview Frequency**: ★★★★☆
- **Companies**: Google, Meta, Amazon, TCS, Cognizant, Wipro, Accenture

---

### 2. Explain semantic HTML and why it is important.

- **Context**: Accessibility and SEO.
- **Explanation**: Uses tags like `<article>`, `<nav>`, `<header>` to convey meaning.
- **Example**:
  ```html
  <article>
    <header>News Title</header>
    <p>Article content goes here.</p>
  </article>
  ```
- **Interview Frequency**: ★★★★★
- **Companies**: Google, Microsoft, IBM, Adobe, Oracle, Flipkart

---

### 3. What is the purpose of the `<!DOCTYPE html>` declaration?

- **Context**: HTML document structure.
- **Explanation**: Tells browser to use HTML5 rendering mode.
- **Example**:
  ```html
  <!DOCTYPE html>
  ```
- **Interview Frequency**: ★★★★☆
- **Companies**: Infosys, SAP, Zoho, Capgemini, LinkedIn

---

### 4. How do you include a favicon in an HTML document?

- **Context**: Enhances brand identity.
- **Example**:
  ```html
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  ```
- **Interview Frequency**: ★★★☆☆
- **Companies**: Amazon, Adobe, IBM, Swiggy, Zomato

---

### 5. What are data-* attributes in HTML?

- **Context**: Store extra information.
- **Explanation**: Access with `dataset` in JS.
- **Example**:
  ```html
  <div data-user-id="123" data-role="admin"></div>
  <script>
    const div = document.querySelector('div');
    console.log(div.dataset.userId); // "123"
  </script>
  ```
- **Interview Frequency**: ★★★★☆
- **Companies**: Paytm, Ola, Google, IBM, TCS

---

### 6. What is the difference between `<strong>` and `<b>` tags?

- **Explanation**:
  - `<b>` = bold styling.
  - `<strong>` = semantic emphasis.
- **Example**:
  ```html
  <b>Bold</b>
  <strong>Strong emphasis</strong>
  ```
- **Interview Frequency**: ★★★☆☆
- **Companies**: Flipkart, Swiggy, PayPal, Salesforce

---

### 7. How does the `defer` attribute in script tags work?

- **Explanation**: Delays script execution until after parsing HTML.
- **Example**:
  ```html
  <script src="app.js" defer></script>
  ```
- **Interview Frequency**: ★★★★☆
- **Companies**: Microsoft, Google, Paytm, Oracle

---

### 8. What is the purpose of the `alt` attribute in `<img>` tags?

- **Context**: Accessibility.
- **Example**:
  ```html
  <img src="logo.png" alt="Company Logo" />
  ```
- **Interview Frequency**: ★★★★★
- **Companies**: Apple, Google, Infosys, IBM, Wipro

---

### 9. Explain the difference between `id` and `class` attributes.

- **Explanation**:
  - `id`: unique.
  - `class`: reusable.
- **Example**:
  ```html
  <div id="main-content"></div>
  <div class="card"></div>
  ```
- **Interview Frequency**: ★★★★★
- **Companies**: TCS, Capgemini, Adobe, Amazon, Zoho

---

### 10. What is the role of the `<meta charset="UTF-8">` tag?

- **Explanation**: Enables proper character encoding.
- **Example**:
  ```html
  <meta charset="UTF-8" />
  ```
- **Interview Frequency**: ★★★☆☆
- **Companies**: Google, Oracle, Infosys, Mindtree

---

### 11. What is the difference between `localStorage` and `sessionStorage`?

- **Explanation**:
  - `localStorage`: persists.
  - `sessionStorage`: expires on tab close.
- **Example**:
  ```js
  localStorage.setItem('name', 'John');
  sessionStorage.setItem('token', 'abc123');
  ```
- **Interview Frequency**: ★★★★☆
- **Companies**: Microsoft, Amazon, Paytm, Zoho

---

### 12. What is ARIA in HTML and when should you use it?

- **Explanation**: Improves accessibility of custom elements.
- **Example**:
  ```html
  <button aria-label="Close modal">X</button>
  ```
- **Interview Frequency**: ★★★★☆
- **Companies**: Google, Meta, Accenture, IBM, Adobe

---

### 13. What is the use of the `<fieldset>` and `<legend>` tags?

- **Explanation**: Groups form controls with caption.
- **Example**:
  ```html
  <fieldset>
    <legend>Personal Info</legend>
    <label>Name: <input type="text" /></label>
  </fieldset>
  ```
- **Interview Frequency**: ★★☆☆☆
- **Companies**: Wipro, TCS, Zoho

---

### 14. How do you make a form submit without refreshing the page?

- **Explanation**: Use JavaScript to handle submission.
- **Example**:
  ```html
  <form id="myForm">
    <input name="email" />
    <button type="submit">Send</button>
  </form>
  <script>
    document.getElementById('myForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(this);
      fetch('/submit', {
        method: 'POST',
        body: data
      });
    });
  </script>
  ```
- **Interview Frequency**: ★★★★★
- **Companies**: Amazon, Google, Paytm, Flipkart, Ola

---

### 15. Difference between `<script>` in `<head>` vs `<body>`?

- **Explanation**:
  - `<head>` blocks rendering unless deferred.
  - `<body>` allows immediate DOM access.
- **Interview Frequency**: ★★★★☆
- **Companies**: Adobe, Capgemini, SAP, Microsoft

---

### 16. What are void elements in HTML?

- **Explanation**: No closing tag required (e.g., `<br>`, `<img>`, `<hr>`).
- **Interview Frequency**: ★★★☆☆
- **Companies**: Oracle, Wipro, Infosys

---

### 17. How can you disable auto-complete in an HTML form?

- **Explanation**: Use `autocomplete="off"`.
- **Example**:
  ```html
  <form autocomplete="off">
    <input name="email" />
  </form>
  ```
- **Interview Frequency**: ★★★☆☆
- **Companies**: Paytm, Swiggy, Zomato

---

### 18. What is the default method for form submission?

- **Explanation**: Defaults to `GET` if `method` is not specified.
- **Example**:
  ```html
  <form action="/search">
    <input name="q" />
  </form>
  ```
- **Interview Frequency**: ★★☆☆☆
- **Companies**: TCS, HCL, IBM

---

### 19. How to make an element focusable using HTML?

- **Explanation**: Use `tabindex="0"`.
- **Example**:
  ```html
  <div tabindex="0">Focusable</div>
  ```
- **Interview Frequency**: ★★★☆☆
- **Companies**: Google, Adobe, Flipkart

---

### 20. How do you embed a YouTube video in HTML?

- **Explanation**: Use an `<iframe>`.
- **Example**:
  ```html
  <iframe width="560" height="315" src="https://www.youtube.com/embed/xyz123" frameborder="0" allowfullscreen></iframe>
  ```
- **Interview Frequency**: ★★★☆☆
- **Companies**: Infosys, Paytm, Capgemini

---

### 21. Difference between `<link>` and `<style>` tags?

- **Explanation**:
  - `<link>` links external CSS.
  - `<style>` embeds internal CSS.
- **Example**:
  ```html
  <link rel="stylesheet" href="styles.css" />
  <style>
    body { background: #fff; }
  </style>
  ```
- **Interview Frequency**: ★★★★☆
- **Companies**: Zoho, TCS, Cognizant

---

### 22. Can an HTML element have multiple classes?

- **Explanation**: Yes, space-separated class names.
- **Example**:
  ```html
  <div class="card shadow-lg rounded"></div>
  ```
- **Interview Frequency**: ★★★★☆
- **Companies**: IBM, Zoho, Accenture, Flipkart

---

### 23. How do you set a default value for a text input?

- **Example**:
  ```html
  <input type="text" value="John Doe" />
  ```
- **Interview Frequency**: ★★★☆☆
- **Companies**: Wipro, HCL, Zomato

---

### 24. What is the use of the `<base>` tag in HTML?

- **Explanation**: Sets base URL for relative links.
- **Example**:
  ```html
  <base href="https://example.com/" />
  <a href="about">About</a>
  ```
- **Interview Frequency**: ★★☆☆☆
- **Companies**: Oracle, SAP

---

### 25. What is the difference between `<button>` and `<input type="submit">`?

- **Explanation**:
  - `<button>`: customizable with inner HTML.
  - `<input type="submit">`: simpler, no children.
- **Example**:
  ```html
  <button type="submit"><strong>Send</strong></button>
  <input type="submit" value="Send" />
  ```
- **Interview Frequency**: ★★★★☆
- **Companies**: Flipkart, Zoho, Infosys

# HTML Interview Questions (26–50)

---

### 26. What is the difference between `<em>` and `<i>` tags?

- **Explanation**:
  - `<i>` applies italic styling.
  - `<em>` emphasizes text semantically (used by screen readers).
- **Example**:
  ```html
  <i>Italic text</i>
  <em>Emphasized text</em>
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Adobe, IBM, Infosys, Wipro, SAP

---

### 27. How can you make an image responsive using HTML?

- **Explanation**: Set width to 100% and height to auto.
- **Example**:
  ```html
  <img src="image.jpg" style="width:100%; height:auto;" />
  ```
- **Interview Frequency**: ★★★★☆  
- **Companies**: Google, Flipkart, Swiggy, Zomato, Capgemini

---

### 28. What does the `target="_blank"` attribute do in `<a>` tags?

- **Explanation**: Opens link in a new browser tab.
- **Example**:
  ```html
  <a href="https://example.com" target="_blank">Visit</a>
  ```
- **Interview Frequency**: ★★★★☆  
- **Companies**: TCS, IBM, Paytm, Salesforce

---

### 29. What are custom elements in HTML?

- **Explanation**: User-defined elements using Web Components API.
- **Example**:
  ```html
  <my-widget></my-widget>
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Google, Oracle, Amazon, Flipkart

---

### 30. How to include a script after DOM is fully loaded?

- **Explanation**: Use `DOMContentLoaded` event or `defer`.
- **Example**:
  ```html
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM ready');
    });
  </script>
  ```
- **Interview Frequency**: ★★★★☆  
- **Companies**: Microsoft, Meta, Google, Ola, TCS

---

### 31. What is the use of the `<template>` tag in HTML?

- **Explanation**: Holds inert DOM for later rendering via JavaScript.
- **Example**:
  ```html
  <template id="card">
    <div class="user-card">...</div>
  </template>
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Adobe, Google, Amazon, Infosys

---

### 32. What’s the use of the `download` attribute in an `<a>` tag?

- **Explanation**: Prompts download instead of navigation.
- **Example**:
  ```html
  <a href="report.pdf" download>Download PDF</a>
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Wipro, TCS, Cognizant, Flipkart

---

### 33. How do you create a dropdown in HTML?

- **Example**:
  ```html
  <select>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
  </select>
  ```
- **Interview Frequency**: ★★★★☆  
- **Companies**: Paytm, Capgemini, Zoho, Infosys

---

### 34. What is the `<noscript>` tag used for?

- **Explanation**: Provides fallback for users with JavaScript disabled.
- **Example**:
  ```html
  <noscript>Your browser does not support JavaScript!</noscript>
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Google, Oracle, Wipro, HCL

---

### 35. How do you make a radio button pre-selected?

- **Example**:
  ```html
  <input type="radio" name="gender" value="male" checked /> Male
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Zoho, TCS, Cognizant

---

### 36. What is the difference between `<ul>`, `<ol>`, and `<dl>`?

- **Explanation**:
  - `<ul>`: unordered list
  - `<ol>`: ordered list
  - `<dl>`: definition list
- **Example**:
  ```html
  <ul><li>Item</li></ul>
  <ol><li>First</li></ol>
  <dl><dt>HTML</dt><dd>Markup Language</dd></dl>
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Infosys, SAP, Zoho

---

### 37. Can you nest forms in HTML?

- **Explanation**: No, nesting forms is not allowed in HTML5.
- **Interview Frequency**: ★★★☆☆  
- **Companies**: TCS, IBM, Adobe

---

### 38. What is the `autocomplete` attribute in forms?

- **Explanation**: Enables/disables browser autofill.
- **Example**:
  ```html
  <input type="text" autocomplete="on" />
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Wipro, Capgemini, Swiggy

---

### 39. How do you make a checkbox selected by default?

- **Example**:
  ```html
  <input type="checkbox" checked />
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: IBM, Zoho, Oracle

---

### 40. What is the difference between `minlength` and `maxlength` in inputs?

- **Example**:
  ```html
  <input type="text" minlength="3" maxlength="10" />
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Capgemini, Infosys, Paytm

---

### 41. How do you disable an input field in HTML?

- **Example**:
  ```html
  <input type="text" disabled />
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: TCS, Wipro, Swiggy

---

### 42. What is the purpose of the `required` attribute?

- **Example**:
  ```html
  <input type="email" required />
  ```
- **Interview Frequency**: ★★★★☆  
- **Companies**: Google, Paytm, Capgemini

---

### 43. How do you create a hidden input field?

- **Example**:
  ```html
  <input type="hidden" name="token" value="abc123" />
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Adobe, Zoho, IBM

---

### 44. What’s the difference between `readonly` and `disabled`?

- **Explanation**:
  - `readonly`: value is sent with form.
  - `disabled`: value is not submitted.
- **Example**:
  ```html
  <input type="text" readonly value="Read only" />
  <input type="text" disabled value="Disabled" />
  ```
- **Interview Frequency**: ★★★★☆  
- **Companies**: Microsoft, Google, Flipkart

---

### 45. What does `novalidate` do in a form?

- **Explanation**: Disables native validation.
- **Example**:
  ```html
  <form novalidate>
    <input type="email" required />
  </form>
  ```
- **Interview Frequency**: ★★☆☆☆  
- **Companies**: Zoho, TCS

---

### 46. How do you group radio buttons?

- **Explanation**: Use the same `name` attribute.
- **Example**:
  ```html
  <input type="radio" name="gender" value="male" />
  <input type="radio" name="gender" value="female" />
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Cognizant, Infosys, IBM

---

### 47. What is the `accept` attribute in file inputs?

- **Example**:
  ```html
  <input type="file" accept=".jpg, .png" />
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Paytm, Oracle, Google

---

### 48. How do you create an email input field?

- **Example**:
  ```html
  <input type="email" name="user_email" />
  ```
- **Interview Frequency**: ★★★★☆  
- **Companies**: Flipkart, Adobe, Meta

---

### 49. What is the `<progress>` tag used for?

- **Example**:
  ```html
  <progress value="60" max="100"></progress>
  ```
- **Interview Frequency**: ★★☆☆☆  
- **Companies**: SAP, Zoho

---

### 50. What’s the use of the `<output>` tag?

- **Explanation**: Displays result of a calculation.
- **Example**:
  ```html
  <form oninput="result.value = a.valueAsNumber + b.valueAsNumber">
    <input name="a" type="number" /> +
    <input name="b" type="number" /> =
    <output name="result"></output>
  </form>
  ```
- **Interview Frequency**: ★★★☆☆  
- **Companies**: Google, Infosys, Capgemini


---

### 51. What is the `formaction` attribute in HTML?

* **Context**: Used in buttons inside a form to override the form's `action` attribute.
* **Explanation**: Allows different buttons to submit to different URLs.
* **Example**:

  ```html
  <form action="default.php">
    <input type="submit" value="Default" />
    <input type="submit" formaction="alternate.php" value="Alternate" />
  </form>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Oracle, Zoho, TCS, Infosys

---

### 52. How can you disable HTML5 validation on a form?

* **Context**: Useful when handling validations with JavaScript instead.
* **Explanation**: Use `novalidate` on the `<form>`.
* **Example**:

  ```html
  <form novalidate>
    <input type="email" required />
    <input type="submit" />
  </form>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: HCL, Capgemini, Wipro

---

### 53. What is semantic HTML?

* **Context**: Improves accessibility and SEO.
* **Explanation**: Tags that clearly describe their purpose.
* **Example**:

  ```html
  <header>, <nav>, <main>, <footer>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Google, Adobe, Infosys, TCS, Cognizant

---

### 54. How do you create a tooltip in HTML?

* **Context**: Displays information on hover.
* **Explanation**: Use the `title` attribute.
* **Example**:

  ```html
  <button title="Click here to submit">Submit</button>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: IBM, Infosys, Zoho

---

### 55. What is the difference between `<section>` and `<div>`?

* **Context**: Semantic vs non-semantic.
* **Explanation**: `<section>` is semantic; `<div>` is generic.
* **Example**:

  ```html
  <section>About Us</section>
  <div>Just a container</div>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Adobe, Google, Capgemini

---

### 56. What does the `<fieldset>` tag do?

* **Context**: Used in forms.
* **Explanation**: Groups related inputs with an optional `<legend>`.
* **Example**:

  ```html
  <fieldset>
    <legend>Personal Info</legend>
    <input type="text" />
  </fieldset>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Zoho, IBM, TCS

---

### 57. What is the use of `<legend>` tag?

* **Context**: Label for grouped fields.
* **Explanation**: Provides a caption for `<fieldset>`.
* **Example**:

  ```html
  <legend>User Details</legend>
  ```
* **Interview Frequency**: ★★☆☆☆
* **Companies**: HCL, Capgemini

---

### 58. How do you link to an external CSS file in HTML?

* **Context**: Best practice for separation of concerns.
* **Explanation**: Use `<link>` in the `<head>`.
* **Example**:

  ```html
  <link rel="stylesheet" href="style.css" />
  ```
* **Interview Frequency**: ★★★★★
* **Companies**: Google, Meta, Infosys, Paytm, TCS, Amazon

---

### 59. What does `rel="noopener noreferrer"` do in a link?

* **Context**: Prevents performance and security issues.
* **Explanation**: Stops the new page from accessing `window.opener`.
* **Example**:

  ```html
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">Open</a>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Google, Microsoft, Meta

---

### 60. What is the `srcset` attribute in `<img>` tag?

* **Context**: Responsive images.
* **Explanation**: Loads different images for different screen resolutions.
* **Example**:

  ```html
  <img src="default.jpg" srcset="small.jpg 500w, large.jpg 1000w" />
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Google, Flipkart, Adobe, Zoho

---

### 61. What are self-closing tags? Give examples.

* **Context**: Tags that do not require closing.
* **Explanation**: HTML5 allows omitting the slash, but XHTML requires it.
* **Examples**: `<img>`, `<br>`, `<hr>`, `<input>`
* **Interview Frequency**: ★★★☆☆
* **Companies**: Infosys, Capgemini, TCS

---

### 62. What is a viewport meta tag?

* **Context**: Controls layout on mobile browsers.
* **Explanation**: Sets the visible area and scale of the web page.
* **Example**:

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```
* **Interview Frequency**: ★★★★★
* **Companies**: Google, Meta, Paytm, Microsoft

---

### 63. How do you embed a video in HTML?

* **Context**: Useful for multimedia.
* **Explanation**: Use the `<video>` tag.
* **Example**:

  ```html
  <video controls>
    <source src="movie.mp4" type="video/mp4" />
  </video>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Flipkart, Ola, Zoho

---

### 64. What is the difference between `id` and `class`?

* **Context**: Selectors and uniqueness.
* **Explanation**: `id` is unique; `class` is reusable.
* **Example**:

  ```html
  <div id="header"></div>
  <div class="menu"></div>
  ```
* **Interview Frequency**: ★★★★★
* **Companies**: All major companies

---

### 65. What is the purpose of `<meta charset="UTF-8">`?

* **Context**: Character encoding.
* **Explanation**: Ensures characters are rendered correctly.
* **Example**:

  ```html
  <meta charset="UTF-8" />
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Google, Amazon, Adobe, Microsoft

---

### 66. How do you create a telephone link in HTML?

* **Context**: Phone call support.
* **Explanation**: Use `tel:` protocol in `href`.
* **Example**:

  ```html
  <a href="tel:+123456789">Call Us</a>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Capgemini, Infosys, Zoho

---

### 67. What is the `pre` tag and its use?

* **Context**: Preserves whitespace and formatting.
* **Explanation**: Displays text exactly as written.
* **Example**:

  ```html
  <pre>
  Line 1
  Line 2
  </pre>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Infosys, Adobe, TCS

---

### 68. What is the use of `<mark>` tag?

* **Context**: Highlights text.
* **Explanation**: Typically used to indicate a match or highlight.
* **Example**:

  ```html
  <p>This is <mark>important</mark>.</p>
  ```
* **Interview Frequency**: ★★☆☆☆
* **Companies**: HCL, IBM

---

### 69. What is the difference between `<strong>` and `<b>`?

* **Context**: Semantic vs styling.
* **Explanation**: `<strong>` has semantic meaning; `<b>` does not.
* **Example**:

  ```html
  <strong>Important</strong>
  <b>Bold</b>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Google, Microsoft, Infosys

---

### 70. What are inline, block, and inline-block elements?

* **Context**: CSS layout behavior.
* **Explanation**:

  * Inline: Doesn’t break line (e.g., `<span>`)
  * Block: Takes full width (e.g., `<div>`)
  * Inline-block: Acts like inline but respects width/height
* **Example**:

  ```html
  <span>Inline</span>
  <div>Block</div>
  <div style="display:inline-block;">Inline-block</div>
  ```
* **Interview Frequency**: ★★★★★
* **Companies**: Google, Microsoft, Adobe, Flipkart

---

### 71. What is the use of the `<abbr>` tag?

* **Context**: Used for abbreviations.
* **Explanation**: Shows full form on hover.
* **Example**:

  ```html
  <abbr title="World Health Organization">WHO</abbr>
  ```
* **Interview Frequency**: ★★☆☆☆
* **Companies**: Zoho, HCL, Infosys

---

### 72. How do you embed audio in HTML?

* **Context**: Multimedia support.
* **Explanation**: Use `<audio>` tag.
* **Example**:

  ```html
  <audio controls>
    <source src="song.mp3" type="audio/mp3" />
  </audio>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Adobe, Flipkart, Capgemini

---

### 73. What is the difference between absolute and relative URLs?

* **Context**: Linking files.
* **Explanation**: Absolute starts from domain; relative is relative to current page.
* **Example**:

  ```html
  <!-- Absolute -->
  <a href="https://example.com/about.html">About</a>

  <!-- Relative -->
  <a href="about.html">About</a>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Google, Infosys, Zoho, Amazon

---

### 74. What is the role of `tabindex` in HTML?

* **Context**: Keyboard navigation.
* **Explanation**: Controls focus order.
* **Example**:

  ```html
  <input type="text" tabindex="2" />
  <input type="text" tabindex="1" />
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Infosys, Zoho, Capgemini

---

### 75. How do you make an entire div clickable?

* **Context**: UI/UX enhancement.
* **Explanation**: Wrap `<a>` around `<div>`.
* **Example**:

  ```html
  <a href="/profile">
    <div class="profile-card">John Doe</div>
  </a>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Flipkart, Amazon, Paytm, Adobe

---

### 76. What is the `<noscript>` tag used for?

* **Context**: For users who have JavaScript disabled.
* **Explanation**: Provides fallback content.
* **Example**:

  ```html
  <noscript>
    <p>Your browser does not support JavaScript!</p>
  </noscript>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Zoho, HCL, TCS, IBM

---

### 77. What is the use of the `download` attribute in `<a>` tag?

* **Context**: Forces a file to download instead of navigating to it.
* **Explanation**: The file will be downloaded with the given name.
* **Example**:

  ```html
  <a href="resume.pdf" download="My_Resume">Download Resume</a>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Flipkart, Paytm, Adobe

---

### 78. What is the difference between `placeholder` and `value` in `<input>`?

* **Context**: Used in form inputs.
* **Explanation**:

  * `placeholder` is a hint shown when empty
  * `value` is the prefilled content
* **Example**:

  ```html
  <input type="text" placeholder="Enter name" value="John" />
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Infosys, Zoho, TCS

---

### 79. What are custom data attributes in HTML5?

* **Context**: Store extra data on elements without using JS variables.
* **Explanation**: Use `data-*` attributes.
* **Example**:

  ```html
  <div data-user-id="1234"></div>
  ```
* **Interview Frequency**: ★★★★★
* **Companies**: Google, Amazon, Paytm, Microsoft

---

### 80. What is the difference between HTMLCollection and NodeList?

* **Context**: When accessing DOM elements via JavaScript.
* **Explanation**:

  * `HTMLCollection` is live; `NodeList` can be static
  * `NodeList` supports `forEach()`
* **Example**:

  ```js
  const divs = document.getElementsByTagName("div"); // HTMLCollection
  const nodes = document.querySelectorAll("div"); // NodeList
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Google, Microsoft, Flipkart

---

### 81. What is the purpose of the `hidden` attribute in HTML?

* **Context**: Hide elements without removing them from DOM.
* **Explanation**: `display: none` effect via HTML.
* **Example**:

  ```html
  <p hidden>This text is hidden</p>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: TCS, Infosys, Zoho

---

### 82. What is the difference between `target="_self"` and `target="_blank"`?

* **Context**: Anchor tag behavior.
* **Explanation**:

  * `_self`: same tab
  * `_blank`: new tab
* **Example**:

  ```html
  <a href="page.html" target="_self">Same Tab</a>
  <a href="page.html" target="_blank">New Tab</a>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Zoho, Adobe, Flipkart

---

### 83. What are void elements in HTML?

* **Context**: Elements that don’t have a closing tag.
* **Explanation**: Self-closing, e.g., `<img>`, `<br>`, `<hr>`
* **Interview Frequency**: ★★★☆☆
* **Companies**: HCL, Capgemini, Infosys

---

### 84. What is the `lang` attribute in HTML `<html>` tag?

* **Context**: Declares the language of the document.
* **Explanation**: Helps with accessibility and SEO.
* **Example**:

  ```html
  <html lang="en">
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Google, Amazon, Infosys

---

### 85. How do you create collapsible content in HTML?

* **Context**: Expand/collapse UI component.
* **Explanation**: Use `<details>` and `<summary>`.
* **Example**:

  ```html
  <details>
    <summary>More info</summary>
    <p>Extra content goes here</p>
  </details>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Adobe, Zoho, TCS

---

### 86. What is the `contenteditable` attribute?

* **Context**: Editable HTML areas.
* **Explanation**: Turns any element into an editable region.
* **Example**:

  ```html
  <div contenteditable="true">Edit me</div>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Infosys, Capgemini, HCL

---

### 87. What is the use of `<base>` tag in HTML?

* **Context**: Sets base URL for all relative URLs.
* **Explanation**: Useful for handling anchor tags and links.
* **Example**:

  ```html
  <base href="https://example.com/" />
  ```
* **Interview Frequency**: ★★☆☆☆
* **Companies**: IBM, Capgemini

---

### 88. How to disable autocomplete in HTML form?

* **Context**: Prevent browsers from autofilling.
* **Explanation**: Use `autocomplete="off"`.
* **Example**:

  ```html
  <form autocomplete="off">
    <input type="text" name="name" />
  </form>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: TCS, Infosys

---

### 89. What is the `spellcheck` attribute?

* **Context**: HTML5 feature for checking spelling.
* **Explanation**: Can be `true` or `false`.
* **Example**:

  ```html
  <textarea spellcheck="true"></textarea>
  ```
* **Interview Frequency**: ★★☆☆☆
* **Companies**: HCL, Infosys

---

### 90. What does the `translate` attribute do in HTML5?

* **Context**: Indicates whether content should be translated.
* **Explanation**: Set to `yes` or `no`.
* **Example**:

  ```html
  <div translate="no">BrandName</div>
  ```
* **Interview Frequency**: ★★☆☆☆
* **Companies**: Capgemini, Zoho

---

### 91. How to add a favicon to your website?

* **Context**: Site branding.
* **Explanation**: Use `<link>` in `<head>`.
* **Example**:

  ```html
  <link rel="icon" href="favicon.ico" />
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Google, Amazon, Zoho

---

### 92. What is the use of `<address>` tag in HTML?

* **Context**: Contact info.
* **Explanation**: Displays author/contact details.
* **Example**:

  ```html
  <address>123 Main St, NY</address>
  ```
* **Interview Frequency**: ★★☆☆☆
* **Companies**: Infosys, HCL

---

### 93. What is the purpose of `autofocus` attribute?

* **Context**: Focuses on a field when page loads.
* **Explanation**: Used in input fields.
* **Example**:

  ```html
  <input type="text" autofocus />
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Infosys, TCS, Capgemini

---

### 94. How to display code snippets in HTML?

* **Context**: Developer documentation.
* **Explanation**: Use `<code>` and `<pre>` together.
* **Example**:

  ```html
  <pre><code>console.log('Hello');</code></pre>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Adobe, Google

---

### 95. How do you open a link in a new tab?

* **Context**: Navigation control.
* **Explanation**: Use `target="_blank"`.
* **Example**:

  ```html
  <a href="https://example.com" target="_blank">Visit</a>
  ```
* **Interview Frequency**: ★★★★★
* **Companies**: All major companies

---

### 96. What is the difference between `defer` and `async` in script loading?

* **Context**: JavaScript loading strategy.
* **Explanation**:

  * `defer`: waits for HTML to parse
  * `async`: executes immediately when downloaded
* **Example**:

  ```html
  <script src="app.js" defer></script>
  ```
* **Interview Frequency**: ★★★★★
* **Companies**: Google, Amazon, Meta, Flipkart

---

### 97. What is ARIA in HTML?

* **Context**: Accessibility.
* **Explanation**: Provides additional semantics to assistive tech.
* **Example**:

  ```html
  <div role="button" aria-pressed="false">Click</div>
  ```
* **Interview Frequency**: ★★★★☆
* **Companies**: Adobe, Google, Microsoft

---

### 98. What is the `draggable` attribute in HTML5?

* **Context**: Allows elements to be dragged.
* **Explanation**: Set `draggable="true"` on an element.
* **Example**:

  ```html
  <p draggable="true">Drag me</p>
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Zoho, Infosys, HCL

---

### 99. How to include comments in HTML?

* **Context**: Developer notes.
* **Explanation**: Use `<!-- -->`.
* **Example**:

  ```html
  <!-- This is a comment -->
  ```
* **Interview Frequency**: ★★★★★
* **Companies**: All companies

---

### 100. What is the purpose of `inputmode` attribute?

* **Context**: Controls the virtual keyboard.
* **Explanation**: Suggests input type on mobile.
* **Example**:

  ```html
  <input inputmode="numeric" />
  ```
* **Interview Frequency**: ★★★☆☆
* **Companies**: Adobe, Infosys, Capgemini



