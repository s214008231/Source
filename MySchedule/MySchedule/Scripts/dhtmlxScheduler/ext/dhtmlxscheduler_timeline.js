/*
@license
dhtmlxScheduler.Net v.3.3.22 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function(e){e._temp_matrix_scope=function(){function t(){for(var t=e.get_visible_events(),a=[],n=0;n<this.y_unit.length;n++)a[n]=[];var i;a[i]||(a[i]=[]);for(var n=0;n<t.length;n++){i=this.order[t[n][this.y_property]];for(var r=0;this._trace_x[r+1]&&t[n].start_date>=this._trace_x[r+1];)r++;for(;this._trace_x[r]&&t[n].end_date>this._trace_x[r];)a[i][r]||(a[i][r]=[]),a[i][r].push(t[n]),r++}return a}function a(t,a,n){var i=0,r=n._step,s=n.round_position,d=0,_=a?t.end_date:t.start_date;

_.valueOf()>e._max_date.valueOf()&&(_=e._max_date);var o=_-e._min_date_timeline;if(o>0){var l=e._get_date_index(n,_);e._ignores[l]&&(s=!0);for(var c=0;l>c;c++)i+=e._cols[c];var h=e.date.add(e._min_date_timeline,e.matrix[e._mode].x_step*l,e.matrix[e._mode].x_unit);s?+_>+h&&a&&(d=e._cols[l]):(o=_-h,n.first_hour||n.last_hour?(o-=n._start_correction,0>o&&(o=0),d=Math.round(o/r),d>e._cols[l]&&(d=e._cols[l])):d=Math.round(o/r))}return i+=a?0===o||s?d-14:d-12:d+1}function n(t,a){var n=e._get_date_index(this,t),i=this._trace_x[n];

return a&&+t!=+this._trace_x[n]&&(i=this._trace_x[n+1]?this._trace_x[n+1]:e.date.add(this._trace_x[n],this.x_step,this.x_unit)),new Date(i)}function i(t){if(e._ignores_detected)for(var a,n,i,r,s=0;s<t.length;s++){for(r=t[s],i=!1,a=e._get_date_index(this,r.start_date),n=e._get_date_index(this,r.end_date);n>a;){if(!e._ignores[a]){i=!0;break}a++}i||a!=n||e._ignores[n]||+r.end_date>+this._trace_x[n]&&(i=!0),i||(t.splice(s,1),s--)}}function r(t){var a="";if(t&&"cell"!=this.render){i.call(this,t),t.sort(this.sort||function(e,t){
return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date>t.start_date?1:-1});for(var r=[],s=t.length,d=0;s>d;d++){var _=t[d];_._inner=!1;var o=this.round_position?n.apply(this,[_.start_date,!1]):_.start_date;for(this.round_position?n.apply(this,[_.end_date,!0]):_.end_date;r.length;){var l=r[r.length-1];if(!(l.end_date.valueOf()<=o.valueOf()))break;r.splice(r.length-1,1)}for(var c=!1,h=0;h<r.length;h++){var u=r[h];if(u.end_date.valueOf()<=o.valueOf()){c=!0,_._sorder=u._sorder,
r.splice(h,1),_._inner=!0;break}}if(r.length&&(r[r.length-1]._inner=!0),!c)if(r.length)if(r.length<=r[r.length-1]._sorder){if(r[r.length-1]._sorder)for(var v=0;v<r.length;v++){for(var f=!1,g=0;g<r.length;g++)if(r[g]._sorder==v){f=!0;break}if(!f){_._sorder=v;break}}else _._sorder=0;_._inner=!0}else{for(var p=r[0]._sorder,m=1;m<r.length;m++)r[m]._sorder>p&&(p=r[m]._sorder);_._sorder=p+1,_._inner=!1}else _._sorder=0;r.push(_),r.length>(r.max_count||0)?(r.max_count=r.length,_._count=r.length):_._count=_._count?_._count:1;

}for(var y=0;y<t.length;y++)t[y]._count=r.max_count;for(var x=0;s>x;x++)a+=e.render_timeline_event.call(this,t[x],!1)}return a}function s(t){var a="<table style='table-layout:fixed;' cellspacing='0' cellpadding='0'>";e._load_mode&&e._load();for(var n=e._prepare_timeline_events(this),i=0,s=0;s<e._cols.length;s++)i+=e._cols[s];var d=new Date,_=e._cols.length-e._ignores_detected;d=(e.date.add(d,this.x_step*_,this.x_unit)-d-(this._start_correction+this._end_correction)*_)/i,this._step=d,this._summ=i;
var o=e._colsS.heights=[],l=[];this._events_height={},this._section_height={};for(var s=0;s<this.y_unit.length;s++){var c=this._logic(this.render,this.y_unit[s],this);e._merge(c,{height:this.dy}),this.section_autoheight&&(this.y_unit.length*c.height<t.offsetHeight&&(c.height=Math.max(c.height,Math.floor((t.offsetHeight-1)/this.y_unit.length))),this._section_height[this.y_unit[s].key]=c.height),c.td_className||(c.td_className="dhx_matrix_scell"+(e.templates[this.name+"_scaley_class"](this.y_unit[s].key,this.y_unit[s].label,this.y_unit[s])?" "+e.templates[this.name+"_scaley_class"](this.y_unit[s].key,this.y_unit[s].label,this.y_unit[s]):"")),
c.td_content||(c.td_content=e.templates[this.name+"_scale_label"](this.y_unit[s].key,this.y_unit[s].label,this.y_unit[s])),e._merge(c,{tr_className:"",style_height:"height:"+c.height+"px;",style_width:"width:"+this.dx+"px;",summ_width:"width:"+i+"px;",table_className:""});var h=r.call(this,n[s]);if(this.fit_events){var u=this._events_height[this.y_unit[s].key]||0;c.height=u>c.height?u:c.height,c.style_height="height:"+c.height+"px;",this._section_height[this.y_unit[s].key]=c.height}if(a+="<tr class='"+c.tr_className+"' style='"+c.style_height+"'><td class='"+c.td_className+"' style='"+c.style_width+" height:"+(c.height-1)+"px;'>"+c.td_content+"</td>",
"cell"==this.render)for(var v=0;v<e._cols.length;v++)a+=e._ignores[v]?"<td></td>":"<td class='dhx_matrix_cell "+e.templates[this.name+"_cell_class"](n[s][v],this._trace_x[v],this.y_unit[s])+"' style='width:"+e._cols[v]+"px'><div style='width:auto'>"+e.templates[this.name+"_cell_value"](n[s][v],this._trace_x[v],this.y_unit[s])+"</div></td>";else{a+="<td><div style='"+c.summ_width+" "+c.style_height+" position:relative;' class='dhx_matrix_line'>",a+=h,a+="<table class='"+c.table_className+"' cellpadding='0' cellspacing='0' style='"+c.summ_width+" "+c.style_height+"' >";

for(var v=0;v<e._cols.length;v++)a+=e._ignores[v]?"<td></td>":"<td class='dhx_matrix_cell "+e.templates[this.name+"_cell_class"](n[s],this._trace_x[v],this.y_unit[s])+"' style='width:"+e._cols[v]+"px'></td>";a+="</table>",a+="</div></td>"}a+="</tr>",l.push(c)}a+="</table>",this._matrix=n,t.innerHTML=a,e._populate_timeline_rendered(t),this._scales={};for(var f=t.firstChild.rows,g=null,s=0,p=l.length;p>s;s++){g=this.y_unit[s],o.push(l[s].height);var m=g.key,y=this._scales[m]=e._isRender("cell")?f[s]:f[s].childNodes[1].getElementsByTagName("div")[0];

e.callEvent("onScaleAdd",[y,m])}}function d(t){var a=e._min_date,n=e._max_date;e._process_ignores(a,this.x_size,this.x_unit,this.x_step,t);for(var i=(this.x_size+(t?e._ignores_detected:0),0),r=0;+n>+a;)if(this._trace_x[r]=new Date(a),a=e.date.add(a,this.x_step,this.x_unit),e.date[this.x_unit+"_start"]&&(a=e.date[this.x_unit+"_start"](a)),e._ignores[r]||i++,r++,t)if(i<this.x_size&&!(+n>+a))n=e.date["add_"+this.name+"_private"](n,(this.x_length||this.x_size)*this.x_step);else if(i>=this.x_size){e._max_date=a;

break}return{total:r,displayed:i}}function _(t){var a=e.xy.scale_height,n=this._header_resized||e.xy.scale_height;e._cols=[],e._colsS={height:0},this._trace_x=[];var i=e._x-this.dx-e.xy.scroll_width,r=[this.dx],s=e._els.dhx_cal_header[0];s.style.width=r[0]+i+"px";for(var _=e._min_date_timeline=e._min_date,l=e.config.preserve_scale_length,c=d.call(this,l),h=c.displayed,u=c.total,v=0;u>v;v++)e._ignores[v]?(e._cols[v]=0,h++):e._cols[v]=Math.floor(i/(h-v)),i-=e._cols[v],r[v+1]=r[v]+e._cols[v];if(t.innerHTML="<div></div>",
this.second_scale){for(var g=this.second_scale.x_unit,p=[this._trace_x[0]],m=[],y=[this.dx,this.dx],x=0,b=0;b<this._trace_x.length;b++){var w=this._trace_x[b],k=o(g,w,p[x]);k&&(++x,p[x]=w,y[x+1]=y[x]);var E=x+1;m[x]=e._cols[b]+(m[x]||0),y[E]+=e._cols[b]}t.innerHTML="<div></div><div></div>";var D=t.firstChild;D.style.height=n+"px";var N=t.lastChild;N.style.position="relative";for(var M=0;M<p.length;M++){var C=p[M],O=e.templates[this.name+"_second_scalex_class"](C),T=document.createElement("DIV");T.className="dhx_scale_bar dhx_second_scale_bar"+(O?" "+O:""),
e.set_xy(T,m[M]-1,n-3,y[M],0),T.innerHTML=e.templates[this.name+"_second_scale_date"](C),D.appendChild(T)}}e.xy.scale_height=n,t=t.lastChild;for(var L=0;L<this._trace_x.length;L++)if(!e._ignores[L]){_=this._trace_x[L],e._render_x_header(L,r[L],_,t);var S=e.templates[this.name+"_scalex_class"](_);S&&(t.lastChild.className+=" "+S)}e.xy.scale_height=a;var A=this._trace_x;t.onclick=function(t){var a=f(t);a&&e.callEvent("onXScaleClick",[a.x,A[a.x],t||event])},t.ondblclick=function(t){var a=f(t);a&&e.callEvent("onXScaleDblClick",[a.x,A[a.x],t||event]);

}}function o(t,a,n){switch(t){case"hour":return a.getHours()!=n.getHours()||o("day",a,n);case"day":return!(a.getDate()==n.getDate()&&a.getMonth()==n.getMonth()&&a.getFullYear()==n.getFullYear());case"week":return!(e.date.week_start(new Date(a)).valueOf()==e.date.week_start(new Date(n)).valueOf());case"month":return!(a.getMonth()==n.getMonth()&&a.getFullYear()==n.getFullYear());case"year":return!(a.getFullYear()==n.getFullYear());default:return!1}}function l(t){if(this._header_resized&&(!t||!this.second_scale)){
e.xy.scale_height/=2,this._header_resized=!1;var a=e._els.dhx_cal_header[0];a.className=a.className.replace(/ dhx_second_cal_header/gi,"")}}function c(t){if(l.call(this,t),t){this.second_scale&&!this._header_resized&&(this._header_resized=e.xy.scale_height,e.xy.scale_height*=2,e._els.dhx_cal_header[0].className+=" dhx_second_cal_header"),e.set_sizes(),e._init_matrix_tooltip();var a=e._min_date;_.call(this,e._els.dhx_cal_header[0]),s.call(this,e._els.dhx_cal_data[0]),e._min_date=a,e._els.dhx_cal_date[0].innerHTML=e.templates[this.name+"_date"](e._min_date,e._max_date),
e._mark_now&&e._mark_now(),l.call(this,t)}h()}function h(){e._tooltip&&(e._tooltip.style.display="none",e._tooltip.date="")}function u(t,a,n){if("cell"==t.render){var i=a.x+"_"+a.y,r=t._matrix[a.y][a.x];if(!r)return h();if(r.sort(function(e,t){return e.start_date>t.start_date?1:-1}),e._tooltip){if(e._tooltip.date==i)return;e._tooltip.innerHTML=""}else{var s=e._tooltip=document.createElement("DIV");s.className="dhx_year_tooltip",document.body.appendChild(s),s.onclick=e._click.dhx_cal_data}for(var d="",_=0;_<r.length;_++){
var o=r[_].color?"background-color:"+r[_].color+";":"",l=r[_].textColor?"color:"+r[_].textColor+";":"";d+="<div class='dhx_tooltip_line' event_id='"+r[_].id+"' style='"+o+l+"'>",d+="<div class='dhx_tooltip_date'>"+(r[_]._timed?e.templates.event_date(r[_].start_date):"")+"</div>",d+="<div class='dhx_event_icon icon_details'>&nbsp;</div>",d+=e.templates[t.name+"_tooltip"](r[_].start_date,r[_].end_date,r[_])+"</div>"}e._tooltip.style.display="",e._tooltip.style.top="0px",e._tooltip.style.left=document.body.offsetWidth-n.left-e._tooltip.offsetWidth<0?n.left-e._tooltip.offsetWidth+"px":n.left+a.src.offsetWidth+"px",
e._tooltip.date=i,e._tooltip.innerHTML=d,e._tooltip.style.top=document.body.offsetHeight-n.top-e._tooltip.offsetHeight<0?n.top-e._tooltip.offsetHeight+a.src.offsetHeight+"px":n.top+"px"}}function v(t){for(var a=t.parentNode.childNodes,n=-1,i=0;i<a.length;i++)if(a[i]==t){n=i;break}var r=n;if(e._ignores_detected)for(var s in e._ignores)e._ignores[s]&&r>=1*s&&r++;return r}function f(t){t=t||event;for(var a=t.target?t.target:t.srcElement;a&&"DIV"!=a.tagName;)a=a.parentNode;if(a&&"DIV"==a.tagName){var n=e._getClassName(a).split(" ")[0];

if("dhx_scale_bar"==n)return{x:v(a),y:-1,src:a,scale:!0}}}e.matrix={},e._merge=function(e,t){for(var a in t)"undefined"==typeof e[a]&&(e[a]=t[a])},e.createTimelineView=function(t){e._skin_init(),e._merge(t,{section_autoheight:!0,name:"matrix",x:"time",y:"time",x_step:1,x_unit:"hour",y_unit:"day",y_step:1,x_start:0,x_size:24,y_start:0,y_size:7,render:"cell",dx:200,dy:50,event_dy:e.xy.bar_height-5,event_min_dy:e.xy.bar_height-5,resize_events:!0,fit_events:!0,show_unassigned:!1,second_scale:!1,round_position:!1,
_logic:function(t,a,n){var i={};return e.checkEvent("onBeforeSectionRender")&&(i=e.callEvent("onBeforeSectionRender",[t,a,n])),i}}),t._original_x_start=t.x_start,"day"!=t.x_unit&&(t.first_hour=t.last_hour=0),t._start_correction=t.first_hour?60*t.first_hour*60*1e3:0,t._end_correction=t.last_hour?60*(24-t.last_hour)*60*1e3:0,e.checkEvent("onTimelineCreated")&&e.callEvent("onTimelineCreated",[t]);var a=e.render_data;e.render_data=function(n,i){if(this._mode!=t.name)return a.apply(this,arguments);if(i&&!t.show_unassigned&&"cell"!=t.render)for(var r=0;r<n.length;r++)this.clear_event(n[r]),
this.render_timeline_event.call(this.matrix[this._mode],n[r],!0);else e._renderMatrix.call(t,!0,!0)},e.matrix[t.name]=t,e.templates[t.name+"_cell_value"]=function(e){return e?e.length:""},e.templates[t.name+"_cell_class"]=function(e){return""},e.templates[t.name+"_scalex_class"]=function(e){return""},e.templates[t.name+"_second_scalex_class"]=function(e){return""},e.templates[t.name+"_scaley_class"]=function(e,t,a){return""},e.templates[t.name+"_scale_label"]=function(e,t,a){return t},e.templates[t.name+"_tooltip"]=function(e,t,a){
return a.text},e.templates[t.name+"_date"]=function(t,a){return t.getDay()==a.getDay()&&864e5>a-t||+t==+e.date.date_part(new Date(a))||+e.date.add(t,1,"day")==+a&&0===a.getHours()&&0===a.getMinutes()?e.templates.day_date(t):t.getDay()!=a.getDay()&&864e5>a-t?e.templates.day_date(t)+" &ndash; "+e.templates.day_date(a):e.templates.week_date(t,a)},e.templates[t.name+"_scale_date"]=e.date.date_to_str(t.x_date||e.config.hour_date),e.templates[t.name+"_second_scale_date"]=e.date.date_to_str(t.second_scale&&t.second_scale.x_date?t.second_scale.x_date:e.config.hour_date),
e.date["add_"+t.name+"_private"]=function(a,n){var i=n,r=t.x_unit;if("minute"==t.x_unit||"hour"==t.x_unit){var s=i;"hour"==t.x_unit&&(s*=60),s%1440||(i=s/1440,r="day")}return e.date.add(a,i,r)},e.date["add_"+t.name]=function(a,n,i){var r=e.date["add_"+t.name+"_private"](a,(t.x_length||t.x_size)*t.x_step*n);if("minute"==t.x_unit||"hour"==t.x_unit){var s=t.x_length||t.x_size,d="hour"==t.x_unit?60*t.x_step:t.x_step;if(d*s%1440)if(+e.date.date_part(new Date(a))==+e.date.date_part(new Date(r)))t.x_start+=n*s;
else{var _=1440/(s*d)-1,o=Math.round(_*s);t.x_start=n>0?t.x_start-o:o+t.x_start}}return r},e.date[t.name+"_start"]=function(a){var n=e.date[t.x_unit+"_start"]||e.date.day_start,i=n.call(e.date,a),r=i.getTimezoneOffset();i=e.date.add(i,t.x_step*t.x_start,t.x_unit);var s=i.getTimezoneOffset();return r!=s&&i.setTime(i.getTime()+6e4*(s-r)),i},e.callEvent("onOptionsLoad",[t]),e[t.name+"_view"]=function(a){a?e._set_timeline_dates(t):e._renderMatrix.apply(t,arguments)};{var i=new Date;e.date.add(i,t.x_step,t.x_unit).valueOf()-i.valueOf();

}e["mouse_"+t.name]=function(a){var i=this._drag_event;this._drag_id&&(i=this.getEvent(this._drag_id)),a.x-=t.dx;var r=e._timeline_drag_date(t,a.x);if(a.x=0,a.force_redraw=!0,a.custom=!0,"move"==this._drag_mode&&this._drag_id&&this._drag_event){var i=this.getEvent(this._drag_id),s=this._drag_event;if(a._ignores=this._ignores_detected||t._start_correction||t._end_correction,void 0===s._move_delta&&(s._move_delta=(i.start_date-r)/6e4,this.config.preserve_length&&a._ignores&&(s._move_delta=this._get_real_event_length(i.start_date,r,t),
s._event_length=this._get_real_event_length(i.start_date,i.end_date,t))),this.config.preserve_length&&a._ignores){var d=(s._event_length,this._get_fictional_event_length(r,s._move_delta,t,!0));r=new Date(r-d)}else r=e.date.add(r,s._move_delta,"minute")}if("resize"==this._drag_mode&&i&&(!this.config.timeline_swap_resize&&this._drag_id&&(this._drag_from_start&&+r>+i.end_date?this._drag_from_start=!1:!this._drag_from_start&&+r<+i.start_date&&(this._drag_from_start=!0)),a.resize_from_start=this._drag_from_start,
!this.config.timeline_swap_resize&&this._drag_id&&this._drag_from_start&&+r>=+e.date.add(i.end_date,-e.config.time_step,"minute")&&(r=e.date.add(i.end_date,-e.config.time_step,"minute"))),t.round_position)switch(this._drag_mode){case"move":this.config.preserve_length||(r=n.call(t,r,!1),"day"==t.x_unit&&(a.custom=!1));break;case"resize":this._drag_event&&((null===this._drag_event._resize_from_start||void 0===this._drag_event._resize_from_start)&&(this._drag_event._resize_from_start=a.resize_from_start),
a.resize_from_start=this._drag_event._resize_from_start,r=n.call(t,r,!this._drag_event._resize_from_start))}this._resolve_timeline_section(t,a),a.section&&this._update_timeline_section({pos:a,event:this.getEvent(this._drag_id),view:t}),a.y=Math.round((this._correct_shift(r,1)-this._min_date)/(6e4*this.config.time_step)),a.shift=this.config.time_step,t.round_position&&"new-size"==this._drag_mode&&r<=this._drag_start&&(a.shift=e.date.add(this._drag_start,t.x_step,t.x_unit)-this._drag_start);var _=this._is_pos_changed(this._drag_pos,a);

return this._drag_pos&&_&&(this._drag_event._dhx_changed=!0),_||this._drag_pos.has_moved||(a.force_redraw=!1),a}},e._prepare_timeline_events=function(a){var n=[];if("cell"==a.render)n=t.call(a);else for(var i=e.get_visible_events(),r=a.order,s=0;s<i.length;s++){var d=i[s],_=d[a.y_property],o=a.order[_];if(a.show_unassigned&&!_){for(var l in r)if(r.hasOwnProperty(l)){o=r[l],n[o]||(n[o]=[]);var c=e._lame_copy({},d);c[a.y_property]=l,n[o].push(c)}}else n[o]||(n[o]=[]),n[o].push(d)}return n},e._populate_timeline_rendered=function(t){
e._rendered=[];for(var a=t.getElementsByTagName("DIV"),n=0;n<a.length;n++)a[n].getAttribute("event_id")&&e._rendered.push(a[n])},e._get_timeline_event_height=function(e,t){var a=e[t.y_property],n=t.event_dy;return"full"==t.event_dy&&(n=t.section_autoheight?t._section_height[a]-6:t.dy-3),t.resize_events&&(n=Math.max(Math.floor(n/e._count),t.event_min_dy)),n},e._get_timeline_event_y=function(t,a){var n=t,i=2+n*a+(n?2*n:0);return e.config.cascade_event_display&&(i=2+n*e.config.cascade_event_margin+(n?2*n:0)),
i},e.render_timeline_event=function(t,n){var i=t[this.y_property];if(!i)return"";var r=t._sorder,s=a(t,!1,this),d=a(t,!0,this),_=e._get_timeline_event_height(t,this),o=_-2;t._inner||"full"!=this.event_dy||(o=(o+2)*(t._count-r)-2);var l=e._get_timeline_event_y(t._sorder,_),c=_+l+2;(!this._events_height[i]||this._events_height[i]<c)&&(this._events_height[i]=c);var h=e.templates.event_class(t.start_date,t.end_date,t);h="dhx_cal_event_line "+(h||""),t._no_drag_move&&(h+=" no_drag_move");var u=t.color?"background:"+t.color+";":"",v=t.textColor?"color:"+t.textColor+";":"",f=e.templates.event_bar_text(t.start_date,t.end_date,t),g='<div event_id="'+t.id+'" class="'+h+'" style="'+u+v+"position:absolute; top:"+l+"px; height: "+o+"px; left:"+s+"px; width:"+Math.max(0,d-s)+"px;"+(t._text_style||"")+'">';

if(e.config.drag_resize&&!e.config.readonly){var p="dhx_event_resize",m="<div class='"+p+" "+p+"_start' style='height: "+o+"px;'></div>",y="<div class='"+p+" "+p+"_end' style='height: "+o+"px;'></div>";g+=(t._no_resize_start?"":m)+(t._no_resize_end?"":y)}if(g+=f+"</div>",!n)return g;var x=document.createElement("DIV");x.innerHTML=g;var b=this.order[i],w=e._els.dhx_cal_data[0].firstChild.rows[b];if(w){var k=w.cells[1].firstChild;e._rendered.push(x.firstChild),k.appendChild(x.firstChild)}},e._matrix_tooltip_handler=function(t){
var a=e.matrix[e._mode];if(a&&"cell"==a.render){if(a){{var n=e._locate_cell_timeline(t),t=t||event;t.target||t.srcElement}if(n)return u(a,n,getOffset(n.src))}h()}},e._init_matrix_tooltip=function(){e._detachDomEvent(e._els.dhx_cal_data[0],"mouseover",e._matrix_tooltip_handler),dhtmlxEvent(e._els.dhx_cal_data[0],"mouseover",e._matrix_tooltip_handler)},e._set_timeline_dates=function(t){e._min_date=e.date[t.name+"_start"](new Date(e._date)),e._max_date=e.date["add_"+t.name+"_private"](e._min_date,t.x_size*t.x_step),
e.date[t.x_unit+"_start"]&&(e._max_date=e.date[t.x_unit+"_start"](e._max_date)),e._table_view=!0},e._renderMatrix=function(t,a){a||(e._els.dhx_cal_data[0].scrollTop=0),e._set_timeline_dates(this),c.call(this,t)},e._locate_cell_timeline=function(t){t=t||event;for(var a=t.target?t.target:t.srcElement,n={},i=e.matrix[e._mode],r=e.getActionData(t),s=e._ignores,d=0,_=0;_<i._trace_x.length-1&&!(+r.date<i._trace_x[_+1]);_++)s[_]||d++;n.x=0===d?0:_,n.y=i.order[r.section];var o=e._isRender("cell")?1:0;n.src=i._scales[r.section]?i._scales[r.section].getElementsByTagName("td")[_+o]:null;

for(var l=!1;0===n.x&&"dhx_cal_data"!=e._getClassName(a)&&a.parentNode;){if("dhx_matrix_scell"==e._getClassName(a).split(" ")[0]){l=!0;break}a=a.parentNode}return l?(n.x=-1,n.src=a,n.scale=!0):n.x=_,n};var g=e._click.dhx_cal_data;e._click.dhx_marked_timespan=e._click.dhx_cal_data=function(t){var a=g.apply(this,arguments),n=e.matrix[e._mode];if(n){var i=e._locate_cell_timeline(t);i&&(i.scale?e.callEvent("onYScaleClick",[i.y,n.y_unit[i.y],t||event]):e.callEvent("onCellClick",[i.x,i.y,n._trace_x[i.x],(n._matrix[i.y]||{})[i.x]||[],t||event]));

}return a},e.dblclick_dhx_matrix_cell=function(t){var a=e.matrix[e._mode];if(a){var n=e._locate_cell_timeline(t);n&&(n.scale?e.callEvent("onYScaleDblClick",[n.y,a.y_unit[n.y],t||event]):e.callEvent("onCellDblClick",[n.x,n.y,a._trace_x[n.x],(a._matrix[n.y]||{})[n.x]||[],t||event]))}};var p=e.dblclick_dhx_marked_timespan||function(){};e.dblclick_dhx_marked_timespan=function(t){var a=e.matrix[e._mode];return a?e.dblclick_dhx_matrix_cell(t):p.apply(this,arguments)},e.dblclick_dhx_matrix_scell=function(t){
return e.dblclick_dhx_matrix_cell(t)},e._isRender=function(t){return e.matrix[e._mode]&&e.matrix[e._mode].render==t},e.attachEvent("onCellDblClick",function(t,a,n,i,r){if(!this.config.readonly&&("dblclick"!=r.type||this.config.dblclick_create)){var s=e.matrix[e._mode],d={};d.start_date=s._trace_x[t],d.end_date=s._trace_x[t+1]?s._trace_x[t+1]:e.date.add(s._trace_x[t],s.x_step,s.x_unit),s._start_correction&&(d.start_date=new Date(1*d.start_date+s._start_correction)),s._end_correction&&(d.end_date=new Date(d.end_date-s._end_correction)),
d[s.y_property]=s.y_unit[a].key,e.addEventNow(d,null,r)}}),e.attachEvent("onBeforeDrag",function(t,a,n){return!e._isRender("cell")}),e.attachEvent("onEventChanged",function(e,t){t._timed=this.isOneDayEvent(t)}),e.attachEvent("onBeforeEventChanged",function(e,t,a,n){return e&&(e._move_delta=void 0),n&&(n._move_delta=void 0),!0}),e._is_column_visible=function(t){var a=e.matrix[e._mode],n=e._get_date_index(a,t);return!e._ignores[n]};var m=e._render_marked_timespan;e._render_marked_timespan=function(t,n,i,r,s){
if(!e.config.display_marked_timespans)return[];if(e.matrix&&e.matrix[e._mode]){if(e._isRender("cell"))return;var d=e._lame_copy({},e.matrix[e._mode]);d.round_position=!1;var _=[],o=[],l=[],c=t.sections?t.sections.units||t.sections.timeline:null;if(i)l=[n],o=[i];else{var h=d.order;if(c)h.hasOwnProperty(c)&&(o.push(c),l.push(d._scales[c]));else for(var u in h)h.hasOwnProperty(u)&&(o.push(u),l.push(d._scales[u]))}var r=r?new Date(r):e._min_date,s=s?new Date(s):e._max_date;r.valueOf()<e._min_date.valueOf()&&(r=new Date(e._min_date)),
s.valueOf()>e._max_date.valueOf()&&(s=new Date(e._max_date));for(var v=0;v<d._trace_x.length&&!e._is_column_visible(d._trace_x[v]);v++);if(v==d._trace_x.length)return;var f=[];if(t.days>6){var g=new Date(t.days);e.date.date_part(new Date(r))<=+g&&+s>=+g&&f.push(g)}else f.push.apply(f,e._get_dates_by_index(t.days));for(var p=t.zones,y=e._get_css_classes_by_config(t),x=0;x<o.length;x++){n=l[x],i=o[x];for(var v=0;v<f.length;v++)for(var b=f[v],w=0;w<p.length;w+=2){var k=p[w],E=p[w+1],D=new Date(+b+60*k*1e3),N=new Date(+b+60*E*1e3);

if(N>r&&s>D){var M=e._get_block_by_config(t);M.className=y;var C=a({start_date:D},!1,d)-1,O=a({start_date:N},!1,d)-1,T=Math.max(1,O-C-1),L=d._section_height[i]-1||d.dy-1;M.style.cssText="height: "+L+"px; left: "+C+"px; width: "+T+"px; top: 0;",n.insertBefore(M,n.firstChild),_.push(M)}}}return _}return m.apply(e,[t,n,i])};var y=e._append_mark_now;e._append_mark_now=function(t,a){if(e.matrix&&e.matrix[e._mode]){var n=e._currentDate(),i=e._get_zone_minutes(n),r={days:+e.date.date_part(n),zones:[i,i+1],
css:"dhx_matrix_now_time",type:"dhx_now_time"};return e._render_marked_timespan(r)}return y.apply(e,[t,a])};var x=e._mark_timespans;e._mark_timespans=function(){if(e.matrix&&e.matrix[e.getState().mode]){for(var t=[],a=e.matrix[e.getState().mode],n=a.y_unit,i=0;i<n.length;i++){var r=n[i].key,s=a._scales[r],d=e._on_scale_add_marker(s,r);t.push.apply(t,d)}return t}return x.apply(this,arguments)};var b=e._on_scale_add_marker;e._on_scale_add_marker=function(t,a){if(e.matrix&&e.matrix[e._mode]){var n=[],i=e._marked_timespans;

if(i&&e.matrix&&e.matrix[e._mode])for(var r=e._mode,s=e._min_date,d=e._max_date,_=i.global,o=e.date.date_part(new Date(s));d>o;o=e.date.add(o,1,"day")){var l=+o,c=o.getDay(),h=[],u=_[l]||_[c];if(h.push.apply(h,e._get_configs_to_render(u)),i[r]&&i[r][a]){var v=[],f=e._get_types_to_render(i[r][a][c],i[r][a][l]);v.push.apply(v,e._get_configs_to_render(f)),v.length&&(h=v)}for(var g=0;g<h.length;g++){var p=h[g],m=p.days;7>m?(m=l,n.push.apply(n,e._render_marked_timespan(p,t,a,o,e.date.add(o,1,"day"))),
m=c):n.push.apply(n,e._render_marked_timespan(p,t,a,o,e.date.add(o,1,"day")))}}return n}return b.apply(this,arguments)},e._resolve_timeline_section=function(e,t){var a=0,n=0;for(a;a<this._colsS.heights.length&&(n+=this._colsS.heights[a],!(n>t.y));a++);e.y_unit[a]||(a=e.y_unit.length-1),this._drag_event&&!this._drag_event._orig_section&&(this._drag_event._orig_section=e.y_unit[a].key),t.fields={},a>=0&&e.y_unit[a]&&(t.section=t.fields[e.y_property]=e.y_unit[a].key)},e._update_timeline_section=function(e){
var t=e.view,a=e.event,n=e.pos;if(a){if(a[t.y_property]!=n.section){var i=this._get_timeline_event_height(a,t);a._sorder=this._get_dnd_order(a._sorder,i,t._section_height[n.section])}a[t.y_property]=n.section}},e._get_date_index=function(e,t){for(var a=0,n=e._trace_x;a<n.length-1&&+t>=+n[a+1];)a++;return a},e._timeline_drag_date=function(t,a){var n,i,r=t,s={x:a},d=0,_=0;for(_;_<=this._cols.length-1;_++)if(i=this._cols[_],d+=i,d>s.x){n=(s.x-(d-i))/i,n=0>n?0:n;break}if(r.round_position){var o=1,l=e.getState().drag_mode;

l&&"move"!=l&&"create"!=l&&(o=.5),n>=o&&_++,n=0}if(0===_&&this._ignores[0])for(_=1,n=0;this._ignores[_];)_++;else if(_==this._cols.length&&this._ignores[_-1]){for(_=this._cols.length-1,n=0;this._ignores[_];)_--;_++}var c;if(_>=r._trace_x.length)c=e.date.add(r._trace_x[r._trace_x.length-1],r.x_step,r.x_unit),r._end_correction&&(c=new Date(c-r._end_correction));else{var h=n*i*r._step+r._start_correction;c=new Date(+r._trace_x[_]+h)}return c},e.attachEvent("onBeforeTodayDisplayed",function(){for(var t in e.matrix){
var a=e.matrix[t];a.x_start=a._original_x_start}return!0}),e.attachEvent("onOptionsLoad",function(){for(var t in e.matrix){var a=e.matrix[t];a.order={},e.callEvent("onOptionsLoadStart",[]);for(var t=0;t<a.y_unit.length;t++)a.order[a.y_unit[t].key]=t;e.callEvent("onOptionsLoadFinal",[]),e._date&&a.name==e._mode&&e.setCurrentView(e._date,e._mode)}}),e.attachEvent("onSchedulerResize",function(){if(e.matrix[this._mode]){var t=e.matrix[this._mode];return e._renderMatrix.call(t,!0,!0),!1}return!0}),e.attachEvent("onBeforeDrag",function(t,a,n){
if("resize"==a){var i=n.target||n.srcElement,r=e._getClassName(i);e._drag_from_start=r.indexOf("dhx_event_resize_end")<0?!0:!1}return!0})},e._temp_matrix_scope()});