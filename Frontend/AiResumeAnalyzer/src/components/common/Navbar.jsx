import { BrainCircuit } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="w-full border-b border-slate-800 bg-slate-950">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <div className="flex items-center gap-3">

                    <BrainCircuit
                        size={34}
                        className="text-blue-500"
                    />

                    <div>

                        <h1 className="text-xl font-bold text-white">
                            AI Resume Analyzer
                        </h1>

                        <p className="text-xs text-slate-400">
                            Powered by Spring Boot + Gemini API
                        </p>

                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;