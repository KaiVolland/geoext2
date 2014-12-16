/*
 * Copyright (c) 2008-2014 The Open Source Geospatial Foundation
 *
 * Published under the BSD license.
 * See https://github.com/geoext/geoext2/blob/master/license.txt for the full
 * text of the license.
 */

/**
 * @requires GeoExt/Version.js
 */

/**
 * The layer model class used by the stores.
 *
 * @class GeoExt.data.LayerModel
 */
Ext.define('GeoExt.data.LayerModel',{
    alternateClassName: 'GeoExt.data.LayerRecord',
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Json',
        'GeoExt.Version'
    ],
    alias: 'model.gx_layer',
    inheritableStatics: {
        /**
         * Convenience function for creating new layer model instance object
         * using a layer object.
         *
         * @param {OpenLayers.Layer} layer
         * @return {GeoExt.data.LayerModel}
         * @static
         */
        createFromLayer: function(layer) {
            return this.getProxy().reader.readRecords([layer]).records[0];
        }
    },
    fields: [
        'id',
        {name: 'title', type: 'string', mapping: 'name'},
        {name: 'legendURL', type: 'string', mapping: 'metadata.legendURL'},
        {name: 'hideTitle', type: 'bool', mapping: 'metadata.hideTitle'},
        {name: 'hideInLegend', type: 'bool', mapping: 'metadata.hideInLegend'}
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    },
    /**
     * Returns the {OpenLayers.Layer} layer object used in this model instance.
     *
     * @return {OpenLayers.Layer}
     */
    getLayer: function() {
        // extjs4 -> returns an ol-layer in raw with attribute layer = wmc-title
        // extjs5 -> returns an ol-layer in data (raw is deprecated and behaves the same)
        // with attribute name = name
        // seems like the mapping doesnt work correctly in extjs5
        return (GeoExt.isExt4) ? this.raw : this.data;
    }
});
