<template>
    <div
        class="h-[320px] w-[235px] overflow-hidden rounded-md bg-slate-800 grid grid-cols-4 grid-rows-6 border border-slate-950"
    >
        <Display value="0" />
        <Button label="AC" triple />
        <Button label="/" operation />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" operation />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" operation />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" operation />
        <Button label="0" double />
        <Button label="." />
        <Button label="=" operation />
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
