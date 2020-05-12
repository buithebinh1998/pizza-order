import { testSnapshots } from "../../utils/test.util";

import OrderHistory from "./OrderHistory";

describe("<OrderHistory / >", () => {
  testSnapshots(OrderHistory, [
    {
      props: {},
      description: "default render"
    }
  ]);
});