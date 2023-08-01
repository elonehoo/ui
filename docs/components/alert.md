---
outline: deep
---

# Alert

<br />

<Showcase
  title="alert"
  play="https://ui.elonehoo.me/play/?html=DwEwlgbgBAxgNgQwM5ILwCIFwKYCcAuAtAOa7bYB26AfAFBQNSiSyIoZiEwK4BGA9hUJgKAM364AtgnxhB6KAHo6jJuGjxkadAC9CATkM16qpgAdWWjOIpEBcEMdOMActgDuUSdhQJi2AEITVWBFMxVTZg02bXxsAA8ieKQnZygATX4AVygACwQIbCgARigsijIEEC8fJD9sYMZQ9QiGZsgI9ohqIA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYcRWM3bdegAIYANsQwALCBAD0XYGZIGAAelvCYWACGXC7h2HiExGQAFMjC8ox0AFxwANpUqDbJAJSy6aJKKiVlchUsbJw8fPzVBbUKktKpbah0EpEuGDkAjAB0AEw1qBJouDl6Hqxg2T4%2B9CCjdB4%2BZqioaqVUALpIB0hAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g"
>
  <div class="space-center">
    <div class="alert-green">
      <div class="i-carbon-information w-8 h-8" />
      <div>
        <h3 class="font-bold m-0!">
          New message!
        </h3>
        <div class="text-xs">
          You have 1 unread message
        </div>
      </div>
    </div>
  </div>
</Showcase>

## Usage

::: code-group

```html [HTML]
<div class="alert-green">
  <div class="i-carbon-information" />
  <div>
    <h3 class="font-bold">
      New message!
    </h3>
    <div class="text-xs">
      You have 1 unread message
    </div>
  </div>
</div>
```

```jsx [JSX]
<div className="alert-green">
  <div className="i-carbon-information" />
  <div>
    <h3 className="font-bold">
      New message!
    </h3>
    <div className="text-xs">
      You have 1 unread message
    </div>
  </div>
</div>
```

:::

## Rules

```ts
/^alert-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/
```
