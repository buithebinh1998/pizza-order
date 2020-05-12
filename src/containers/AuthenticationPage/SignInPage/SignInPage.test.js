import { testSnapshots } from "../../utils/test.util";

import SignInPage from "./SignInPage";

describe("<SignInPage / >", () => {
  testSnapshots(SignInPage, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
