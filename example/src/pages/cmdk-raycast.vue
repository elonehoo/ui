<script setup lang="ts">

</script>

<template>
  <div class="cmdk-raycast-root">
    <input
     type="text"
     placeholder="Search for apps and commands..."
     class="cmdk-raycast-input"
    >
    <hr class="cmdk-raycast-loader"/>
    <div class="cmdk-raycast-list">
      <div class="cmdk-raycast-group">
        <div class="cmdk-raycast-group-heading">Suggestions</div>
        <div class="cmdk-raycast-items">
          <div class="cmdk-raycast-item">
            <div class="cmdk-raycast-icon">
              <div class="i-simple-icons-linear w-20px h-20px" />
            </div>
            Linear
            <span class="cmdk-raycast-meta">Application</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
