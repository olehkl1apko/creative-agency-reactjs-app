import { Box, TextField, TextareaAutosize } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";

import { styles } from "./styles";
import { Button } from "../../components";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  fullName: yup.string().required("Name is required"),
  message: yup.string().min(10, "Too short!"),
});

export const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(`Email: ${values.email} from ${values.fullName}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={styles.input}>
        <TextField
          placeholder="Full name"
          id="fullName"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helpertext={
            formik.touched.fullName && formik.errors.fullName
              ? formik.touched.fullName && formik.errors.fullName
              : " "
          }
          InputProps={{ style: { fontSize: "16px" } }}
          sx={styles.textField}
        />
        <TextField
          placeholder="Email address"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helpertext={
            formik.touched.email && formik.errors.email
              ? formik.touched.email && formik.errors.email
              : " "
          }
          InputProps={{ style: { fontSize: "16px" } }}
          sx={styles.textField}
        />
      </Box>
      <TextareaAutosize
        minRows={6}
        id="message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helpertext={formik.touched.message && formik.errors.message}
        placeholder="write message (more than 10 characters)"
        style={styles.textareaAutosize}
      />
      <Button type="submit">
        send us message <ArrowForwardIos />
      </Button>
    </form>
  );
};
