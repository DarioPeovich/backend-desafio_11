
const form = document.getElementById('purchaseForm');
const cartIdElement = document.getElementById('cartId');
const cartIdValue = cartIdElement.getAttribute('data-cart-id');
// console.log("cartIdValue", cartIdValue)
form.addEventListener('submit', e => {
    e.preventDefault();
    // const cartId = document.querySelector('input[name="cart_id"]').value;
    //const linkPurchase = `/api/carts/${cartId}/purchase`;
    const linkPurchase = "/api/carts/" + cartIdValue + "/purchase";
    //const linkPurchase = "/carts/" + cartId.value ;
    // console.log(linkPurchase);

    fetch(linkPurchase, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(result => result.json())
    .then(json => {
        // Verificar si la respuesta indica éxito
        if (json.status === "success") {
            // Mostrar SweetAlert de éxito
            Swal.fire({
                title: "Success!",
                text: "Registro exitoso.",
                icon: "success",
            });

            // Puedes redirigir a otra página si es necesario
            // window.location.href = "/success-page";
        } else {
            // Si hay errores, puedes manejarlos aquí o simplemente mostrar una alerta
            console.error("Registration failed:", json.error);
            Swal.fire({
                title: "Error!",
                text: "Registracion fallido. Por favor vuelva a intentarlo.",
                icon: "error",
            });
        }
    })
    
})

//CartId: 6590707032eef4df1cabff6a