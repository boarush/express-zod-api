import { z } from "zod";
import { ez } from "../../src";
import { taggedEndpointsFactory } from "../factories";

export const rawAcceptingEndpoint = taggedEndpointsFactory.build({
  method: "post",
  tag: "files",
  input: ez.raw({
    /* the place for additional inputs, like route params, if needed */
  }),
  output: z.object({ length: z.number().int().nonnegative() }),
  handler: async ({ input: { raw } }) => ({
    length: raw.length, // input.raw is populated automatically by the corresponding parser
  }),
});
