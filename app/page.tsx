// import { Button } from "@/components/ui/button";
import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="container my-auto remove-scrollbar">
        <div className=" sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="patient"
            height={1000}
            width={1000}
            className="h-10 mb-12 w-fit"
            priority
          ></Image>
          <PatientForm />

          <div className=" text-14-regular mt-20 flex justify-between">
            <p className=" text-dark-600 justify-items-end xl:text-end">
              © Cure Pulse
            </p>
            <Link href="/?admin=true" className=" text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img w-[50%]"
      ></Image>
    </div>
  );
}
