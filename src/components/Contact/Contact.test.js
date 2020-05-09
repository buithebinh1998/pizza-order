import { testSnapshots } from "../../utils/test.util";

import Contact from "./Contact";

describe("<Contact / >", () => {
  testSnapshots(Contact, [
    {
      props: {},
      description: "default render"
    }
  ]);
});