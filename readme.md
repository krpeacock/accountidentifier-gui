# Principal to AccountIdentifier

Simple UI for it! the basic code is just

```js
import { Principal } from "@dfinity/principal";
import { AccountIdentifier } from "@dfinity/nns";

const principal = Principal.from(e.target.value);
if (principal.toText() === "aaaaa-aa") {
  return;
}
const id = AccountIdentifier.fromPrincipal({ principal });
console.log(id.toHex());
```

If you want to build it yourself!

Live at https://dgbig-4qaaa-aaaab-qahia-cai.ic0.app/
