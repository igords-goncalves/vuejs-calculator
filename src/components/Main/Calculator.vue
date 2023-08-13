<template>
    <div
        class="h-[320px] w-[235px] overflow-hidden rounded-md bg-slate-800 grid grid-cols-4 grid-rows-6 border border-slate-950"
    >
        <Display value="0" />
        <Button label="AC" triple @onClick="clearMemory" />
        <Button label="/" operation @onClick="setOperation" />
        <Button label="7" @onClick="addDigit" />
        <Button label="8" @onClick="addDigit" />
        <Button label="9" @onClick="addDigit" />
        <Button label="*" operation @onClick="setOperation"/>
        <Button label="4" @onClick="addDigit" />
        <Button label="5" @onClick="addDigit" />
        <Button label="6" @onClick="addDigit" />
        <Button label="-" operation @onClick="setOperation"/>
        <Button label="1" @onClick="addDigit" />
        <Button label="2" @onClick="addDigit" />
        <Button label="3" @onClick="addDigit" />
        <Button label="+" operation @onClick="setOperation"/>
        <Button label="0" @onClick="addDigit" double />
        <Button label="." @onClick="addDigit"/>
        <Button label="=" operation @onClick="setOperation"/>
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
    methods: {
        clearMemory() {
            console.log("Clear");
        },
        setOperation(operation) {
            console.log(operation);
        },
        addDigit(digit) {
            console.log(digit);
        },
    },
};
</script>
