import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import ResumeUpload from "../components/upload/ResumeUpload";
import JobDescriptionUpload from "../components/upload/JobDescriptionUpload";
import Button from "../components/common/Button";
import Footer from "../components/common/Footer";
import * as resumeService from "../services/resumeService";

const Home = () => {

    const navigate = useNavigate();

    const [resumeFile, setResumeFile] = useState(null);

    const [jdFile, setJdFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {
        try {
            setLoading(true);
            let result;
            
            if (!jdFile) {
                result = await resumeService.analyzeResume(resumeFile);

            }

            else {

                result = await resumeService.matchResumeWithJDFile(
                    resumeFile,
                    jdFile
                );

            }
            if(result){
                navigate("/dashboard",{state:{analysisResult: result}})
            }
            console.log(result);

        }

        catch(error){

            console.error(error);

        }

        finally{

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

            <Hero />

            <main className="mx-auto max-w-6xl px-6 py-12">

                <div className="grid gap-8 md:grid-cols-2">

                    <ResumeUpload

                        file={resumeFile}

                        setFile={setResumeFile}

                    />

                    <JobDescriptionUpload

                        file={jdFile}

                        setFile={setJdFile}

                    />

                </div>

                <div className="mt-10 flex justify-center">

                    <Button
                        disabled={loading || !resumeFile}
                        onClick={handleAnalyze}
                    >
                        {loading
                        ? "Analyzing..."
                        : "Analyze Resume"}
                        
                    </Button>

                </div>

            </main>

            <Footer />

        </div>

    );

};

export default Home;