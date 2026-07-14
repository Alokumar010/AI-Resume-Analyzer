const ListCard = ({ title, items }) => {

    return(

        <div className="rounded-2xl bg-slate-900 p-6">

            <h2 className="mb-5 text-xl font-semibold text-slate-300">

                {title}

            </h2>

            <div className="space-y-3">

                {

                    items.map((item,index)=>(

                        <div

                            key={index}

                            className="rounded-lg bg-slate-800 p-3 text-slate-300"

                        >

                            {item}

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default ListCard;