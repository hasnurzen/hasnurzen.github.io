function showMessage() {
  const name = document.getElementById("name").value;
  document.getElementById("hasil").innerText =
    "Terima kasih, " + name + ", telah mendaftar!";
  return false;
}
