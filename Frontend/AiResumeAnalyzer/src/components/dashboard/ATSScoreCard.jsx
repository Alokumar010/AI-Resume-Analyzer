import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ATSScoreCard = ({ score }) => {

    const getScoreLabel = () => {

        if(score>=80)
            return "Excellent";

        if(score>=60)
            return "Good";

        return "Needs Improvement";

    }

    return (

        <div className="rounded-2xl bg-slate-900 p-8 shadow-lg">

            <h2 className="mb-6 text-center text-xl font-semibold text-slate-300">

                ATS Score

            </h2>

            <div className="mx-auto h-48 w-48">

                <CircularProgressbar

                    value={score}

                    text={`${score}`}

                />

            </div>

            <p className="mt-6 text-center text-lg text-slate-300">

                {getScoreLabel()}

            </p>

        </div>

    );

};

export default ATSScoreCard;