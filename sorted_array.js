'use strict';

function SortedArray(compare) {
  Array.apply(this);
  this.compare = compare;
};
SortedArray.prototype = Array.prototype;
SortedArray.prototype.constructor = SortedArray;

/*
  Method used to insert element at given position.
  Args:
    (1) newElement: new element to be added.
    (2) priority:   priority of the element, a factor to
                    determine position in the array.
  Returns:
    the new size of the array.
*/
SortedArray.prototype.add = function(newElement, priority) {
  if (typeof priority !== 'number') throw Error('given priority is not a number');
  if (this.length === 0) {
    this.push({ element: newElement, priority: priority });
    return this.length;
  }
  var currentElement = undefined;
  for (var i = 0; i < this.length; i++) {
    currentElement = this[i];
    if (this.compare(currentElement.priority, priority)) {
      return this.insert(i, { element: newElement, priority: priority });
    }
  }
  this.push({ element: newElement, priority: priority });
  return this.length;
};

/*
  Method used to insert element at given position.
  Args:
    (1) element:  the element to find
  Returns:
    a boolean value indicating the existence of the
    given element in the array.
*/
SortedArray.prototype.exists = function(element) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (this[i].element === element) return true;
  }
  return false;
};

/*
  Method used to insert element at given position.
  Args:
    (1) index:    position at which element will be inserted.
    (2) element:  element to be inserted.
  Returns:
    the new size of the array.
*/
SortedArray.prototype.insert = function(index, element) {
  this.splice(index, 0, element);
  return this.length;
};