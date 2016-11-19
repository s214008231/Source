/*
dhtmlxScheduler v.4.3.0 Stardard

This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
scheduler.expand = function() {
	if(!scheduler.callEvent("onBeforeExpand", []))
		return;
	var t = scheduler._obj;
	do {
		t._position = t.style.position || "";
		t.style.position = "static";
	} while ((t = t.parentNode) && t.style);
	t = scheduler._obj;
	t.style.position = "absolute";
	t._width = t.style.width;
	t._height = t.style.height;
	t.style.width = t.style.height = "100%";
	t.style.top = t.style.left = "0px";

	var top = document.body;
	top.scrollTop = 0;

	top = top.parentNode;
	if (top)
		top.scrollTop = 0;
	document.body._overflow = document.body.style.overflow || "";
	document.body.style.overflow = "hidden";
	scheduler._maximize();
	scheduler.callEvent("onExpand", []);
};
scheduler.collapse = function() {
	if(!scheduler.callEvent("onBeforeCollapse", []))
		return;
	var t = scheduler._obj;
	do {
		t.style.position = t._position;
	} while ((t = t.parentNode) && t.style);
	t = scheduler._obj;
	t.style.width = t._width;
	t.style.height = t._height;
	document.body.style.overflow = document.body._overflow;
	scheduler._maximize();
	scheduler.callEvent("onCollapse", []);
};
scheduler.attachEvent("onTemplatesReady", function() {
	var t = document.createElement("DIV");
	t.className = "dhx_expand_icon";
	scheduler.toggleIcon = t;
	scheduler._obj.appendChild(t);
	t.onclick = function() {
		if (!scheduler.expanded)
			scheduler.expand(); else
			scheduler.collapse();
	};
});
scheduler._maximize = function() {
	this.expanded = !this.expanded;
	this.toggleIcon.style.backgroundPosition = "0 " + (this.expanded ? "0" : "18") + "px";

	var directions = ['left', 'top'];
	for (var i = 0; i < directions.length; i++) {
		var margin = scheduler.xy['margin_' + directions[i]];
		var prev_margin = scheduler['_prev_margin_' + directions[i]];
		if (scheduler.xy['margin_' + directions[i]]) {
			scheduler['_prev_margin_' + directions[i]] = scheduler.xy['margin_' + directions[i]];
			scheduler.xy['margin_' + directions[i]] = 0;
		} else {
			if (prev_margin) {
				scheduler.xy['margin_' + directions[i]] = scheduler['_prev_margin_' + directions[i]];
				delete scheduler['_prev_margin_' + directions[i]];
			}
		}
	}

	if (scheduler.callEvent("onSchedulerResize", [])) {
		scheduler.update_view();
		scheduler.callEvent("onAfterSchedulerResize");
	}
};
