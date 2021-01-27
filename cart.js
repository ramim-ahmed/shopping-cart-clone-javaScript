
function productItemChange (product, isIncrease) {

    const productInput = document.getElementById(product +'-input');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;

    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;


    let productTotal = 0;
    if(product == 'case'){
       productTotal = productNewCount * 59;
    }

    if(product == 'phone'){
        productTotal = productNewCount * 1219;
     }
    document.getElementById(product+'-price').innerText = productTotal;

    CalculateSubtotal ();
}

function CalculateSubtotal () {
    
    const caseCount = getProductInputValue('case');
    const phoneCount = getProductInputValue('phone')
    const subTotal = caseCount * 59 +  phoneCount * 1219;
    document.getElementById('sub-total').innerText = subTotal;

    const tax = Math.floor( subTotal *  0.1) ;
    document.getElementById('tax').innerText = tax;
    
    const grandTotal = subTotal + tax ;
    document.getElementById('grand-total').innerText = grandTotal;
}

function getProductInputValue (product) {
    const productInput = document.getElementById(product + '-input');
    const productCount = parseInt(productInput.value);
    return productCount;
}

// close handler 


const closeBtn = document.getElementsByClassName('remove-item');

for(let i = 0; i < closeBtn.length; i++){
    const button = closeBtn[i];
    button.addEventListener('click', function (event) {
       const buttonClick = event.target;
       buttonClick.parentElement.parentElement.parentElement.remove();
       updateGrandTotal ()
    })
}

function updateGrandTotal () {
    const cartContainer = document.getElementsByClassName('cart-item')[0]
    const cartRows = cartContainer.getElementsByTagName('row');
    let subTotal = 0;
    for(let i = 0; i < cartRows.length; i++){
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName('cart-price')[0];
        const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];

        const price = parseInt(priceElement.innerText.replace('$', ''));
        const quantity = quantityElement.value;
        subTotal = subTotal + ( price * quantity);

    }
    document.getElementsByClassName('cart-total-price')[0].innerText = subTotal;
    const tax = Math.floor(subTotal * 0.1);
    document.getElementsByClassName('tax')[0].innerText = tax;

    const grandTotal = subTotal + tax;

    document.getElementsByClassName('grand-total').innerText = grandTotal;

}
