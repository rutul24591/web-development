# 🌬️ Tailwind CSS Cheatsheet

A quick reference guide for Tailwind CSS classes.

---

## 📐 Layout

| Utility         | Description                       |
|----------------|-----------------------------------|
| `container`     | Center container with padding     |
| `box-border`    | Border-box model                  |
| `box-content`   | Content-box model                 |
| `block`         | Display block                     |
| `inline-block`  | Display inline-block              |
| `inline`        | Display inline                    |
| `flex`          | Display flex                      |
| `inline-flex`   | Display inline-flex               |
| `grid`          | Display grid                      |
| `hidden`        | Hide element                      |

---

## 🎯 Flexbox & Grid

### Flexbox

| Class            | Description                      |
|------------------|----------------------------------|
| `flex`           | Enable flexbox                   |
| `flex-row`       | Horizontal direction             |
| `flex-col`       | Vertical direction               |
| `items-center`   | Align items vertically           |
| `justify-center` | Align items horizontally         |
| `gap-x-4`        | Horizontal gap                   |
| `gap-y-4`        | Vertical gap                     |

### Grid

| Class           | Description                       |
|------------------|----------------------------------|
| `grid-cols-3`    | 3 equal columns                  |
| `col-span-2`     | Span 2 columns                   |
| `gap-4`          | Grid gap                         |
| `grid-rows-2`    | 2 rows                           |

---

## 📏 Spacing (Padding & Margin)

| Type    | Class Example         | Description                |
|---------|------------------------|----------------------------|
| Margin  | `m-4`, `mt-2`, `mx-1`  | Margin (all, top, x-axis)  |
| Padding | `p-4`, `py-2`, `pl-6`  | Padding (all, y-axis, left)|

Values: `0`, `0.5`, `1`, `1.5`, ..., `96`, `px`, `auto`

---

## 🧱 Sizing

| Class        | Description                       |
|--------------|-----------------------------------|
| `w-full`     | Full width                        |
| `w-1/2`      | 50% width                         |
| `h-screen`   | Full viewport height              |
| `min-w-0`    | Minimum width                     |
| `max-w-sm`   | Maximum width                     |

---

## 🎨 Colors

### Text Color

```
text-{color}-{shade}
```
Example: `text-blue-500`, `text-gray-900`

### Background Color

```
bg-{color}-{shade}
```
Example: `bg-red-100`, `bg-green-700`

### Border Color

```
border-{color}-{shade}
```
Example: `border-purple-300`

---

## 🧢 Typography

| Class             | Description                   |
|-------------------|-------------------------------|
| `text-sm`         | Small text                    |
| `text-xl`         | Extra-large text              |
| `font-bold`       | Bold text                     |
| `uppercase`       | Uppercase text                |
| `tracking-wide`   | Letter spacing                |
| `leading-tight`   | Line height                   |
| `truncate`        | One-line truncate             |

---

## 🖊️ Borders

| Class             | Description                   |
|-------------------|-------------------------------|
| `border`          | 1px border                    |
| `border-2`        | 2px border                    |
| `border-t`        | Border top                    |
| `rounded`         | Border radius                 |
| `rounded-full`    | Fully rounded (pill/circle)   |
| `divide-x-2`      | Divider between child items   |

---

## 🔥 Effects

| Class            | Description                    |
|------------------|--------------------------------|
| `shadow`         | Small box shadow               |
| `shadow-lg`      | Large shadow                   |
| `opacity-50`     | 50% opacity                    |
| `hover:opacity-75` | Opacity on hover             |
| `transition`     | Enable transition              |
| `duration-300`   | 300ms transition duration      |
| `ease-in-out`    | Timing function                |

---

## 🧭 Positioning

| Class         | Description                       |
|---------------|-----------------------------------|
| `static`      | Default position                  |
| `relative`    | Relative positioning              |
| `absolute`    | Absolute positioning              |
| `fixed`       | Fixed to viewport                 |
| `top-0`       | Top edge                          |
| `z-10`        | Z-index value                     |

---

## 🎛️ Miscellaneous

| Class               | Description                     |
|---------------------|---------------------------------|
| `cursor-pointer`    | Pointer cursor                  |
| `select-none`       | Disable text selection          |
| `overflow-hidden`   | Hide overflow                   |
| `overflow-scroll`   | Scroll overflow                 |
| `resize`            | Make resizable                  |

---

## 🌗 Dark Mode

Enable in `tailwind.config.js`:

```js
darkMode: 'class'
```

Usage: Add `dark:` before classes like `dark:bg-black dark:text-white`
