(function($window) {

    "use strict";

    /**
     * @module Memoria
     * @submodule Select
     * @constructor
     */
    $window.Memoria.Select = function MemoriaSelect() {};

    /**
     * @property prototype
     * @extends Memoria.Element
     * @type {Object}
     */
    $window.Memoria.Select.prototype = new $window.Memoria.Element();

    /**
     * @method initialise
     * @return {void}
     */
    $window.Memoria.Select.prototype.initialise = function initialise() {

        if (this.node.hasAttribute('multiple')) {
            this.attachObserver($window.Memoria.Observer.MultipleSelect);
        }

        this._setAttribute('selectedIndex');
        this._attachEvent(this._getEventName('onchange'));

    };

})(window);