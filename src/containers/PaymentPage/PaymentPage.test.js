import { testSnapshots } from "../../utils/test.util";

import PaymentPage from "./PaymentPage";

describe("<PaymentPage / >", () => {
  testSnapshots(PaymentPage, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
