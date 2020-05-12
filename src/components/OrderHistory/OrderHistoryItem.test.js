import { testSnapshots } from "../../utils/test.util";

import OrderHistoryItem from "./OrderHistoryItem";

describe("<OrderHistoryItem / >", () => {
  testSnapshots(OrderHistoryItem, [
    {
      props: {},
      description: "default render"
    }
  ]);
});