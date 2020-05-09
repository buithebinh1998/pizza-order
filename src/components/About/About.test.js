import { testSnapshots } from "../../utils/test";

import About from "./About";

describe("<About / >", () => {
  testSnapshots(About, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
