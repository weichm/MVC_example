// Model: Holds the counter value and logic
const Model = {
    value: 0,
    increment() {
        this.value++;
    },
    decrement() {
        this.value--;
    },
    getValue() {
        return this.value;
    }
};
