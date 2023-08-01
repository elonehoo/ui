# Table

<br />

<Showcase
  title="table"
  play="https://ui.elonehoo.me/play/?html=DwEwlgbgBAxgNgQwM5ILwCIAuCBGcCmAtDgPYAe6AfAFBRTDZ76yIoaMGEC2CYAdlVp16mABb4EIGsOEMATtJmyxLZGiy5OYqsCQAHBH0oBJEMAD0%2Bw5QtjFSkaNVsNTQtptWjAOQRd8Fl425nZCMrYKYfQh4pL2IqQgAJ7O6hxEiUmCDvLx4ZggqeyaRAVUAIy2UlH5hfBqxW5llACqfCQAwihVedGYkTn9vXQMdaxpJe4gVABMPTXKYw2uWtOUAAL4cCR8%2BKIkJOYArmDzOSEDsiGZirYlNBbgEDRAA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYcRWM3bdegAIYANsQwALCBAD0XYGZIGAAelvCYWACGXC7h2HiExGQAFMjC8ox0AFxwANpUqDbJAJSy6aJKKiVlchUsbJw8fPzVBbUKktKpbah0EpEuGDkAjAB0AEw1qBJouDl6Hqxg2T4%2B9CCjdB4%2BZqioaqVUALpIB0hAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g"
>
  <div class="space-center">
    <div class="table-box">
      <table class="table-main">
        <thead>
          <tr>
            <th class="table-th"><Grid class="h-5! w-5!"/></th>
            <th class="table-th"><Grid class="h-5! w-8!"/></th>
            <th class="table-th"><Grid class="h-5! w-10!"/></th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr>
            <td class="table-td"><Grid class="h-5! w-5!"/></td>
            <td class="table-td"><Grid class="h-5! w-8!"/></td>
            <td class="table-td"><Grid class="h-5! w-10!"/></td>
          </tr>
          <tr>
            <td class="table-td"><Grid class="h-5! w-5!"/></td>
            <td class="table-td"><Grid class="h-5! w-8!"/></td>
            <td class="table-td"><Grid class="h-5! w-10!"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</Showcase>

<style scoped>
.vp-doc th {
  background-color:transparent;
}
.vp-doc tr:nth-child(2n) {
  background-color:transparent;
}
.vp-doc table {
  margin: 0;
}
</style>


## Usage

::: code-group

```html [HTML]
<div class="table-box">
  <table class="table-main">
    <thead>
      <tr>
        <th class="table-th"></th>
        <th class="table-th"></th>
        <th class="table-th"></th>
      </tr>
    </thead>
    <tbody class="table-body">
      <tr>
        <td class="table-td"></td>
        <td class="table-td"></td>
        <td class="table-td"></td>
      </tr>
    </tbody>
  </table>
</div>
```

```jsx [JSX]
<div className="table-box">
  <table className="table-main">
    <thead>
      <tr>
        <th className="table-th"></th>
        <th className="table-th"></th>
        <th className="table-th"></th>
      </tr>
    </thead>
    <tbody className="table-body">
      <tr>
        <td className="table-td"></td>
        <td className="table-td"></td>
        <td className="table-td"></td>
      </tr>
    </tbody>
  </table>
</div>
```

:::

## Rules

```ts
/^table-((box|main|th|body|td))$/
```
