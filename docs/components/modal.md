---
outline: deep
---

# Modal

<br />

<Showcase
  path="Modal code"
  play="https://ui.elonehoo.me/play/?html=DwIwrgLhD2B2AEBjANgQwM7oLwCIQVgFoBzAJwFNzYd44UBLRAa1wFtoATVZAfQEYAdOgAW0AO4BZTtwAUAShwA%2BAFDx4AeQAOVZcAD04KHBXAO9btGLx6HNtN58aKDNhzsuyJavjAAZtFJWeFZyCFFbHDMLYic0TFwxQl8wZGR4YSSUzxU1NWBhAGYkONcIcgAPCEJkK39YKpCzMCDkclQzWGJCADZ4MsqSUlQAT0IATgAGCfguUiYALn6qshHCPingwgmAQi9c3IA5cjF4AFUASW88vUKc3NN6ADdilzYqgCY9-Z9NF-icJaEdBBQErUYAVimX2%2B8AAmtAwPBUBQkcgKO1hvBkNBoEx6J0kRA%2BsJyPBYMczucADTwMTCRjCazoeAgDDkDi0BCoeDoUK0XyUpDQViaOBUImaCi8iDM3ykYVnWDQADCmEAQAxXe56TR3a5mR66nz6v6uVhVAAs0PuhhgCEe3DA5FwiFQsEQ5E8Jtw%2BCIZEo1EN%2B2V2N5muuNuMmv0%2Bru%2Bn8gRMeii2OIiiAA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYcRWM3bdegAIYANsQwALCBAD0XYGZIGAAelvCYWACGXC7h2HiExGQAFMjC8ox0AFxwANpUqDbJAJSy6aJKKiVlchUsbJw8fPzVBbUKktKpbah0EpEuGDkAjAB0AEw1qBJouDl6Hqxg2T4%2B9CCjdB4%2BZqioaqVUALpIB0hAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g"
>
  <div class="space-center">
    <button class="btn-green" onclick="modal_1.showModal()">
      Open
    </button>
    <dialog id="modal_1" class="modal">
      <form method="dialog" class="w-full h-full">
        <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100 m-0!">
          New UI
        </h3>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            You are already looking at the new UI, which is based on a set of UI component presets from UnoCss。
          </p>
        </div>
        <div class="mt-4">
          <button value="cancel" btn="green">
            Close
          </button>
        </div>
      </form>
    </dialog>
  </div>
</Showcase>


## Usage

::: code-group

```html [HTML]
<button class="btn-green" onclick="modal_1.showModal()">
  Open
</button>
<dialog id="modal_1" class="modal">
  <form method="dialog" class="w-full h-full">
    <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100 m-0!">
      New UI
    </h3>
    <div class="mt-2">
      <p class="text-sm text-gray-500">
        You are already looking at the new UI, which is based on a set of UI component presets from UnoCss。
      </p>
    </div>
    <div class="mt-4">
      <button value="cancel" class="btn-green">
        Close
      </button>
    </div>
  </form>
</dialog>
```

```jsx [JSX]
<button className="btn-green" onclick="modal_1.showModal()">
  Open
</button>
<dialog id="modal_1" className="modal">
  <form method="dialog" className="w-full h-full">
    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100 m-0!">
      New UI
    </h3>
    <div className="mt-2">
      <p clclassNameass="text-sm text-gray-500">
        You are already looking at the new UI, which is based on a set of UI component presets from UnoCss。
      </p>
    </div>
    <div className="mt-4">
      <button value="cancel" calssName="btn-green">
        Close
      </button>
    </div>
  </form>
</dialog>
```

:::

## Rules

```ts
/^modal$/
```
