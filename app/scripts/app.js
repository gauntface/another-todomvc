/*global define */
define(['list-adapter'], function (listAdapter) {
    'use strict';

    var todos = [];
    var listView = document.getElementById('list-view');

    document.addEventListener('onValueEntered', function(e) {
    	todos.push({text: e.detail.value, complete: false});
    	updateAdapter();
    });

    document.addEventListener('onCompleteChanged', function(e) {
    	todos[e.detail.id].complete = e.detail.checked;
    	updateAdapter();
    });

    document.addEventListener('onDelete', function(e) {
    	todos.splice(e.detail.id, 1);
    	updateAdapter();
    });

    function updateAdapter() {
    	listAdapter.setItems(todos);
    	listView.setAdapter(listAdapter);
    }

    return '\'Allo \'Allo!';
});