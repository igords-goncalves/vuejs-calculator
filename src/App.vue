<template>
    <div>
        <h1 class="text-3xl font-extrabold pb-4">{{ title.toUpperCase() }}</h1>
        <Calculator />
    </div>
</template>

<script>
import Calculator from "./components/Main/Calculator.vue";

export default {
    components: {
        Calculator,
    },
    data() {
        return {
            title: "Calculator",
        };
    },
};
</script>
