import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Поле обязательно для заполнения",
  },
  number: {
    min: ({ min }) => `Значение не может быть меньше ${min}`,
    max: ({ max }) => `Значение не может быть больше ${max}`,
  },
});

Yup.addMethod(Yup.number, "moreThanSumOfFields", function (fields: string[]) {
  return this.test("more-than-sum-of-fields", function (value) {
    const { path, createError } = this;
    const sum = fields.reduce((acc, field) => acc + (this.parent[field] || 0), 0);
    return (
      value > sum ||
      createError({
        path,
        message: `Значение должно быть больше суммы полей: ${fields.join(", ")}`,
      })
    );
  });
});

export const propertyFormSchema = Yup.object().shape({
  name: Yup.string().required(),
  address: Yup.string().required(),
  floor: Yup.number().required().min(-1).max(Yup.ref("totalFloors")),
  totalFloors: Yup.number().required().min(-3).max(200),
  square: Yup.number()
    .required()
    .min(0)
    .max(400)
    .moreThanSumOfFields(["Жилая площадь", "Площадь кухни"])
    .test(
      "is-greater-than-sum",
      "Общая площадь должна быть больше суммы жилой площади и площади кухни",
      function (value) {
        const { livingSquare, kitchenSquare } = this.parent;
        return value > (livingSquare || 0) + (kitchenSquare || 0);
      }
    ),
  livingSquare: Yup.number().required().min(0),
  kitchenSquare: Yup.number().required().min(0),
});