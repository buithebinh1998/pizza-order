import { testSnapshots } from "../../utils/test.util";

import PolicyPage from "./PolicyPage";

describe("<PolicyPage / >", () => {
  testSnapshots(PolicyPage, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
