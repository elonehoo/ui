<script setup lang="ts">
</script>

<template>
  <input type="checkbox" class="toggle">
</template>

<style scoped>
.toggle {
    --b1: 212 18% 14%;
    --tglbg: hsl(var(--b1));
    --bc: 220 13% 69%;
    flex-shrink: 0;
    --tglbg: hsl(var(--b1));
    --handleoffset: 1.5rem;
    --handleoffsetcalculator: calc(var(--handleoffset) * -1);
    --togglehandleborder: 0 0;
    height: 1.5rem;
    width: 3rem;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-width: 1px;
    border-color: hsl(var(--bc)/var(--tw-border-opacity));
    --tw-border-opacity: .2;
    background-color: hsl(var(--bc)/var(--tw-bg-opacity));
    --tw-bg-opacity: .5;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    border-radius: var(--rounded-badge,1.9rem);
    transition: background,box-shadow var(--animation-input,.2s) ease-in-out;
    box-shadow: var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset,var(--togglehandleborder)
}

[dir=rtl] .toggle {
    --handleoffsetcalculator: calc(var(--handleoffset) * 1)
}

.toggle:focus-visible {
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
    outline-color: hsl(var(--bc)/.2)
}

.toggle:checked,.toggle[checked=true],.toggle[aria-checked=true] {
    --handleoffsetcalculator: var(--handleoffset);
    --tw-border-opacity: 1;
    --tw-bg-opacity: 1;
}

[dir=rtl] .toggle:checked,[dir=rtl] .toggle[checked=true],[dir=rtl] .toggle[aria-checked=true] {
    --handleoffsetcalculator: calc(var(--handleoffset) * -1)
}

.toggle:indeterminate {
    --tw-border-opacity: 1;
    --tw-bg-opacity: 1;
    box-shadow: calc(var(--handleoffset)/2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset)/-2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset
}

[dir=rtl] .toggle:indeterminate {
    box-shadow: calc(var(--handleoffset)/2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset)/-2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset
}

</style>
