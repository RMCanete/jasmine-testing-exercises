describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = '50';
      tipAmtInput.value = '5';
    });
  
    it('should add a new payment with submitPaymentInfo()', function () {
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(1);
    });
  
    it('should not add a new payment with no imput for submitPaymentInfo()', function (){
      billAmtInput.value = ' ';

      expect(Object.keys(allPayments).length).toEqual(0);
    })
  
    it('should update the payment table with appendPaymentTable()', function(){
      let curPayment = createCurPayment();
      allPayments['payment1'] = curPayment;
      
      appendPaymentTable(curPayment);

      let td = document.querySelectorAll('#paymentTable tbody tr td');

      expect(td.length).toEqual(4);
    })

    it('should create a new payment with createCurPayments()', function(){
      let payment = {
        billAmt : '50',
        tipAmt : '5',
        tipPercent : 10
      }

      expect(createCurPayment()).toEqual(payment);
    })
  
    it('should return undefined with a negative input for createCurPayments()', function(){
      billAmtInput.value = '-50';

      let curPayment = createCurPayment();

      expect(curPayment).toEqual(undefined);
    })

    it('should generate a delete button with appendDeleteBtn(tr, "payment")', function(){
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
  