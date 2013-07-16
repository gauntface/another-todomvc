/*global define */
define(['list-adapter'], function (listAdapter) {
    'use strict';

    var exports = {}
    var items = [];

    exports.setItems = function(i) {
    	items = i;
    }

    exports.getItemCount = function() {
    	return items.length;
    }

    exports.getItemElement = function(index) {
    	var element = document.createElement('gf-check-card');
    	//element.appendChild(document.createTextNode(items[index].text));
    	element.setItem({
    		id: index,
    		title: items[index].text,
    		checked: items[index].complete
    	});
    	return element;
    }

    return exports;
});