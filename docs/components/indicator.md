---
outline: deep
---

# indicator

<br/>

<Showcase
  title="indicator"
  play="https://ui.elonehoo.me/play/?html=AQHgJglgbsDGA2BDAzsgvAIggO0rRALgPYBOGAfAFDA2jIAOi2cSqmOehpAtBAQKYBbYACNEYAOb9uEkv37YKAOX4B3EAHoGTKrVCQYCFOgyyIYYKu4BmAEzAAFjfsiJ3MIhIBrGwAZfwPRIsNJ8QsjcIdgCZOSwRNEKBJoGuqAaqUA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYcRWM3bdegAIYANsQwALCBAD0XYGZIGAAelvCYWACGXC7h2HiExGQAFMjC8ox0AFxwANpUqDbJAJSy6aJKKiVlchUsbJw8fPzVBbUKktKpbah0EpEuGDkAjAB0AEw1qBJouDl6Hqxg2T4%2B9CCjdB4%2BZqioaqVUALpIB0hAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g"
>
  <div class="space-center">
    <div class="indicator">
      <span class="indicator-item badge-green">New</span>
      <div class="grid w-24 h-24">
        <Grid />
      </div>
    </div>
  </div>
</Showcase>

## Usage

::: code-group

```html [HTML]
<div class="indicator">
  <span class="indicator-item badge-green">New</span>
  <div class="grid w-24 h-24">
    <Grid />
  </div>
</div>
```

```jsx [JSX]
<div className="indicator">
  <span className="indicator-item badge-green">New</span>
  <div className="grid w-24 h-24">
    <Grid />
  </div>
</div>
```

:::

## Rules

```ts
/^indicator-(?:top|middle|bottom|end|center|start)$/
```
