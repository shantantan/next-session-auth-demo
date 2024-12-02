"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  fieldError: string;
}

export const Input = React.memo(
  ({ id, name, type, label, value, setValue, fieldError }: Props) => {
    return (
      <div className="flex flex-col gap-y-2">
        <label htmlFor={id} className={cn({ "text-red-600": fieldError })}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={cn("border border-border px-3 py-1.5 rounded-sm", {
            "outline-red-600 border-red-600 bg-red-50": fieldError,
          })}
        />
        {fieldError && <p className="text-red-600">{fieldError}</p>}
      </div>
    );
  },
);
