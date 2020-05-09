import { testSnapshots } from "../../utils/test.util";

import CartPayment from "./CartPayment";

jest.mock('react-router-dom', () => ({
    withRouter: (object) => object
}))
describe("<CartPayment/ >", () => {
  testSnapshots(CartPayment, [
    {
      props: {
          history: {
              push: jest.fn()
          }
      },
      description: "default render"
    }
  ]);
});
