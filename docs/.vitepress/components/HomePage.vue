<script setup lang="ts">

</script>

<template>
  <div class="content mt-10">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <div w-full p-10>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Preview title="Button" desc="Button" link="/component/button">
                <div class="space-center w-90%">
                  <button class="btn-green">Hello</button>
                  <button class="btn-outline-green">Hello</button>
                  <button class="btn-soft-green">Hello</button>
                  <button class="btn-ghost-green">Hello</button>
                  <button class="btn-link-green">Hello</button>
                  <button class="btn-black-green">Hello</button>
                </div>
              </Preview>
              <Preview title="Avatar" desc="Avatar" link="/component/button">
                <div class="space-center w-90%">
                  <img src="https://github.com/elonehoo.png" class="avatar avatar-3xl" alt="">
                </div>
              </Preview>
            </div>
          </div>
        </div>

      </main>
    </div>
  </div>
</template>
