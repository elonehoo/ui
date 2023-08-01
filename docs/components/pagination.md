# Pagination


<br />

<Showcase
  title="pagination"
  play="https://ui.elonehoo.me/play/?html=DwEwlgbgBAxgNgQwM5ILwCIkAcEwKYC0%2BAdgC54BO6AfAFBRSiSyIoY4DmhARgPYAeNeg0bho8ZGnSdCAWwRhiQkSODEE41lJkE%2BIAJ7ooCCmAQFE3PHAwAFBB0UJSYXkroqVwBFAAWFPAAzDABiIyRSfTg8DHJ%2BUgIQPBheCmdXYgAuYjc8Iwk2aQdCCJN0YU8RaiZNSQwwIhM%2BYiJfPAgKNwsg0nLKhgB6aoGED37vPwDg9DCoCKiY9DiEpJS0lzds3PytdmKiN3IyGgBGYBGxyon-INDwyOjYvHjE5NT0zZziPJY6oq4DmQ8MdqAAmc6jCqea5TO5zB6LZavNYfLJfH4FbT7FJAkEAZghl2hPhu01m80eS2eKze6wyW2%2BOz%2BOmBID6-QY1TEv0KDRgTS6MDaHS6pg4vl6UJUQ0JUsYA3UECJ5zEYxVkDo6qVtCAA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYcRWM3bdegAIYANsQwALCBAD0XYGZIGAAelvCYWACGXC7h2HiExGQAFMjC8ox0AFxwANpUqDbJAJSy6aJKKiVlchUsbJw8fPzVBbUKktKpbah0EpEuGDkAjAB0AEw1qBJouDl6Hqxg2T4%2B9CCjdB4%2BZqioaqVUALpIB0hAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g"
>
  <div class="space-center">
    <div class="page-box">
      <div class="page-main ">
        <nav class="page-body" aria-label="Pagination">
          <a href="#" style="text-decoration:none" class="page-star text-black! dark:text-white!"><div class="w-5 h-5 i-carbon-chevron-left" /></a>
          <a href="#" style="text-decoration:none" class="page-content text-black! dark:text-white!">1</a>
          <a href="#" style="text-decoration:none" class="page-content text-black! dark:text-white!">2</a>
          <a href="#" style="text-decoration:none" class="page-content text-black! dark:text-white!">3</a>
          <a href="#" style="text-decoration:none" class="page-end text-black! dark:text-white!"><div class="w-5 h-5 i-carbon-chevron-right" /></a>
        </nav>
      </div>
    </div>
  </div>
</Showcase>

## Usage

::: code-group

```html [HTML]
<div class="page-box">
  <div class="page-main ">
    <nav class="page-body" aria-label="Pagination">
      <a href="#" class="page-star"><div class="i-carbon-chevron-left" /></a>
      <a href="#" class="page-content">1</a>
      <a href="#" class="page-content">2</a>
      <a href="#" class="page-content">3</a>
      <a href="#" class="page-end"><div class="i-carbon-chevron-right" /></a>
    </nav>
  </div>
</div>
```

```jsx [JSX]
<div className="page-box">
  <div className="page-main ">
    <nav className="page-body" aria-label="Pagination">
      <a href="#" className="page-star"><div class="i-carbon-chevron-left" /></a>
      <a href="#" className="page-content">1</a>
      <a href="#" className="page-content">2</a>
      <a href="#" className="page-content">3</a>
      <a href="#" className="page-end"><div class="i-carbon-chevron-right" /></a>
    </nav>
  </div>
</div>
```

:::

## Rules

```ts
/^page-((box|main|body|star|end|content))$/
```
