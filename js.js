// DOM 鍏冪礌瀵硅薄妯℃澘
	var $ = function(id){
		this.id = id;
		this.obj = document.getElementById(this.id);
	}
	$.prototype = {
		// 鑾峰彇鍏冪礌鐨勬煇椤� CSS
		getClass: function(name){
			// IE8鍙婁互涓嬬増鏈�
			if(this.obj.currentStyle) {
				return this.obj.currentStyle[name];
			}
			// Firefox, Chrome, IE9+
			else {
				var style = document.defaultView.getComputedStyle(this.obj, null);
				return style[name];
			}
		},
		// 浠ュ厓绱犻珮瀹界敓鎴愬姩鐢诲璞�
		cal: function(speed, mode, fn){
			// 鍒涘缓鍔ㄧ敾瀵硅薄
			this.theTransform = new Transform(this.obj, speed, mode, fn);
			this.theTransform.theWidth = this.getClass('width').replace('px','');
			this.theTransform.theHeight = this.getClass('height').replace('px','');
			// 鎸夐暱瀹芥瘮渚嬭绠楀崟浣嶆椂闂村唴鍏冪礌瀹藉甫鍑忓皯鍊�
			this.theTransform.widthChange = this.theTransform.heightChange*(this.theTransform.theWidth / this.theTransform.theHeight);
		},
		// 闅愯棌鍏冪礌
		hide: function(speed, mode, fn){
			this.cal(speed, mode, fn);
			this.theTransform.hide(this.theTransform.theWidth, this.theTransform.theHeight);
		},
		// 鏄剧ず鍏冪礌
		show: function(speed, mode, fn){
			this.cal(speed, mode, fn);
			this.theTransform.show(0, 0);
		}
	}
	// 鍔ㄧ敾瀵硅薄妯℃澘
	var Transform = function(obj, speed, mode, fn){
		this.obj = obj;
		this.speed = speed; // 鍔ㄧ敾閫熷害
		this.mode = mode;	// 鍔ㄧ敾褰㈠紡
		this.heightChange = 10;
		this.fn = fn;
		if( speed === 'fast')
			this.speed = 10;
		else if( speed === 'normal' )
			this.speed = 20;
		else if( speed === 'slow' )
			this.speed = 30;
	}
	Transform.prototype = {
		// 澶勭悊闅愯棌
		hide: function( width, height ){
			var self = this;
			if ( !this.speed ) {
				this.obj.style.display = 'none';
				return;
			}
			width = width - this.widthChange > 0 ? width - this.widthChange : 0;
			height = height - this.heightChange > 0 ? width - this.heightChange : 0;	
			// 
			if( width !== 0 || height !== 0 ) {
				// 鍒ゆ柇閲囩敤浣曠鍔ㄧ敾褰㈠紡
				if( this.mode === 'zoom' ) this.obj.style.width = width + 'px';
				this.obj.style.height = height + 'px';
				// 閫掑綊璋冪敤鑷韩
				setTimeout(function(){self.hide(width,height)},this.speed);
			} else {
				// 瀹屾垚鍚庢竻闄ゆ墍鏈� style 灞炴€�
				this.obj.style.cssText = "";
				// 璁剧疆 display: none
				this.obj.style.display = 'none';
				if(this.fn) this.fn.call(this.obj);
			}
		},
		// 澶勭悊鏄剧ず
		show: function(width, height){
			// 鍒ゆ柇鍏冪礌鏄惁涓� block锛岃嫢鍚︼紝鍒欒缃负 block
			if( this.obj.style.display !== 'block' ){
				// 鍒ゆ柇閲囩敤浣曠鍔ㄧ敾褰㈠紡
				if( this.mode === 'zoom' ) this.obj.style.width = 0 + 'px';
				this.obj.style.height = 0 + 'px';
				this.obj.style.display = 'block';
				this.showIt( width, height );
			}
		},
		showIt: function( width, height ){
			var self = this;
			if ( !this.speed ) {	
				this.obj.style.display = 'block';
				return;
			}
			width = width + this.widthChange < this.theWidth ? width + this.widthChange : this.theWidth;
			height = height + this.heightChange < this.theHeight ? height + this.heightChange : this.theHeight;
			// 鍒ゆ柇鍏冪礌鏄惁鎭㈠鍒� CSS 涓瀹氱殑楂樺
			if( width !== this.theWidth || height !== this.theHeight ) {
				if( this.mode === 'zoom' ) this.obj.style.width = width + 'px';
				this.obj.style.height = height + 'px';
				setTimeout(function(){self.showIt(width,height)},this.speed);
			} else {
				// 瀹屾垚鍚庢竻闄ゆ墍鏈� style 灞炴€�
				this.obj.style.cssText = "";
				// 璁剧疆 display: block
				this.obj.style.display = 'block';
				if(this.fn) this.fn.call(this.obj);
			}
		}
	}