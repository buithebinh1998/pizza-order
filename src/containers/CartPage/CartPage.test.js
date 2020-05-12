import { testSnapshots } from "../../utils/test.util";

import CartPage from "./CartPage";

describe("<CartPage / >", () => {
  testSnapshots(CartPage, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
