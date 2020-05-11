import { testSnapshots } from "../../utils/test.util";

import Spinner from "./Spinner";

describe("<Spinner / >", () => {
  testSnapshots(Spinner, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
