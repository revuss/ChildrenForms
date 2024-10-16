// Part2.tsx
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { SubmitFormData } from "@/types/SubmitForm";

export const Part2 = () => {
  const { control } = useFormContext<SubmitFormData>();

  return (
    <div>
      <Controller
        name="aadhaarNumber"
        control={control}
        rules={{ required: "Aadhaar number is required" }}
        render={({ field, fieldState }) => (
          <>
            <Input {...field} placeholder="Aadhaar Number" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />

      <Controller
        name="panNumber"
        control={control}
        rules={{ required: "PAN number is required" }}
        render={({ field, fieldState }) => (
          <>
            <Input {...field} placeholder="PAN Number" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />

      <Controller
        name="gstNumber"
        control={control}
        render={({ field }) => <Input {...field} placeholder="GST Number" />}
      />
    </div>
  );
};
