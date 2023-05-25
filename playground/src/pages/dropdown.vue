<script setup lang="ts">

</script>

<template>
  <div>
    <div>
      <div class="dropdown">
        <label tabindex="0" class="btn m-1">Click</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div m="t-5">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
  <div m="t-5">
    <div class="dropdown dropdown-top dropdown-end">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
  <div m="t-5">
    <div class="dropdown dropdown-bottom">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>

  <div mt-5>
    <div class="dropdown dropdown-bottom dropdown-end">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>

  <div mt-5>
    <div class="dropdown dropdown-left">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>

  <div mt-5>
    <div class="dropdown dropdown-left dropdown-end">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>

  <div mt-5>
    <div class="dropdown dropdown-right">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>

  <div mt-5>
    <div class="dropdown dropdown-right dropdown-end">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>

  <div mt-5>
    <div class="dropdown dropdown-hover">
      <label tabindex="0" class="btn m-1">Hover</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>

  <div mt-5>
    <div class="dropdown dropdown-open">
      <label tabindex="0" class="btn m-1">Button</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>

  <div mt-30>
    <div class="dropdown">
      <label tabindex="0" class="btn m-1">Click</label>
      <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-light-primary dark:bg-dark-primary text-light-primary-content dark:text-dark-primary-content">
        <div class="card-body">
          <h3 class="card-title">Card title!</h3>
          <p>you can use any element as a dropdown.</p>
        </div>
      </div>
    </div>
  </div>

  <div mt-5>
    A normal text and a helper dropdown
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-circle btn-ghost btn-xs text-light-info dark:text-dark-info">
        <div i-carbon-help />
      </label>
      <div tabindex="0" class="card compact dropdown-content shadow bg-light-base-100 dark:bg-dark-base-100 rounded-box w-64">
        <div class="card-body">
          <h2 class="card-title">You needed more info?</h2>
          <p>Here is a description!</p>
        </div>
      </div>
    </div>
  </div>
</template>
