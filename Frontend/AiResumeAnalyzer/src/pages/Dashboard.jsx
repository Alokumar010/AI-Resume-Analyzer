import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import ATSScoreCard from '../components/dashboard/ATSScoreCard'
import SummaryCard from '../components/dashboard/SummaryCard'
import ListCard from '../components/dashboard/ListCard'
import Button from '../components/common/Button'
import Footer from '../components/common/Footer'
const Dashboard = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const result = location.state?.analysisResult;

    const back = () =>{
        navigate("/");
    }

    if (!result) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
                <p className="mb-4 text-slate-400">No active analysis data found.</p>
                <Button 
                    onClick={back} 
                    disabled={false}
                    className="flex justify-center pb-12 mt-10"
                >
                    Go Back Home
                </Button>
                <Footer/>
            </div>
        );
    }

  return (
    <div className="min-h-screen bg-slate-950">

        <Navbar/>

        <main className="mx-auto max-w-7xl p-10">

                <div className="grid gap-8 lg:grid-cols-2">

                    <ATSScoreCard score={result.atsScore}/>
 
                    <SummaryCard summary={result.summary} />

                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-3">

                    <ListCard title="Key Strengths" items={result.strengths} type="success" />
                    <ListCard title="Areas of Improvement" items={result.improvements} type="warning" />
                    <ListCard title="Missing Keywords" items={result.missingKeywords} type="danger" />

                </div>
                <div className="mt-10 flex justify-center">
            
                    <Button onClick={back} 
                        disabled={false} 
                        className="flex justify-center pb-12 mt-10">

                        Analyze Another Resume

                    </Button>

                </div>
        </main>
        <Footer/>
        
    </div>
  )
}

export default Dashboard