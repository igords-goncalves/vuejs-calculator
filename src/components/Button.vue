<template>
    <!-- Temos um biding acontecendo abaixo com @click -->
    <button
        v-on:click="$emit('onClick', label)" 
        class="button bg-slate-700 border hover:bg-slate-800 border-slate-950 outline-none"
        v-bind:class="{ double, triple, operation }"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: String,
        operation: Boolean,
        double: Boolean,
        triple: Boolean,
    },
};
</script>

<style>
.button.double {
    grid-column: span 2;
}
.button.triple {
    grid-column: span 3;
}
.button.operation {
    background-color: #fa8231cc;
    &:hover {
        background-color: #bd6123;
    }
}
</style>
