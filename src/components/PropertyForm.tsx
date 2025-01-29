import React from "react";
import { Formik, Form, Field } from "formik";
import { propertyFormSchema } from "../schemas/propertyFormSchema";
import { TextField, Button, Container, Typography } from "@mui/material";

const initialValues = {
  name: "",
  address: "",
  floor: 0,
  totalFloors: 0,
  square: 0,
  livingSquare: 0,
  kitchenSquare: 0,
};

export function PropertyForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={propertyFormSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
              Форма недвижимости
            </Typography>
            <Field
              as={TextField}
              id="name"
              name="name"
              label="Название объекта"
              fullWidth
              margin="normal"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <Field
              as={TextField}
              id="address"
              name="address"
              label="Адрес"
              fullWidth
              margin="normal"
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
            />
            <Field
              as={TextField}
              id="floor"
              name="floor"
              label="Этаж"
              type="number"
              fullWidth
              margin="normal"
              error={touched.floor && Boolean(errors.floor)}
              helperText={touched.floor && errors.floor}
            />
            <Field
              as={TextField}
              id="totalFloors"
              name="totalFloors"
              label="Количество этажей в доме"
              type="number"
              fullWidth
              margin="normal"
              error={touched.totalFloors && Boolean(errors.totalFloors)}
              helperText={touched.totalFloors && errors.totalFloors}
            />
            <Field
              as={TextField}
              id="square"
              name="square"
              label="Площадь"
              type="number"
              fullWidth
              margin="normal"
              error={touched.square && Boolean(errors.square)}
              helperText={touched.square && errors.square}
            />
            <Field
              as={TextField}
              id="livingSquare"
              name="livingSquare"
              label="Жилая площадь"
              type="number"
              fullWidth
              margin="normal"
              error={touched.livingSquare && Boolean(errors.livingSquare)}
              helperText={touched.livingSquare && errors.livingSquare}
            />
            <Field
              as={TextField}
              id="kitchenSquare"
              name="kitchenSquare"
              label="Площадь кухни"
              type="number"
              fullWidth
              margin="normal"
              error={touched.kitchenSquare && Boolean(errors.kitchenSquare)}
              helperText={touched.kitchenSquare && errors.kitchenSquare}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Отправить
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
}