---
title: Attributify preset
description: The UnoCSS preset that enables the attributify mode for other presets.
outline: deep
---

# Button

> Buttons allow users to execute commands or make choices.


<Showcase
  path="Button code"
  play="https://ui.elonehoo.me/play/?html=DwEwlgbgfAUABHYAjArgFzQewHZwMYA2AhgM4kC8AREmtgLQDmATgKYvaVSoY5wgsAzIigJo4zNtmAB6blmywEydPPzEyVGvUzoCYbCzqsQnObx1o9BuMZlmF8RPbWkK1WnRKYBaTwGsAT1MVXi8fOBJAuxCHJWdCV00PBgALTBJfAJYCAkwAd2CeXFT0sSyc-OiixScYlw13eis-OgAHfT9C1Wa4duw-KvkamBlwaBgRsfq3AFtfAFZOR2Ui6aT6JGI8FuYiIK46zaJt8SY9wZxYUchYScg1yjm6RZqV1QSGrUZWdjgvgCYAB4kLq8fhCERiIEEC6xWqrD5uL4WKyGYx-DzA0G4FH6FhwYGw17xdRIjxhXyRAIY+gkGbYiLeMR0onLEmJRqMNIZOjlXJ5Gl0GYmA6rEoZODC1lxOqI9ZtDqCggMBng4SiODK1nXaBAA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYcRWM3bdegAIYANsQwALCBAD0XYGZIGAAelvCYWACGXC7h2HiExGQAFMjC8ox0AFxwANpUqDbJAJSy6aJKKiVlchUsbJw8fPzVBbUKktKpbah0EpEuGDkAjAB0AEw1qBJouDl6Hqxg2T4+9CCjdB4+ZqioaqVUALpIB0hAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g"
>
  <div class="space-center">
    <button class="btn-green">Default</button>
    <button class="btn-outline-red">Outline</button>
    <button class="btn-soft-sky">Soft</button>
    <button class="btn-ghost-yellow">Ghost</button>
    <button class="btn-link-pink">Link</button>
  </div>
</Showcase>

## Usage

::: code-group

```html [HTML]
<button class="btn-green">Default</button>
<button class="btn-outline-red">Outline</button>
<button class="btn-soft-sky">Soft</button>
<button class="btn-ghost-yellow">Ghost</button>
<button class="btn-link-pink">Link</button>
```

```jsx [JSX]
<button className="btn-green">Default</button>
<button className="btn-outline-red">Outline</button>
<button className="btn-soft-sky">Soft</button>
<button className="btn-ghost-yellow">Ghost</button>
<button className="btn-link-pink">Link</button>
```

:::

## Rules

### base rules

```ts
/^btn-(?:outline|soft|ghost|link|black)-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/
```

### size rules

```ts
/^btn-((2xs|xs|sm|md|lg|xl))$/
```
