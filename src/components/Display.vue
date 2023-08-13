<template>
    <div
        class="display bg-slate-950 flex justify-end items-center p-5 text-2xl overflow-hidden"
    >
        {{ value }}
    </div>
</template>

<script>
export default {
    props: ["value"],
};
</script>

<style>
.display {
    grid-column: span 4;
}
</style>
