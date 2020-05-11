import { testSnapshots } from "../../utils/test.util";

import Policy from "./Policy";

describe("<Policy / >", () => {
  testSnapshots(Policy, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
