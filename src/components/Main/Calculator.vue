<template>
    <div
        class="h-[320px] w-[235px] overflow-hidden rounded-md bg-slate-800 grid grid-cols-4 grid-rows-6 border border-slate-950"
    >
        <Display v-bind:value="displayValue" />
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
    data() {
        return {
            displayValue: "0",
            clearDisplay: false,
            // 0 = primeiro valor, 1 = segundo valor
            operation: null,
            // Valores armazenados serão do tipo float pois quero fazer operações matemáticas
            values: [0, 0],

            // current = qual valor está sendo manipulado 
            current: 0,
        };
    },
    components: {
        Display,
        Button,
    },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data());
            // $options.data() retorna um objeto com os dados iniciais do componente
        },
        setOperation(operation) {
            if(this.current === 0) {
                this.operation = operation;
                this.current = 1;
                this.clearDisplay = true;
            } else {
                const equals = operation === '=';
                // A operação de igual vai ter uma constante pois ele é diferente das outras operações
                const currentOperation = this.operation;

                try {
                    this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`);
                } catch (error) {
                    this.$emit('onError', error)
                }
                this.values[1] = 0;

                this.displayValue = this.values[0];
                this.operation = equals ? null : operation;
                this.current = equals ? 0 : 1;
                this.clearDisplay = !equals;
            }
        },
        addDigit(digit) {
            if(digit === '.' && this.displayValue.includes('.')) {
                return;
            }
            const clearDisplay = this.displayValue === '0' || this.clearDisplay;
            const currentValue = clearDisplay ? '' : this.displayValue;

            const newDisplayValue = currentValue + digit;
            this.displayValue = newDisplayValue;
            // this.displayValue é o estado atual do componente
            this.clearDisplay = false;

            if(digit !== '.') {
                const index = this.current;
                const newValue = parseFloat(newDisplayValue);
                this.values[index] = newValue;
            }
        },
    },
};
</script>
