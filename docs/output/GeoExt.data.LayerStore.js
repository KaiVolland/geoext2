Ext.data.JsonP.GeoExt_data_LayerStore({"parentMixins":[],"inheritdoc":null,"extends":"Ext.data.Store","alternateClassNames":[],"requires":["GeoExt.data.LayerModel"],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[{"owner":"GeoExt.data.LayerStore","tagname":"property","meta":{"static":true},"name":"MAP_TO_STORE","id":"static-property-MAP_TO_STORE"},{"owner":"GeoExt.data.LayerStore","tagname":"property","meta":{"static":true},"name":"STORE_TO_MAP","id":"static-property-STORE_TO_MAP"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.data.LayerStore","tagname":"cfg","meta":{},"name":"initDir","id":"cfg-initDir"},{"owner":"GeoExt.data.LayerStore","tagname":"cfg","meta":{},"name":"layers","id":"cfg-layers"},{"owner":"GeoExt.data.LayerStore","tagname":"cfg","meta":{},"name":"map","id":"cfg-map"}],"method":[{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"constructor","id":"method-constructor"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{},"name":"bind","id":"method-bind"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"destroy","id":"method-destroy"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{},"name":"getByLayer","id":"method-getByLayer"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"onAdd","id":"method-onAdd"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"onAddLayer","id":"method-onAddLayer"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"onChangeLayer","id":"method-onChangeLayer"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"onClear","id":"method-onClear"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"onLoad","id":"method-onLoad"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"onRemove","id":"method-onRemove"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"onRemoveLayer","id":"method-onRemoveLayer"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"onReplace","id":"method-onReplace"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"onUpdate","id":"method-onUpdate"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{"private":true},"name":"removeMapLayer","id":"method-removeMapLayer"},{"owner":"GeoExt.data.LayerStore","tagname":"method","meta":{},"name":"unbind","id":"method-unbind"}],"property":[{"owner":"GeoExt.data.LayerStore","tagname":"property","meta":{},"name":"map","id":"property-map"}],"css_var":[],"event":[{"owner":"GeoExt.data.LayerStore","tagname":"event","meta":{},"name":"bind","id":"event-bind"}],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>GeoExt.data.LayerStore</strong></div></div><h4>Requires</h4><div class='dependency'>GeoExt.data.LayerModel</div><h4>Files</h4><div class='dependency'><a href='source/LayerStore.html#GeoExt-data-LayerStore' target='_blank'>LayerStore.js</a></div></pre><div class='doc-contents'><p>A store that synchronizes a layers array of an OpenLayers.Map with a\nlayer store holding GeoExt.data.LayerModel instances.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-initDir' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-cfg-initDir' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-cfg-initDir' class='name expandable'>initDir</a><span> : Number</span></div><div class='description'><div class='short'>Bitfields specifying the direction to use for the initial sync between\nthe map and the store, if set to 0 then no ini...</div><div class='long'><p>Bitfields specifying the direction to use for the initial sync between\nthe map and the store, if set to 0 then no initial sync is done.\nDefaults to <a href=\"#!/api/GeoExt.data.LayerStore-static-property-MAP_TO_STORE\" rel=\"GeoExt.data.LayerStore-static-property-MAP_TO_STORE\" class=\"docClass\">MAP_TO_STORE</a> |\n<a href=\"#!/api/GeoExt.data.LayerStore-static-property-STORE_TO_MAP\" rel=\"GeoExt.data.LayerStore-static-property-STORE_TO_MAP\" class=\"docClass\">STORE_TO_MAP</a>.</p>\n</div></div></div><div id='cfg-layers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-cfg-layers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-cfg-layers' class='name not-expandable'>layers</a><span> : OpenLayers.Layer/Array</span></div><div class='description'><div class='short'><p>Layers that will be added to the store (and the map, depending on the\nvalue of the <code>initDir</code> option.</p>\n</div><div class='long'><p>Layers that will be added to the store (and the map, depending on the\nvalue of the <code>initDir</code> option.</p>\n</div></div></div><div id='cfg-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-cfg-map' class='name expandable'>map</a><span> : OpenLayers.Map/GeoExt.panel.Map/Object</span></div><div class='description'><div class='short'>Map that this store will be in sync with. ...</div><div class='long'><p>Map that this store will be in sync with. If not provided, the\nstore will not be bound to a map.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-map' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-property-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-property-map' class='name expandable'>map</a><span> : OpenLayers.Map/Object</span></div><div class='description'><div class='short'>Map that the store is synchronized with, if any. ...</div><div class='long'><p>Map that the store is synchronized with, if any.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='static-property-MAP_TO_STORE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-static-property-MAP_TO_STORE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-static-property-MAP_TO_STORE' class='name expandable'>MAP_TO_STORE</a><span> : Number</span><strong class='static signature'>static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='static-property-STORE_TO_MAP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-static-property-STORE_TO_MAP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-static-property-STORE_TO_MAP' class='name expandable'>STORE_TO_MAP</a><span> : Number</span><strong class='static signature'>static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>2</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.LayerStore-method-constructor' class='name expandable'>GeoExt.data.LayerStore</a>( <span class='pre'>Object config</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>@config {Object} Creation parameters ...</div><div class='long'><p>@config {Object} Creation parameters</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-bind' class='name expandable'>bind</a>( <span class='pre'>OpenLayers.Map map, Object options</span> )</div><div class='description'><div class='short'>Bind this store to a map instance, once bound the store\nis synchronized with the map and vice-versa. ...</div><div class='long'><p>Bind this store to a map instance, once bound the store\nis synchronized with the map and vice-versa.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : OpenLayers.Map<div class='sub-desc'><p>The map instance.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getByLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-getByLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-getByLayer' class='name expandable'>getByLayer</a>( <span class='pre'>OpenLayers.Layer layer</span> ) : Ext.data.Model</div><div class='description'><div class='short'>Get the record for the specified layer ...</div><div class='long'><p>Get the record for the specified layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.data.Model</span><div class='sub-desc'><p>or undefined if not found</p>\n</div></li></ul></div></div></div><div id='method-onAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-onAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-onAdd' class='name expandable'>onAdd</a>( <span class='pre'>Ext.data.Store store, Ext.data.Model[] records, Number index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's add event ...</div><div class='long'><p>Handler for a store's add event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Ext.data.Model[]<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onAddLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-onAddLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-onAddLayer' class='name expandable'>onAddLayer</a>( <span class='pre'>Object evt</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a map's addlayer event ...</div><div class='long'><p>Handler for a map's addlayer event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onChangeLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-onChangeLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-onChangeLayer' class='name expandable'>onChangeLayer</a>( <span class='pre'>Object evt</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for layer changes. ...</div><div class='long'><p>Handler for layer changes.  When layer order changes, this moves the\nappropriate record within the store.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onClear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-onClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-onClear' class='name expandable'>onClear</a>( <span class='pre'>Ext.data.Store store</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's clear event ...</div><div class='long'><p>Handler for a store's clear event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-onLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-onLoad' class='name expandable'>onLoad</a>( <span class='pre'>Ext.data.Store store, Ext.data.Model[] records, Object options</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's load event ...</div><div class='long'><p>Handler for a store's load event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Ext.data.Model[]<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>Ext.data.Store store, Ext.data.Model record, Number index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's remove event ...</div><div class='long'><p>Handler for a store's remove event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRemoveLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-onRemoveLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-onRemoveLayer' class='name expandable'>onRemoveLayer</a>( <span class='pre'>Object evt</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a map's removelayer event ...</div><div class='long'><p>Handler for a map's removelayer event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onReplace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-onReplace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-onReplace' class='name expandable'>onReplace</a>( <span class='pre'>String key, Ext.data.Model oldRecord, Ext.data.Model newRecord</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's data collections' replace event ...</div><div class='long'><p>Handler for a store's data collections' replace event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>oldRecord</span> : Ext.data.Model<div class='sub-desc'><p>In this case, a record that has</p>\n\n<pre><code>been replaced.\n</code></pre>\n</div></li><li><span class='pre'>newRecord</span> : Ext.data.Model<div class='sub-desc'><p>In this case, a record that is</p>\n\n<pre><code>replacing oldRecord.\n</code></pre>\n</div></li></ul></div></div></div><div id='method-onUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-onUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-onUpdate' class='name expandable'>onUpdate</a>( <span class='pre'>Ext.data.Store store, Ext.data.Model record, Number operation</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's update event ...</div><div class='long'><p>Handler for a store's update event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li><li><span class='pre'>operation</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeMapLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-removeMapLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-removeMapLayer' class='name expandable'>removeMapLayer</a>( <span class='pre'>Ext.data.Record record</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Removes a record's layer from the bound map. ...</div><div class='long'><p>Removes a record's layer from the bound map.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-unbind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-method-unbind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-method-unbind' class='name expandable'>unbind</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unbind this store from the map it is currently bound. ...</div><div class='long'><p>Unbind this store from the map it is currently bound.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerStore'>GeoExt.data.LayerStore</span><br/><a href='source/LayerStore.html#GeoExt-data-LayerStore-event-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerStore-event-bind' class='name expandable'>bind</a>( <span class='pre'><a href=\"#!/api/GeoExt.data.LayerStore\" rel=\"GeoExt.data.LayerStore\" class=\"docClass\">GeoExt.data.LayerStore</a> store, OpenLayers.Map map, Object eOpts</span> )</div><div class='description'><div class='short'>Fires when the store is bound to a map. ...</div><div class='long'><p>Fires when the store is bound to a map.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : <a href=\"#!/api/GeoExt.data.LayerStore\" rel=\"GeoExt.data.LayerStore\" class=\"docClass\">GeoExt.data.LayerStore</a><div class='sub-desc'>\n</div></li><li><span class='pre'>map</span> : OpenLayers.Map<div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.data.LayerStore","files":[{"href":"LayerStore.html#GeoExt-data-LayerStore","filename":"LayerStore.js"}],"mixedInto":[],"aliases":{},"id":"class-GeoExt.data.LayerStore","superclasses":["Ext.data.Store"]});