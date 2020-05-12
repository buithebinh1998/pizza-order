import { testSnapshots } from "../../utils/test.util";

import SignUpPage from "./SignUpPage";

describe("<SignUpPage / >", () => {
  testSnapshots(SignUpPage, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
