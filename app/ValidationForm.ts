import z from "zod";

export const ValidationForm = z.object({
  issue_title: z.string().min(1, 'Required field.').max(255),
  issue_desc: z.string().min(1, 'Required field.'),
});
