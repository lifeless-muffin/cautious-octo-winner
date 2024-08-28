import { z } from 'zod'

const FormSchema = z.object({
  id: z.string({
    invalid_type_error: 'Please enter the correct date'
  }),
  customerId: z.string({
    invalid_type_error: 'Please select a customer'
  }),
  amount: z.coerce
    .number().gt(0, { message: 'Please enter an amount greater than $0' }),
  date: z.string({
    invalid_type_error: 'Please date in correct format'
  }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status'
  })
});

export const ZodCreateInvoice = FormSchema.omit({ id: true, date: true });
export const ZodUpdateInvoice = FormSchema.omit({ id: true, date: true });