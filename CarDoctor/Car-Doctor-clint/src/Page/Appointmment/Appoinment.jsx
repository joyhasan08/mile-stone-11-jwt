

const Appoinment = () => {

    const handelApponintment = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const model = e.target.model.value;
        const date = e.target.date.value;
        const description = e.target.description.value;
        const info = { name, model, date, description }
        console.log(info);


    }
    return (
        <>
            <p className="text-4xl font-semibold text-center">Appointment page </p>
            <form onSubmit={handelApponintment} className="flex flex-col w-1/2 mx-auto space-y-2" >
                <label htmlFor="">Your Name</label>
                <input name="name" className="input input-sm input-bordered" type="text" id="" />
                <label htmlFor="">Car model</label>
                <input name="model" className="input input-sm input-bordered" type="text" />
                <label htmlFor="">On date</label>
                <input name="date" className="input input-sm input-bordered" type="number" />
                <label htmlFor="">Description</label>
                <textarea name="description" className="input input-sm input-bordered" id="" cols="20" rows="30"></textarea>
                <input className="btn btn-success" type="submit" />
            </form>
        </>
    );
};

export default Appoinment;