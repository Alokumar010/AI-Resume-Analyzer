import { useEffect, useState } from "react";

const steps = [

    "Parsing Resume",

    "Extracting Skills",

    "Matching ATS Keywords",

    "Comparing Job Description",

    "Generating Suggestions"

];

const LoadingSteps = () => {

    const [currentStep,setCurrentStep] = useState(0);

    useEffect(()=>{

        const timer = setInterval(()=>{

            setCurrentStep(prev=>{

                if(prev<steps.length-1)

                    return prev+1;

                return prev;

            });

        },1200);

        return ()=>clearInterval(timer);

    },[]);

    return(

        <div className="mt-10">

            {

                steps.map((step,index)=>(

                    <p

                        key={index}

                        className={`mb-3 ${
                            index<=currentStep

                                ? "text-green-400"

                                : "text-slate-500"
                        }`}

                    >

                        {

                            index<=currentStep

                                ? "✔ "

                                : "○ "

                        }

                        {step}

                    </p>

                ))

            }

        </div>

    );

};

export default LoadingSteps;