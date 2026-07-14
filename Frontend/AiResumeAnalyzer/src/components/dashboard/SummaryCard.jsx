const SummaryCard = ({ summary }) => {

    return(

        <div className="rounded-2xl bg-slate-900 p-6">

            <h2 className="mb-4 text-xl font-semibold  text-slate-300">

                Summary

            </h2>

            <p className="leading-8 text-slate-300">

                {summary}

            </p>

        </div>

    );

};

export default SummaryCard;