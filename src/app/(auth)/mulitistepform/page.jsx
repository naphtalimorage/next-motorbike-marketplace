import MotorBikeInfo from "../motorbikeinfoform/page";
import PersonalInfo from "../personalinfoform/page";
import UploadImage from "../uploadimage/uploadthingimage";
import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [bikeinfo, setBikeInfo] = useState({
    regno: "",
    manuctureyear: "",
    make: "",
    model: "",
    enginesize: "",
    fueltype: "",
    fuelconsumption: "",
    price: "",
    location: "",
    color: "",
    condition: "",
    mileage: "",
    description: "",
    id: null,
  });
  const [personlinfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handlePersonChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personlinfo, [name]: value });
  };

  const handleBikeChange = (e) => {
    const { name, value } = e.target;
    setBikeInfo({ ...bikeinfo, [name]: value });
  };
    
  const handleSubmit = async (e) => {
    //e.preventDefault();
    console.log(personlinfo);
    try {
      const userResponse = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(personlinfo),
      });

      if(userResponse.ok){
        const userData = await userResponse.json();
        console.log(userData);

        console.log(`user datA USER id: ${userData.user.id}`);


        const dataToSend = {
          ...bikeinfo,
          userId: userData.user.id
        };

        console.log(`data to send ${dataToSend.userId}`)

        const bikeResponse = await fetch("/api/motorbike", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });
        
        if (bikeResponse.ok) {
          const bikeData = await bikeResponse.json();
          setBikeInfo(prev => ({ ...prev, id: bikeData.motorbike.id })); // Update bikeinfo with motorbike id
          console.log("Motorbike data submitted successfully:", bikeData);
        } else {
          console.error("Failed to submit motorbike data");
        }
  
      } 
    } catch (error) {
      console.log(`Error submitting the form ${error}`);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfo
          values={personlinfo}
          nextStep={nextStep}
          handleChange={handlePersonChange}

        />
      );
    case 2:
      return (
        <MotorBikeInfo
          values={bikeinfo}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleBikeChange}
        />
      );
    case 3:
      return(
        <UploadImage
        handleSubmit={handleSubmit}
        bikeinfo={bikeinfo}
        prevStep={prevStep}
        />
      );

    default:
      return <div>Form Completed</div>;
  }
}
