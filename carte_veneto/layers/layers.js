var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_veneto_arpa_text50cm_250k_1 = new ol.format.GeoJSON();
var features_veneto_arpa_text50cm_250k_1 = format_veneto_arpa_text50cm_250k_1.readFeatures(json_veneto_arpa_text50cm_250k_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_veneto_arpa_text50cm_250k_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_veneto_arpa_text50cm_250k_1.addFeatures(features_veneto_arpa_text50cm_250k_1);
var lyr_veneto_arpa_text50cm_250k_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_veneto_arpa_text50cm_250k_1, 
                style: style_veneto_arpa_text50cm_250k_1,
                popuplayertitle: "veneto_arpa_text50cm_250k",
                interactive: true,
                title: '<img src="styles/legend/veneto_arpa_text50cm_250k_1.png" /> veneto_arpa_text50cm_250k'
            });
var format_veneto_arpa_text50cm_50k_2 = new ol.format.GeoJSON();
var features_veneto_arpa_text50cm_50k_2 = format_veneto_arpa_text50cm_50k_2.readFeatures(json_veneto_arpa_text50cm_50k_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_veneto_arpa_text50cm_50k_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_veneto_arpa_text50cm_50k_2.addFeatures(features_veneto_arpa_text50cm_50k_2);
var lyr_veneto_arpa_text50cm_50k_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_veneto_arpa_text50cm_50k_2, 
                style: style_veneto_arpa_text50cm_50k_2,
                popuplayertitle: "veneto_arpa_text50cm_50k",
                interactive: true,
                title: '<img src="styles/legend/veneto_arpa_text50cm_50k_2.png" /> veneto_arpa_text50cm_50k'
            });
var format_geonodePermSuoli250k_3 = new ol.format.GeoJSON();
var jsonSource_geonodePermSuoli250k_3 = new ol.source.Vector({
    attributions: ' ',
    format: format_geonodePermSuoli250k_3
});var lyr_geonodePermSuoli250k_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_geonodePermSuoli250k_3, 
    style: style_geonodePermSuoli250k_3,
    interactive: true,
    title: "geonode:PermSuoli250k"
});

function getgeonodePermSuoli250k_3Json(geojson) {
    var features_geonodePermSuoli250k_3 = format_geonodePermSuoli250k_3.readFeatures(geojson);
    jsonSource_geonodePermSuoli250k_3.addFeatures(features_geonodePermSuoli250k_3);
}
var format_veneto_arpa_idro_250k_4 = new ol.format.GeoJSON();
var features_veneto_arpa_idro_250k_4 = format_veneto_arpa_idro_250k_4.readFeatures(json_veneto_arpa_idro_250k_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_veneto_arpa_idro_250k_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_veneto_arpa_idro_250k_4.addFeatures(features_veneto_arpa_idro_250k_4);
var lyr_veneto_arpa_idro_250k_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_veneto_arpa_idro_250k_4, 
                style: style_veneto_arpa_idro_250k_4,
                popuplayertitle: "veneto_arpa_idro_250k",
                interactive: true,
                title: '<img src="styles/legend/veneto_arpa_idro_250k_4.png" /> veneto_arpa_idro_250k'
            });
var format_veneto_arpa_idro_50k_5 = new ol.format.GeoJSON();
var features_veneto_arpa_idro_50k_5 = format_veneto_arpa_idro_50k_5.readFeatures(json_veneto_arpa_idro_50k_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_veneto_arpa_idro_50k_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_veneto_arpa_idro_50k_5.addFeatures(features_veneto_arpa_idro_50k_5);
var lyr_veneto_arpa_idro_50k_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_veneto_arpa_idro_50k_5, 
                style: style_veneto_arpa_idro_50k_5,
                popuplayertitle: "veneto_arpa_idro_50k",
                interactive: true,
                title: '<img src="styles/legend/veneto_arpa_idro_50k_5.png" /> veneto_arpa_idro_50k'
            });
var format_veneto_arpa_perm_250k_6 = new ol.format.GeoJSON();
var features_veneto_arpa_perm_250k_6 = format_veneto_arpa_perm_250k_6.readFeatures(json_veneto_arpa_perm_250k_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_veneto_arpa_perm_250k_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_veneto_arpa_perm_250k_6.addFeatures(features_veneto_arpa_perm_250k_6);
var lyr_veneto_arpa_perm_250k_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_veneto_arpa_perm_250k_6, 
                style: style_veneto_arpa_perm_250k_6,
                popuplayertitle: "veneto_arpa_perm_250k",
                interactive: true,
                title: '<img src="styles/legend/veneto_arpa_perm_250k_6.png" /> veneto_arpa_perm_250k'
            });
var format_veneto_arpa_perm_50k_7 = new ol.format.GeoJSON();
var features_veneto_arpa_perm_50k_7 = format_veneto_arpa_perm_50k_7.readFeatures(json_veneto_arpa_perm_50k_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_veneto_arpa_perm_50k_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_veneto_arpa_perm_50k_7.addFeatures(features_veneto_arpa_perm_50k_7);
var lyr_veneto_arpa_perm_50k_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_veneto_arpa_perm_50k_7, 
                style: style_veneto_arpa_perm_50k_7,
                popuplayertitle: "veneto_arpa_perm_50k",
                interactive: true,
                title: '<img src="styles/legend/veneto_arpa_perm_50k_7.png" /> veneto_arpa_perm_50k'
            });
var format_provincie_8 = new ol.format.GeoJSON();
var features_provincie_8 = format_provincie_8.readFeatures(json_provincie_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provincie_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincie_8.addFeatures(features_provincie_8);
var lyr_provincie_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provincie_8, 
                style: style_provincie_8,
                popuplayertitle: "provincie",
                interactive: true,
                title: '<img src="styles/legend/provincie_8.png" /> provincie'
            });
var format_regione_9 = new ol.format.GeoJSON();
var features_regione_9 = format_regione_9.readFeatures(json_regione_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regione_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regione_9.addFeatures(features_regione_9);
var lyr_regione_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_regione_9, 
                style: style_regione_9,
                popuplayertitle: "regione",
                interactive: true,
                title: '<img src="styles/legend/regione_9.png" /> regione'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_veneto_arpa_text50cm_250k_1.setVisible(false);lyr_veneto_arpa_text50cm_50k_2.setVisible(false);lyr_geonodePermSuoli250k_3.setVisible(false);lyr_veneto_arpa_idro_250k_4.setVisible(false);lyr_veneto_arpa_idro_50k_5.setVisible(false);lyr_veneto_arpa_perm_250k_6.setVisible(false);lyr_veneto_arpa_perm_50k_7.setVisible(false);lyr_provincie_8.setVisible(true);lyr_regione_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_veneto_arpa_text50cm_250k_1,lyr_veneto_arpa_text50cm_50k_2,lyr_geonodePermSuoli250k_3,lyr_veneto_arpa_idro_250k_4,lyr_veneto_arpa_idro_50k_5,lyr_veneto_arpa_perm_250k_6,lyr_veneto_arpa_perm_50k_7,lyr_provincie_8,lyr_regione_9];
lyr_veneto_arpa_text50cm_250k_1.set('fieldAliases', {'fid': 'fid', 'tessit_cl': 'tessit_cl', 'tess_descr': 'tess_descr', 'schel_cl': 'schel_cl', 'schel_desc': 'schel_desc', });
lyr_veneto_arpa_text50cm_50k_2.set('fieldAliases', {'fid': 'fid', 'tessit_cl': 'tessit_cl', 'tess_descr': 'tess_descr', 'schel_cl': 'schel_cl', 'schel_desc': 'schel_desc', });
lyr_geonodePermSuoli250k_3.set('fieldAliases', {'fid': 'fid', 'perm_clas': 'perm_clas', 'perm_desc': 'perm_desc', });
lyr_veneto_arpa_idro_250k_4.set('fieldAliases', {'fid': 'fid', 'gr_idrolog': 'gr_idrolog', 'gridr_desc': 'gridr_desc', });
lyr_veneto_arpa_idro_50k_5.set('fieldAliases', {'fid': 'fid', 'gr_idrolog': 'gr_idrolog', 'gridr_desc': 'gridr_desc', });
lyr_veneto_arpa_perm_250k_6.set('fieldAliases', {'fid': 'fid', 'perm_clas': 'perm_clas', 'perm_desc': 'perm_desc', });
lyr_veneto_arpa_perm_50k_7.set('fieldAliases', {'fid': 'fid', 'perm_clas': 'perm_clas', 'perm_desc': 'perm_desc', });
lyr_provincie_8.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'DEN_PROV': 'DEN_PROV', 'DEN_CM': 'DEN_CM', 'DEN_UTS': 'DEN_UTS', 'SIGLA': 'SIGLA', 'TIPO_UTS': 'TIPO_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_regione_9.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_veneto_arpa_text50cm_250k_1.set('fieldImages', {'fid': 'TextEdit', 'tessit_cl': 'TextEdit', 'tess_descr': 'TextEdit', 'schel_cl': 'TextEdit', 'schel_desc': 'TextEdit', });
lyr_veneto_arpa_text50cm_50k_2.set('fieldImages', {'fid': 'TextEdit', 'tessit_cl': 'TextEdit', 'tess_descr': 'TextEdit', 'schel_cl': 'TextEdit', 'schel_desc': 'TextEdit', });
lyr_geonodePermSuoli250k_3.set('fieldImages', {'fid': '', 'perm_clas': '', 'perm_desc': '', });
lyr_veneto_arpa_idro_250k_4.set('fieldImages', {'fid': 'TextEdit', 'gr_idrolog': 'TextEdit', 'gridr_desc': 'TextEdit', });
lyr_veneto_arpa_idro_50k_5.set('fieldImages', {'fid': 'TextEdit', 'gr_idrolog': 'TextEdit', 'gridr_desc': 'TextEdit', });
lyr_veneto_arpa_perm_250k_6.set('fieldImages', {'fid': 'TextEdit', 'perm_clas': 'TextEdit', 'perm_desc': 'TextEdit', });
lyr_veneto_arpa_perm_50k_7.set('fieldImages', {'fid': 'TextEdit', 'perm_clas': 'TextEdit', 'perm_desc': 'TextEdit', });
lyr_provincie_8.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'DEN_PROV': 'TextEdit', 'DEN_CM': 'TextEdit', 'DEN_UTS': 'TextEdit', 'SIGLA': 'TextEdit', 'TIPO_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_regione_9.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_veneto_arpa_text50cm_250k_1.set('fieldLabels', {'fid': 'no label', 'tessit_cl': 'no label', 'tess_descr': 'no label', 'schel_cl': 'no label', 'schel_desc': 'no label', });
lyr_veneto_arpa_text50cm_50k_2.set('fieldLabels', {'fid': 'no label', 'tessit_cl': 'no label', 'tess_descr': 'no label', 'schel_cl': 'no label', 'schel_desc': 'no label', });
lyr_geonodePermSuoli250k_3.set('fieldLabels', {'fid': 'no label', 'perm_clas': 'no label', 'perm_desc': 'no label', });
lyr_veneto_arpa_idro_250k_4.set('fieldLabels', {'fid': 'no label', 'gr_idrolog': 'no label', 'gridr_desc': 'no label', });
lyr_veneto_arpa_idro_50k_5.set('fieldLabels', {'fid': 'no label', 'gr_idrolog': 'no label', 'gridr_desc': 'no label', });
lyr_veneto_arpa_perm_250k_6.set('fieldLabels', {'fid': 'no label', 'perm_clas': 'no label', 'perm_desc': 'no label', });
lyr_veneto_arpa_perm_50k_7.set('fieldLabels', {'fid': 'no label', 'perm_clas': 'no label', 'perm_desc': 'no label', });
lyr_provincie_8.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'DEN_PROV': 'no label', 'DEN_CM': 'no label', 'DEN_UTS': 'no label', 'SIGLA': 'no label', 'TIPO_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_regione_9.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'DEN_REG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_regione_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});