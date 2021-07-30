import { Hint, Schema } from "../classes";
import {
  invalidSchema,
  invalidSchemaExplanation,
  validSchemaExplanation,
} from "./shared";

export function invalidSchemaMessage(hint: Hint, schema: Schema): string[] {
  return [
    hint.text,
    "",
    "Expected: " + validSchemaExplanation("Schema must be a valid Joi schema"),
    "Receieved: " + invalidSchemaExplanation(schema.error),
    schema.input.isSimple
      ? "Schema: " + invalidSchema(schema.input.value)
      : "Schema:",
    schema.input.isSimple ? null : invalidSchema(schema.input.value),
  ];
}
