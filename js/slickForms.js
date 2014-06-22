(function() {
	
	'use strict';

	function slickForms() {

		var self = this;

		self.reSkin = function(element) {

			core_funcs[element].handler();

		}

		var core_funcs = {

			initialise: function() {

				core_funcs['select'].handler();
				// core_funcs['checkbox'].handler();
				// core_funcs['radio'].handler();
				// core_funcs['file'].handler();

			},

			select: {

				handler: function() {

					var elements = document.getElementsByTagName('select');

					for (var i = 0; i < elements.length; i++) {

						if(elements[i].parentNode.classList.contains('select-wrap')) continue;

						core_funcs['select'].wrap(elements[i]);
						core_funcs['select'].bind(elements[i]);

					}

				},

				wrap: function(element) {

					element.outerHTML = '<div class="select-wrap">'+element.outerHTML+'<div class="select">'+element.value+'</div></div>';

				},

				bind: function(element) {

					element.onchange = function() {

						var dummySelect = element.parentNode.getElementsByClassName('select')[0];

						dummySelect.innerHTML = String(element.value);

					}

				}

			},

			checkbox: {

				handler: function() {

					var elements = document.getElementsByTagName('input');

					for (var i = 0; i < elements.length; i++) {

						if(elements[i].getAttribute('type') != 'checkbox') continue;

						core_funcs['checkbox'].wrap(elements[i]);

					}

				},

				wrap: function(element) {

					console.log(element);

				},

				bind: function() {



				}

			},

			radio: {

				handler: function() {

					var elements = document.getElementsByTagName('select');

				},

				wrap: function() {



				},

				bind: function() {



				}

			},

			file: {

				handler: function() {

					var elements = document.getElementsByTagName('select');

				},

				wrap: function() {



				},

				bind: function() {



				}

			}

		}

		core_funcs.initialise();

	}

	document.addEventListener('DOMContentLoaded', function() {

		window.slick = new slickForms();
		
	});

})();