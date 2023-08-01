---
outline: deep
---

<script setup lang="ts">
import {ref} from 'vue'
const show = ref(false)
</script>

# Dropdown

<br/>

<Showcase
  path="Dropdown code"
  play="https://ui.elonehoo.me/play/?html=DwEwlgbgfAUABHUk4GMA2BDAzlgvAIhACcB7ABxBIHcA7AWgCMSAPfWBJCVTHA48yrTpEAppgAukEW3gJE4Lumx5CpCtXqYGYmXLnAGAV3HiSNbsoINx9AOaiRNXXv1YyGc0t74GaEigBrOHEiQxoUDHFpKAABMTMRAAsSEgB6QzBgVLcPdhcOBQtvMDoIoiZ6FESRCFJ6QXMAMzQRZjosRKIwGgC6AAY4RLoAVjgqEfw4VLy9LKMTMxnEVIUlziKVfnUhFDMomnFnWcM0Db41BrowKIBbLCOXYDQwM9UBDSvbh-z1rxVm1pwa4iO6lRxRIhwWwYMh0ABMcBu3To4z633yiBynh4KhCYQiUTYAFUaCQAMI4LJYpYYzHubGWfAYBhYEhoYwiIE0LAicR0ACe-TgjhAQoBzCBtywYIOIkhZBE8PRtOAWNeQwALGM6Fqosw%2BfYMIKAJx9AYgDBEAIALj1fKoiWBcHF7U63V6aKmNIxVPp3tmK0g-uWz2DTxef3O7yEwJuyv0hUj%2BHFkpB0pQ4LlUJh8MRyNR8dmaqTePCkWicT8NCSKXSmWyftktI4xZxBGZrPZUS5PL5goGIrFLQlsfTmflirhhcercZJTKFVK1UCN0tQU12t1rQNRCNdFN5rXtu3KMd3ZdHS6PX6k2mTebvty95%2Bgegz-0qVD76yJzWr7yWSrDAgFBsB-5AA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYcRWM3bdegAIYANsQwALCBAD0XYGZIGAAelvCYWACGXC7h2HiExGQAFMjC8ox0AFxwANpUqDbJAJSy6aJKKiVlchUsbJw8fPzVBbUKktKpbah0EpEuGDkAjAB0AEw1qBJouDl6Hqxg2T4%2B9CCjdB4%2BZqioaqVUALpIB0hAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g"
>
  <div class="space-center">
    <div class="dropdown-box">
      <div class="dropdown-relative">
        <div class="dropdown-label">
          <button class="btn-green" @click="show = !show">
            <span class="block truncate">@elonehoo/ui</span>
            <div class="i-carbon-chevron-down flex-shrink-0 h-5 w-5" />
          </button>
        </div>
        <div v-if="show" class="dropdown-content mt--3">
          <ul class="dropdown-items">
            <li v-for="i in 2" :key="i" class="dropdown-item">
              <div class="flex items-center gap-2 min-w-0">
                <span class="truncate">{{i === 1 ? 'UnoCss' : '@elonehoo/ui'}}</span>
                <span class="absolute inset-y-0 end-0 flex items-center pe-2">
                  <span v-if="i === 2" class="i-carbon-checkmark h-4 w-4 text-gray-900 dark:text-white flex-shrink-0" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Showcase>

## Usage

::: code-group

```html [HTML]
<div class="dropdown-box">
  <div class="dropdown-relative">
    <div class="dropdown-label">
      <button class="btn-green">
        <span class="block truncate">@elonehoo/ui</span>
        <div class="i-carbon-chevron-down flex-shrink-0 h-5 w-5" />
      </button>
    </div>
    <div class="dropdown-content">
      <ul class="dropdown-items">
        <li class="dropdown-item">
          <div class="flex items-center gap-2 min-w-0">
            <span class="truncate">UnoCss</span>
            <span class="absolute inset-y-0 end-0 flex items-center pe-2">
              <span class="h-4 w-4 text-gray-900 dark:text-white flex-shrink-0" />
            </span>
          </div>
        </li>
        <li class="dropdown-item">
          <div class="flex items-center gap-2 min-w-0">
            <span class="truncate">@elonehoo/ui</span>
            <span class="absolute inset-y-0 end-0 flex items-center pe-2">
              <span class="i-carbon-checkmark h-4 w-4 text-gray-900 dark:text-white flex-shrink-0" />
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
```

```jsx [JSX]
<div className="dropdown-box">
  <div className="dropdown-relative">
    <div className="dropdown-label">
      <button className="btn-green">
        <span className="block truncate">@elonehoo/ui</span>
        <div className="i-carbon-chevron-down flex-shrink-0 h-5 w-5" />
      </button>
    </div>
    <div className="dropdown-content">
      <ul className="dropdown-items">
        <li class="dropdown-item">
          <div class="flex items-center gap-2 min-w-0">
            <span class="truncate">UnoCss</span>
            <span class="absolute inset-y-0 end-0 flex items-center pe-2">
              <span class="h-4 w-4 text-gray-900 dark:text-white flex-shrink-0" />
            </span>
          </div>
        </li>
        <li className="dropdown-item">
          <div className="flex items-center gap-2 min-w-0">
            <span className="truncate">@elonehoo/ui</span>
            <span className="absolute inset-y-0 end-0 flex items-center pe-2">
              <span className="i-carbon-checkmark h-4 w-4 text-gray-900 dark:text-white flex-shrink-0" />
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
```

:::

## Rules

```ts
/^dropdown-((box|relative|label|content|items|item))$/
```
