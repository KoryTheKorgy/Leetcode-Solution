
var MinStack = function() {
    this.elements = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.elements.push({
        value,
        min: this.elements.length === 0? value : Math.min(value, this.getMin()),
    })
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.elements.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length - 1].min;
};

 