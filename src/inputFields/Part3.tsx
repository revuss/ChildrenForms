// Part3.tsx
import { Input } from "@/components/ui/input";
import { SubmitFormData } from "@/types/SubmitForm";
import { useFormContext, Controller } from "react-hook-form";

export const Part3 = () => {
  const { control } = useFormContext<SubmitFormData>();

  return (
    <div>
      <Controller
        name="hallTicket"
        control={control}
        rules={{ required: "Hall ticket is required" }}
        render={({ field, fieldState }) => (
          <>
            <Input {...field} placeholder="Hall Ticket" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />

      <Controller
        name="marksPercentage"
        control={control}
        rules={{ required: "Marks percentage is required" }}
        render={({ field, fieldState }) => (
          <>
            <Input type="number" {...field} placeholder="Marks Percentage" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />

      <Controller
        name="passoutYear"
        control={control}
        rules={{ required: "Passout year is required" }}
        render={({ field, fieldState }) => (
          <>
            <Input type="number" {...field} placeholder="Passout Year" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />
    </div>
  );
};
