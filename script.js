function sendPickup() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pickup = document.getElementById("pickupLoc").value.trim();
  const delivery = document.getElementById("delivery").value.trim();
  const type = document.getElementById("type").value;
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !pickup || !delivery || !type) {
    alert("Please fill all required fields");
    return;
  }

  const text =
`Pickup Request
Name: ${name}
Phone: ${phone}
Email: ${email}
Pickup: ${pickup}
Delivery: ${delivery}
Courier Type: ${type}
Message: ${message}`;

  window.open(
    "https://wa.me/918121592299?text=" + encodeURIComponent(text),
    "_blank"
  );
}
