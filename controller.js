// Controller: Connects Model and View
window.onload = function() {
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');

    function updateView() {
        counterValue.textContent = Model.getValue();
        if (Model.getValue() < 0) {
            counterValue.style.color = 'red';
        } else {
            counterValue.style.color = '';
        }
    }

    incrementBtn.onclick = function() {
        Model.increment();
        updateView();
    };

    decrementBtn.onclick = function() {
        Model.decrement();
        updateView();
    };

    updateView(); // Initialize view
};
