import { testSnapshots } from "../../utils/test.util";

import LoadingPage from "./LoadingPage";

describe("<LoadingPage / >", () => {
  testSnapshots(LoadingPage, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
