var Plotly = require('@lib/index');
var Lib = require('@src/lib');

var d3 = require('d3');
var createGraphDiv = require('../assets/create_graph_div');
var destroyGraphDiv = require('../assets/destroy_graph_div');
var failTest = require('../assets/fail_test');
var click = require('../assets/click');
var getClientPosition = require('../assets/get_client_position');
var mouseEvent = require('../assets/mouse_event');
var supplyAllDefaults = require('../assets/supply_defaults');
var rgb = require('../../../src/components/color').rgb;

var customAssertions = require('../assets/custom_assertions');
var assertHoverLabelStyle = customAssertions.assertHoverLabelStyle;
var assertHoverLabelContent = customAssertions.assertHoverLabelContent;

var SLICES_SELECTOR = '.slice path';
var SLICES_TEXT_SELECTOR = '.funnelarealayer text.slicetext';
var LEGEND_ENTRIES_SELECTOR = '.legendpoints path';

describe('Indicator defaults', function() {
    function _supply(trace, layout) {
        var gd = {
            data: [trace],
            layout: layout || {}
        };

        supplyAllDefaults(gd);

        return gd._fullData[0];
    }

    it('finds the minimum length of labels & values', function() {
        var out = _supply({type: 'indicator', values: [1, 2, 3]});
        expect(out._length).toBe(2);

        out = _supply({type: 'indicator', values: [1, 2]});
        expect(out._length).toBe(2);
    });
});
