<script setup lang="ts">

</script>

<template>
  <div class="content mt-10">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <div w-full p-10>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Preview title="Button" desc="Create a button with UnoCss" link="/component/button">
                <div class="space-center w-90%">
                  <button class="btn-black-green">UI</button>
                </div>
              </Preview>
              <Preview title="Avatar" desc="Create a avatar with UnoCss" link="/component/button">
                <div class="space-center w-90%">
                  <img src="https://github.com/elonehoo.png" class="avatar avatar-3xl" alt="">
                </div>
              </Preview>
              <Preview title="Alert" desc="Create a alert with UnoCss" link="/component/button">
                  <div class="alert-green w-80% h-74px">
                    <div class=" ">
                      <h3 class="font-bold text-10px m-0!">
                        New UI!
                      </h3>
                      <div class="text-10px">
                        You have a message about the new UI
                      </div>
                    </div>
                  </div>
              </Preview>
              <Preview title="Badge" desc="Create a badge with UnoCss" link="/component/button">
                <div class="space-center w-90%">
                  <span class="badge-green badge-lg">Badge</span>
                </div>
              </Preview>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
