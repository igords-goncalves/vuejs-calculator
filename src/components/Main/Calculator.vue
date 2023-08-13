<template>
    <div
        class="h-[320px] w-[235px] overflow-hidden rounded-md bg-slate-800 grid grid-cols-4 grid-rows-6"
    >
        <Display />
        <Button />
    </div>
</template>

<script>
import Display from "../Display.vue";
import Button from "../Button.vue";

export default {
    components: {
        Display,
        Button,
    },
};
</script>
