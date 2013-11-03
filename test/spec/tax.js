'use strict';

describe('TAX', function () {

  it('should attach a list of awesomeThings to the scope', function () {
    // REF: http://www.thai-aec.com/639
    expect( TAX(150000).total ).toBe(0);
    expect( TAX(300000).total ).toBe(7500);
    expect( TAX(500000).total ).toBe(27500);
    expect( TAX(1000000).total ).toBe(115000);
    expect( TAX(4000000).total ).toBe(965000);
    expect( TAX(8000000).total ).toBe(2365000);

  });
});

