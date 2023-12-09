



import { defineField, defineType } from "sanity";

export default defineType({
  name: "doctor",
  type: "document",
  title: "Doctor",
  fields: [

    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),

    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),

    defineField({
      name: "patients",
      type: "array",
      title: "Patients",
      of: [{ type: "patientdata" }],
    }),






  ],

})
