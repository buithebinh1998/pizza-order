import { testSnapshots } from "../../utils/test.util";

import AboutPage from "./AboutPage";

describe("<AboutPage / >", () => {
  testSnapshots(AboutPage, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
