import { testSnapshots } from "../../utils/test.util";

import ContactPage from "./ContactPage";

describe("<ContactPage / >", () => {
  testSnapshots(ContactPage, [
    {
      props: {},
      description: "default render"
    }
  ]);
});
