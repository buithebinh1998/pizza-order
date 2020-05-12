import { testSnapshots } from "../../utils/test.util";

import Carosel from "./Carosel";

describe("<Carosel / >", () => {
  testSnapshots(Carosel, [
    {
      props: {},
      description: "default render"
    }
  ]);
});