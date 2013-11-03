'use strict';
// REF : http://hilight.kapook.com/view/79758
var taxLevels = [
    {
        max: 150000,
        tax: 0
    },
    {
        max: 300000,
        tax: 0.05
    },
    {
        max: 500000,
        tax: 0.1
    },
    {
        max: 750000,
        tax: 0.15
    },
    {
        max: 1000000,
        tax: 0.2
    },
    {
        max: 2000000,
        tax: 0.25
    },
    {
        max: 4000000,
        tax: 0.30
    },
    {
        max: Infinity,
        tax: 0.35
    },

];

function TAX(netIncome) {
    var res = {
        total: 0,
        detail: []
    };


    var maxLevel = 0;

    // Find max level
    for ( var i = 1; i < taxLevels.length; i++ ) {
        if(  taxLevels[i-1].max < netIncome && netIncome <= taxLevels[i].max ) {
            maxLevel = i;
            break;
        }
    }

    // Calcurate
    for ( var j = maxLevel; j > 0; j-- ) {
        var diff  = netIncome - taxLevels[j-1].max;

        res.total += ( diff * taxLevels[j].tax );

        netIncome -= diff;
    }


    return res;
}
