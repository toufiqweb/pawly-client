import RegisterForm from "@/components/authPages/RegisterForm";
import PetLoadingScreen from "@/components/ui/PetLoadingScreen";
import React, { Suspense } from "react";

const RegisterPage = () => {
  return (
    <div>
      <Suspense fallback={<PetLoadingScreen />}>
        <RegisterForm />
      </Suspense>
    </div>
  );
};

export default RegisterPage;
