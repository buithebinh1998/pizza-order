import { testSnapshots } from "../../utils/test.util";

import Footer from "./Footer";

jest.mock('react-router-dom', () => ({
    NavLink: "NavLink"
}))

describe("<Footer / >", () => {
  testSnapshots(Footer, [
    {
      props: {},
      description: "default render"
    }
  ]);
});