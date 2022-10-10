import { Principal } from "@dfinity/principal";
import { AccountIdentifier } from "@dfinity/nns";

const account = document.getElementById("account");
const area = document.getElementById("area");
const copy = document.getElementById("copy");
const principal = document.getElementById("principal");

function handleChange(e) {
  console.log(e.target.value);
  try {
    const principal = Principal.from(e.target.value);
    if (principal.toText() === "aaaaa-aa") {
      return;
    }
    console.log(principal);
    const id = AccountIdentifier.fromPrincipal({ principal });
    area.value = id.toHex();
    account.classList.remove("hidden");
  } catch (error) {
    console.error(error);
    account.classList.add("hidden");
    area.value = "";
  }
}

principal.addEventListener("change", handleChange);
principal.addEventListener("keyup", handleChange);

copy.addEventListener("click", (e) => {
  const text = area.value;
  navigator.clipboard.writeText(text);
  copy.innerText = "Copied!";
  copy.setAttribute("disabled");

  setTimeout(function () {
    copy.innerText = "copy";
    copy.removeAttribute("disabled");
  }, 5_000);
});
