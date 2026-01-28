function openEnquiry(service){
  document.getElementById("modalTitle").innerText =
    "Enquire about " + service;

  document.getElementById("waBtn").href =
    "https://wa.me/918121592299?text=" +
    encodeURIComponent("Hello, I want to enquire about " + service);

  document.getElementById("mailBtn").href =
    "mailto:skyexpress.vskp@gmail.com?subject=" +
    encodeURIComponent("Enquiry about " + service);

  document.getElementById("modal").style.display = "flex";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}
