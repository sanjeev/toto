import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Button, InputGroup, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MultiSelect } from "react-multi-select-component";
// components
import PageTitle from "../../components/PageTitle";
import { FormInput, VerticalForm } from "../../components";

interface UserData {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  checkbox: boolean;
}

interface UserData2 {
  webSite: string;
  email2: string;
  password2: string;
  confirmpassword2: string;
  horizontalCheck: boolean;
}

const NormalFormValidation = () => {
  const [validated, setValidated] = useState<boolean>(false);

  /*
   * handle form submission
   */
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [selected, setSelected] = useState([]);
  const options = [
    { label: "Innova", value: "Innova" },
    { label: "Glanza", value: "Glanza" },
    { label: "UC", value: "UC"},
    { label: "Fortuner", value: "Fortuner",},
    { label: "Camry", value: "Camry",},
    { label: "Velfire", value: "Velfire",},
    { label: "Hycross", value: "Hycross",},
    { label: "Lexus", value: "Lexus",},
    { label: "Hyryder", value: "Hyryder",},
    { label: "Hilux", value: "Hilux",},
    { label: "LC", value: "LC",},

  ];

  return (
    <>
      <Card>
        <Card.Body>
          <form>
            <div className="row">
              <div className="col">
                <label htmlFor="PlanStartDate" className="mb-1">
                  {" "}
                  Plan Start Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  id="PlanStartDate"
                  className="form-control"
                  placeholder="Plan Start Date"
                />
              </div>
              <div className="col">
                <label htmlFor="planEndDate" className="mb-1">
                  Plan End Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  id="planEndDate"
                  className="form-control"
                  placeholder="plan End Date"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="PlanStartDate" className="mb-1">
                  {" "}
                  Activity Type <span className="text-danger">*</span>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Advertisement"
                    id="Advertisement"

                  />
                  <label className="form-check-label" htmlFor="Advertisement">
                  Advertisement
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Advertisement"
                    id="Event"

                  />
                  <label className="form-check-label" htmlFor="Event">
                  Event
                  </label>
                </div>
              </div>

              <div className="col">
                <label htmlFor="planEndDate" className="mb-1">
                  Proposal Type <span className="text-danger">*</span>
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Planned"
                    id="Planned"

                  />
                  <label className="form-check-label" htmlFor="Planned">
                  Planned
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Planned"
                    id="Planned"

                  />
                  <label className="form-check-label" htmlFor="Planned">
                  Unplanned
                  </label>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor=" ActivitySubType" className="mb-1">
                  Activity Sub Type
                  <span className="text-danger">*</span>
                </label>
                <select className="form-select" id="ActivitySubType">
                  <option value="">Select one...</option>
                  <option value="paperad">Paper AD</option>
                  <option value="magazinead">Magazine AD</option>
                  <option value="tvad">TV AD</option>
                  <option value="radioad">Radio AD</option>
                  <option value="digitalad">Digital AD</option>
                  <option value="hoardinbillad">Hoarding Billboard </option>
                  <option value="flexad">Hoarding Flex</option>
                  <option value="leafletsad">Leaflets/Insert</option>
                  <option value="bannerad">Banner</option>
                  <option value="smsad">SMS</option>
                  <option value="whatsappad">WhatsApp</option>
                  <option value="roadshowad">Road Show</option>
                  <option value="caravanad">Caravan</option>
                  <option value="mallad">Mall Activity</option>
                  <option value="meet">Customer Meet</option>
                  <option value="otherad">Others</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="ActivityDescription" className="mb-1">
                  Targeted Models
                  <span className="text-danger">*</span>
                </label>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label htmlFor="ActivityDescription" className="mb-1">
                  Activity Description (max 250 characters){" "}
                  <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="ActivityDescription"
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="EstimatedActivityBudget" className="mb-1">
                  {" "}
                  Estimated Activity Budget{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="EstimatedActivityBudget"
                  className="form-control"
                  placeholder="Estimated Activity Budget"
                />
              </div>
              <div className="col">
                <label htmlFor="DealerShare" className="mb-1">
                  Dealer Share (%) <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="DealerShare"
                  className="form-control"
                  placeholder="Dealer Share"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="TKMShare" className="mb-1">
                  {" "}
                  TKM Share (%) <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="TKMShare"
                  className="form-control"
                  placeholder="TKM Share"
                />
              </div>
              <div className="col">
                <label htmlFor="OtherShare" className="mb-1">
                  {" "}
                  Other Share (%) <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="OtherShare"
                  className="form-control"
                  placeholder="Other Share"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="EstimatedEnquiries" className="mb-1">
                  {" "}
                  Estimated Enquiries <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="EstimatedEnquiries"
                  className="form-control"
                  placeholder="Estimated Enquiries"
                />
              </div>
              <div className="col">
                <label htmlFor="EstimatedRetails" className="mb-1">
                  Estimated Retails <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="EstimatedRetails"
                  className="form-control"
                  placeholder="Estimated Retails"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div
                className="col"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <button
                  type="submit"
                  className="btn btn-primary "
                  style={{
                    textAlign: "right",
                    backgroundColor: "#e30612",
                    border: "1px solid #e30612",
                  }}
                >
                  Submit Plan
                </button>
              </div>
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#212529",
                    border: "1px solid #212529",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

const FormValidationWithTooltip = () => {
  const [validated, setValidated] = useState<boolean>(false);

  /*
   * handle form submission
   */
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Bootstrap Validation (Tooltips)</h4>
          <p className="sub-header">
            If your form layout allows it, you can swap the{" "}
            <code>.valid | invalid-feedback</code> classes for{" "}
            <code>.valid | invalid-tooltip</code> classes to display validation
            feedback in a styled tooltip.
          </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip01"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip02"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationCustonTooltipme"
            >
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip03"
            >
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid" tooltip>
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip04"
            >
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid" tooltip>
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip05"
            >
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid" tooltip>
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const BasicForm = () => {
  /*
    form validation schema
    */
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required("Please enter Username"),
      email: yup.string().required("Please enter Email address"),
      password: yup.string().required("Please enter Password"),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords don't match")
        .required("This value is required."),
      checkbox: yup.bool().oneOf([true]),
    })
  );

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mt-0 mb-1">Basic Form</h4>
        <p className="sub-header">
          React validation with react-hook-form library.
        </p>
        <VerticalForm<UserData>
          onSubmit={() => {}}
          resolver={schemaResolver}
          defaultValues={{ username: "test" }}
        >
          <FormInput
            label={"Username"}
            type="text"
            name="username"
            placeholder="Enter your name"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Email address"}
            type="email"
            name="email"
            placeholder="Enter email"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Password"}
            type="password"
            name="password"
            placeholder="Password"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Confirm Password"}
            type="password"
            name="confirmpassword"
            placeholder="Password"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Remember me"}
            type="checkbox"
            name="checkbox"
            containerClass={"mb-3"}
          />

          <div className="text-md-end mb-0">
            <Button variant="primary" className="me-1" type="submit">
              Submit
            </Button>
            <Button variant="secondary" type="reset">
              Cancel
            </Button>
          </div>
        </VerticalForm>
      </Card.Body>
    </Card>
  );
};

const HorizontalForm = () => {
  /*
    form validation schema
    */
  const schemaResolver2 = yupResolver(
    yup.object().shape({
      email2: yup.string().required("Please enter Email address"),
      password2: yup.string().required("Please enter Password"),
      confirmPassword2: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords don't match")
        .required("This value is required."),
      webSite: yup.string().required("Please enter URL"),
      horizontalCheck: yup.bool().oneOf([true]),
    })
  );

  const methods = useForm<UserData2>({
    defaultValues: { email2: "shreyu@coderthemes.com" },
    resolver: schemaResolver2,
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mt-0 mb-1">Horizontal Form</h4>
        <p className="sub-header">
          React validation with react-hook-form library.
        </p>
        <form name="chat-form" id="chat-form" onSubmit={handleSubmit(() => {})}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4}>
              Email<span className="text-danger">*</span>
            </Form.Label>
            <Col md={7}>
              <FormInput
                type="email"
                name="email2"
                placeholder="Email"
                register={register}
                key="email2"
                errors={errors}
                control={control}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4}>
              Password<span className="text-danger">*</span>
            </Form.Label>
            <Col md={7}>
              <FormInput
                type="password"
                name="password2"
                placeholder="Password"
                register={register}
                key="password2"
                errors={errors}
                control={control}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4}>
              Confirm Password<span className="text-danger">*</span>
            </Form.Label>
            <Col md={7}>
              <FormInput
                type="password"
                name="confirmPassword2"
                placeholder="Password"
                register={register}
                key="confirmPassword2"
                errors={errors}
                control={control}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4}>
              Web Site<span className="text-danger">*</span>
            </Form.Label>
            <Col md={7}>
              <FormInput
                type="url"
                name="webSite"
                placeholder="URL"
                register={register}
                key="webSite"
                errors={errors}
                control={control}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="horizontalCheck">
            <Col md={{ span: 8, offset: 4 }}>
              <FormInput
                label={"Remember me"}
                type="checkbox"
                name="horizontalCheck"
                register={register}
                key="horizontalCheck"
                errors={errors}
                control={control}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 8, offset: 4 }}>
              <Button variant="primary" className="me-1" type="submit">
                Submit
              </Button>
              <Button variant="secondary" type="reset">
                Cancel
              </Button>
            </Col>
          </Form.Group>
        </form>
      </Card.Body>
    </Card>
  );
};

const FormValidation = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Forms", path: "/forms/validation" },
          { label: "Submit New Plan", path: "/forms/validation", active: true },
        ]}
        title={"Submit New Plan"}
      />

      <Row>
        <Col lg={12}>
          <NormalFormValidation />
        </Col>

        {/* <Col lg={6}>
          <FormValidationWithTooltip />
        </Col> */}
      </Row>

      {/* <Row>
        <Col lg={6}>
          <BasicForm />
        </Col>
        <Col lg={6}>
          <HorizontalForm />
        </Col>
      </Row> */}
    </React.Fragment>
  );
};

export default FormValidation;
