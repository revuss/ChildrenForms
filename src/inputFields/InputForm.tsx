// Part1.tsx
import { Input } from "@/components/ui/input";
import { SubmitFormData } from "@/types/SubmitForm";
import { useFormContext, Controller } from "react-hook-form";

export const Part1 = () => {
  const { control } = useFormContext<SubmitFormData>();

  return (
    <div className="space-y-2">
      <Controller
        name="username"
        control={control}
        rules={{
          required: "Username is required",
          minLength: { value: 3, message: "Minimum 3 characters required" },
        }}
        render={({ field, fieldState }) => (
          <>
            <Input
              {...field}
              placeholder="Username"
              onChange={(e) => {
                field.onChange(e.target.value.toUpperCase());
              }}
              value={field.value || ""}
            />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />

      <Controller
        name="phoneNumber"
        control={control}
        rules={{ required: "Phone number is required" }}
        render={({ field, fieldState }) => (
          <>
            <Input {...field} placeholder="Phone Number" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />

      <Controller
        name="firstName"
        control={control}
        rules={{ required: "First name is required" }}
        render={({ field, fieldState }) => (
          <>
            <Input {...field} placeholder="First Name" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />

      <Controller
        name="lastName"
        control={control}
        rules={{ required: "Last name is required" }}
        render={({ field, fieldState }) => (
          <>
            <Input {...field} placeholder="Last Name" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />
    </div>
  );
};
