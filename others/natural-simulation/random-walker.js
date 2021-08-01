var rw = (function () {
	
	'use strict';

	var RandomWalker = function (canvasId) {
		
		if(!(typeof canvasId === 'string' || canvasId instanceof String)) {
			console.error(canvasId + "should be string");
			return;
		}

		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext('2d');
		this.x = this.canvas.width / 2;
		this.y = this.canvas.height / 2;
	};

	RandomWalker.prototype.point = function () {
		
	};

	RandomWalker.prototype.display = function () {
		this.ctx.fillRect(this.x, this.y, 1, 1);
	};

	RandomWalker.prototype.walk = function () {
		var choice = Math.floor(Math.random() * 4);
		
		if (choice === 0) {
			this.x++;
		} else if (choice === 1) {
			this.x--;
		} else if (choice === 2) {
			this.y++;
		} else {
			this.y--;
		}
	};

	RandomWalker.prototype.draw = function () {
		this.walk();
		this.display();
	}

	return RandomWalker;

})();