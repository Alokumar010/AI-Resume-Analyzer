import { motion } from "framer-motion";

const Loading = () => {

    return (

        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">

            <motion.div

                animate={{
                    rotate:360
                }}

                transition={{
                    repeat:Infinity,
                    duration:2,
                    ease:"linear"
                }}

                className="mb-8 h-20 w-20 rounded-full border-4 border-blue-500 border-t-transparent"

            />

            <h1 className="text-4xl font-bold">

                AI is analyzing your resume

            </h1>

            <p className="mt-4 text-slate-400">

                Please wait...

            </p>

        </div>

    );

};

export default Loading;