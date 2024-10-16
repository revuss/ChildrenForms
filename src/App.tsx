/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider, useForm } from "react-hook-form";
import { SubmitFormData } from "./types/SubmitForm";
import { Part1 } from "./inputFields/InputForm";
import { Part2 } from "./inputFields/PartTwo";
import { Part3 } from "./inputFields/Part3";
import { Button } from "./components/ui/button";

import { useEffect } from "react";

const responseData = [
  {
    username: "sa",
    phoneNumber: "203201310",
    aadhaarNumber: "sadkaosdj23i",
  },
];
function App() {
  const methods = useForm<SubmitFormData>({
    defaultValues: {
      username: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      aadhaarNumber: "",
      panNumber: "",
      gstNumber: "",
      hallTicket: "",
      marksPercentage: undefined,
      passoutYear: new Date().getFullYear(),
    },
  });

  useEffect(() => {
    if (responseData.length) {
      const userData = responseData[0];
      methods.setValue("username", userData.username);
      methods.setValue("phoneNumber", userData.phoneNumber);
      methods.setValue("aadhaarNumber", userData.aadhaarNumber);
    }
  }, [methods]);
  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex items-center justify-center flex-1 flex-col gap-3"
        >
          <h1 className="text-3xl font-semibold">MY FORM</h1>
          <h2 className="mb-10">Part 1</h2>
          <Part1 />
          <h2 className="mb-10">Part 2</h2>
          <Part2 />
          <h2 className="mb-10">Part 3</h2>
          <Part3 />

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
