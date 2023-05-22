<script setup lang="ts">
</script>

<template>
  <div class="card w-96 bg-light-base-100 dark:bg-dark-base-100 shadow-xl">
    <figure><img src="/card-1.jpeg" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p text-start>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  <div class="card card-compact w-96 bg-light-base-100 dark:bg-dark-base-100 shadow-xl mt-5">
    <figure><img src="/card-1.jpeg" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  <div class="card w-96 bg-light-base-100 dark:bg-dark-base-100 shadow-xl mt-5">
    <figure><img src="/card-1.jpeg" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        Shoes!
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p text-start>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div>
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  </div>

  <div class="card w-96 bg-light-base-100 dark:bg-dark-base-100 shadow-xl mt-5">
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p text-start>If a dog chews shoes whose shoes does he choose?</p>
    </div>
    <figure><img src="/card-1.jpeg" alt="Shoes" /></figure>
  </div>

  <div class="card w-96 bg-light-base-100 dark:bg-dark-base-100 shadow-xl mt-5">
    <div class="card-body">
      <h2 class="card-title">Card title!</h2>
      <p text-start>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  <div class="card w-96 bg-light-primary dark:bg-dark-primary text-light-primary-content dark:text-dark-primary-content mt-5">
    <div class="card-body">
      <h2 class="card-title">Card title!</h2>
      <p text-start>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn">Buy Now</button>
      </div>
    </div>
  </div>

  <div class="card w-96 bg-light-neutral dark:bg-dark-neutral text-light-neutral-content dark:text-dark-neutral-content mt-5">
    <div class="card-body items-center text-center">
      <h2 class="card-title">Cookies!</h2>
      <p text-start>We are using cookies for no reason.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Accept</button>
        <button class="btn btn-ghost">Deny</button>
      </div>
    </div>
  </div>

  <div class="card w-96 bg-light-base-100 dark:bg-dark-base-100 shadow-xl mt-5">
    <div class="card-body">
      <div class="card-actions justify-end">
        <button class="btn btn-square btn-sm">
          <div i-carbon-close></div>
        </button>
      </div>
      <p text-start>We are using cookies for no reason.</p>
    </div>
  </div>

  <div class="card w-120 card-side bg-light-base-100 dark:bg-dark-base-100 shadow-xl mt-5">
    <figure><img src="/card-2.jpeg" alt="Movie"/></figure>
    <div class="card-body">
      <h2 class="card-title">New movie is released!</h2>
      <p text-start>Click the button to watch on Jetflix app.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Watch</button>
      </div>
    </div>
  </div>

  <div class="card w-120 card-side bg-light-base-100 dark:bg-dark-base-100 shadow-xl mt-5">
    <figure><img src="/card-3.jpeg" alt="Album"/></figure>
    <div class="card-body">
      <h2 class="card-title text-start">New album is released!</h2>
      <p text-start>Click the button to listen on Spotiwhy app.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Listen</button>
      </div>
    </div>
  </div>
</template>
