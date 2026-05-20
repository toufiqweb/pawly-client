
import LoginForm from "@/components/authPages/LoginForm";
import PetLoadingScreen from "@/components/ui/PetLoadingScreen";
import { Suspense } from "react";



export default function LoginPage() {
  return (
    <Suspense fallback={<PetLoadingScreen/>}>
      <LoginForm/>
    </Suspense>
  );
}