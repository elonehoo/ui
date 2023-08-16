<script setup lang="ts">

</script>

<template>
  <div class="content min-w-auto! mt-10">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <div w-full p-10>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Preview title="button" desc="Create a button with UnoCss" >
                <div class="space-center w-90%">
                  <button class="btn-black-green">UI</button>
                </div>
              </Preview>
              <Preview title="avatar" desc="Create a avatar with UnoCss" >
                <div class="space-center w-90%">
                  <img src="https://github.com/elonehoo.png" class="avatar avatar-3xl" alt="">
                </div>
              </Preview>
              <Preview title="alert" desc="Create a alert with UnoCss" >
                  <div class="alert-green w-80% h-74px">
                    <div class=" ">
                      <h3 class="font-bold text-10px m-0!">
                        New UI!
                      </h3>
                      <div class="text-10px">
                        You have a new UI
                      </div>
                    </div>
                  </div>
              </Preview>
              <Preview title="badge" desc="Create a badge with UnoCss" >
                <div class="space-center w-90%">
                  <span class="badge-green badge-lg">Badge</span>
                </div>
              </Preview>
              <Preview title="tooltip" desc="Create a tooltip with UnoCss" >
                <div class="space-center w-90%">
                  <div class="tooltip-green" data-tip="@elonehoo/ui">
                    <button class="btn-green">
                      Tooltip
                    </button>
                  </div>
                </div>
              </Preview>
              <Preview title="skeleton" desc="Create a skeleton with UnoCss" >
                <div class="space-center w-90%">
                  <div class="skeleton-green h-6 w-76 rounded-full" />
                  <div class="skeleton-green h-6 w-76 rounded-full" />
                </div>
              </Preview>
              <Preview title="code" desc="Create a code with UnoCss" >
                <div class="space-center w-90%">
                  <div class="model-code-green">
                    <pre class="code-line" data-prefix=">">
                        <code>npm install @elonehoo/ui</code>
                      </pre>
                  </div>
                </div>
              </Preview>
              <Preview title="range" desc="Create a range with UnoCss" >
                <div class="space-center w-90%">
                  <input type="range" min="0" max="100" class="range-green range-lg max-w-xs">
                </div>
              </Preview>
              <Preview title="toggle" desc="Create a toggle with UnoCss" >
                <div class="space-center w-90%">
                  <input type="checkbox" style="border: 1px rgb(74, 222, 128) solid;" class="toggle-green toggle-lg">
                </div>
              </Preview>
              <Preview title="radio" desc="Create a radio with UnoCss" >
                <div class="space-center w-90%">
                  <input type="radio" name="demo" style="border: 1px rgb(74, 222, 128) solid;" class="radio-green radio-lg">
                  <input type="radio" name="demo" style="border: 1px rgb(74, 222, 128) solid;" checked class="radio-green radio-lg">
                </div>
              </Preview>
              <Preview title="checkbox" desc="Create a checkbox with UnoCss" >
                <div class="space-center w-90%">
                  <input type="checkbox" style="border: 1px rgb(74, 222, 128) solid;" checked class="checkbox-green checkbox-lg">
                  <input type="checkbox" style="border: 1px rgb(74, 222, 128) solid;" class="checkbox-green checkbox-lg">
                </div>
              </Preview>
              <Preview title="kbd" desc="Create a kbd with UnoCss" >
                <div class="space-center w-90%">
                  <kbd class="kbd kbd-md">command</kbd>
                  <kbd class="kbd kbd-md">s</kbd>
                </div>
              </Preview>
              <Preview title="modal" desc="Create a modal with UnoCss" >
                <div class="space-center w-90%">
                  <div id="modal_1" class="modal">
                    <form method="dialog" class="w-full h-full">
                      <h3 class="m-0! text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                        Payment successful
                      </h3>
                      <div class="mt-4">
                        <button btn="green" value="cancel">
                          Close
                        </button>
                      </div>
                    </form>
                </div>
                </div>
              </Preview>
              <Preview title="select" desc="Create a select with UnoCss" >
                <div class="space-center w-90%">
                  <select class="select-green select-lg">
                    <option disabled value="">
                      Please select one
                    </option>
                    <option>@elonehoo/ui</option>
                    <option>elonehoo</option>
                    <option>UI</option>
                  </select>
                </div>
              </Preview>
              <Preview title="textarea" desc="Create a textarea with UnoCss" >
                <div class="space-center w-90%">
                  <textarea class="textarea-green textarea-xl" placeholder="Hi @elonehoo/ui..." rows="3"></textarea>
                </div>
              </Preview>
              <Preview title="input" desc="Create a input with UnoCss" >
                <div class="space-center w-90%">
                  <input type="text" placeholder="Search..." class="input-green input-xl">
                </div>
              </Preview>
              <Preview title="dropdown" desc="Create a dropdown with UnoCss" >
                <div class="space-center w-90%">
                  <div class="dropdown-box">
                    <div class="dropdown-relative">
                      <div class="dropdown-label">
                        <button class="btn-green">
                          <span class="block truncate">Choose what you like</span>
                          <div class="i-carbon-chevron-down flex-shrink-0 h-5 w-5" />
                        </button>
                      </div>
                      <div v-if="true" class="dropdown-content z-auto! mt--15px">
                        <ul class="dropdown-items">
                          <li v-for="i in 2" :key="i" class="dropdown-item">
                            <div class="flex items-center gap-2 min-w-0">
                              <span class="truncate">{{ i === 1 ? 'UnoCss' : '@elonehoo/ui' }}</span>
                              <span class="absolute inset-y-0 end-0 flex items-center pe-2">
                                <span class="i-carbon-checkmark h-4 w-4 text-gray-900 dark:text-white flex-shrink-0" />
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Preview>
              <Preview title="table" desc="Create a table with UnoCss" >
                <div class="space-center w-90%">
                  <div class="table-box">
                    <table class="table-main">
                      <thead>
                        <tr>
                          <th class="table-th"><span>Id</span></th>
                          <th class="table-th"><span>Name</span></th>
                        </tr>
                      </thead>
                      <tbody class="table-body">
                        <tr>
                          <td class="table-td">1</td>
                          <td class="table-td">UnoCss</td>
                        </tr>
                        <tr>
                          <td class="table-td">2</td>
                          <td class="table-td">@elonehoo/ui</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Preview>
              <Preview title="pagination" desc="Create a pagination with UnoCss" >
                <div class="space-center w-90%">
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
              </Preview>
              <Preview title="content" desc="Create a content with UnoCss" >
                <div class="space-center w-90% h-50px">
                  <div class="content ">
                    <Grid />
                  </div>
                </div>
              </Preview>
              <Preview title="card" desc="Create a card with UnoCss" >
                <div class="space-center w-90%">
                  <div class="card-box mt-2">
                    <div class="card-head"> <Grid /> </div>
                    <div class="card-body"> <Grid /> </div>
                    <div class="card-footer"> <Grid /> </div>
                  </div>
                </div>
              </Preview>
              <Preview title="toast" desc="Create a toast with UnoCss" >
                <div style="transform:rotate(360deg);" class="space-center w-90%">
                  <div class="toast right--27px! bottom--100px! w-200px h-100px">
                    <Grid />
                  </div>
                </div>
              </Preview>
              <Preview title="progress" desc="Create a progress with UnoCss" >
                <div class="space-center w-90%">
                  <progress class="progress-green " value="50" max="100"></progress>
                </div>
              </Preview>
              <Preview title="stack" desc="Create a stack with UnoCss" >
                <div class="space-center w-90%">
                  <div class="stack">
                    <div class="grid w-32 h-20 rounded bg-green text-white place-content-center">one</div>
                    <div class="grid w-32 h-20 rounded bg-red text-white place-content-center">two</div>
                    <div class="grid w-32 h-20 rounded bg-pink text-white place-content-center">three</div>
                  </div>
                </div>
              </Preview>
              <Preview title="indicator" desc="Create a indicator with UnoCss" >
                <div class="space-center w-90%">
                  <div class="indicator">
                    <span class="indicator-item badge-green">New</span>
                    <div class="grid w-24 h-24">
                      <Grid />
                    </div>
                  </div>
                </div>
              </Preview>
              <Preview title="window" desc="Create a window with UnoCss" >
                  <div class="mockup-window border bg-light-600 dark:bg-dark-100 border-dark-400 w-90% h-90%">
                    <div class="flex justify-center px-4 py-12 border-t border-dark-400">Window!</div>
                  </div>
              </Preview>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

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
