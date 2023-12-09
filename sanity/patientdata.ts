import { defineField, defineType } from "sanity";

export default defineType({
    name: "patientdata",
    type: "document",
    title: "PatientData",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name",
        }),
        defineField({
            name: "phoneno",
            type: "number",
            title: "PhoneNO",
        }),

        defineField({
            name: "age",
            type: "number",
            title: "Age",
        }),
        defineField({
            name: "doctorname",
            type: "string",
            title: "DoctorName",
        }),
        defineField({
            name: "prescription",
            type: "text",
            title: "prescriptionDetail",
        }),

        defineField({
            name: "test",
            title: "Test",
            type: 'string',
            options: {
                list: [
                    { title: 'Ultrasound', value: 'ultrasound' },
                    { title: 'BloodTest', value: 'bloodtest' }
                ],
                layout: 'radio'
            }
        }),

        defineField({
            name: "dignosewith",
            type: "text",
            title: "DignoseWith",
        }),
        defineField({
            name: "images",
            type: "array",
            title: "Images",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ],
        }),
        defineField({
            name: "doctorfee",
            type: "number",
            title: "DoctorFee",
        }),




    ],
});