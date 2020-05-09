import { testSnapshots } from "../../../utils/test.util";

import SignUpForm from "./SignUpForm";

jest.mock('react-router-dom', () => ({
    withRouter: (object) => object
}))
.mock('formik', ()=>({
    Formik: 'Formik',
    withFormik: (object) => (object)
}))
describe("<SignUpForm/ >", () => {
  testSnapshots(SignUpForm, [
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