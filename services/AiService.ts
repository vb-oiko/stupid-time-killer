import { z } from "zod";

const MODEL = "gpt-4o";

import OpenAI from "openai";
import { OPENAI_API_KEY } from "../const";

let client: OpenAI | null = null;

if (!OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set");
}

function getAiClient() {
  if (!client) {
    client = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });
  }
  return client;
}

export type Prompt<Input, Schema extends z.ZodSchema> = (
  input: Input,
  schema: Schema
) => string;

export function getChatCompletionFunction<Input, Output>(
  prompt: ChatPrompt<Input, z.ZodSchema<Output>>,
  outputSchema: z.ZodSchema<Output>
) {
  return async (input: Input) => {
    const response = await getAiClient().chat.completions.create({
      model: MODEL,
      response_format: { type: "json_object" },
      messages: prompt(input, outputSchema),
    });

    const outputText = response.choices[0].message.content;

    if (!outputText) {
      throw new Error("Empty response");
    }

    try {
      const output = JSON.parse(outputText);
      const result = outputSchema.parse(output);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(`Invalid response from AI: ${outputText}`);
    }
  };
}

export type ChatPrompt<Input, Schema extends z.ZodSchema> = (
  input: Input,
  schema: Schema
) => { role: "system" | "user" | "assistant"; content: string }[];
