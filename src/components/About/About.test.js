import { testSnapshots } from "../../utils/test.util";

import About from "./About";

describe("<About / >", () => {
  testSnapshots(About, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
