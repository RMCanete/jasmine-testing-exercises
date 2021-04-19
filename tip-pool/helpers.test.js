describe("Helpers test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = 50;
    tipAmtInput.value = 5;
    submitPaymentInfo();
  });

  it('should calculate bill amount with sumPaymentTotal()', function(){
    
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(150);
  })

  it('should calculate tip amount with sumPaymentTotal()', function(){
    
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(15);
  })

  it('should calculate tip percent with sumPaymentTotal()', function(){

    expect(sumPaymentTotal('tipPercent')).toEqual(10);
  })

  it('should calculate tip percent with calculateTipPercent()', function(){
    expect(calculateTipPercent('100', '10')).toEqual(10);
  })

  it('should generate a delete button with appendDeleteBtn(tr, value)', function(){
    let tr = document.createElement('tr');
    appendDeleteBtn(tr);

    expect(tr.firstChild.innerHTML).toEqual('X');
  })

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    allPayments = {};
  });
});