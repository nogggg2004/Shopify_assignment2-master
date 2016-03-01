// Render HTML with a receipt for an order
//Hello min Kim !
var order_productA = {
  "payment_type": "creditcard",
  "payment": {
    "getCardType": "Master Card",
    "card_number": 1234567890123
  },
  "products": {
    "name": "Mechanical Keyboard A"
  },
  "amount_in_dollars": 127.99
};

function receiptA(order) {
  var p = "Payment info: ";
  if (order.payment_type = "creditcard") { // changed conditional equality to assignment operator
    p += order.payment.getCardType + " " + order.payment.card_number; //card type(VISA/MasterCard etc.) and number)
  } else if (order.payment_type == "paypal") {
    p += order.payment.paypal_info;
  } else if (order.payment_type == "manual") {
    p += order.payment.manual_payment_info;
  } else if (order.payment_type == "free") {
    p = "Payment info: This order was free!"; //Free order or promotional item
  } else {
    p = "Payment info: " + order.payment.default_payment_info; //default order info
  }

  if (order.payment_type != "free") {
    p = p + "<p> was charged " + order.amount_in_dollars + "$" + "</p>";
  }


  var html = "<p>" + "Your order of " + order.products.name + " has been received" + "</p>" + "<p>" + p + "</p>";
  document.write("<h1> Order receipt details A</h1>" + html);
}


function receiptB(order) {
  var payment_type = order.payment_type;
  var p = "Payment info: ";
  var creditcard = p + order.payment.getCardType + " " + order.payment.card_number;
  var paypal = p + order.payment.paypal_info;
  var manual = p + order.payment.manual_payment_info;
  var free = p + 'This order was free!';
  var notFree = "<p> was charged " + order.amount_in_dollars + "$" + "</p>";
  var dft = p + order.payment.default_payment_info;
  var t = (payment_type === 'creditcard') ? creditcard :
    (payment_type === 'paypal') ? paypal :
    (payment_type === 'manual') ? manual :
    (payment_type === 'free') ? free : dft;
  if (payment_type !== 'free') {
    t += notFree;
  }
  var receiptTxt = "<p>" + "Your order of " + order.products.name + " has been received" + "</p>" +
    "<p>" + t + "</p>";
  document.write("<h1> Order receipt details B</h1>" + receiptTxt);
}


function receiptC(order) {
  var payment_type = order.payment_type;
  var p = "Payment info: ";

  switch (payment_type) {
    case 'creditcard':
      p += order.payment.getCardType + " " + order.payment.card_number;
      break;
    case 'paypal':
      p += order.payment.paypal_info;
      break;
    case 'manual':
      p += order.payment.manual_payment_info;
      break;
    case 'free':
      p += 'This order was free!'; //free order or promotional item
      break;
    default:
      p += order.payment.default_payment_info; //default order info
      break;
  }

  if (payment_type != 'free') {
    p = p + "<p> was charged " + order.amount_in_dollars + "$" + "</p>";
  }

  var html = "<p>" + "Your order of " + order.products.name + " has been received" + "</p>" + "<p>" + p + "</p>";
  document.write("<h1> Order receipt details C</h1>" + html);
}

receiptA(order_productA);
receiptB(order_productA);
receiptC(order_productA);
