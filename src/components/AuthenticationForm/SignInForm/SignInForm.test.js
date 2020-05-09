import { testSnapshots } from "../../../utils/test.util";

import SignInForm from "./SignInForm";

jest.mock('react-router-dom', () => ({
    withRouter: (object) => object
}))
.mock('formik', ()=>({
    Formik: 'Formik'
}))
describe("<SignInForm/>", () => {
  testSnapshots(SignInForm, [
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